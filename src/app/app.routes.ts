import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        pathMatch: 'full',
        loadComponent:()=> {
            return import('./home/home.component').then((m) => m.HomeComponent);
        },
    },
    {
        path:'grid-one',
        loadComponent:()=> {
            return import('./components/grid-one/grid-one.component').then((m) => m.GridOneComponent);
        },
    },
    {
        path:'grid-two',
        loadComponent:()=> {
            return import('./components/grid-two/grid-two.component').then((m) => m.GridTwoComponent);
        },
    },
    {
        path:'grid-three',
        loadComponent:()=> {
            return import('./components/grid-three/grid-three.component').then((m) => m.GridThreeComponent);
        },
    },
    {
        path:'grid-four',
        loadComponent:()=> {
            return import('./components/grid-four/grid-four.component').then((m) => m.GridFourComponent);
        },
    },
    {
        path:'bluetooths',
        loadComponent:()=> {
            return import('./components/bluetooths/bluetooths.component').then((m) => m.BluetoothsComponent);
        },
    },
    {
        path:'bluetooth',
        loadComponent:()=> {
            return import('./components/bluetooth/bluetooth.component').then((m) => m.BluetoothComponent);
        },
    },
    {
        path:'bluetooth-troubleshoot',
        loadComponent:()=> {
            return import('./components/bluetooth-troubleshoot/bluetooth-troubleshoot.component').then((m) => m.BluetoothTroubleshootComponent);
        },
    }
];
