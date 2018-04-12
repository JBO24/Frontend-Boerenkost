import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SuggestionComponent} from './suggestion/suggestion.component';

const appRoutes : Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'suggestion',
    component: SuggestionComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
