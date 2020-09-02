import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'angular-social-authentification';
  user: SocialUser;
  loggedIn: boolean;
  
  constructor(private authService: SocialAuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  public GoogleLogin(){
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  public FacebookLogin(){
    console.log("Facebook login");
  }

  public SignOut(): void {
    this.authService.signOut();
  }

}
