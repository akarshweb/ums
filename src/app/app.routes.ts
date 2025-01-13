import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserCreateComponent } from './components/user-create/user-create.component';

// Define the application's routing paths
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Redirect root to '/home'
  { path: 'home', component: HomeComponent },           // Route for Home component
  { path: 'user-list', component: UserListComponent },  // Route for User List component
  { path: 'user-detail/:id', component: UserDetailComponent }, // Route for User Detail, with dynamic 'id' parameter
  { path: 'user-create', component: UserCreateComponent } // Route for User Create component
];
