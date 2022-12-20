import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Region } from '../models/region';
import { RegionService } from '../_services/region.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
   
  regions: Region[] = [];
  
  constructor(private regionService:RegionService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.cargarProductos();

  //   var swiper = new Swiper(".home-slider", {
  //     loop:true, 
  //     grabCursor:true,
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },
  // });


  //   let videoBtn = document.querySelectorAll('.vid-btn');
  //   videoBtn.forEach(btn =>{
  //     btn.addEventListener('click', ()=>{
  //         document.querySelector('.controls .active')!.classList.remove('active');
  //         btn.classList.add('active');
  //         let src = btn.getAttribute('data-src');
  //         document.querySelector('#video-slider')!= src;
  //     });
  // });


  }

  cargarProductos(): void {
    this.regionService.liste().subscribe(
      data => {
        this.regions = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.regionService.delete(id).subscribe(
      data => {
        this.toastr.success('Region supprimer', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarProductos(); 
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }



}
