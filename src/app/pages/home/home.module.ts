import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { InputTextModule } from "primeng/inputtext";
import {ButtonModule} from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports:[CommonModule,InputTextModule,ButtonModule,ReactiveFormsModule,FormsModule],
  declarations:[HomeComponent],
  exports:[HomeComponent]
})

export class HomeModule{}
