import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Region } from '../models/region';
import { RegionService } from '../_services/region.service';

@Component({
  selector: 'app-edit-region',
  templateUrl: './edit-region.component.html',
  styleUrls: ['./edit-region.component.css']
})
export class EditRegionComponent implements OnInit {
  region: any;

  constructor(
    private regionService: RegionService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params['id'];

    this.regionService.detail(id).subscribe(
      data => {
        this.region = data;
        console.log(this.region)
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }


  onUpdate(): void {
    const id=this.activatedRoute.snapshot.params['id']
    
    this.regionService.update(id, this.region).subscribe(
      data =>{
        this.toastr.success('Mise à jour effectuer', 'OK', {
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
