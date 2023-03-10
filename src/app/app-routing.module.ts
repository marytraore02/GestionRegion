import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './auth/login/login.component';
// import { RegisterComponent } from './auth/register/register.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailRegionComponent } from './region/detail-region.component';
import { EditRegionComponent } from './region/edit-region.component';
import { NewRegionComponent } from './region/new-region.component';
import { NouvelRegionComponent } from './newregion/newregion.component';
import { RegionComponent } from './region/region.component';
import { RegisterComponent } from './register/register.component';
import { SitesComponent } from './sites/sites.component';
import { NewpaysComponent } from './newpays/newpays.component';

const routes: Routes = [

  { path: '', component: PrincipalComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'pays', component: BoardModeratorComponent },
      // { path: 'dashboard', component: DashboardComponent },
      { path: 'sites', component: SitesComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'list', component: RegionComponent},
      { path: 'edit/:id', component: EditRegionComponent},
      { path: 'detail/:id', component: DetailRegionComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  },

  
  { path: 'dashboardpays', component: BoardUserComponent },
  { path: 'dash', component: BoardAdminComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'new', component: NewRegionComponent},
  { path: 'new/region', component: NouvelRegionComponent},
  { path: 'new/pays', component: NewpaysComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
      

];


@NgModule({
  imports: [RouterModule.forRoot(routes),
    //CommonModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
