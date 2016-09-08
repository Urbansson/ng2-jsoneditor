export class JsonEditorOptions {
  
  public ace: Object;
  public ajv: Object;
  public onChange: Function;
  public onEditable: Function;
  public onError: Function;
  public onModeChange: Function;
  public escapeUnicode: boolean;
  public sortObjectKeys: boolean;
  public history: boolean;
  public mode: String;
  public modes: String[];
  public name: String;
  public schema: Object;
  public search: boolean;
  public indentation: Number;
  public theme: Number;

  constructor() {
    this.escapeUnicode = false;
    this.sortObjectKeys = false;
    this.history = true;
    this.mode = 'tree';
    this.search = true;
    this.indentation = 2;
  }

}