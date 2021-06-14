import HttpService from './http.service';
const endpoint = 'http://192.168.1.56:8350';

async function attemptLogIn ({ username, password }){
    try{
        const { token } = await HttpService.post(`${endpoint}/api/admin/login`, { email: username, password });
        return token;
        
    } catch (error){
        console.error(error);
    }
}

export default attemptLogIn;