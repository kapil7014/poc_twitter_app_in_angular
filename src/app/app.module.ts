import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NgxSpinnerModule } from 'ngx-spinner';

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";

import { AdminNavbarComponent } from "./components/navbars/admin-navbar/admin-navbar.component";
import { CardPageVisitsComponent } from "./components/cards/card-page-visits/card-page-visits.component";
import { CardStatsComponent } from "./components/cards/card-stats/card-stats.component";
import { FooterAdminComponent } from "./components/footers/footer-admin/footer-admin.component";
import { HeaderStatsComponent } from "./components/headers/header-stats/header-stats.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { UserDropdownComponent } from "./components/dropdowns/user-dropdown/user-dropdown.component";
import { HttpClientService } from "./core/http-client.service";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "./views/auth/services/auth.service";
import { RouteConfig } from "./core/route.config";
import { TweetsService } from "./layouts/services/tweets.service";
import { SafePipe } from "./core/safe.pipe";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserDropdownComponent,
    SidebarComponent,
    FooterAdminComponent,
    CardPageVisitsComponent,
    CardStatsComponent,
    HeaderStatsComponent,
    AdminNavbarComponent,
    AdminComponent,
    AuthComponent,
    LoginComponent,
    SafePipe,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, AppRoutingModule, NgxSpinnerModule],
  providers: [HttpClientService, RouteConfig, AuthService, TweetsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
