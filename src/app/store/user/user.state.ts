import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Navigate } from '@ngxs/router-plugin';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { UserService } from '@services/user.service';
import { SignIn, SignOut, SignUp } from '@store/user/user.actions';



interface UserStateModel {
    token: string;
}



const defaults: UserStateModel = {
    token: null
}



@State<UserStateModel>({ name: 'User', defaults })
@Injectable()
export class UserState {

    @Selector()
    public static token$({ token }: UserStateModel): string { return token }

    constructor(private userService: UserService) { }


    @Action(SignIn)
    public signIn(ctx: StateContext<UserStateModel>, { payload }: SignIn): void {
        const { email, password } = payload;
        this.userService.signIn(email, password)
            .then(
                ({ user }) => {
                    ctx.patchState({ token: user.uid });
                    ctx.dispatch(new Navigate(['/']))
                }
            );
    }



    @Action(SignOut)
    public signOut(ctx: StateContext<UserStateModel>): void {
        this.userService.signOut()
            .then(
                () => {
                    ctx.patchState({ token: null });
                    ctx.dispatch(new Navigate(['auth']));
                }
            )
            .catch(({ message }) => alert(`Sign out ${message}`));

    }



    @Action(SignUp)
    public signUp(ctx: StateContext<UserStateModel>, { payload }: SignIn): void {
        const { email, password } = payload;
        this.userService.signUp(email, password)
            .then(() => ctx.dispatch(new SignIn({ email, password })))
            .catch(({ message }) => alert(message));
    }

}