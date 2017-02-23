import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
    NgModule,
    ApplicationRef,
    ErrorHandler
} from '@angular/core';
import {
    removeNgStyles,
    createNewHosts,
    createInputTransfer
} from '@angularclass/hmr';
import {
    RouterModule,
    PreloadAllModules

} from '@angular/router';

type StoreType = {
    state: InternalStateType,
    restoreInputValues: () => void,
    disposeOldHosts: () => void
};

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
// App is our top level component
import { AppComponent } from './app.component';
import { provideStore, StoreModule, Store } from '@ngrx/store';

import { APP_PROVIDERS } from './app.providers';
import { APP_IMPORTS } from './app.imports';
import { AppState, InternalStateType } from './app.service';
import { counter } from './app.actions';

import { ErrorService } from './services';

import { HomeComponent, CounterComponent, NavigationComponent, FooterComponent, ErrorComponent } from './components';

import '../assets/sass/general.scss';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        CounterComponent,
        HomeComponent,
        FooterComponent,
        NavigationComponent,
        ErrorComponent
    ],
    imports: [
        APP_IMPORTS
    ],
    providers: [
        ENV_PROVIDERS,
        APP_PROVIDERS,
        AppState,
        {
            provide: ErrorHandler, useClass: ErrorService
        }
    ]
})
export class AppModule {

    constructor(
        public appRef: ApplicationRef,
        public appState: AppState
    ) { }

    public hmrOnInit(store: StoreType) {
        if (!store || !store.state) {
            return;
        }
        console.log('HMR store', JSON.stringify(store, null, 2));
        // set state
        this.appState._state = store.state;
        // set input values
        if ('restoreInputValues' in store) {
            let restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }

        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    }

    public hmrOnDestroy(store: StoreType) {
        const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
        // save state
        const state = this.appState._state;
        store.state = state;
        // recreate root elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // save input values
        store.restoreInputValues = createInputTransfer();
        // remove styles
        removeNgStyles();
    }

    public hmrAfterDestroy(store: StoreType) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }
}
