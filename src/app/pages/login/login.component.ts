import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData={
    username:'',
    password:''
  }
  constructor(private snack:MatSnackBar,private loginService:LoginService) { }

  ngOnInit(): void {
  }
  submitLogin(){
    if(this.loginData.username.trim()=='' || this.loginData.username==null){
      this.snack.open('username is requird !!','',{duration:3000});
      return
    }
    if(this.loginData.password.trim()=='' || this.loginData.password==null){
      this.snack.open('password is requird !!','',{duration:3000});
      return
    }

    //call generate token service
    this.loginService.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log(data);
        this.loginService.loginUser(data.token);

        this.loginService.getCurrentUser().subscribe(
          (user:any)=>{
            this.loginService.setUser(user);
            console.log(user);
            //redirect

          }
          

        );

      },
      (error)=>{
        console.log(error);
      }

    );
  }
}
