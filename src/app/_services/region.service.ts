import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Region } from '../models/region';
import { Pays } from '../models/pays';

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

  //Recuperer les pays
  listePays(): Observable<Pays[]> {
    return this.http.get<Pays[]>(`${this.env.api}` + `/pays/read`);
  }
  

  // Details d'une region
  detail(id:number):Observable<Region>{
    return this.http.get<Region>(`${this.env.api}` + `/region/detail/${id}`);
  }

  //Sauvegarde d'une region
  save(region: Region): Observable<any> {
    return this.http.post<any>(`${this.env.api}` + '/region/create/new', region);
  }
  // public save(region: Region): Observable<any> {
  //   return this.http.post<any>(`${this.env.api}/region/create`, region);
  // }

  //Mise a jour d'une region
  update(id: number, region: Region): Observable<any> {
    return this.http.put<any>(`${this.env.api}` + `/region/update/${id}`, region);
  }

  //Suppression d'une region
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.env.api}` + `/region/delete/${id}`);
  }
  
  //Creation d'une region
  Creer(file:any,codeRegion:any,nomRegion:any,descriptionRegion:any,domaineActiviteRegion:any,superficie:any,langueMajoritaire:any,nomPay:any):Observable<any>{
    const dat:FormData=new FormData();
    dat.append('file',file);

    let reg =[{
      "codeRegion": codeRegion,
      "nomRegion":nomRegion,
      "descriptionRegion":descriptionRegion,
      "domaineActiviteRegion":domaineActiviteRegion,
      "superficie":superficie,
      "langueMajoritaire":langueMajoritaire
    }]
    //data.append('data',activite);
    console.log(reg)
    dat.append('data', JSON.stringify(reg).slice(1,JSON.stringify(reg).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/region/create/new/${nomPay}`,dat);
  }



  





}
