import { Component, ElementRef, Input } from '@angular/core';

import { JsonEditorOptions, JsonEditorMode } from './jsoneditor.options';

declare var editor: any;
var editor = require('jsoneditor');

import 'jsoneditor/dist/jsoneditor.min.css';

@Component({
    selector: 'json-editor',
    template: `<div></div>`
})
export class JsonEditorComponent {
    private editor: any;
    private optionsDiffer: any;
    private dataDiffer: any;

    @Input('options')
    private options: JsonEditorOptions = new JsonEditorOptions();

    @Input('data')
    private data: Object = {};

    constructor(private rootElement: ElementRef) { }

    ngOnInit() {
        this.editor = new editor(this.rootElement.nativeElement, this.options, this.data);
    }

    public collapseAll() {
        this.editor.collapseAll();
    }

    public destroy() {
        this.editor.destroy();
    }

    public expandAll() {
        this.editor.expandAll();
    }

    public focus() {
        this.editor.focus();
    }

    public set(json: JSON) {
        this.editor.set(json);
    }

    public setMode(mode: JsonEditorMode) {
        this.editor.setMode(mode);
    }

    public setName(name: string) {
        this.editor.setName(name);
    }

    public setSchema(schema: any) {
        this.editor.setSchema(schema);
    }

    public get(): JSON {
        return this.editor.get();
    }

    public getMode(): JsonEditorMode {
        return this.editor.getMode() as JsonEditorMode;
    }

    public getName(): string {
        return this.editor.getName();
    }

    public getText(): string {
        return this.editor.getText();
    }


}
