import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsModule } from '@ngxs/store';
import { StateClass } from '@ngxs/store/internals';
import { environment } from 'environments/environment';
import { DrawingsState } from './drawings/drawings.state';
import { UserState } from './user/user.state';




const states: StateClass<any>[] = [UserState, DrawingsState];


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        NgxsModule.forRoot(states, { developmentMode: !environment.production }),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        NgxsRouterPluginModule.forRoot()
    ]
})
export class StoreModule { }
