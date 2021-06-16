import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserState } from '@app/store/user/user.state';
import { Navigate } from '@ngxs/router-plugin';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    @Select(UserState.token$) private token$: Observable<string>;


    constructor(private store: Store) { }


    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        return this.token$
            .pipe(
                take(1),
                map(
                    (token) => {
                        if (!token) {
                            this.store.dispatch(new Navigate(['auth']));
                            return false;
                        }
                        return true;
                    })
            );
    }

}

