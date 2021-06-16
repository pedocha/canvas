import { Injectable } from '@angular/core';
import { DrawingService } from '@app/services/drawing.service';
import { Action, Select, Selector, State, StateContext } from '@ngxs/store';
import { fabric } from 'fabric';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { UserState } from '../user/user.state';
import { GetPaths, UpdatePaths } from './drawings.actions';



interface DrawingsStateModel {
    paths: string;
}



const defaults: DrawingsStateModel = {
    paths: ''
}



@State<DrawingsStateModel>({ name: 'Drawings', defaults })
@Injectable()
export class DrawingsState {

    @Select(UserState.token$)
    private token$: Observable<string>;
    private uid: string;


    @Selector()
    public static paths$({ paths }: DrawingsStateModel): fabric.Path { return new fabric.Path(paths); }


    constructor(
        private drawingService: DrawingService
    ) {
        this.token$.subscribe((token: string) => this.uid = token)
    }


    @Action(GetPaths)
    public getPaths(ctx: StateContext<DrawingsStateModel>) {
        this.drawingService
            .getPaths(this.uid)
            .pipe(
                take(1),
                map((response) => response.data()),
                filter(data => !!data)
            )
            .subscribe(({ paths }: any) => ctx.patchState({ paths }));
    }



    @Action(UpdatePaths)
    public updateDrawing(ctx: StateContext<DrawingsStateModel>, { payload: paths }: UpdatePaths) {
        const pathString: string = paths
            .map((path) => path.join(' '))
            .join(' ');
        this.drawingService
            .updatePaths(this.uid, pathString)
            .then(() => ctx.dispatch(new GetPaths()))
            .catch(e => console.error(`UpdatePaths -> ${e}`));

    }

}