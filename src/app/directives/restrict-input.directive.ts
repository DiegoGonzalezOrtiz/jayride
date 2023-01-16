import { Directive, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[restrictInput]',
})

export class RestrictInputDirective {


    regex = /[^0-9\.]/g;

    constructor(private control: NgControl) { }

    @HostListener('input', ['$event.target.value'])
    onInput(value: string): void {
        this.control.control?.patchValue(value.replace(this.regex, ''));
    }
}
