import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { User } from '@models/user';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import {AvatarModule} from 'primeng/avatar';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-side-result',
  templateUrl: './side-result.component.html',
  styleUrls: ['./side-result.component.scss'],
  standalone: true,
  imports: [
    CommonModule, CardModule, ButtonModule, InputTextModule,AvatarModule,SkeletonModule
  ]
})
export class SideResultComponent {
  @Input() user: User = new User();
  @Input() loading = false;

  constructor() {}
}
