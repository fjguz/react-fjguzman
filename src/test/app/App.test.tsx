import renderer from 'react-test-renderer';
import App from '../../app/App';


it('renders correctly', () => {
  const render = renderer.create(<App></App>).toJSON();
  expect(render).toMatchSnapshot();
}); 