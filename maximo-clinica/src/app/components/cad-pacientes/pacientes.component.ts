import { Component } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent {
  constructor(
  
    private navigation: NavigationService,
    
    
  ) {}

  back(): void {
    this.navigation.back();
  }
  
}