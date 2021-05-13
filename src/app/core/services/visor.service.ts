import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDocumento } from 'src/app/core/models/idocumento';


@Injectable({
  providedIn: 'root'
})
export class VisorService {
private url = 'http://localhost:8080/visor';


constructor(
  private http: HttpClient
) { }

  public findjuridica({numero, razonsocial, documento},page){

    let params = new HttpParams();

    params = params.append('numero', numero);
    params = params.append('razonsocial', razonsocial);
    params = params.append('documento', documento);
    params = params.append('page', page);
    

    return this.http
      .get<IDocumento[]>(this.url + "/api/findjuridica", { params: params } );
  }
}
