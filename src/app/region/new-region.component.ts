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

  codeRegion = '';
  imageRegion = '';
  nomRegion = '';
  domaineActiviteRegion = '';
  superficie = '';
  langueMajoritaire = '';


  constructor(
    private regionService: RegionService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //this.onCreate();
  }

  onCreate(): void {
    const region = new Region(this.codeRegion, this.imageRegion, this.nomRegion, this.domaineActiviteRegion, this.superficie, this.langueMajoritaire);
    console.log(region);
    this.regionService.save(region).subscribe(
      data => {
        this.toastr.success('Region creer', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

}
