import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ResultsComponent } from "./results.component";

@NgModule({
  imports:[CommonModule],
  declarations:[ResultsComponent],
  exports:[ResultsComponent]
})

export class ResultsModule {}
