import { Component, OnInit, Input } from '@angular/core';
import {Http} from '@angular/http'
import { createProviderInstance } from '@angular/core/src/view/provider';
import { PostService } from '../post.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  private url =  'https://jjjsonplaceholder.typicode.com/posts';


  constructor(private service: PostService) {  
    
  }


  ngOnInit(){
this.service.getPosts().subscribe(response =>{
  this.posts = response.json();    //
},(error: Response)=>{
  console.log("Error"+error);
});

  }

  
OncreatePost(input : HTMLInputElement){

  let post = {title: input.value};
  input.value = "";
  this.posts.splice(0,0,post);
  this.service.createPost(post).subscribe(response=>{
              post['id'] = response.json().id;
              // console.log(response)
              

            },(error: Response)=>{
              console.log("Error"+error);
              this.posts.splice(0,1);
            });

} 

OnupdatePost(post){
  
  this.service.updatePost(post).subscribe(response=>{
    console.log(response.json());
  })

}

OndeletePost(post){
  this.service.deletePost(post).subscribe(response=>{
    let index = this.posts.indexOf(post);
    this.posts.splice(index,1);
  })
}


   
  
}
