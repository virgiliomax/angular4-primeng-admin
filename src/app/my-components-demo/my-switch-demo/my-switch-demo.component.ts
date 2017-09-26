import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'my-switch-demo',
  template: `
    <div class="header">
      <h1>my-switch </h1>
      
      <h3>
        Switch
      </h3>
    </div>
    <div class="main">
      <h3>Exemplo 1</h3>
      
      
      <my-switch checked></my-switch>
      <my-switch [checked]="false"></my-switch>
      
      <pre>
          &lt;my-switch checked&gt;&lt;/my-switch&gt;  &lt;my-switch [checked]="false"&gt;&lt;/my-switch&gt;
      </pre>
      
      <h3>Exemplo 2</h3>
      
      
      <my-switch disabled></my-switch>
      <my-switch checked [disabled]="true"></my-switch>
      
      
      <pre>
          &lt;my-switch disabled&gt;&lt;/my-switch&gt;  &lt;my-switch checked [disabled]="true"&gt;&lt;/my-switch&gt;
      </pre>
      
      <h3>Exemplo 3</h3>
      
      
      <my-switch [(ngModel)]="enable"></my-switch>
      {{enable}}
      
      
      <pre>
          &lt;my-switch [(ngModel)]="enable"&gt;&lt;/my-switch&gt;
      </pre>
      
      <h3>Exemplo 4 - evento</h3>
      
      
      <my-switch (change)="onChange()"></my-switch>
      change count {{count}}
      
      
      <pre>
          &lt;my-switch (change)="onChange()"&gt;&lt;/my-switch&gt;
      </pre>
      <h3>Exemplo 5 -onText offText</h3>
      
      
      <my-switch onText="Sim" offText="Não"></my-switch>
      
      
      <pre>
          &lt;my-switch onText="Sim" offText="Não"&gt;&lt;/my-switch&gt;   &lt;my-switch offText="Não"&gt;&lt;/my-switch&gt;
      </pre>
      
      <h3>Exemplo 6 - reverso</h3>
      
      
      <my-switch reverse></my-switch>
      
      
      <pre>
          &lt;my-switch reverse&gt;&lt;/my-switch&gt;
      </pre>
      
      <h3>Exemplo 7 - Cor</h3>
      
      
      <my-switch></my-switch>
      <my-switch color="blue"></my-switch>
      <my-switch color="red"></my-switch>
      
      
      <pre>
          &lt;my-switch &gt;&lt;/my-switch&gt;   &lt;my-switch  color="blue"&gt;&lt;/my-switch&gt;    &lt;my-switch color="red"&gt;&lt;/my-switch&gt;
      </pre>
      <h3>Exemplo 8 - switchColor</h3>
      
      
      <my-switch switchColor="red"></my-switch>
      <my-switch switchColor="blue"></my-switch>
      
      
      <pre>
          &lt;my-switch switchColor="red"&gt;&lt;/my-switch&gt;   &lt;my-switch  switchColor="blue"&gt;&lt;/my-switch&gt;
      </pre>
      
      <h3>Introdução</h3>
      
      <pre>
          MyUiSwitchComponentModule
      </pre>
      
      <h3>Propriedade</h3>
      
      <table class="dataintable">
        <tbody>
        <tr>
          <th>Nome</th>
          <th>Tipo</th>
          <th>Default</th>
          <th>Descrição</th>
        </tr>
        <tr>
          <td>checked</td>
          <td>boolean</td>
          <td>false</td>
          <td>Selecione o status</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>boolean</td>
          <td>false</td>
          <td>desativado</td>
        </tr>
        <tr>
          <td>[(ngModel)]</td>
          <td></td>
          <td></td>
          <td>binding</td>
        </tr>
        <tr>
          <td>(change)</td>
          <td></td>
          <td></td>
          <td>Evento de suporte(change)</td>
        </tr>
        <tr>
          <td>reverse</td>
          <td></td>
          <td></td>
          <td>Virar</td>
        </tr>
        <tr>
          <td>color</td>
          <td>string</td>
          <td>blue</td>
          <td>true</td>
        </tr>
        
        <tr>
          <td>switchColor</td>
          <td>string</td>
          <td>#fff</td>
          <td>Cor do Centro</td>
        </tr>
        <tr>
          <td>onText</td>
          <td>string</td>
          <td>ON</td>
          <td>Liga texto</td>
        </tr>
        <tr>
          <td>offText</td>
          <td>string</td>
          <td>OFF</td>
          <td>Desliga texto</td>
        </tr>
        
        </tbody>
      </table>
      
      <h3>Estilo</h3>
      
      <table class="dataintable">
        <tbody>
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
        </tr>
        <tr>
          <td>.switch</td>
          <td>Switch</td>
        
        </tr>
        
        
        </tbody>
      </table>
    
    </div>
  `,
  styleUrls: ['../demo.css']
  
})
export class MySwitchDemoComponent implements OnInit {
  
  
  constructor() {
  }
  
  ngOnInit() {
  
  }
  
  enable: boolean = true;
  count: number = 0;
  
  onChange() {
    this.count++;
  }
  
}
