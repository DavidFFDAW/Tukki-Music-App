const get = endpoint => _makeFetchRequest(endpoint,'GET');
const put = (endpoint,data) => _makeFetchRequest(endpoint,'PUT',data);
const post = (endpoint,data) => _makeFetchRequest(endpoint,'POST',data);
const remove = endpoint => _makeFetchRequest(endpoint,'DELETE');

function _makeFetchRequest(url,method,data){
        const options = {
            method: method,
            mode: 'cors',
            headers: {'Content-Type': 'application/json'}
        };
        if(data){
            options.body = JSON.stringify(data);
        }
        
        return fetch(url, options).then(response => response.json());
}

export default {
    get, post, put, delete: remove
};