import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { MemberAddressesRepositoryService } from '../services';
import { createMemberAddresss, createMemberAddresssSuccess, loadAllMemberAddressess, loadAllMemberAddressessSuccess } from './actions';

@Injectable({
  providedIn: 'root'
})
export class MemberAddressesEffectsService {

  constructor(
    private readonly actions$: Actions,
    private readonly repo: MemberAddressesRepositoryService) { }

  create$ = createEffect(
    () => this.actions$.pipe(
      ofType(createMemberAddresss),
      mergeMap(act =>
        this.repo.create$(act.adr).pipe(
          map(entry => {
            return createMemberAddresssSuccess({
              adr: entry
            });
          })
        ))
    )
  );

  loadAll$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadAllMemberAddressess),
      mergeMap(() => this.repo.loadAll$().pipe(
        map(entries => loadAllMemberAddressessSuccess({
          addresses: entries
        }))
      ))
    )
  );
}
