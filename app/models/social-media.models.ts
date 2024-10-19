export enum SocialMediaEnum {
    FACEBOOK = 'Facebook',
    INSTAGRAM = 'Instagram',
    TWITTER = 'Twitter / X',
    TIKTOK = 'TikTok',
};

export interface SocialMediaItem {
    id: number,
    name: SocialMediaEnum,
    selected: boolean
};

export interface SocialMediaMentions {
    name: SocialMediaEnum,
    nbMentions: number
};
