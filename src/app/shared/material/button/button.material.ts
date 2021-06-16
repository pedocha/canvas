import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Colors } from '@material/material.models';



@Component({
    selector: 'material-button',
    templateUrl: './button.material.html',
    styleUrls: ['./button.material.scss']
})
export class ButtonMaterial { 
    @Input() public color: Colors = null;
    @Input() public icon: string = null;
    @Input() public type: string = 'text';
    @Output() public clicked = new EventEmitter();
}
