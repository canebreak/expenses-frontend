export class Token {

    constructor(public accessToken: string, public tokenType = 'Bearer'){
    }

    public setToken(token)
    {
        this.accessToken = token;
    }
}
