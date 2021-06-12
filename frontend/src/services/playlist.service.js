import HttpService from './http.service';
const endpoint = 'http://localhost:8350';

async function getSongs(){
    const {response} = await HttpService.get(`${endpoint}/songs`);
    console.log(response);
    return response;
}

export default getSongs();