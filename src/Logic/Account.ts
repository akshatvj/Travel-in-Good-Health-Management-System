import {AccountType} from "./Enum";

export class Account{
    static unique = 0;  
    protected _ID;
    protected _name;
    protected _type;
    protected _openDate;
    protected _password;
    protected _username;
    constructor(name:string,username:string,Date:Date,Type:AccountType,Password:string, ID:number = -1){
        if(ID==-1)
            this._ID = Account.unique++;
        else
            this._ID = ID;
        this._name = name;
        this._type = Type;
        this._username = username;
        this._openDate = Date;
        this._password = Password;
    }
    getID(){
        return this._ID;
    }
    getType(){
        return this._type;
    }
    getName(){
        return this._name;
    }
    getOpenDate(){
        return this._openDate;
    }
    checkPassword(password:string):boolean{
        return (this._password === password);
    }
    getUsername(){
        return this._username;
    }
}