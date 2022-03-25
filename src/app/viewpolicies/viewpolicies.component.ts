import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DeleteService } from '../delete.service';

@Component({
  selector: 'app-viewpolicies',
  templateUrl: './viewpolicies.component.html',
  styleUrls: ['./viewpolicies.component.css']
})
export class ViewpoliciesComponent implements OnInit {

  books : any;

  constructor(private http:HttpClient,private deleteservice: DeleteService) { }
  _url = 'http://localhost:9091/api/v1/policies';
  ngOnInit() {
   
   let responce =  this.http.get(this._url);
   responce.subscribe((data)=>this.books=data);

  }
  deletePolicy(book:any){
    alert("delete Successful");
    this.deleteservice.deletePolicy(book.policyId).subscribe(
      (resp) => {

        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }


}
