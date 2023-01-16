import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ResultsComponent } from "./results.component";
import { CardModule } from 'primeng/card';
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { RouterModule } from "@angular/router";
import { SideResultComponent } from "@components/side-result/side-result.component";
import { ItemResultComponent } from "@components/item-result/item-result.component";
import { FormsModule } from "@angular/forms";
import { NotFoundComponent } from "@components/not-found/not-found.component";

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    RouterModule,
    SideResultComponent,
    ItemResultComponent,
    FormsModule,
    NotFoundComponent],
  declarations: [ResultsComponent],
  exports: [ResultsComponent]
})

export class ResultsModule { }
