import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MeuPortfolio';
  public isMenuOpen = false;

  public toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
