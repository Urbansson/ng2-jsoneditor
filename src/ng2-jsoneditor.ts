import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonEditorComponent } from './jsoneditor.component';

export * from './jsoneditor.component';
export * from './jsoneditor.options';

@NgModule({
    imports: [CommonModule],
    declarations: [
        JsonEditorComponent
    ],
    exports: [JsonEditorComponent]
})
export class JSONEditorModule { }
