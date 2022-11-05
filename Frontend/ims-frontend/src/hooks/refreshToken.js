import UseAuth from "./useAuth";
import axios from "../services/axios";


const RefreshToken = () => {
    const { auth,setAuth } = UseAuth()
    
    const refresh= async () =>{
        const response=await axios.get('/refreshToken',{
            withCredentials:true,
            headers:{
                Authorization : `Bearer ${auth.refreshToken}`,
            }
        })
        setAuth(prev=>{
            return {...prev, access_token: response.headers.get('access_token')}
        })
        return response.headers.get('access_token');
    }
    return refresh
}

export default RefreshToken;
