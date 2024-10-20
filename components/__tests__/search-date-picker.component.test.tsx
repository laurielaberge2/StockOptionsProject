
import React from "react";
import SearchDatePicker from "../search-date-picker.component";
import { fireEvent, render } from "@testing-library/react-native"
import { TestIds } from "../../constants/test-ids.constants";
import * as DatePicker from '@react-native-community/datetimepicker';

describe('SearchDatePicker', () => {
    const selectedDate = new Date('1998-03-04T03:24:00');

    it('renders picker button', () => {
        const { queryByTestId } = render(
            <SearchDatePicker
                selectedDate={selectedDate}
                setSelectedDate={jest.fn()}
            />
        );

        const button = queryByTestId(TestIds.SEARCH_DATE_PICKER_BUTTON)

        expect(button).toBeTruthy();
    });

    it('calls setSelectedDate on press of picker button', () => {
        jest.spyOn(DatePicker.DateTimePickerAndroid, 'open');

        const { getByTestId } = render(
            <SearchDatePicker
                selectedDate={selectedDate}
                setSelectedDate={jest.fn()}
            />
        );

        const button = getByTestId(TestIds.SEARCH_DATE_PICKER_BUTTON);

        fireEvent.press(button);

        expect(DatePicker.DateTimePickerAndroid.open).toHaveBeenCalledWith(
            {
                value: selectedDate,
                onChange: expect.any(Function),
                mode: 'date',
                maximumDate: expect.any(Date),
            }
        );
    });
});