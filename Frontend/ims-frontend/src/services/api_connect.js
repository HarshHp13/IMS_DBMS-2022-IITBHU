import axios from 'axios'
import qs from 'qs'


const myAxios = new axios.create({
    baseURL:"http://localhost:8082",
})

export const insertUser=(user)=>{
    return myAxios.post('/insert',user,{
        withCredentials: true,
        auth:{username:"Harsh", password:"harsh@hp13"},
    }).then((res)=>res.data);
}

export const listUser=()=>{
    return myAxios.get('/list',{
        withCredentials:true,
        auth:{username:"Harsh", password:"harsh@hp13"},
    }).then((res)=>res.data);
}

export const deleteUserById=(id)=>{
    return myAxios.delete(`/delete/${id}`,{
        withCredentials: true,
        auth:{username:"Harsh", password:"harsh@hp13"},
    }).then((res)=>res.data);
}

export const getUserById=(id)=>{
    return myAxios.get(`/list/${id}`,{
        withCredentials:true,
        auth:{
            username:"Harsh",
            password:"harsh@hp13"
        },
    }).then((res)=>res.data);
}

export const userLogin=(username, password)=>{
    return myAxios.get('/',{
        withCredentials:true,
        auth:{
            username:username,
            password:password
        }
    }).then((res)=>res.status);
}

export const userSignup=(username, password)=>{
    const auth={
        username: username,
        password: password
    }
    const data=qs.stringify(auth)
    return myAxios.post('/',data,{
        headers:{
            'Content-Type':"application/x-www-form-urlencoded"
        }
    }).then((res)=>res.status);
}