import HttpService from './http.service';
const endpoint = 'http://localhost:8350';

async function attemptLogIn ({ username, password }){
    try{
        const { token } = await HttpService.post(`${endpoint}/login`, { username, password });
        return token;
        
    } catch (error){
        console.error(error);
    }
}

export default attemptLogIn;