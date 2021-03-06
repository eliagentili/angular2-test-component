import {Component} from 'angular2/core';

@Component({
  selector: 'bootstrap-login-form',
  styles: [`
    h1 {
      color: blue;
    }
  `],
  template: `<form class="form-inline">
                <div class="form-group">
                  <label class="sr-only" for="exampleInputEmail3">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail3" placeholder="Email">
                </div>
                <div class="form-group">
                  <label class="sr-only" for="exampleInputPassword3">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword3" placeholder="Password">
                </div>
                <div class="checkbox">
                  <label>
                    <input type="checkbox"> Remember me
                  </label>
                </div>
                <button type="submit" class="btn btn-default" (click)="onClick()>{{ message }}</button>
              </form>`
})

export class BootstrapLoginForm {

  message = "Sign in";

  onClick() {
    this.message = "Logged!";
    console.log(this.message);
  }
}