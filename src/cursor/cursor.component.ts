import { Component, Input, forwardRef, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
    selector: 'cursor',
    template: `
        <div class="cursor" [style]="calcTransform()"></div>
    `,
    styles: [`
        .cursor {
            cursor: default;
            position: relative;
            border-radius: 50%;
            width: 16px;
            height: 16px;
            border: #222 solid 2px;
        }
    `],
})
export class CursorComponent {
    @Input() public position: Vector;
    @Input() public bothAxis: boolean;

    constructor(private sanitizer: DomSanitizer) {
        this.position = {
            x: 0,
            y: 0,
        }
        this.bothAxis = false;
    }

    public calcTransform(): SafeStyle {
        let offset = 0;

        if(this.bothAxis) {
            offset = -8;
        }
        return this.sanitizer.bypassSecurityTrustStyle(`left: ${this.position.x}px; top: ${this.position.y}px; transform: translate(-8px, ${offset}px);`);
    }
}
