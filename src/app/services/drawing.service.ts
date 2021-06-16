import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';



const collectionName: string = 'drawings'



@Injectable({
    providedIn: 'root'
})
export class DrawingService {


    constructor(
        private afStore: AngularFirestore
    ) { }


    public getPaths(uid: string) {
        return this.afStore
            .collection(collectionName)
            .doc(uid)
            .get()
    }


    public updatePaths(uid: string, paths: string) {
        return this.afStore
            .collection(collectionName)
            .doc(uid)
            .set({ paths })
    }


}
