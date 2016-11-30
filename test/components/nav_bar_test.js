import { renderComponent , expect } from '../test_helper';
import NavBar from '../../src/components/nav_bar';

describe('Navbar' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(NavBar);
  });

  it('renders NavBar', () => {
    expect(component).to.exist;
  });

  it('has class navbar', () => {
      expect(component).to.have.class('navbar');
  });

  describe('Tabs', () => {

      it('Home', () => {
          expect(component).to.contain('Home');
      });
      it('Contact', () => {
          expect(component).to.contain('Contact');
      });
      it('About', () => {
          expect(component).to.contain('About');
      });
      it('Projects', () => {
          expect(component).to.contain('Projects');
      });
  });
});
