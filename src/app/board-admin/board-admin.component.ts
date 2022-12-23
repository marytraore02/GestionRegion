import { Component, OnInit } from '@angular/core';
import { NewUser } from '../models/new-user';
import { Pays } from '../models/pays';
import { Region } from '../models/region';
import { RegionService } from '../_services/region.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content?: string;
  listepays: any

  constructor(private userService: UserService, private regionService: RegionService) { }
  regions: Region[] = [];
  pays: Pays[] = [];
  users: NewUser[] = [];

  ngOnInit(): void {
    this.ListPays();
    this.listeRegion();
    this.listeUsers();

    this.userService.getAdminBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {console.log(err)
        if (err.error) {
          this.content = JSON.parse(err.error).message;
        } else {
          this.content = "Error with status: " + err.status;
        }
      }
    });
  }



//Liste de tout les pays
ListPays(): void {
  this.regionService.listePays().subscribe(
    data => {
      console.log(data);
      this.listepays = data;
      console.log(this.listepays.length);
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

//Liste de tout les users
listeUsers(): void {
  this.regionService.listeUsers().subscribe(
    data => {
      console.log(data);
      this.users = data;
      console.log(this.users.length);
    },
    err => {
      console.log(err);
    }
  );
}



}