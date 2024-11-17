import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Home/home.component';
import { ProxiesComponent } from './Proxy/proxies/proxies.component';



export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'proxy', component: ProxiesComponent },
  ];
