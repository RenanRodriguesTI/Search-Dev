import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ResultsComponent } from "./results.component";
import {CardModule} from 'primeng/card';
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { RouterModule } from "@angular/router";

@NgModule({
  imports:[CommonModule, CardModule,ButtonModule,InputTextModule,RouterModule],
  declarations:[ResultsComponent],
  exports:[ResultsComponent]
})

export class ResultsModule {}
