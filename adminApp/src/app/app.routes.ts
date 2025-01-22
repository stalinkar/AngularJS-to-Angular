import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    { path: 'admin', component: AdminComponent },
    { path: '**', redirectTo: 'admin' }
];