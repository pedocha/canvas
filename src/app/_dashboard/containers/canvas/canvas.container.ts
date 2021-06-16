import { Component, HostListener, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { UpdatePaths } from '@store/drawings/drawings.actions';
import { DrawingsState } from '@store/drawings/drawings.state';
import { fabric } from 'fabric';
import { Canvas } from 'fabric/fabric-impl';
import { Observable } from 'rxjs';



@Component({
    selector: 'dashboard-canvas',
    templateUrl: './canvas.container.html',
    styleUrls: ['./canvas.container.scss']
})
export class CanvasContainer implements OnInit {

    @Select(DrawingsState.paths$)
    private paths$: Observable<fabric.Path>;
    private canvas: Canvas;
    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.canvas.width = event.target.innerWidth;
    }


    constructor(private store: Store) { }


    public ngOnInit(): void {

        this.canvas = new fabric.Canvas(
            'canvas',
            {
                isDrawingMode: true,
                width: window.innerWidth,
                height: window.innerHeight
            }
        );
        this.canvas.on('mouse:up', (e: any) => this.autoSave(e.currentTarget));

        this.paths$
            .subscribe(
                (paths) => this.canvas.clear().add(paths)
            );

    }


    private autoSave(klass: any): void {
        this.store.dispatch(new UpdatePaths(klass.path))
    }


}
