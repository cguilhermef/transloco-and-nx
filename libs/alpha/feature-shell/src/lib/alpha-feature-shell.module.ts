import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        children: [
          {
            path: 'lorem',
            loadChildren: () =>
              import('@transloco-and-nx/alpha/feature-lorem').then(
                (m) => m.AlphaFeatureLoremModule
              ),
          },
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'lorem',
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AlphaFeatureShellModule {}
