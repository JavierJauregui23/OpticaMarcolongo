import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LentesdesolComponent } from './lentesdesol/lentesdesol.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';


export const routes: Routes = [
    { path: '', component: InicioComponent},
    { path: 'inicio', component: InicioComponent},
    { path: 'lentesdesol', component: LentesdesolComponent},
    { path: 'contacto', component: ContactoComponent},
    { path: 'nosotros', component: NosotrosComponent}
    
];
