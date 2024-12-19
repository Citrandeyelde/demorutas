import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../service/api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-escritorio',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './escritorio.component.html',
  styleUrl: './escritorio.component.css'
})
export class EscritorioComponent {

  data:Observable<any>[] = [];
 constructor(private apiService: ApiService){}

  ngOnInit():void{
    this.llenarData();
    console.log("estoy vivo");
  }

  llenarData(){
    this.apiService.getData().subscribe({
      next:(result)=> {
        alert("consumiendo api");
        console.log("estoy vivo");
        this.data= result;
        console.log(result);
      },
      error: (err)=>{
        console.log(err)
      }
    }
    )
  }

}
