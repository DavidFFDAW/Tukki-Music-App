import HttpService from './http.service';
const endpoint = 'http://localhost:8350';

async function attemptRegisterUser ({ name, username, email, password, repeatPassword }){
  
  try{

    const { token } = await HttpService.post(`${endpoint}/register`, {
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
