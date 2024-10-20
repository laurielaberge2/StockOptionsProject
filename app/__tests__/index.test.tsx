import React from 'react';
import { render } from '@testing-library/react-native';

import Index from '../index';
import { TestIds } from '../../constants/test-ids.constants';

describe('HomeScreen (Index)', () => {
    it('renders HomePage component', () => {
        const { queryByTestId } = render(<Index />);

        expect(queryByTestId(TestIds.SEARCHBAR)).toBeTruthy();
    });
});