import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  constructor(private _http:HttpClient) { }
  
  
  // service que trae los idiomas
  public getLanguajes():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
        'X-RapidAPI-Key': '5a891b3bfemshbe636412126e564p1450a6jsne66d35508b88'
      }),
    }
    //, es un metodo del servicio que internamente apunta(me llama) a traves de la url de get el servicio, y le manda las optiones que son lo header
    return this._http.get("https://google-translate1.p.rapidapi.com/language/translate/v2/languages", httpOptions);
  }
  // service de traduccion
  public translateText(source:string, target:string, text:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
        'X-RapidAPI-Key': '5a891b3bfemshbe636412126e564p1450a6jsne66d35508b88',
    }),
  }
  const body = new HttpParams()
    .set('q', text)
      .set('target', target)
        .set('source', source);
    return this._http.post("https://google-translate1.p.rapidapi.com/language/translate/v2",body, httpOptions);
    }
  }