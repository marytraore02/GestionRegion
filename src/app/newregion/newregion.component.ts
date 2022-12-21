import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Region } from '../models/region';
import { RegionService } from '../_services/region.service';

@Component({
  selector: 'app-newregion',
  templateUrl: './newregion.component.html',
  styleUrls: ['./newregion.component.css']
})
export class NouvelRegionComponent implements OnInit {
  regions: Region[] = [];

  codeRegion!: any;
  imageRegion!: any;
  nomRegion!: any;
  domaineActiviteRegion!: any;
  descriptionRegion!: any;
  superficie !: any;
  langueMajoritaire!: any;
  pays : any;
  createur : any;
  nomPay : any;

  fichier: any;
  region: any;
  image: any;
  listepays: any;

  constructor(
    private regionService: RegionService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ListPays();
  }

//Liste de tout les pays
  ListPays(): void {
    this.regionService.listePays().subscribe(
      data => {
        console.log(data);
        this.listepays = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  


  

  //Recuperationn de l'image depuis la formulaire
  recuperationImage(event: any) {

    this.image = event.target["files"][0];
    console.log(this.image)
  }



  reg =[{
    "codeRegion": this.codeRegion,
    "nomRegion":this.nomRegion,
    "descriptionRegion": this.descriptionRegion,
    "domaineActiviteRegion":this.domaineActiviteRegion,
    "superficie":this.superficie,
    "langueMajoritaire":this.langueMajoritaire
  }]


  //La creation de la methode de creation
  onCreate(): void {
    console.log(this.reg)
    console.log(this.nomPay)
    // const region = new Region(this.codeRegion, this.imageRegion, this.nomRegion, this.domaineActiviteRegion, this.superficie, this.langueMajoritaire);
    // console.log(region);
    this.regionService.Creer(this.image,this.codeRegion,this.nomRegion,this.descriptionRegion,this.domaineActiviteRegion,this.superficie,this.langueMajoritaire,this.nomPay).subscribe(
      data => {
        this.toastr.success('Region creer', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        console.log(data);
        this.retour();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/new']);
      }
    );
  }

  //retour sur la page precedente
  retour(): void {
    this.router.navigate(['/list']);
  }


}
