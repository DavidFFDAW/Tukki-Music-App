export default class {
    addToken(token) { window.sessionStorage.setItem('jwt',token) }
    getToken = _ => window.sessionStorage.getItem('jwt');
    removeToken() { window.sessionStorage.removeItem('jwt'); };
}