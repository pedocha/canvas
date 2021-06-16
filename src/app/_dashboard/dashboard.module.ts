import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '@material/button/button.module';
import { ToolbarModule } from '@material/toolbar/toolbar.module';
import { HeaderContainer } from './containers/header/header.container';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardView } from './dashboard.view';
import { CanvasContainer } from './containers/canvas/canvas.container';



const materials = [ToolbarModule, ButtonModule];



@NgModule({
    declarations: [
        DashboardView,
        HeaderContainer,
        CanvasContainer
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ...materials
    ]
})
export class DashboardModule { }
