import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showUserBoard = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
        this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.showUserBoard = this.roles.includes('ROLE_USER');

      this.username = user.username;
    }





    //=======================JS=======================

    //let searchForm = document.querySelector('.search-form');

  //   document.querySelector('#search-btn')!.onclick = () =>{
  //     searchForm!.classList.add('active');
  // }
  // searchForm!.addEventListener('click', () =>{
  //   searchForm!.classList.add('active');
  //   });
  
  // document.querySelector('#close-search').onclick = () =>{
  //     searchForm.classList.remove('active');
  // }
    
  //   let navbar = document.querySelector('.navbar')

  //   let formBtn = document.querySelector('#login-btn');
  //   let loginForm = document.querySelector('.login-form-container');
  //   let formClose = document.querySelector('#form-close');
    

  //   formBtn!.addEventListener('click', () =>{
  //   loginForm!.classList.add('active');
  //   });

  //   formClose!.addEventListener('click', () =>{
  //   loginForm!.classList.remove('active');
  //   });

  //   window.onscroll = () =>{
  //     navbar!.classList.remove('active');
  //     loginForm!.classList.remove('active');
  // }

  }




  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }


 

}
