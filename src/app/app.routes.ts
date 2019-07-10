import {Routes, RouterModule} from '@angular/router';
import { TemplateComponent } from './componentes/template/template.component';
import { PaisComponent } from './componentes/right/pais/pais.component';
import { PeruComponent } from './componentes/right/peru/peru.component';

const APP_ROUTES: Routes = [
    {
    path: 'home',
    component: TemplateComponent,
    children: [
        {
            path: 'Pais',
            component: PaisComponent
        },
        {
            path: 'Peru',
            component: PeruComponent
        }
    ]
    },
    {path: '**', pathMatch: 'full', redirectTo: 'home' }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: false});

