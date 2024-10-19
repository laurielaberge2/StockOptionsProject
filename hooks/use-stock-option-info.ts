import { SocialMediaEnum, SocialMediaMentions } from "@/app/models/social-media.models";
import { useEffect, useState } from "react";
import { BuyHoldSell, StockOptionInfo } from "@/app/models/stock-option.models";


export function useStockOptionInfo(
    stockOption: string,
    selectedSocialMedia: SocialMediaEnum[]
): StockOptionInfo {
    const [mentions, setMentions] = useState<SocialMediaMentions[]>(
        getMentions()
    );
    const [price, setPrice] = useState<number>(getPrice());

    useEffect(() => {
        setMentions(getMentions());
        setPrice(getPrice());
    }, [stockOption]);


    return {
        price, mentions: mentions.filter((x) =>
            selectedSocialMedia.includes(x.name)
        )
    };
}


function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

function getMentions(): SocialMediaMentions[] {
    return [
        { name: SocialMediaEnum.FACEBOOK, nbMentions: getRandomInt(10) },
        { name: SocialMediaEnum.INSTAGRAM, nbMentions: getRandomInt(10) },
        { name: SocialMediaEnum.TWITTER, nbMentions: getRandomInt(10) },
        { name: SocialMediaEnum.TIKTOK, nbMentions: getRandomInt(10) }
    ];
}

function getPrice(): number {
    return getRandomInt(500);
}