class Usuario{

    constructor(userName, contraseña){
        this._userName = userName;
        this._contraseña = contraseña;
    }

    get UserName(){
        return this._userName;
    }
    set UserName(userName){
        this._userName = userName;
    }

    get Contraseña(){
        return this._contraseña;
    }
    set Contraseña(contraseña){
        this._contraseña = contraseña;
    }
}