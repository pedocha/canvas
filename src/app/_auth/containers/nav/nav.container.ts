import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { AuthRoutes } from '@app/_auth/auth-routing.module';



@Component({
    selector: 'auth-nav',
    templateUrl: './nav.container.html',
    styleUrls: ['./nav.container.scss']
})
export class NavContainer {

    public links = Object.values(AuthRoutes);
    public activeLink = this.links[0];
    public background: ThemePalette = undefined;

}
