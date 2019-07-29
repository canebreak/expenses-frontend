import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import { LogoutComponent } from './logout/logout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "login", component: LoginComponent},
  {path: "logout", component: LogoutComponent},
  {path: "expenses", component: ExpensesListComponent},
  {path: "register", component: RegisterComponent},
  {path: "profile", component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
