import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Region } from '../models/region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  env=environment;

  constructor(private http:HttpClient) { }

  //Liste des region
  liste(): Observable<Region[]> {
    return this.http.get<Region[]>(`${this.env.api}` + `/region/read`);
  }
  // Details d'une region
  detail(id:number):Observable<Region>{
    return this.http.get<Region>(`${this.env.api}` + `/region/detail/${id}`);
  }

  //Sauvegarde d'une region
  save(region: Region): Observable<any> {
    return this.http.post<any>(`${this.env.api}` + '/region/create', region);
  }
  // public save(region: Region): Observable<any> {
  //   return this.http.post<any>(`${this.env.api}/region/create`, region);
  // }

  //Mise a jour d'une region
  update(id: number, region: Region): Observable<any> {
    return this.http.put<any>(this.env.api + `/region/update/${id}`, region);
  }

  //Suppression d'une region
  delete(id: number): Observable<any> {
    return this.http.delete<any>(this.env.api + `/region/delete/${id}`);
  }

}
