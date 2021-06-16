import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IconMaterial } from './icon.material';



@NgModule({
    declarations: [
        IconMaterial
    ],
    imports: [
        CommonModule,
        MatIconModule
    ],
    exports: [
        IconMaterial
    ]
})
export class IconModule { }
