import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Region } from '../models/region';
import { RegionService } from '../_services/region.service';

@Component({
  selector: 'app-detail-region',
  templateUrl: './detail-region.component.html',
  styleUrls: ['./detail-region.component.css']
})
export class DetailRegionComponent implements OnInit {

  region: any;

  constructor(
    private regionService: RegionService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id =this.activatedRoute.snapshot.params['id'];

    this.regionService.detail(id).subscribe(data => {
        this.region = data;
        console.log(this.region)
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.retour();
      }
    );

}

retour(): void {
  this.router.navigate(['/list']);
}

}