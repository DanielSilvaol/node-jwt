module.exports = UserDetails;
class UserDetails {
    constructor() {
        this._data_criacao = new Date();
        this._data_atualizacao = null;
        this._ultimo_login = null;
        this._token = null;
    }
}

