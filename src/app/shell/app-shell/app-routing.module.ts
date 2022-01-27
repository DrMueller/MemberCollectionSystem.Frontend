import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/member-addresses/overview',
    pathMatch: 'full'
  },
  {
    path: 'member-addresses',
    loadChildren: () => import('../../areas/member-addresses/member-addresses.module').then(m => m.MemberAddressesModule)
  },
  {
    path: 'qr-code',
    loadChildren: () => import('../../areas/qr-code/qr-code.module').then(m => m.QrCodeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
