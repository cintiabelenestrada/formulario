import { Routes } from '@angular/router';
import { TranslateComponent } from './components/translate/translate.component';
import { PortalDeNoticiasComponent } from './components/portalNoticias/portal-de-noticias.component';

export const routes: Routes = [

    {
        path: 'translate', 
        component: TranslateComponent,
    },
    {
        path: 'noticias', 
        component: PortalDeNoticiasComponent,
    }
];
