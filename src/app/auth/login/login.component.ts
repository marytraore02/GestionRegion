import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegionService } from 'src/app/service/region.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private regionService: RegionService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
   
  }

  onLogin(){
    function validation() {
      // var username=document.getElementById('username').value;
      // var password=document.getElementById('password').value;
    
      // if ((username=="") ||( password==""))
      //  {
      //    document.getElementById('perror').innerHTML="please fill the details";
      //    return false;
      //  }
    }
    
    
    function clear() {
      //document.getElementById('perror').innerHTML="ksdfisdhfg";
    }
    
}
}
