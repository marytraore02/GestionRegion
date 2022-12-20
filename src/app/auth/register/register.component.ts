import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Region } from 'src/app/models/region';
import { RegionService } from 'src/app/service/region.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  codeRegion = '';
  nomRegion = '';
  domaineActiviteRegion = '';
  superficie = '';
  langueMajoritaire = '';

  constructor(
    private regionService: RegionService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {

  }

  onCreate(): void {
  //   const region = new Region(this.codeRegion, this.nomRegion, this.domaineActiviteRegion, this.superficie, this.langueMajoritaire);
  //   console.log(region);
  //   this.regionService.save(region).subscribe(
  //     data => {
  //       this.toastr.success('Region creer', 'OK', {
  //         timeOut: 3000, positionClass: 'toast-top-center'
  //       });
  //       this.router.navigate(['/']);
  //     },
  //     err => {
  //       this.toastr.error(err.error.mensaje, 'Fail', {
  //         timeOut: 3000,  positionClass: 'toast-top-center',
  //       });
  //       this.router.navigate(['/']);
  //     }
  //   );


  
  }

}
