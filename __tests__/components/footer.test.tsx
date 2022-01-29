import { shallow, ShallowWrapper } from 'enzyme';
import Image from 'next/image';

import { Footer, Layout } from '../../src/components';
import {
  BottomWrapper,
  FooterBottom,
} from '../../src/components/Footer/styles';

describe('Footer must to be rendered correctly', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<Footer />);
  });

  it('must to be footer', () => {
    expect(component.find('footer')).toHaveLength(1);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });

  it('must to be layouts', () => {
    expect(component.find(Layout)).toHaveLength(2);
  });

  it('must to be FooterBottom', () => {
    expect(component.find(FooterBottom)).toHaveLength(1);
  });

  it('must to be BottomWrapper', () => {
    expect(component.find(BottomWrapper)).toHaveLength(1);
  });

  it('must to be Image', () => {
    expect(component.find(Image)).toHaveLength(1);
  });
});
