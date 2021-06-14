import sessionStorageService from "./session.storage.service";

export default class HttpService {
    
    constructor(){}

    static get = endpoint => this._makeFetchRequest(endpoint,'GET');
    static put = (endpoint,data) => this._makeFetchRequest(endpoint,'PUT',data);
    static post = (endpoint,data) => this._makeFetchRequest(endpoint,'POST',data);
    static delete = endpoint => this._makeFetchRequest(endpoint,'DELETE');

    static _makeFetchRequest(url,method,data){
        const token = sessionStorageService.getToken();
        const options = {
            method: method,
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ',
            },
        };
        if(token){
            options.headers = {...options.headers, 'Authorization': 'Bearer ' + token };
        }
        if(data){
            options.body = JSON.stringify(data);
        }
        
        return fetch(url, options).then(response => response.json());
    }

}