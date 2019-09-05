import { Injectable } from '@angular/core';
import {Http} from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: any[];
  private url =  'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) {

   }

   getPosts()
   {
    return this.http.get(this.url);
   }

   createPost(input)
   {
    
    return this.http.post(this.url, JSON.stringify(input));
   }
   
  updatePost(post)
  { console.log(post);
    post.title = "Updated Title";
    return this.http.put(this.url + '/' + post.id, JSON.stringify(post));
  }

  deletePost(post)
  {
    return this.http.delete(this.url + '/' + post.id);
    
  }

}
