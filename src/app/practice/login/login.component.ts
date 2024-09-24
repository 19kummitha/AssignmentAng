import { Component } from "@angular/core";

@Component({
    selector:'app-login',
    templateUrl:'./login.component.html',
    styles:'./login.component.css'
})

export class LoginComponent{
    model:any={};
    onSubmit(){
        console.log('Form Submitted', this.model);
    }
}