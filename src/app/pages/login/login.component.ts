import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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
  constructor(private snack:MatSnackBar,private loginService:LoginService,private router:Router) { }

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
            if(this.loginService.getUserRole()=='ADMIN'){
              //window.location.href='/admin'//magar windows.location sare component reload kr de ga yahan router b use ho sakta tha
              this.router.navigate(['admin']);
            }
            else if(this.loginService.getUserRole()=='NORMAL'){
              window.location.href='/user-dashboard'//magar windows.location sare component reload kr de ga yahan router b use ho sakta tha
              this.router.navigate(['user-dashboard'])
            }
            else{
              this.loginService.logout();

            }

          }
          

        );

      },
      (error)=>{
        console.log(error);
      }

    );
  }
}
