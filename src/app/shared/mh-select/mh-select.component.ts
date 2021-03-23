import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-mh-select',
  templateUrl: './mh-select.component.html',
  styleUrls: ['./mh-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MhSelectComponent), // replace name as appropriate
      multi: true,
    },
  ],
})
export class MhSelectComponent implements OnInit, ControlValueAccessor {
  @Input() isCurrency = false;
  @Input() bindLabel: string;
  @Input() bindValue: string;
  @Input() options: any[];

  value;

  onChange: any = () => {};
  onTouched = () => {};

  constructor() {}

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {}

  onSelect(value) {
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }
}
