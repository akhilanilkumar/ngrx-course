import { tap } from 'rxjs/operators';
import { select } from '@ngrx/store';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from './reducers';
import { isLoggedIn } from './auth.selector';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private sotre: Store<AuthState>) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.sotre.pipe(
            select(isLoggedIn),
            tap(loggedIn => {
                if (!loggedIn) {
                    this.router.navigateByUrl('/login');
                }
            })
        );
    }

}
