export class SignIn {
    static readonly type = '[ USER ] sign in';
    constructor(public payload: { email: string, password: string }) {}
}



export class SignOut {
    static readonly type = '[ USER ] sign out';
}



export class SignUp {
    static readonly type = '[ USER ] sign up';
    constructor(public payload: { email: string, password: string }) {}
}