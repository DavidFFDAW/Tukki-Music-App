import HttpService from './http.service';
import API from '../constants/endpointAPI';

function searchSongsAndUserByTerm(term){
    return HttpService.post(`${API}/api/user/search`,{ term: term })
        .then( response => response)
        .catch(err => console.error(err.error));
}

export {
    searchSongsAndUserByTerm,
}