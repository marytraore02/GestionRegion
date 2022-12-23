import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegionComponent } from './region/region.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewRegionComponent } from './region/new-region.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IndexComponent } from './index/index.component';
import { DetailRegionComponent } from './region/detail-region.component';
import { EditRegionComponent } from './region/edit-region.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { PrincipalComponent } from './principal/principal.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { httpInterceptorProviders } from './_helpers/auth.interceptor';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SitesComponent } from './sites/sites.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NouvelRegionComponent } from './newregion/newregion.component';
import { FooterComponent } from './footer/footer.component';
import { PaysComponent } from './pays/pays.component';
import { NewpaysComponent } from './newpays/newpays.component';



@NgModule({
  declarations: [
    AppComponent,
    RegionComponent,
    NewRegionComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    DetailRegionComponent,  
    EditRegionComponent, 
    HeaderComponent, 
    PrincipalComponent, 
    HomeComponent, 
    ProfileComponent, 
    BoardAdminComponent, 
    BoardModeratorComponent, 
    BoardUserComponent, DashboardComponent, SitesComponent, GalleryComponent, NouvelRegionComponent, FooterComponent, PaysComponent, NewpaysComponent, 
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    CommonModule,
    
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
