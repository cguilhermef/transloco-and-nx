import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphaFeatureLoremComponent } from './alpha-feature-lorem';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: AlphaFeatureLoremComponent,
      },
    ]),
  ],
  exports: [RouterModule],
  declarations: [AlphaFeatureLoremComponent],
})
export class AlphaFeatureLoremModule {}
