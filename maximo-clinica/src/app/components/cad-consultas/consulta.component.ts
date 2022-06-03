import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  constructor(
    private router: Router
) { }

ngOnInit() {

}

goToPacientes() {
    this.router.navigate(['/pacientes']);
}


}