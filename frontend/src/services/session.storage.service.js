module.exports = {
    addToken: (token) => window.sessionStorage.setItem('jwt',token),
    getToken: _ => window.sessionStorage.getItem('jwt'),
    removeToken: _ => window.sessionStorage.removeItem('jwt'),
}