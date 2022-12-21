import { Component, OnInit } from '@angular/core';
import { Region } from '../models/region';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { RegionService } from '../_services/region.service';



@Component({
  selector: 'app-new-region',
  templateUrl: './new-region.component.html',
  styleUrls: ['./new-region.component.css']
})
export class NewRegionComponent implements OnInit {
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
  image: any;
  listepays: any;


  constructor(
    private regionService: RegionService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ListPays();
    this.listeRegion();
  }


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
  

    //Liste de tout les regions
    listeRegion(): void {
      this.regionService.liste().subscribe(
        data => {
          console.log(data);
          this.regions = data;
        },
        err => {
          console.log(err);
        }
      );
    }


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
        this.router.navigate(['/list']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/list']);
      }
    );
  }


  delete(id: number) {
    this.regionService.delete(id).subscribe(
      data => {
        this.toastr.success('Region supprimer', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.listeRegion(); 
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Connecter-vous à votre compte admin pour effectuer cette action', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

}

  


