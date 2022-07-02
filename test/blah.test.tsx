import React from 'react'
import { configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import { SyButton } from '../src/components/button/SyButton'

configure({ adapter: new Adapter() })

describe('SyButton', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<SyButton/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
})