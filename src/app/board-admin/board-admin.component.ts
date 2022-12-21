import { Component, OnInit } from '@angular/core';
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


  ngOnInit(): void {
    this.ListPays();
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
    },
    err => {
      console.log(err);
    }
  );
}



}