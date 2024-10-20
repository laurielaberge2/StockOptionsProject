import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import { TestIds } from '../../constants/test-ids.constants';
import HomePage from '../home-page.screen';

describe('HomePage', () => {
    it('renders searchbar component', () => {
        const { queryByTestId } = render(<HomePage />);

        expect(queryByTestId(TestIds.SEARCHBAR)).toBeTruthy();
    });

    it('searchbar has placeholder with style', () => {
        const { getByTestId } = render(<HomePage />);

        const searchbar = getByTestId(TestIds.SEARCHBAR);

        expect(searchbar.props.placeholder).toEqual("Enter a stock option");

        expect(searchbar.props.style).toEqual({
            "color": "#242424",
            "flex": 1,
            "fontSize": 18,
            "marginLeft": 24,
            "marginRight": 8,
            "minHeight": 40,
        });
    });

    it('renders SocialMediaList component', () => {
        const { queryByTestId } = render(<HomePage />);

        const list = queryByTestId(TestIds.SOCIAL_MEDIA_LIST);

        expect(list).toBeTruthy();
    });

    it('renders StockOptionResult component', () => {
        const { queryByText } = render(<HomePage />);

        const result = queryByText("Search a stock option for more information");

        expect(result).toBeTruthy();
    });

    it('value change in searchbar sets stock option value', () => {
        const { getByTestId, queryByText } = render(<HomePage />);

        const searchbar = getByTestId(TestIds.SEARCHBAR);

        fireEvent(searchbar, 'onChangeText', 'QC');

        const result = queryByText("Stock name: ");
        const emptyResult = queryByText("Search a stock option for more information");

        expect(result).toBeTruthy();
        expect(emptyResult).toBeFalsy();
    });
});