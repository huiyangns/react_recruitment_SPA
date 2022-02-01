const {ChatModel} = require("../db/models");

module.exports = function (server) {
  // 得到IO 对象
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
    },
  });
  // 监视连接(当有一个客户连接上时回调)
  io.on("connection", function (socket) {
    console.log("soketio connected");
    // 绑定sendMsg 监听, 接收客户端发送的消息
    socket.on("sendMsg", function ({ from, to, content }) {
      console.log("服务器接收到浏览器的消息", { from, to, content });

      const chat_id = [from, to].sort().join("_");
      const create_time = Date.now();
      new ChatModel({ from, to, content, chat_id, create_time }).save(function (
        err,
        chatMsg
      ) {
        io.emit("receiveMsg", chatMsg);
        console.log("服务器向浏览器发送消息", chatMsg);
      });
    });
  });
};
