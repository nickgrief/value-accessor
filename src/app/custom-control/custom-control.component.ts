import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-control',
  template: `
    <label for="cfc">Custom Form Control: </label>
    <input
      (ngModelChange)="onChange()"
      (blur)="onTouch()"
      [(ngModel)]="value"
      type="text"
      id="cfc" />
  `,
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomControlComponent),
      multi: true,
    },
  ],
})
export class CustomControlComponent implements ControlValueAccessor {
  val = '';
  onChange: any = () => {};
  onTouch: any = () => {};
  set value(val: string) {
    this.val = val;
    this.onChange(val);
    this.onTouch(val);
  }
  writeValue(value: any) {
    this.value = value;
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
}
