import React from "react";
import { render } from "@testing-library/react-native"
import StockOptionInfoDetails from "../stock-option-info.component-details.component";
import { BuyHoldSell, StockOptionInfo } from "../../../app/models/stock-option.models";
import { SocialMediaEnum } from "../../../app/models/social-media.models";
import { TestIds } from "../../../constants/test-ids.constants";

describe('StockOptionInfoDetails', () => {
    const info: StockOptionInfo = {
        price: 20,
        purchasePrice: 25,
        priceInLastMonth: 30,
        mentions: [
            {
                name: SocialMediaEnum.FACEBOOK,
                nbMentions: 5
            },
            {
                name: SocialMediaEnum.INSTAGRAM,
                nbMentions: 3
            },
        ],
        recommendation: BuyHoldSell.BUY,
    };

    it('renders StockOptionPriceInfo component', () => {
        const { queryByText } = render(
            <StockOptionInfoDetails info={info} />
        );

        const text = queryByText(`Current price: ${info.price}$`)

        expect(text).toBeTruthy();
    });

    it('renders BuyHoldSellRecommendation component', () => {
        const { queryByText } = render(
            <StockOptionInfoDetails info={info} />
        );

        const text = queryByText(`Recommendation: ${info.recommendation}$`)

        expect(text).toBeTruthy();
    });

    it('renders SocialMediaMentionDetail component right number of times', () => {
        const { queryAllByTestId } = render(
            <StockOptionInfoDetails info={info} />
        );

        const text = queryAllByTestId(TestIds.SOCIAL_MEDIA_MENTION_DETAIL_VIEW)

        expect(text).toHaveLength(2);
    });
});