export class User {
    constructor(
        private id: number,
        private firstName: string,
        private lastName: string,
        private email: string,
        private password: string,
        private enabled: boolean,
        private tokenExpired: boolean
    ) {
        this.id = id;
        this.firstName = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.enabled = enabled;
        this.tokenExpired = tokenExpired;
    }
}
