import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use 'describe' to group together similar tests
describe('App Component', () => {

	// Use 'it' to test a single attribute of a target
	it('shows the the correct text', () => {
		
		// create an instance of App
		const component = renderComponent(App);

		// Use 'expect' to make an 'assertion' about a target
		expect(component).to.contain('React simple starter');	

	});

	it('should be a object', () => {
		
		// create an instance of App
		const component = renderComponent(App);

		// Use 'expect' to make an 'assertion' about a target
		expect(component).to.be.a('object');	

	});

});

