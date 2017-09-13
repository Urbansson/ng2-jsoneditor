#  --- DEPRICATED ---

Use typings instead:

https://github.com/typings/typings

https://github.com/DefinitelyTyped/DefinitelyTyped

https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/jsoneditor

# ng2-jsoneditor 

Simple angular 2 wrapper for [jsoneditor](https://github.com/josdejong/jsoneditor)

# Usage

Install with npm
```sh
npm install --save ng2-jsoneditor
```

Import the editor module
```typescript
import { JSONEditorModule } from 'ng2-jsoneditor';
```

Include it in your root module

```typescript
@NgModule({
  imports: [
    ...
    JSONEditorModule,
    ...
  ]
})
export default class AppModule {}
```

Add the component to the template 

```html
<div>
  <json-editor [options]="editorOptions" [data]="data"></json-editor >
</div>
```

Create a component to set options and call methods on the jsoneditor
```typescript
import { Component, ViewChild } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ng2-jsoneditor';

@Component({
  ...
})
export class DetailComponent {
  public editorOptions: JsonEditorOptions;

  public data: any = {
    ...
  }
  
  @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;
  
  constructor(...) {
    this.editorOptions = new JsonEditorOptions();
  }
  
  public setTreeMode() {
    this.editor.setMode('tree');
  }
}
```

See  jsonmodel's [api](https://github.com/josdejong/jsoneditor/blob/master/docs/api.md) docs for more detailed usage.

If you are building with webpack you also need to add this to your webpack config due to some warnings coming from ajv see 
[#117](https://github.com/epoberezkin/ajv/issues/117).
```javascript
plugins: [
  new webpack.IgnorePlugin(/regenerator|nodent|js-beautify/, /ajv/),
  ...
]
```
