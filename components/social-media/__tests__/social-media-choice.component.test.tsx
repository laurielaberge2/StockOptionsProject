import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import { TestIds } from '../../../constants/test-ids.constants';
import SocialMediaChoice from '../social-media-choice.component';
import { SocialMediaEnum, SocialMediaItem } from '../../../app/models/social-media.models';
import { Colors } from '../../../constants/colors.constants';

describe('SocialMediaChoice', () => {
    const socialMediaItem: SocialMediaItem = {
        id: 2,
        name: SocialMediaEnum.INSTAGRAM,
        selected: true,
    };

    it('renders parent view with style', () => {
        const onToggleSelected = jest.fn();

        const { queryByTestId } = render(
            <SocialMediaChoice
                socialMedia={socialMediaItem}
                onToggleSelected={onToggleSelected}
            />
        );

        const view = queryByTestId(TestIds.SOCIAL_MEDIA_CHOICE_PARENT_VIEW);

        expect(view).toBeTruthy();
        expect(view?.props.style).toEqual({
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
        });
    });

    it('renders social media checkbox', () => {
        const onToggleSelected = jest.fn();

        const { queryByTestId } = render(
            <SocialMediaChoice
                socialMedia={socialMediaItem}
                onToggleSelected={onToggleSelected}
            />
        );

        const checkbox = queryByTestId(TestIds.SOCIAL_MEDIA_CHECK_BOX);

        expect(checkbox).toBeTruthy();
    });

    it('onPress  of social media checkbox calls onToggleSelected', () => {
        const onToggleSelected = jest.fn();

        const { getByTestId } = render(
            <SocialMediaChoice
                socialMedia={socialMediaItem}
                onToggleSelected={onToggleSelected}
            />
        );

        const checkbox = getByTestId(TestIds.SOCIAL_MEDIA_CHECK_BOX);

        fireEvent.press(checkbox);

        expect(onToggleSelected).toHaveBeenCalledWith(socialMediaItem.id);
    });
});