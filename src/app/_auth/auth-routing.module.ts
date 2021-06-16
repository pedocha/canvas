import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthView } from './auth.view';
import { LogginContainer } from './containers/loggin/loggin.container';
import { SignUpContainer } from './containers/sign-up/sign-up.container';



export enum AuthRoutes {
    LOGGIN = 'loggin',
    SIGN_UP = 'sign_up'
}



const routes: Routes = [
    {
        path: '',
        component: AuthView,
        children: [
            {
                path: '',
                redirectTo: AuthRoutes.LOGGIN
            },
            {
                path: AuthRoutes.LOGGIN,
                component: LogginContainer
            },
            {
                path: AuthRoutes.SIGN_UP,
                component: SignUpContainer
            }
        ]
    }
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }