import { render } from '@testing-library/react';
import App from '../../src/App';

// TDD = TEST DRIVEN DEVELOPMENT

// NO TESTS = NO CODE

/*
while (!done()) {
  red()
  green()
  refactor()
}
*/

describe('<App />', () => {
  it('displays 2 converter components', () => {
    const { getByLabelText } = render(<App />)
    expect(() => {
      getByLabelText(/arabic/i) && getByLabelText(/roman/i)
    }).not.toThrow();
  });
});