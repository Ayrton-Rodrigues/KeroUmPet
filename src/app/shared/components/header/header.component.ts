import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/features/models/user.model';
import { UserService } from 'src/app/features/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
              private activateRoute: ActivatedRoute,
              private userService: UserService) { }

  user!: UserModel
  id!: number
  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.id = params['id']
    })
    const userReal = localStorage.getItem('user')
    if(userReal){
      this.user = JSON.parse(userReal)
      console.log(this.user)
    }

  }

  navigate(url: string){
    return this.router.navigateByUrl(url)
  }

  exit(){
    this.userService.exit();
  }
}
