import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisorService {
private url = 'http://localhost:8080/visor';


constructor(
  private http: HttpClient
) { }

  public findjuridica({numero, razonsocial, documento}){

    let params = new HttpParams();

    params = params.append('numero', numero);
    params = params.append('razonsocial', razonsocial);
    params = params.append('documento', documento);
    

    return this.http
      .get(this.url + "/api/findjuridica", { params: params } );
  }
}
