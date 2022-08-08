import { Component, OnInit } from '@angular/core'
import { PruebaService } from './components/services/prueba.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FlinkUI';


  //instanciar el service para usar en el oninit
  constructor(private pruebaservice: PruebaService) {

  }
  ngOnInit(): void {
      this.pruebaservice.getPrueba()
      .subscribe(data=> {
        console.log(data);
      });

  }
}
