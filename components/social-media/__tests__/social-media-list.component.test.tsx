import React from 'react';
import { render } from '@testing-library/react-native';

import { TestIds } from '../../../constants/test-ids.constants';
import SocialMediaList from '../social-media-list.component';
import { SocialMediaEnum, SocialMediaItem } from '../../../app/models/social-media.models';
import { Colors } from '../../../constants/colors.constants';

describe('SocialMediaList', () => {
    const socialMediaList: SocialMediaItem[] = [
        {
            id: 2,
            name: SocialMediaEnum.INSTAGRAM,
            selected: true,
        },
        {
            id: 3,
            name: SocialMediaEnum.FACEBOOK,
            selected: true,
        },
    ];

    it('renders social media list viw with style', () => {
        const onToggleSelected = jest.fn();

        const { queryByTestId } = render(
            <SocialMediaList
                socialMediaList={socialMediaList}
                onToggleSelected={onToggleSelected}
            />
        );

        const view = queryByTestId(TestIds.SOCIAL_MEDIA_LIST)

        expect(view).toBeTruthy();
        expect(view?.props.style).toEqual({
            backgroundColor: Colors.darkGrey,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
        })
    });

    it('renders social media choice component right amount of times', () => {
        const onToggleSelected = jest.fn();

        const { queryAllByTestId } = render(
            <SocialMediaList
                socialMediaList={socialMediaList}
                onToggleSelected={onToggleSelected}
            />
        );

        const choice = queryAllByTestId(TestIds.SOCIAL_MEDIA_CHECK_BOX)

        expect(choice).toHaveLength(2);
    });
});