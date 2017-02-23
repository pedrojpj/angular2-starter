import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule } from '@angular/router';

import { rootReducer } from './reducers';
import { routes } from './app.routes';

export const APP_IMPORTS: Array<any> = [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(rootReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
        maxAge: 5
    }),
    RouterModule.forRoot(routes)
];
