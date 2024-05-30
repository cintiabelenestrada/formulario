import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateComponent } from "./components/translate/translate.component";
import { PortalNoticiasComponent } from './components/portal-noticias/portal-noticias.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, TranslateComponent,PortalNoticiasComponent]
})
export class AppComponent {
  title = 'formulario';
}
