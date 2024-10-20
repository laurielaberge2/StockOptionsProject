import { BuyHoldSell } from "../../app/models/stock-option.models"
import { SocialMediaEnum, SocialMediaMention } from "../../app/models/social-media.models";
import { getBuyHoldSellSuggestion } from "../stock-option-recommendation.utils";

describe('getBuyHoldSellSuggestion', () => {
    const enoughMentions: SocialMediaMention[] = [
        {
            name: SocialMediaEnum.FACEBOOK,
            nbMentions: 4
        },
        {
            name: SocialMediaEnum.INSTAGRAM,
            nbMentions: 5
        },
        {
            name: SocialMediaEnum.TIKTOK,
            nbMentions: 4
        },
    ];

    const notEnoughtMentions = [
        {
            name: SocialMediaEnum.FACEBOOK,
            nbMentions: 4
        },
        {
            name: SocialMediaEnum.TWITTER,
            nbMentions: 5
        },
    ];


    it.each([
        [BuyHoldSell.BUY, 200, 200, 200, enoughMentions],
        [BuyHoldSell.BUY, 200, 200, 150, notEnoughtMentions],
        [BuyHoldSell.HOLD, 200, 150, 200, notEnoughtMentions],
        [BuyHoldSell.SELL, 150, 200, 150, notEnoughtMentions],
    ])('returns recommendation %p with price %p, purchasePrice %p and priceInLastMonth %p', (
        expectedRecommendation: BuyHoldSell,
        price: number,
        purchasePrice: number,
        priceInLastMonth: number,
        mentions: SocialMediaMention[],
    ) => {
        const recommendation = getBuyHoldSellSuggestion(
            mentions,
            price,
            purchasePrice,
            priceInLastMonth
        )

        expect(recommendation).toEqual(expectedRecommendation)
    })


})