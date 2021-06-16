import { Component, Input } from '@angular/core';



@Component({
    selector: 'material-drawer',
    templateUrl: './drawer.material.html',
    styleUrls: ['./drawer.material.scss']
})
export class DrawerMaterial {

    @Input() public opened: boolean = false;
    
}
