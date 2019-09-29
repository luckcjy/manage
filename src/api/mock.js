import Mock from 'mockjs'
import { ip } from './http'

export const getGood = Mock.mock(ip+"goodlist",{
    "goodlist|30":[
        {
            "id|+1":1,
            "name":"@cword(3)",
            "price|1-1000":1,
            "barcode|100000-999999":1,
            "goodstype|1":["食品","日用","服装","家居"],
            "goodsunit|1":["瓶",'袋','箱',"g","kg"],
            "goodsnum|1-1000":1,
            "tel":/^1\d{10}$/,
            "img":"@image('100x100','#ff60','#fff','可以显示吗')",
            "isMerry":true,
            "star|1-5":"☆"
        }
    ]

})
export const getLogin = Mock.mock(ip+"login",{
        "token":"@guid",
        "code|1":[0,1],
        "msg|1":["登录成功","用户名或密码错误"]
})

export const getInf = Mock.mock(ip+"userInf",{
    "role|1":["admin","edit"]
})