import React from "react";
import { Colors } from "../../../constants/colors.constants";
import StockOptionResultEmptyState from "../stock-option-result-empty-state.component";
import { render } from "@testing-library/react-native"

describe('SocialMediaList', () => {
    it('renders empty state text', () => {
        const { queryByText } = render(
            <StockOptionResultEmptyState />
        );

        const text = queryByText("Search a stock option for more information")

        expect(text).toBeTruthy();
        expect(text?.props.style).toEqual({
            margin: 10,
            fontSize: 20,
            color: Colors.darkText,
            textAlign: 'center'
        })
    });
});