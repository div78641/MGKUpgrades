import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MgkNavComponent } from './mgk-nav/mgk-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule } from '@angular/material';
import { MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';


import { AddUpgradeComponent } from './add-upgrade/add-upgrade.component';
import { ViewUpgradesComponent } from './view-upgrades/view-upgrades.component';

@NgModule({
  declarations: [
    AppComponent,
    MgkNavComponent,
    AddUpgradeComponent,
    ViewUpgradesComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    MatNativeDateModule,
    RouterModule.forRoot([
      {
        path: '', component: MgkNavComponent,
        children: [
          { path: 'add-upgrade', component: AddUpgradeComponent },
          { path: 'view-upgrades', component: ViewUpgradesComponent },
          { path: '', redirectTo: 'view-upgrades', pathMatch: 'full' },
        ]
      },
    ]),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
