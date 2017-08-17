import { Component, OnInit, Inject, ViewContainerRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from '../../services/toastr.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title: string = 'Blur';
  profile: any;
  userInfo: any;
  username: string;

  constructor(private auth: AuthService, 
              private toastrService: ToastrService,
              public toastr: ToastsManager, 
              vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);

    this.auth.userProfile.subscribe(
      profile => { 
        this.profile = profile;
        if (this.auth.isAuthenticated()) {
          const msg = `${this.profile.name} is logged in.`
          this.toastrService.showSuccess(msg);
        }
      }
    );
  }

  ngOnInit() {
  }

  login(): void {
    this.auth.login();
  }

  logout(): void {
    this.auth.logout();
  }

}
