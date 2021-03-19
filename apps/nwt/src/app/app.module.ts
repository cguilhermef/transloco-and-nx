import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        children: [
          {
            path: 'alpha',
            loadChildren: () =>
              import('@transloco-and-nx/alpha/feature-shell').then(
                (m) => m.AlphaFeatureShellModule
              ),
          },
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'alpha',
          },
        ],
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
