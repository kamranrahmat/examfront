import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private snackBar:MatSnackBar) { }

  public user={
    "username":'',
    "password":'',
    "firstName":'',
    "lastName":'',
    "email":'',
    "phone":'',
    "profile":''
  }
  ngOnInit(): void {
  }

  formSubmit(){
    if(this.validateForm()){
      this.userService.addUser(this.user).subscribe(
        (data)=>{
          console.log(data);
          //this.snackBar.open("Your registration is successfully completed","",{duration:3000});
          Swal.fire(
            'Success!',
            'Your Registration is successfully completed!',
            'success'
          )
        },
        (error)=>{
          console.log(error);
          this.snackBar.open("Error in registration","",{duration:3000});
        }

      )
    }
  }
  private validateForm():boolean{
    if(this.user.username==null || this.user.username==''){
      alert("username is empty");
      return false;
    }
    if(this.user.password==null || this.user.password==''){
      alert("password is empty");
      return false;
    }
    if(this.user.email==null || this.user.email==''){
      alert("email is empty");
      return false;
    }
    if(this.user.firstName==null || this.user.firstName==''){
      alert("firstName is empty");
      return false;
    }
    if(this.user.lastName==null || this.user.lastName==''){
      alert("lastName is empty");
      return false;
    }
    if(this.user.phone==null || this.user.phone==''){
      alert("phone is empty");
      return false;
    }
    return true; 
  }
}
