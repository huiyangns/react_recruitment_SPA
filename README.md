# Project Info

This project is a recruitment mobile SPA with a front and back end separation, including front-end and back-end applications.<br/>
Including user registration/login, genius/boss list, real-time chat and other modules.

# Tech

Front end tech: Including React tech stack + ES6 + Webpack + Ant Design Mobile <br/>
Back end tech: Including Node + express + mongodb + socketIO 

# Front End Route

```mermaid

graph LR

A(Front End Route) -->B(Register)
A --> C(Login)
A --> D(Main page: main.jsx)
    B --> E[/register]
    B --> F[register.jsx]
    C --> G[/login]
    C --> H[login.jsx]
    D --> I[Boss]
    	I[Boss] --> I1[/laoban]
    	I[Boss] --> I2[laoban.jsx]
    D --> J[Genius]
    	J[Genius] --> J1[/Genius]
    	J[Genius] --> J2[Genius.jsx]
    D --> K[MsgList]
    	K[MsgList] --> K1[/message]
    	K[MsgList] --> K2[message.jsx]
    D --> L[Personal]
    	L[Personal] --> L1[/personal]
    	L[Personal] --> L2[personal.jsx]
    D --> M[BossInfo]
    	M[BossInfo] --> M1[/laobaninfo]
    	M[BossInfo] --> M2[laobaninfo.jsx]
    D --> N[DashenInfo]
    	N[DashenInfo] --> N1[/dasheninfo]
    	N[DashenInfo] --> N2[dasheninfo.jsx]
    D --> O[Chat]
    	O[Chat] --> O1[/chat/:userid]
    	O[Chat] --> O2[chat.jsx]
    
    
```

# How to launch it

Server: node app.js

Client: npm start

# API Document

## Catalog：

[1、Register](#1Register)<br/>
[2、Login](#2Login)<br/>
[3、Update user info](#3Update_user_info)<br/>
[4、Get current user by using cookie](#4Get_current_user_by_using_cookie)<br/>
[5、Get user list](#5Get_user_list)<br/>
[6、Get chat list of current user](#6Get_chat_list_of_current_user)<br/>
[7、Set message read](#7Set_message_read)<br/>

## 1、Register

### Request URL：

	localhost:3005/register

### Request Method：

	POST

### Params type

	|Params		|Required |Type     |Description
	|username    |Y       |string   |username
	|password    |Y       |string   |password
	|type        |Y       |string   |Type

### Response：

	Success:
	    {
	      "code": 0,
	      "data": {
	        "_id": "5ae133e621388d262c8d91a6",
	        "username": "ds2",
	        "type": "dashen"
	      }
	    }
	Failure
	    {
	      "code": 1,
	      "msg": "此用户已存在"
	    }


## 2、Login

### Request URL：

	localhost:3005/login

### Request Method：

	POST

### Params type

	|Params		|Required |Type     |Description
	|username    |Y       |string   |username
	|password    |Y       |string   |password

### Response：

	Success:
	    {
	      "code": 0,
	      "data": {
	        "_id": "5ae1338a21388d262c8d91a5",
	        "username": "ds1",
	        "type": "dashen",
	        "__v": 0
	      }
	    }
	Failure
	    {
	      "code": 1,
	      "msg": "Username or password wrong"
	    }

## 3、Update_user_info

### Request URL：

	localhost:3005/update

### Request Method：

	POST

### Params type：

	|Params		|Required |Type     |Description
	|avatar    |Y       |string   |avatar
	|info      |N       |string   |info
	|post      |N       |string   |post
	|salary    |N       |string   |salary
	|company   |N       |string   |company

### Response：

	Success:
	    {
		    "code": 0,
		    "data": {
		        "header": "avatar2",
		        "info": "react/vue",
		        "post": "Enginner",
		        "company": "Oracle",
		        "salary": "18K",
		        "_id": "5ae1f088d37a442b749fc143",
		        "username": "laoban1",
		        "type": "laoban"
		    }
		}
	Failure
	    {
	      "code": 1,
	      "msg": "Login First"
	    }


## 4、Get_current_user_by_using_cookie

### Request URL：

	localhost:3005/user

### Request Method：

	GET

### Params type

	无

### Response：

	Success:
	    {
		    "code": 0,
		    "data": {
		        "_id": "5ae1f088d37a442b749fc143",
		        "username": "laoban1",
		        "type": "laoban",
		        "__v": 0,
		        "salary": "18K",
		        "company": "Oracle",
		        "post": "Engineer",
		        "info": "react/vue",
		        "header": "avatar2"
		    }
		}
	Failure
	    {
	      "code": 1,
	      "msg": "Login First"
	    }


## 5、Get_user_list

### Request URL：

	localhost:3005/userlist

### Request Method：

	GET

### Params type: query

	|Params		|Required |Type     |Description
	|type       |Y       |string   |Type(dashen/laoban)

### Response：

	{
	    "code": 0,
	    "data": [
	        {
	            "_id": "5ae1d5d19151153d30e008fd",
	            "username": "ds2",
	            "type": "dashen",
	            "__v": 0
	        },
	        {
	            "_id": "5ae1ddd99ca58023d82351ae",
	            "username": "aa",
	            "type": "dashen",
	            "__v": 0,
	            "post": "Engineer",
	            "info": "Rect/Vue",
	            "header": "avatar1"
	        }
	    ]
	}


## 6、Get_chat_list_of_current_user

### Request URL：

	localhost:3005/msglist

### Request Method：

	GET

### Params type

	NULL

### Response：

	{
	    "code": 0,
	    "data": {
	        "users": {
	            "5ae1d5d19151153d30e008fd": {
	                "username": "ds2"
	            },
	            "5ae1ddd99ca58023d82351ae": {
	                "username": "aa",
	                "header": "avatar1"
	            },
	            "5ae1df049ca58023d82351af": {
	                "username": "aa2"
	            },
	            "5ae1e72aa072c522e024b18e": {
	                "username": "bb",
	                "header": "avatar3"
	            },
	            "5ae1f088d37a442b749fc143": {
	                "username": "laoban1",
	                "header": "avatar2"
	            }
	        },
	        "chatMsgs": [
				{
	                "read": false,
	                "_id": "5ae1f3c3a95eb824841199f1",
	                "from": "5ae1f088d37a442b749fc143",
	                "to": "5ae1ddd99ca58023d82351ae",
	                "content": "aa",
	                "create_time": 1524757443374,
	                "__v": 0
	            }
			]
	    }
	}

## 7、Set_message_read

### Request URL：

	localhost:3005/readmsg

### Request Method：

	post

### Params type

	|Params		|Required |Type     |Description
	|from       |Y       |string   |id of user who sent the message

### Response：

	{code: 0, data: 2}
