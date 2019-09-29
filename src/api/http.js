import axios from 'axios'
import qs from "qs"

export const ip = "http://192.168.1.105:1234/"

const http = (type,url,params=null)=>{
    if(type === "get"){
        return axios.get(ip+url,params).then(({data})=>data)
    }else if(type === "post"){
        return axios.post(ip+url,qs.stringify(params)).then(({data})=>data)
    }else{
        alert("提交方法有错误")
    }
}
//登录
export const login = params => http("post","login",params)

// 商品数据
 export const goodList = params=>http("get","goodlist",params)

 // 用户
 export const userList = params=>http("get","userlist",params)


 //用户信息
 export const getUserInf = params => http("post","userInf",params)