import { SocialMediaEnum, SocialMediaMentions } from "../app/models/social-media.models";
import { getBuyHoldSellSuggestion } from "../utils/stock-option-recommendation.utils";
import { useEffect, useState } from "react";
import { StockOptionInfo } from "../app/models/stock-option.models";

export function useStockOptionInfo(
    stockOption: string,
    selectedSocialMedia: SocialMediaEnum[],
    selectedDate: Date,
): StockOptionInfo {
    const [mentions, setMentions] = useState<SocialMediaMentions[]>(
        getMentions()
    );
    const [price, setPrice] = useState<number>(getPrice());
    const [purchasePrice, setPurchasePrice] = useState<number>(getPrice());
    const [priceInLastMonth, setPriceInLastMonth] = useState<number>(getPrice());

    const recommendation = getBuyHoldSellSuggestion(
        mentions.filter((x) =>
            selectedSocialMedia.includes(x.name)
        ),
        price,
        purchasePrice,
        priceInLastMonth
    );


    useEffect(() => {
        setMentions(getMentions());
        setPrice(getPrice());
        setPurchasePrice(getPrice());
        setPriceInLastMonth(getPrice());
    }, [stockOption, selectedDate]);


    return {
        price,
        mentions: mentions.filter((x) =>
            selectedSocialMedia.includes(x.name)
        ),
        recommendation,
        purchasePrice,
        priceInLastMonth,
    };
};


function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
};

function getMentions(): SocialMediaMentions[] {
    return [
        { name: SocialMediaEnum.FACEBOOK, nbMentions: getRandomInt(10) },
        { name: SocialMediaEnum.INSTAGRAM, nbMentions: getRandomInt(10) },
        { name: SocialMediaEnum.TWITTER, nbMentions: getRandomInt(10) },
        { name: SocialMediaEnum.TIKTOK, nbMentions: getRandomInt(10) }
    ];
};

function getPrice(): number {
    return getRandomInt(500);
};