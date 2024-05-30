import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  constructor(private _http: HttpClient) {}

  // service que trae los idiomas
  public getObtenerLanguajes(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': 'bab76fe0d0msh81e9d1b3f602fc5p18588bjsn1d91f66cc06a',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
      }),
    };
    //, es un metodo del servicio que internamente apunta(me llama) a traves de la url de get el servicio, y le manda las optiones que son lo header
    return this._http.get(
      'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
      httpOptions
    );
  }
  // service de traduccion
  public translateText(
    source: string,
    target: string,
    text: string
  ): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': 'bab76fe0d0msh81e9d1b3f602fc5p18588bjsn1d91f66cc06a',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
      }),
    };
    const body = new HttpParams()
      .set('q', text)
      .set('target', target)
      .set('source', source);
    return this._http.post(
      'https://google-translate1.p.rapidapi.com/language/translate/v2',
      body,
      httpOptions
    );
  }
}
