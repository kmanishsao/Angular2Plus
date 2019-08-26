// import { Effect, Actions } from "@ngrx/effects";
// import { Injectable, HttpClient } from "@angular/core";
// import { Observable } from "rxjs";

// @Injectable() 
// export class mainEffects {

//     constructor(private action$: Actions,private http:HttpClient) {
      
//     }

//     @Effect()
//     update$ = this.action$.pipe(ofType("List"),
//     switchMap(() => {
//         return this.http.get<string>('login').pipe(map(userName)=> {
//             return new authActions.SetAuths(userName);
//         })
//     }) );
// }