import HttpService from './http.service';
import API from '../constants/endpointAPI';

async function attemptLogIn ({ username, password }){
    try{
        const { token } = await HttpService.post(`${API}/api/login`, { email: username, password });
        return token;
        
    } catch (error){
        console.error(error.error);
    }
}

async function attemptRegisterUser ({ name, username, email, password, repeatPassword }){
  try{

    const { token } = await HttpService.post(`${API}/api/register`, {
      name,
      username,
      password,
      email,
      password,
      repeatPassword,
    });
    return token;
  
  } catch (error){
        console.error(error.error);
  }
}
async function getCurrentUser(){
    try{
        const { user } = await HttpService.get('http://192.168.1.56:8350/api/user')  
        return user;

    } catch(error){
        console.error(error.error);
    }
}

function makePetition(){
    return HttpService.put(`${API}/api/user/petition`)
        .then(({ user }) => user)
        .catch(err => console.error(err.error)); 

}

export {
    attemptLogIn,
    attemptRegisterUser,
    getCurrentUser,
    makePetition,
};