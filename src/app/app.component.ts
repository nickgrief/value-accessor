import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <div class="wrapper">
      <header>
        <h1>Control Value Accessor Example</h1>
        <p>
          Control value accessor allows us to create new form components that
          will be able to be used in Angular's native forms.
        </p>
        <p>
          What we need is to add ControlValueAccessor interface to our custom
          form component and implement it's methods.
        </p>
        <h3>ControlValueAccessor methods:</h3>
        <ul>
          <li>writeValue(obj: any): void</li>
          <li>registerOnChange(fn: any): void</li>
          <li>registerOnTouched(fn: any): void</li>
          <li>setDisabledState(isDisabled: boolean)?: void</li>
        </ul>
      </header>
      <main>
        <h2>The Main Part</h2>
        <div>
          <h3>Example</h3>
          <app-custom-control [formControl]="customForm"></app-custom-control>
          <button type="button" (click)="onGetValue()">Get value!</button>
          <p>{{ formInfo }}</p>
        </div>
        <div>
          <h3>Code</h3>
          <p>You can find all the code in the <a href="">github repo</a>.</p>
        </div>
      </main>
      <footer>
        <h2>Conclusion</h2>
        <p>
          We've got a custom made control component working with angular's form
          control module! This allows us to make any kind of control type and
          use it just like other native elements.
        </p>
      </footer>
    </div>
  `,
  styles: [
    `
      .wrapper {
        width: 720px;
        margin: auto;
        font-family: sans;
        font-size: 20px;
      }
    `,
  ],
})
export class AppComponent {
  title = 'value-accessor';
  formInfo: string | null = '';

  onGetValue() {
    this.formInfo = this.customForm.value;
  }

  customForm = new FormControl('');
}
