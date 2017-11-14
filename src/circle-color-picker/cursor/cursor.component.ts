import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

import { Vector } from '../../vector';

@Component({
    selector: 'app-cursor',
    template: `
        <div class="cursor" [style.left.px]="position?.x" [style.top.px]="position?.y" [ngClass]="{'double-axis': bothAxis, 'single-axis': bothAxis === false}"></div>
    `,
    styles: [`
        .cursor {
            cursor: pointer;
            position: relative;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            box-shadow: 0px 0px 0px 2px #222 inset;
        }

        .single-axis {
            transform: translate(-10px, 0px);            
        }

        .double-axis {
            transform: translate(-10px, -10px);
        }
    `],
})
export class CursorComponent {
    @Input() public position: Vector;
    @Input() public bothAxis: boolean;

    constructor(private sanitizer: DomSanitizer) {
        this.bothAxis = false;
    }
}
