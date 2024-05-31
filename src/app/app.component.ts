import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateComponent } from "./components/translate/translate.component";
import { PortalDeNoticiasComponent } from './components/portalNoticias/portal-de-noticias.component';
import { DireccionIPComponent } from './components/direccionip/direccionip.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, TranslateComponent, PortalDeNoticiasComponent, DireccionIPComponent]
})
export class AppComponent {
  title = 'web-service';
}
