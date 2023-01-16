import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "@models/user";
import { Repository } from '@models/repository';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(
    private httpClient: HttpClient
  ) { }

  async searchUser(userName: string = ""): Promise<User>{
    return new Promise((resolve,reject)=>{
      this.httpClient.get(`https://api.github.com/users/${userName}`).subscribe({
        next: (response) =>{
          resolve(response as User);
        },
        error: (error) =>{
          reject(error);
        }
      });
    });
  }

  async searchUserRepositories(userName: string): Promise<Repository[]>{
    return new Promise((resolve,reject) =>{
      this.httpClient.get(`https://api.github.com/users/${userName}/repos`).subscribe({
        next: (response) =>{
          let array:any  = response as [];
          array = array.map((item:any) =>{

            item['updated_at'] = item['updated_at'] ? new Date(item['updated_at']) : null;
            item['created_at'] = item['created_at'] ?  new Date(item['created_at']): null;

            return item as Repository;
          });
          resolve(array as Repository[]);
        },
        error: (error) => {
          reject(error);
        }
      });
    });
  }
}
