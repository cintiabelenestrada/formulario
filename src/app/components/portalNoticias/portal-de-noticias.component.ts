import { Component } from '@angular/core';
import { InterfaceCategorias } from '../../models/categorias';
import { interfaceArticles } from '../../models/articles';
import { PortalNoticiasService } from '../../services/portal-noticias.service';

@Component({
  selector: 'app-portal-de-noticias',
  standalone: true,
  imports: [],
  templateUrl: './portal-de-noticias.component.html',
  styleUrl: './portal-de-noticias.component.css'
})
export class PortalDeNoticiasComponent {
  categorias: InterfaceCategorias[] = [];

  homepageArticles: interfaceArticles[]= [];

  constructor(private portalNoticias: PortalNoticiasService) {}
  
  ngOnInit(): void {
    this.mostrarDatosDeApi();
  }
  
  mostrarDatosDeApi() {
    this.portalNoticias.getObtenerNoticias().subscribe(
      (data: any) => {
        // Categorias de noticias
        this.categorias = data.categories;
        console.log('data.categories: ', JSON.stringify(data.categories));

        // Noticias
        this.homepageArticles = data.homepageArticles;
        console.log('data.articles: ', JSON.stringify(data.homepageArticles));
      },
      (error:any) => {
        console.log(error);
      }
    );
  }
}
