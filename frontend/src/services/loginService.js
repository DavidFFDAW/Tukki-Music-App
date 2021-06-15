import HttpService from './http.service';
import API from '../constants/endpointAPI';

async function attemptLogIn ({ username, password }){
    try{
        const { token } = await HttpService.post(`${API}/api/login`, { email: username, password });
        return token;
        
    } catch (error){
        console.error(error);
    }
}

export default attemptLogIn;