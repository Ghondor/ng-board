import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { SnackService } from '../services/snack.service';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private afAuth: AngularFireAuth,
    private snack: SnackService, 
  ) {}

  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const user = firebase.auth().onAuthStateChanged(function(user) {
      return user;
    });
    const isLoggedIn = !!user;
    if (!isLoggedIn) {
      this.snack.authError('You must be logged in.');
    }
    return isLoggedIn;
  }
}
