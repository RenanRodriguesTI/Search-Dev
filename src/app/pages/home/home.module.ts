import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { InputTextModule } from "primeng/inputtext";
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports:[CommonModule,InputTextModule,ButtonModule],
  declarations:[HomeComponent],
  exports:[HomeComponent]
})

export class HomeModule{}
