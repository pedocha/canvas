import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@guards/auth.guard';
import { DashboardResolver } from '@resolvers/dashboard.resolver';


enum Paths {
    DASHBOARD = '',
    AUTH = 'auth'
}



const routes: Routes = [

    {
        path: Paths.DASHBOARD,
        canActivate: [AuthGuard],
        resolve: { DashboardResolver },
        loadChildren: () => import('@dashboard/dashboard.module').then(m => m.DashboardModule)
    },

    {
        path: Paths.AUTH,
        loadChildren: () => import('@auth/auth.module').then(m => m.AuthModule)
    }

];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
