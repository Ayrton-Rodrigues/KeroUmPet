import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetModel } from 'src/app/features/models/pet.model';
import { UserModel } from 'src/app/features/models/user.model';
import { PetService } from 'src/app/features/services/pet.service';
import { UserService } from 'src/app/features/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private petService: PetService,
    private router: Router
  ) {}

  userId!: string;
  user!: UserModel;
  pets!: PetModel[];
  ifUser: boolean = false;
  removeUser: boolean = false;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
    });

    this.userService.getUser(parseInt(this.userId)).subscribe((user) => {
      this.user = user;
    });

    this.petService.getPetsOwner(parseInt(this.userId)).subscribe((pets) => {
      this.pets = pets;
    });
  }

  // funcoes de decisao
  trueOrFalse() {
    this.ifUser = !this.ifUser;
    console.log(this.ifUser);
  }

  removeTrueOrFalse() {
    this.removeUser = !this.removeUser;
    console.log(this.removeUser);
  }

  offRemove() {
    this.ifUser = !this.ifUser;
    this.removeUser = !this.removeUser;
    console.log(this.ifUser);
  }

  //Adicionando pet

  navigateCreatePet() {
    this.router.navigateByUrl(`createPet`);
  }

  //excluir usuario

  onRemoveUser() {
    this.userService
      .deleteUser(parseInt(this.userId))
      .subscribe((result) => alert('Excluído'));
    this.userService.exit();
    this.router.navigateByUrl('login');
  }
}
