import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarMaterial } from './toolbar.material';



@NgModule({
    declarations: [
        ToolbarMaterial
    ],
    imports: [
        CommonModule,
        MatToolbarModule
    ],
    exports: [
        ToolbarMaterial
    ]
})
export class ToolbarModule { }
