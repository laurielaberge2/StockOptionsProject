import React from 'react';
import { render } from '@testing-library/react-native';

import { TestIds } from '../../../constants/test-ids.constants';
import SocialMediaMentionDetail from '../social-media-mention-detail.component';
import { SocialMediaEnum, SocialMediaMention } from '../../../app/models/social-media.models';

describe('SocialMediaMentionDetail', () => {
    const mention: SocialMediaMention = {
        name: SocialMediaEnum.FACEBOOK,
        nbMentions: 4,
    }

    it('renders mention name and mentions quantity', () => {
        const { queryByText, debug } = render(
            <SocialMediaMentionDetail
                mention={mention}
            />
        );

        const name = queryByText(`${mention.name}: ${mention.nbMentions} mentions`)

        expect(name).toBeTruthy();
    });

    it('renders parent view with style', () => {
        const { queryByTestId } = render(
            <SocialMediaMentionDetail
                mention={mention}
            />
        );

        const view = queryByTestId(TestIds.SOCIAL_MEDIA_MENTION_DETAIL_VIEW)

        expect(view).toBeTruthy();
        expect(view?.props.style).toEqual({
            fontSize: 18,
            margin: 10,
        });
    });
});