import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { routerNavigatedAction } from '@ngrx/router-store';
import { select, Store } from '@ngrx/store';
import { filter, map, mergeMap, tap } from 'rxjs';
import { IAppState, selectRouteParam } from 'src/app/shell/app-state';
import { MemberAddressesState, selectCurrentAddress } from '.';
import { MemberAddressesRepositoryService } from '../services';
import { upsertMemberAddress, upsertMemberAddressSuccess, loadAllMemberAddressess, loadAllMemberAddressessSuccess, loadMemberAddress, loadMemberAddressSuccess, setCurrentMemberAddressId } from './actions';

@Injectable({
  providedIn: 'root'
})
export class MemberAddressesEffectsService {

  constructor(
    private readonly actions$: Actions,
    private readonly repo: MemberAddressesRepositoryService,
    private readonly appStore$: Store<IAppState>,
    private readonly memAdrStore$: Store<MemberAddressesState>) { }

  create$ = createEffect(
    () => this.actions$.pipe(
      ofType(upsertMemberAddress),
      mergeMap(act =>
        this.repo.upsert$(act.adr).pipe(
          map(entry => {
            return upsertMemberAddressSuccess({
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

  setCurrentMemberAddressId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(routerNavigatedAction),
      mergeMap(() => this.appStore$.pipe(select(selectRouteParam('memberAddressId'))).pipe(
        map(val => setCurrentMemberAddressId({
          id: val ? parseInt(val) : undefined
        }))
      ))
    )
  );

  loadCurrentAddressIfNotExisting = createEffect(() =>
    this.actions$.pipe(
      ofType(setCurrentMemberAddressId),
      map(f => f.id),
      filter(id => id !== undefined),
      filter(id => id != -1),
      mergeMap(id => this.memAdrStore$.pipe(select(selectCurrentAddress)).pipe(
        filter(f => !f),
        map(() => loadMemberAddress({
          id: id!
        }))
      ))
    )
  );

  loadSingle$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadMemberAddress),
      mergeMap(act => this.repo.load$(act.id).pipe(
        map(entry => loadMemberAddressSuccess({
          address: entry
        }))
      ))
    )
  );
}


