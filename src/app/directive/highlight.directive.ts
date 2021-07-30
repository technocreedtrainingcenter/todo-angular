import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[highlight]',
})
export class HighlightDirective {
    @Input() highlight = 'yellow';

    @Input() text = ''

    // @Input() highlightColor = 'yellow'

    @HostListener('mouseenter') mouseEnter() {
        // alert('mouseenter')
        // if (this.highlight == '') {
        //     this.highlight = 'yellow'
        // }
        (this.el.nativeElement as HTMLElement).style.backgroundColor = this.highlight;
        (this.el.nativeElement as HTMLElement).innerText = this.text;

    }

    @HostListener('mouseout') avinash() {
        // alert('mouseout')
        (this.el.nativeElement as HTMLElement).style.backgroundColor = '';
    }   

    constructor(private el: ElementRef<any>) { 
        // console.log('el', this.el)
    //    ( this.el.nativeElement as HTMLElement).style.color = 'red'
    }
}





