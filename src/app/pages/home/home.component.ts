import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '@services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  input: string ='';

  constructor(private router: Router,  private loadingService: LoadingService){
    this.loadingService.stop();
  }
  ngOnInit(): void {
  }

  send(){
      this.router.navigate(['/results'],{state:{search:this.input.trim()}});
  }
}
