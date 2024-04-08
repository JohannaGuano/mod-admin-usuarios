import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../core/_services/users.service';
import { UserModel } from '../core/_models/user.model';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-tabla-usuarios',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './tabla-usuarios.component.html',
  styleUrl: './tabla-usuarios.component.scss'
})
export class TablaUsuariosComponent implements OnInit{
  
  listaUsers: UserModel[] = [];
  

  constructor(
    private userListService: UserService,
  ) { }

  ngOnInit(): void {
    this.userListService.GetUsers()
    .subscribe(result=>{
      this.listaUsers = result;
    });
  }

}

