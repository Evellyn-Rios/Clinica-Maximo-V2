import { Component } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.scss']
})
export class DocComponent {
  constructor(
  
    private navigation: NavigationService,
    
    
  ) {}

  back(): void {
    this.navigation.back();
  }
  
}