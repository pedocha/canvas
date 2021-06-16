import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot, Resolve,
    RouterStateSnapshot
} from '@angular/router';
import { Store } from '@ngxs/store';
import { GetPaths } from '@store/drawings/drawings.actions';
import { Observable, of } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class DashboardResolver implements Resolve<boolean> {

    constructor(private store: Store) { }


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        this.store.dispatch(new GetPaths());
        return of(true)
    }
}
