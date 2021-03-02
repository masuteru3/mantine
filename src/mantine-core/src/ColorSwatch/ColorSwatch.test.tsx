import React from 'react';
import { shallow } from 'enzyme';
import {
  isHasComposableAttribute,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
} from '@mantine/tests';
import { ColorSwatch } from './ColorSwatch';

describe('@mantine/core/ColorSwatch', () => {
  itSupportsOthers(ColorSwatch, { color: '#fff' });
  itSupportsClassName(ColorSwatch, { color: '#fff' });
  itSupportsStyle(ColorSwatch, { color: '#fff' });
  isHasComposableAttribute(ColorSwatch, { color: '#fff' });

  it('has correct displayName', () => {
    expect(ColorSwatch.displayName).toEqual('@mantine/core/ColorSwatch');
  });

  it('sets correct width, height and border-radius based on size property', () => {
    const element = shallow(<ColorSwatch size={51} color="red" />).render();
    expect(element.css('width')).toBe('51px');
    expect(element.css('height')).toBe('51px');
    expect(element.css('border-radius')).toBe('51px');
  });

  it('sets correct background-color based on color property', () => {
    const element = shallow(<ColorSwatch color="red" />).render();
    expect(element.css('background-color')).toBe('red');
  });

  it('allows size and color props override with style property', () => {
    const element = shallow(
      <ColorSwatch
        color="red"
        size={51}
        style={{ width: 41, height: 41, backgroundColor: 'blue' }}
      />
    ).render();

    expect(element.css('width')).toBe('41px');
    expect(element.css('height')).toBe('41px');
    expect(element.css('border-radius')).toBe('51px');
    expect(element.css('background-color')).toBe('blue');
  });
});
