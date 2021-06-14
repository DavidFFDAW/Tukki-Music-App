import HttpService from './http.service';
const endpoint = 'http://192.168.1.56:8350';

async function getMyPlaylist(){
    const { playlists } = await HttpService.get(`${endpoint}/api/myplaylists`);
    return playlists;
}

export default getMyPlaylist();