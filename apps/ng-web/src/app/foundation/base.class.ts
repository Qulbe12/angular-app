import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => {
  console.log('noop called');
};

export const generateValueAccessor = (t: any) => {

  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => t),
    multi: true
  }
}

@Component({ template: "" })
export class BaseComponent<T> implements ControlValueAccessor {

  //The internal data model
  private innerValue: any = ''




  //Placeholders for the callbacks which are later provided
  //by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  //get accessor
  get value(): T {
    return this.innerValue;
  }

  //set accessor including call the onchange callback
  set value(v: T) {
    //  if (v !== this.innerValue) {
    this.innerValue = v;
    this.onChangeCallback(v);
    //  }
  }

  //Set touched on blur
  onBlur() {
    this.onTouchedCallback();
  }
  //From ControlValueAccessor interface
  writeValue(value: T) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }


}
