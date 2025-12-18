import { Component } from '@angular/core';

@Component({
  selector: 'app-attach-nfe',
  imports: [],
  templateUrl: './attach-nfe.component.html',
  styleUrl: './attach-nfe.component.css',
})
export class AttachNfeComponent {

  onClickFileInput() {
    document.getElementById('fileInput')?.click();
  }

}
