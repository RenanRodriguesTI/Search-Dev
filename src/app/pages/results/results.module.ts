import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ResultsComponent } from "./results.component";
import {CardModule} from 'primeng/card';
import { ButtonModule } from "primeng/button";

@NgModule({
  imports:[CommonModule, CardModule,ButtonModule],
  declarations:[ResultsComponent],
  exports:[ResultsComponent]
})

export class ResultsModule {}
