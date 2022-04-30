import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { AuthAction } from './auth.action';

@Injectable()
export class AuthEffect {
    login$ = createEffect(() => this.actions$.pipe(
        // Filter the events based on the action type.
        ofType(AuthAction.login),
        // Produce a side effects
        tap(action => localStorage.setItem('user', JSON.stringify(action.user)))
    ), { dispatch: false });

    logout$ = createEffect(() => this.actions$.pipe(
        // Filter the events based on the action type.
        ofType(AuthAction.logout),
        // Produce a side effects
        tap(action => {
            localStorage.removeItem('user');
            this.router.navigateByUrl('/login');
        })
    ), { dispatch: false });

    constructor(private actions$: Actions, private router: Router) {
        // actions$.pipe(
        //     // Filter the events based on the action type.
        //     ofType(AuthAction.login),
        //     // Produce a side effects
        //     tap(action => localStorage.setItem('user', JSON.stringify(action.user)))
        // ).subscribe();

        // actions$.subscribe(action => {
        //     switch (action.type) {
        //         case '[Login] Event ⏩':
        //             localStorage.setItem('user', JSON.stringify(action['user']));
        //             break;
        //     }
        // });
    }
}
