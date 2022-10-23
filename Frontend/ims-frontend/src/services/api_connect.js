import axios from 'axios'


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
    return myAxios.get('/login',{
        withCredentials:true,
        auth:{
            username:username,
            password:password
        }
    }).then((res)=>res.status);
}