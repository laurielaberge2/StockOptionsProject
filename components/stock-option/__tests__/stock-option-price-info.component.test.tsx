import React from "react";
import { render } from "@testing-library/react-native"
import { BuyHoldSell, StockOptionInfo } from "../../../app/models/stock-option.models";
import { SocialMediaEnum } from "../../../app/models/social-media.models";
import StockOptionPriceInfo from "../stock-option-price-info.component";

describe('StockOptionPriceInfo', () => {
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

    it('renders price text', () => {
        const { queryByText } = render(
            <StockOptionPriceInfo
                info={info}
            />
        );

        const priceText = queryByText(
            `Current price: ${info.price}$`
        );

        expect(priceText).toBeTruthy();
    });

    it('renders purchasePrice text', () => {
        const { queryByText } = render(
            <StockOptionPriceInfo
                info={info}
            />
        );

        const purchasePriceText = queryByText(
            `Purchase price: ${info.purchasePrice}$`
        );

        expect(purchasePriceText).toBeTruthy();
    });

    it('renders priceInLastMonth text', () => {
        const { queryByText } = render(
            <StockOptionPriceInfo
                info={info}
            />
        );

        const priceInLastMonthText = queryByText(
            `Price in last month: ${info.priceInLastMonth}$`
        );

        expect(priceInLastMonthText).toBeTruthy();
    });
});