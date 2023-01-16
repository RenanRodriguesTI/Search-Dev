import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Repository } from '@models/repository';
import {SkeletonModule} from 'primeng/skeleton';

@Component({
  selector: 'app-item-result',
  templateUrl: './item-result.component.html',
  styleUrls: ['./item-result.component.scss'],
  standalone: true,
  imports:[CommonModule, RouterModule,SkeletonModule]
})
export class ItemResultComponent {

  @Input() repository: Repository = new Repository();
  @Input() loading = false;

  constructor(){}
}
