import React from "react";
import { fireEvent, render } from "@testing-library/react-native"
import StockOptionResult from "../stock-option-result.component";
import { SocialMediaEnum } from "../../../app/models/social-media.models";
import { TestIds } from "../../../constants/test-ids.constants";

describe('StockOptionResult', () => {
    it('renders empty state text when no stock option', () => {
        const { queryByText } = render(
            <StockOptionResult
                stockOption=""
                selectedSocialMedia={[SocialMediaEnum.FACEBOOK]}
            />
        );

        const emptyState = queryByText(
            "Search a stock option for more information"
        );
        const text = queryByText("Date: From");

        expect(emptyState).toBeTruthy();
        expect(text).toBeFalsy();
    });

    describe('when stockOption is truthy', () => {
        const stockOption = 'QC'

        it(`does not render empty state`, () => {
            const { queryByText } = render(
                <StockOptionResult
                    stockOption={stockOption}
                    selectedSocialMedia={[SocialMediaEnum.FACEBOOK]}
                />
            );

            const emptyState = queryByText(
                "Search a stock option for more information"
            );

            expect(emptyState).toBeFalsy();
        });

        it('renders stock name', () => {
            const { queryByText } = render(
                <StockOptionResult
                    stockOption={stockOption}
                    selectedSocialMedia={[SocialMediaEnum.FACEBOOK]}
                />
            );

            const name = queryByText(
                `Stock name: ${stockOption}`
            );

            expect(name).toBeTruthy();
        });

        it('renders selected date range', () => {
            const today = new Date();
            const month = today.getUTCMonth() + 1;
            const day = today.getUTCDate();
            const year = today.getUTCFullYear();
            const formattedDate = month + "/" + day + "/" + year;

            const { queryByText } = render(
                <StockOptionResult
                    stockOption={stockOption}
                    selectedSocialMedia={[SocialMediaEnum.FACEBOOK]}
                />
            );

            const firstDateText = queryByText('Date: from');
            const secondDateText = queryByText(` ${formattedDate} `);
            const thirdDateText = queryByText(`to ten days before`);

            expect(firstDateText).toBeTruthy();
            expect(secondDateText).toBeTruthy();
            expect(thirdDateText).toBeTruthy();
        });

        it('renders button', () => {
            const { queryByText } = render(
                <StockOptionResult
                    stockOption={stockOption}
                    selectedSocialMedia={[SocialMediaEnum.FACEBOOK]}
                />
            );

            const button = queryByText("Show information");

            expect(button).toBeTruthy();
        });

        it('before pressing button, does not render StockOptionInfoDetails component', () => {
            const { queryByTestId } = render(
                <StockOptionResult
                    stockOption={stockOption}
                    selectedSocialMedia={[SocialMediaEnum.FACEBOOK]}
                />
            );

            const info = queryByTestId(TestIds.STOCK_OPTION_INFO_VIEW);

            expect(info).toBeFalsy();
        });


        it('on press of button, renders StockOptionInfoDetails component', () => {
            const { getByText, queryByTestId } = render(
                <StockOptionResult
                    stockOption={stockOption}
                    selectedSocialMedia={[SocialMediaEnum.FACEBOOK]}
                />
            );

            const button = getByText("Show information");

            fireEvent.press(button);

            const info = queryByTestId(TestIds.STOCK_OPTION_INFO_VIEW);

            expect(info).toBeTruthy();
        });
    });
});