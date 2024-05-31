import { Routes } from '@angular/router';
import { TranslateComponent } from './components/translate/translate.component';
import { PortalDeNoticiasComponent } from './components/portalNoticias/portal-de-noticias.component';
import { LayoutPageComponent } from './layouts/layout-page/layout-page.component';
import { DireccionIPComponent } from './components/direccionip/direccionip.component';

export const routes: Routes = [
 {
    path: '',
    component: LayoutPageComponent,
    children: [
        { path: 'traductor', component: TranslateComponent,  title: 'Traductor'},

        { path: 'noticias', component: PortalDeNoticiasComponent,title: 'Últimas noticias'},

        { path: 'direccionip', component: DireccionIPComponent,title: 'direccion ip'},
        
        // { path: '**', redirectTo: 'traductor', pathMatch: 'full' },
    ],
 },
];
