import { Component, Input } from '@angular/core';



@Component({
    selector: 'material-toolbar',
    templateUrl: './toolbar.material.html',
    styleUrls: ['./toolbar.material.scss']
})
export class ToolbarMaterial {
    @Input() public color: string = 'primary';
}
