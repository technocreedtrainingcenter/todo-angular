import { Component } from "@angular/core";

@Component({
    selector: 'app-navbar',
    // template: `<h1> This is a navbar</h1>
    // <h2>Suheading</h2>`
    templateUrl: './navbar.component.html',
    // styles: ['.heading{ color: red}'],
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
    appName = 'TODO';

    heading = 'This is Heading'

    controlType = 'text';

    isDisabled = false;

    name: string = '';

    getSubHeading() {
        return 'This is subheading'
    }

    OnButtonClick(name: string) {
        alert(name)
    }

}
