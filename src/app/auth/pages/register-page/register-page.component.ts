import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  private authService = inject( AuthService );

  public user = computed( () => this.authService.currentUser() ) 

  /* get User() {
    return this.authService.currentUser();
  } */

}
