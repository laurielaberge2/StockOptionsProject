import React from 'react';
import { render } from '@testing-library/react-native';

import Index from '../index';
import { TestIds } from '../../constants/test-ids.constants';

describe('<HomeScreen />', () => {
    test('renders HomePage component', () => {
        const { getByTestId } = render(<Index />);

        getByTestId(TestIds.SEARCHBAR);
    });
});