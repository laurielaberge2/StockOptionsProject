import { useStockOptionInfo } from '../use-stock-option-info';
import { SocialMediaEnum } from '../../app/models/social-media.models';
import * as Utils from "../../utils/stock-option-recommendation.utils";
import { BuyHoldSell } from '../../app/models/stock-option.models';
import { renderHook } from "@testing-library/react-native"

describe('useStockOptionInfo', () => {
    const stockOption = 'QC';
    const selectedDate = new Date('1998-03-04T03:24:00');
    const selectedSocialMedia = [
        SocialMediaEnum.FACEBOOK,
        SocialMediaEnum.INSTAGRAM
    ];

    beforeEach(() => {
        jest.resetAllMocks();

        jest.spyOn(Utils, 'getBuyHoldSellSuggestion').mockReturnValue(BuyHoldSell.BUY);
    });

    it('calls getBuyHoldSellSuggestion', () => {
        renderHook(() => useStockOptionInfo(
            stockOption,
            selectedSocialMedia,
            selectedDate
        ));

        expect(Utils.getBuyHoldSellSuggestion).toHaveBeenCalledWith(
            [
                { name: SocialMediaEnum.FACEBOOK, nbMentions: expect.any(Number) },
                { name: SocialMediaEnum.INSTAGRAM, nbMentions: expect.any(Number) },
            ],
            expect.any(Number),
            expect.any(Number),
            expect.any(Number)
        )

        expect(jest.mocked(Utils.getBuyHoldSellSuggestion)
            .mock.calls[0][0][0].nbMentions).toBeLessThanOrEqual(10)
        expect(jest.mocked(Utils.getBuyHoldSellSuggestion)
            .mock.calls[0][0][1].nbMentions).toBeLessThanOrEqual(10)

        expect(jest.mocked(Utils.getBuyHoldSellSuggestion)
            .mock.calls[0][1]).toBeLessThanOrEqual(500)
        expect(jest.mocked(Utils.getBuyHoldSellSuggestion)
            .mock.calls[0][2]).toBeLessThanOrEqual(500)
        expect(jest.mocked(Utils.getBuyHoldSellSuggestion)
            .mock.calls[0][2]).toBeLessThanOrEqual(500)
    });

    it('returns correct values', () => {
        const { result } = renderHook(() => useStockOptionInfo(
            stockOption,
            selectedSocialMedia,
            selectedDate
        ));

        expect(result.current.price).toBeLessThanOrEqual(500);
        expect(result.current.purchasePrice).toBeLessThanOrEqual(500);
        expect(result.current.priceInLastMonth).toBeLessThanOrEqual(500);
        expect(result.current.recommendation).toEqual(BuyHoldSell.BUY);

        expect(result.current.mentions).toEqual([
            { name: SocialMediaEnum.FACEBOOK, nbMentions: expect.any(Number) },
            { name: SocialMediaEnum.INSTAGRAM, nbMentions: expect.any(Number) },
        ]);
        expect(result.current.mentions[0].nbMentions).toBeLessThanOrEqual(10);
        expect(result.current.mentions[1].nbMentions).toBeLessThanOrEqual(10);
    });
});