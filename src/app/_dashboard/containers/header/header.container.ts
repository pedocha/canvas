import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { SignOut } from '@store/user/user.actions';



@Component({
    selector: 'dashboard-header',
    templateUrl: './header.container.html',
    styleUrls: ['./header.container.scss']
})
export class HeaderContainer {

    constructor(private store: Store) { }
    

    public signOut(): void {
        this.store.dispatch(new SignOut());
    }

}
