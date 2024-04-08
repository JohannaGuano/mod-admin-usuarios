import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TablaUsuariosComponent } from "./tabla-usuarios/tabla-usuarios.component";
import {MatCardModule} from '@angular/material/card';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, TablaUsuariosComponent, MatCardModule ]
})
export class AppComponent {
  title = 'mod-admin-usuarios';
}
