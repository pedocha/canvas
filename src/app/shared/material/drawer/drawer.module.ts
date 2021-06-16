import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DrawerMaterial } from './drawer.material';



@NgModule({
    declarations: [
        DrawerMaterial
    ],
    imports: [
        CommonModule,
        MatSidenavModule
    ],
    exports: [
        DrawerMaterial
    ],
})
export class DrawerModule { }
