import HttpService from './http.service';
import API from '../constants/endpointAPI';

function getMixes(){
    return HttpService.get(`${API}/api/myplaylists`)
        .then(({ playlists }) => playlists)
        .catch(err => console.error(err));
}

function getCurrentTukkiMixSongs(id){
    return HttpService.get(`${API}/api/playlists/${id}/songs`)
        .then(({ songs }) => {
            return songs;
        })
        .catch(err => console.error(err.message));
}

function getCurrentMixData(id){
    return HttpService.get(`${API}/api/playlists/${id}/data`)
        .then(({ data }) => {
            return data;
        })
        .catch(err => console.error(err.message));
}
export {
    getMixes,
    getCurrentMixData,
    getCurrentTukkiMixSongs,
}