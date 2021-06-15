import HttpService from './http.service';
import API from '../constants/endpointAPI';

async function attemptRegisterUser ({ name, username, email, password, repeatPassword }){
  
  try{

    const { token } = await HttpService.post(`${API}/register`, {
      name,
      username,
      password,
      email,
      password,
      repeatPassword,
    });
    return token;
  
  } catch (error){
    console.error(error);
  }
}

export default attemptRegisterUser;
