import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'third-homework';
  arrOfStr: string[] = ['Paragraph 1', 'Paragraph 2', 'Paragraph 3', 'Paragraph 4'];
  template = 'Template is empty';
  selectedColor = 'lightgray';
  isVisible = true;
  test1 = 'Hi';
  test2 = 'Test all pipes';

  getContent(str: string) {
    this.template = str;
  }

  onColorChange(color: string) {
    this.selectedColor = color;
  }

  deleteElem() {
    this.isVisible = false;
  }

  test() {
    this.test2 = 'Event test';
  }
}
