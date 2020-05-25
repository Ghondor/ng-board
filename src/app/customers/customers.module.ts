import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from './list-page/list-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { CustomersRoutingModule } from './customers-routing.module'
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [ListPageComponent, DetailPageComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatListModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class CustomersModule { }
