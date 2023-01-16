import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repository } from '@models/repository';
import { User } from '@models/user';
import { GitService } from '@services/git.service';
import { LoadingService } from '@services/loading.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

export class ResultsComponent implements OnInit {

  user: User|null = new User();
  repositories: Repository[] = new Array(8);
  input = '';
  loading = false;
  notfound = false;

  constructor(
    private gitService: GitService,
    private activatedRoute: ActivatedRoute,
    private loadingService: LoadingService
  ) {
  }

  async ngOnInit(): Promise<void>{

    const ws = (ms: number)=> new Promise((resolve) => setTimeout(() => resolve(true),ms));
    this.activatedRoute.paramMap.pipe(map(() => window.history.state)).subscribe(async(state) =>{
      const {search} = state;
      this.input = search;
      this.loading = true;

      if(!search){
        this.loading = false;
        return;
      }

      await this.gitService.searchUser(search).then(res => {
        this.user = res;
      }).catch(()=> this.user = null);

      await this.gitService.searchUserRepositories(search).then(res => {
        this.repositories = res.sort((a,b) => b?.stargazers_count - a?.stargazers_count);
      }).catch(()=>this.repositories = []);
      await ws(200);
      this.loading = false;
    });
  }

  async search(){

    if(!this.input){
      return;
    }

    this.loading = true;
    await this.gitService.searchUser(this.input).then(res => {
      this.user = res;
    }).catch(()=> this.user = null);

    await this.gitService.searchUserRepositories(this.input).then(res => {
      this.repositories = res.sort((a,b) => b?.stargazers_count - a?.stargazers_count);
    }).catch(()=> this.repositories = []);;
    this.loading = false;
  }


}
