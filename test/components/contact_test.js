import { renderComponent , expect } from '../test_helper';
import Contact from '../../src/components/contact';

describe ('Contact' , () => {
    let component;

    beforeEach(() => {
        component = renderComponent(Contact);
    });

    it('renders Contact', () => {
        expect(component).to.exist;
    });
});