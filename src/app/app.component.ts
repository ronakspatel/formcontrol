import { Component } from '@angular/core';

export type EditorType = 'instance' | 'formBuilder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editor: EditorType = 'instance';

  get showInstance() {
    return this.editor === 'instance';
  }

  get showFormBuilder() {
    return this.editor === 'formBuilder';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
