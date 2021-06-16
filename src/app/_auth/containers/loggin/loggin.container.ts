import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { SignIn } from '@store/user/user.actions';



@Component({
    selector: 'app-loggin',
    templateUrl: './loggin.container.html',
    styleUrls: ['./loggin.container.scss']
})
export class LogginContainer {

    public logginForm: FormGroup;


    constructor(
        private fb: FormBuilder,
        private store: Store
    ) {
        this.logginForm = this.fb.group({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required]),
        });
    }


    public loggin(): void {
        const { invalid, value } = this.logginForm;
        if (invalid) return alert('Form Invalid');

        const { email, password } = value;
        this.store.dispatch(new SignIn({ email, password }));
    }

}
