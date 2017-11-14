/* tslint: disable */
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgColorModule } from 'ng-color';

@Component({
    selector: 'app-root',
    template: `
        <div>
            <h1>Hello {{name}}</h1>
            <h2>Style 1</h2>
            <h3>ng-color-basic</h3>
            <h4>Using startHex</h4>
            <ng-color-basic (colorChange)="colorChange($event)" [(ngModel)]="dench" startHex="DEADBF"></ng-color-basic>
            <div [style.background-color]="hexColor">Output Color: {{hexColor}}</div>
            {{color | json}}
            {{dench | json}}

            <h4>Not using startHex</h4>
            <ng-color-basic></ng-color-basic>

            <h2>Style 2</h2>
            <h3>ng-color-basic-preview</h3>
            <h4>Using startHex</h4>
            <ng-color-basic-preview (colorChange)="colorChange2($event)" [(ngModel)]="dench2" startHex="23bf26"></ng-color-basic-preview>
            {{color2 | json}}
            {{dench2 | json}}

            <ng-color-circle></ng-color-circle>

        </div>
    `,
})
export class AppComponent {
    public name: string;
    public color: ColorOutput;
    public color2: ColorOutput;
    public dench: any;
    public dench2: any;

    constructor() {
        this.name = 'Angular2';
    }

    public colorChange(color: ColorOutput): void {
        this.color = color;
    }

    public colorChange2(color: ColorOutput): void {
        this.color2 = color;
    }

    public get hexColor(): string {
        if (this.color === undefined) {
            return '';
        }
        return this.color.hexString;
    }
}

@NgModule({
    imports: [BrowserModule, NgColorModule, FormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
