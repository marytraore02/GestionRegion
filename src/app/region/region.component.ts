import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Region } from '../models/region';
import { RegionService } from '../_services/region.service';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showUserBoard = false;
  username?: string;

  regions: Region[] = [];

  constructor(private regionService:RegionService, private toastr: ToastrService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.listeRegion();

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.showUserBoard = this.roles.includes('ROLE_USER');

      this.username = user.username;
    }

  }

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



}
