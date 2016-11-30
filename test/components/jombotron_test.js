import { renderComponent , expect } from '../test_helper';
import Jumbotron from '../../src/components/jumbotron';

describe('Jumbotron' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Jumbotron);
  });

  it('renders Jumbotron', () => {
    expect(component).to.exist;
  });
});
