import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isActive: boolean = true;
  buttonText: string = 'Iniciar sesión';

  @Output() statusChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleStatus() {
    this.isActive = !this.isActive;
    this.statusChanged.emit(this.isActive);
    this.buttonText = 'dherreto';
  }

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
