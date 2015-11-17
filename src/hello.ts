import {Component, bootstrap} from 'angular2/angular2';

@Component({
 	selector: 'zippy',
  	templateUrl: 'zippy.html',
  	inputs: ['title']
})
class Zippy {
	constructor(){
		this.visible = true;	
		this.list = [];
		
		for (name of Array(10)){			
    		this.list.push(faker.name.findName());
		}
		debugger
	}

	toggle(){
		this.visible = !this.visible;
	}

	
}

@Component({
    selector: 'hello-app',
    template: `
        <h1>Hello, {{name}}!</h1>
        Say hello to: <input [value]="name" (input)="name = $event.target.value">
        <zippy title="Details test">
       		loading zippy...
			<p>This is some content.</p>
        </zippy>
    `,
    directives: [Zippy]
})
export class HelloApp {
    name: string = 'World';
}


bootstrap(HelloApp);
