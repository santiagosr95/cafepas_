import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cafepas';

  constructor(private router:Router){

 function inicio(){
  router.navigate(['inicio']);
      }
      
function nosotros(){
    router.navigate(['nosotros']);
    }

function contacto(){
    router.navigate(['contacto']);
    
    }
    
function producto(){
    router.navigate(['productos']);
    }

  }
}
