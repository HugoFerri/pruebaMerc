import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Variable para almacenar el estado recibido desde el hijo
  isChildActive: boolean = true;
  
  // Método para manejar el evento que emite el hijo
  onStatusChanged(status: boolean) {
    this.isChildActive = status;  // Actualizamos el estado según el valor recibido del hijo
  }
}
