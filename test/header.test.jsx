import React from 'react';
import Header from '../src/components/Header';

describe('Header', () => {
  it('Displays title', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find('h1').first().text()).toEqual('Bossa');
  });
});
