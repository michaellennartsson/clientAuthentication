import { renderComponent, expect } from '../test_helper';
import Pong from '../../src/components/pong';

describe('Pong', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(Pong);
    });

    it('renders Pong', () => {
        expect(component).to.exists;
    });
});