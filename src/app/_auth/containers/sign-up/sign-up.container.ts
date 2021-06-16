import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { SignUp } from '@store/user/user.actions';



@Component({
    selector: 'auth-sign-up',
    templateUrl: './sign-up.container.html',
    styleUrls: ['./sign-up.container.scss']
})
export class SignUpContainer {

    public signUpForm: FormGroup;


    constructor(
        private fb: FormBuilder,
        private store: Store
    ) {
        this.signUpForm = this.fb.group({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required]),
        });
    }


    public signUp(): void {
        const { invalid, value } = this.signUpForm;
        if (invalid) return alert('Form Invalid');
        
        const { email, password } = value;
        this.store.dispatch(new SignUp({ email, password }));
    }

}
