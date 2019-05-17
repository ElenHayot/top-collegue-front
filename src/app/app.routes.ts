import {Routes} from '@angular/router';
import {AuthenticationComponent} from './authentication/authentication.component';

export const ROUTES: Routes= [
    {path: 'accueil', component: AuthenticationComponent},
    {path: '', pathMatch: 'full', redirectTo: 'app'}
]