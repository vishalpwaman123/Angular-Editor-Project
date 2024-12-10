import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxEditorModule, Toolbar, ToolbarDropdown } from 'ngx-editor'; // Import the editor module
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { Editor, NgxEditorConfig, ToolbarItem } from 'ngx-editor';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const toolbar: ToolbarItem[] = [
  'bold',
  'italic',
  'link',
  'image'
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxEditorModule, ReactiveFormsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  editor: Editor;
  inputEditor: Editor;
  html: string = '';
  inputHtml: string = '';
  title = "Hello Editor"

  // toolbar: Toolbar = [
  //   [
  //     'bold',
  //     'italic',
  //     'underline',
  //     'strike'
  //   ],
  //   [
  //     'ordered_list',
  //     'bullet_list',
  //   ],
  // ];

  toolbar: Toolbar = [
    [
      'bold',
      'italic',
      'underline',
      'strike',
      'code'
    ],
    [
      'ordered_list',
      'bullet_list',
      'link',
      'image',
      'text_color',
      'background_color'
    ],
    [
      {
        heading: ['h1', 'h2', 'h3', 'h4']
      } as ToolbarDropdown
    ],
    [
      'align_left',
      'align_center',
      'align_right',
      'align_justify'
    ],
    [
      'undo',
      'redo',
      'horizontal_rule'
    ],
    [
      {
        heading: ['h5', 'h6']
      } as ToolbarDropdown
    ],
    [
      (editorView: any) => {
        // Example of a custom menu item, you can replace this with your own functionality
        console.log('Custom menu item clicked');
        return {} as any;
      }
    ]
  ];


  constructor() { this.editor = new Editor(); this.inputEditor = new Editor(); }

  ngOnDestroy() {
    // Destroy the editor when the component is destroyed
    this.editor.destroy();
    this.inputEditor.destroy()
  }

  getEditorContent() {
    console.log(this.html);  // Access the editor content bound to `html`
    this.inputHtml = this.html
  }
}
