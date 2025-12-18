import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-attach-nfe',
  imports: [],
  templateUrl: './attach-nfe.component.html',
  styleUrl: './attach-nfe.component.css',
})
export class AttachNfeComponent {

  files = signal<File[]>([]);
  percentage = signal<number>(0);

  onClickIntegrar() {
    this.percentage.set(0);
    const interval = setInterval(() => {
      this.percentage.update(value => {
        if (value >= 100) {
          clearInterval(interval);
          return 100;
        }
        return value + 10;
      });
    }, 500);
  }

  onRemoveFile(index: number) {
    const currentFiles = this.files();
    currentFiles.splice(index, 1);
  }

  onClickFileInput() {
    document.getElementById('fileInput')?.click();
  }

  onChangeFileInput(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const fileArray = Array.from(input.files);
      this.files.set(fileArray);
    }
  }
}
