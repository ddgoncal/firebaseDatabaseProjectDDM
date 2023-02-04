//Add test for details screen
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Details from '../../screens/Details';

describe('Details', () => {
  it('should render correctly', () => {
    const { toJSON } = render(<Details />);
    expect(toJSON()).toMatchSnapshot();
  });
});
