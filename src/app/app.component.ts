import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { LentesdesolComponent } from "./lentesdesol/lentesdesol.component";
import { NosotrosComponent } from './nosotros/nosotros.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormsModule } from '@angular/forms';
import { ComprasComponent } from './compras/compras.component';
import { HttpClientModule } from '@angular/common/http';







@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet,
        RouterModule,
        FormsModule,
        LentesdesolComponent,
        NosotrosComponent,
        InicioComponent,
        ContactoComponent,
        ComprasComponent,
        HttpClientModule,
        
     
      ]

    
})

export class AppComponent {

  title = 'Optica Marcolongo';

}



  
