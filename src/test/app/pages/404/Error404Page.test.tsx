import renderer from 'react-test-renderer';
import ErrorPage from '../../../../app/pages/404/Error404Page';

it('renders correctly', () => {
  const render = renderer.create(<ErrorPage></ErrorPage>).toJSON();
  expect(render).toMatchSnapshot();
}); 