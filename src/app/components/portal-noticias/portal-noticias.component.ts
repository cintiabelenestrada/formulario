import { Component } from '@angular/core';
import { PortalNoticiasService } from '../../services/portal-noticias.service';
import {  InterfaceCategorias } from '../../models/categorias';
import {  interfaceArticles } from '../../models/articles';

@Component({
  selector: 'app-portal-noticias',
  standalone: true,
  imports: [],
  templateUrl: './portal-noticias.component.html',
  styleUrl: './portal-noticias.component.css',
})
export class PortalNoticiasComponent {
  categorias: InterfaceCategorias[] = [];

  homepageArticles: interfaceArticles[]= [];

  constructor(private portalNoticiasService: PortalNoticiasService) {}
  mostrarDatosDeApi() {
    this.portalNoticiasService.getObtenerNoticias().subscribe(
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
