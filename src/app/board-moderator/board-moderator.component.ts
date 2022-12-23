import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Pays } from '../models/pays';
import { Region } from '../models/region';
import { RegionService } from '../_services/region.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showUserBoard = false;
  username?: string;

  regions: Region[] = [];
  pays: Pays[] = [];

  constructor(private regionService:RegionService, private toastr: ToastrService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.listePays();

  }

  listePays(): void {
    this.regionService.listePays().subscribe(
      data => {
        console.log(data);
        this.pays = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
