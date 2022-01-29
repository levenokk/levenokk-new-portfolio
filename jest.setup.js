import '@testing-library/jest-dom/extend-expect';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock('next/image', () => ({
  __esModule: true,
  default: () => {
    return 'Next image stub'; // whatever
  },
}));
