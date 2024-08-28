import { Component } from '@angular/core';
import { MenuBarItensComponent } from "./menu-bar-itens/menu-bar-itens.component";

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [MenuBarItensComponent],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {

}
