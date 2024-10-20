
import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { Button, makeStyles } from '@rneui/themed';
import { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { Colors } from "@/constants/Colors";

export interface Props {
    selectedDate: Date,
    setSelectedDate: (newDate: Date) => void
}

function SearchDatePicker({ selectedDate, setSelectedDate }: Props) {
    const styles = useSearchDatePickerStyles();

    const onChange = (_: DateTimePickerEvent, selectedDate?: Date) => {
        selectedDate && setSelectedDate(selectedDate);
    };

    const showMode = (currentMode: string) => {
        DateTimePickerAndroid.open({
            value: selectedDate,
            onChange,
            mode: currentMode as any,
            maximumDate: new Date()
        });
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <SafeAreaView style={styles.parentView}>
            <Button
                onPress={showDatepicker}
                title="Show date picker"
                color={Colors.button}
                titleStyle={styles.buttonTitle}
            />
        </SafeAreaView>
    );
};


const useSearchDatePickerStyles = makeStyles(() => ({
    buttonTitle: {
        color: Colors.darkText
    },
    parentView: {
        width: '100%',
        marginBottom: 10
    },
}));

export default SearchDatePicker;
