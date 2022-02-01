import ajax from "./ajax";

export const reqRegister = (userInfo) => ajax('register', userInfo, 'post')
export const reqLogin = (userInfo) => ajax('login', userInfo, 'post')
export const reqUpdateUser = (userInfo) => ajax('update', userInfo, 'post')
export const reqUser = () => ajax('user')
export const reqUserList = (type) => ajax('userlist', {type})
export const reqMsgList = () => ajax('msglist')
export const reqMsgRead = (from) =>ajax('msgread', {from}, 'post')