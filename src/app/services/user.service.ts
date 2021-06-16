import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';



@Injectable({
    providedIn: 'root'
})
export class UserService {


    constructor(private afAuth: AngularFireAuth) { }


    public signUp(email: string, password: string) {
        return this.afAuth.createUserWithEmailAndPassword(email, password);
    }



    public signIn(email: string, password: string) {
        return this.afAuth.signInWithEmailAndPassword(email, password);
    }



    public signOut() {
        return this.afAuth.signOut();
    }


}
