import React from "react";
import { Colors } from "../../../constants/colors.constants";
import { render } from "@testing-library/react-native"
import BuyHoldSellRecommendation from "../stock-option-buy-hold-sell-recommendation.component";
import { BuyHoldSell } from "../../../app/models/stock-option.models";
import { TestIds } from "../../../constants/test-ids.constants";

describe('BuyHoldSellRecommendation', () => {
    const recommendation = BuyHoldSell.BUY;

    it('renders empty state text', () => {
        const { queryByText } = render(
            <BuyHoldSellRecommendation
                recommendation={recommendation}
            />
        );

        const firstText = queryByText('Recommendation:');
        const secondText = queryByText(` ${recommendation}`);

        expect(firstText).toBeTruthy();
        expect(secondText).toBeTruthy();

        expect(firstText?.props.style).toEqual({
            fontWeight: "bold",
        });
    });

    it.each([
        [Colors.hold, BuyHoldSell.HOLD],
        [Colors.buy, BuyHoldSell.BUY],
        [Colors.sell, BuyHoldSell.SELL],
    ])('renders recommendation text with backgroundColor $s with recommendation %s', (
        expectedBacgroundColor: string,
        recommendation: BuyHoldSell
    ) => {
        const { queryByTestId } = render(
            <BuyHoldSellRecommendation
                recommendation={recommendation}
            />
        );

        const text = queryByTestId(TestIds.STOCK_OPTION_BUY_HOLD_SELL_RECOMMENDATION);

        expect(text).toBeTruthy();

        expect(text?.props.style).toEqual({
            marginTop: 20,
            marginBottom: 10,
            padding: 10,
            fontSize: 18,
            color: Colors.darkText,
            width: '100%',
            backgroundColor: expectedBacgroundColor
        });
    })
});