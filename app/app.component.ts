import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <kendo-splitter orientation="vertical" style="height: 340px;">
 <kendo-splitter-pane size="100px">
          <div class="pane-content">
           <table style="width:100%">
           <tr>
           <td align="left">Logo</td>
           <td align="center">Menu</td>
            <td align="right">Logout</td>
           </tr></table>
            
          </div>
        </kendo-splitter-pane>
        <kendo-splitter-pane>
          <kendo-splitter>

            <kendo-splitter-pane [collapsible]="true" size="30%">
              <div class="pane-content">
                <h3>state</h3>
                <h3>City</h3>
              </div>
            </kendo-splitter-pane>

            <kendo-splitter-pane>
              <div class="pane-content">
                <h3>Parameters</h3>
               
              </div>
            </kendo-splitter-pane>

            <kendo-splitter-pane [collapsible]="true" size="30%">
              <div class="pane-content">
                <h3>Advertisment</h3>
               
              </div>
            </kendo-splitter-pane>

          </kendo-splitter>
        </kendo-splitter-pane>

       
    `,
  styles: [ `
      .pane-content { padding: 0 10px; }
      h3 { font-size: 1.2em; margin: 10px 0; padding: 0; }
      p { margin: 0; padding: 0; }
  ` ]
})
export class AppComponent {}
