import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";

const routes: Routes = [
  // home views
  {
    path: "user",
    component: AdminComponent,
    children: [
      { path: "home", component: DashboardComponent },
      { path: "", redirectTo: "home", pathMatch: "full" },
    ],
  },
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },

  { path: "**", redirectTo: "/auth/login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
