import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { IconModule } from '@material/icon/icon.module';
import { ButtonMaterial } from './button.material';



@NgModule({
    declarations: [
        ButtonMaterial
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        IconModule
    ],
    exports: [
        ButtonMaterial
    ]
})
export class ButtonModule { }
