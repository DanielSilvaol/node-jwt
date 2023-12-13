module.exports = User;
class User {
    constructor(nome, email, senha, telefones, dadosDoUsuario) {
        this._id = null;
        this._nome = nome;
        this._email = email;
        this._senha = senha;
        this._telefones = telefones;
        this._dadosDoUsuario = dadosDoUsuario;
    }
}