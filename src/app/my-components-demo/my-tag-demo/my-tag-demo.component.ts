import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'my-tag-demo',
  template: `
    <div class="header">
      <h1>my-tag </h1>
      
      <h3>
        Tag
      </h3>
    </div>
    <div class="main">
      <h3>Exemplo 1</h3>
      
   
        <my-tag></my-tag>
        <my-tag text="Permitido" type="gray"></my-tag>
        <my-tag text="Permitido" type="primary"></my-tag>
        <my-tag text="Permitido" type="success"></my-tag>
        <my-tag text="Permitido" type="warning"></my-tag>
        <my-tag text="Permitido" type="danger"></my-tag>
  
        <my-tag text="Proibido" type="danger" [remove]="true"></my-tag>
    
      <pre>
          &lt;my-tag &gt;&lt;/my-tag&gt;
          &lt;my-tag text="Permitido" type="gray"&gt;&lt;/my-tag&gt;
          &lt;my-tag text="Permitido" type="primary"&gt;&lt;/my-tag&gt;
          &lt;my-tag text="Permitido" type="success"&gt;&lt;/my-tag&gt;
          &lt;my-tag text="Permitido" type="warning"&gt;&lt;/my-tag&gt;
          &lt;my-tag text="Permitido" type="danger"&gt;&lt;/my-tag&gt;
        
         &lt;my-tag text="Proibido" type="danger" [remove]="true"&gt;&lt;/my-tag&gt;
      </pre>
      
      
      
      <h3>Introdução</h3>
  
      <pre>
          MyTagModule
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
          <td>text</td>
          <td>string</td>
          <td>'Tag'</td>
          <td>Texto da Tag</td>
        </tr>
        <tr>
          <td>Tipo</td>
          <td>string</td>
          <td>Não</td>
          <td>Cor da Tag, gray primary success warning danger</td>
        </tr>
        <tr>
          <td>[remove]</td>
          <td>boolean</td>
          <td>false</td>
          <td>remove icon se é exibido</td>
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
          <td>.my-tag-box</td>
          <td>Tag</td>
          
        </tr>
       
        
    
        </tbody>
      </table>
    
    </div>
  `,
  styleUrls: ['../demo.css']
  
})
export class MyTagComponent implements OnInit {
  
  
  constructor() {
  }
  
  ngOnInit() {
  
  }
 
  
}
