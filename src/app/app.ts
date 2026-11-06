import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpService } from   './component/httpServises/httpServies';
@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, HttpService],
  templateUrl: './app.html',
  providers: [HttpService]

})
export class App {

 ngOnInit() {
  this.func();
  }

  constructor(private httpService: HttpService) {}
  
  func() {
    this.httpService.getFromServer().subscribe((ddd: any) => {
      console.log(ddd);
    });
}
}
