import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { ButtonModule } from '@material/button/button.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthView } from './auth.view';
import { LogginContainer } from './containers/loggin/loggin.container';
import { NavContainer } from './containers/nav/nav.container';
import { SignUpContainer } from './containers/sign-up/sign-up.container';



const materials: any[] = [ButtonModule, MatTabsModule, MatFormFieldModule, MatInputModule]



@NgModule({
    declarations: [
        AuthView,
        LogginContainer,
        SignUpContainer,
        NavContainer
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ...materials
    ]
})
export class AuthModule { }
