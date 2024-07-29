import React, { Component, ReactNode } from 'react';
import { StyleSheet, StyleSheetProperties, View, ViewStyle } from 'react-native';
import { Text } from '../Themed';
import { colors } from '@/constants/Colors';

const Card = ({children, styles}:{children: ReactNode, styles?:ViewStyle}) => {
    return (
        <View style={{..._styles.card, ...styles}}>
            {children}
        </View>
    );
}

const _styles = StyleSheet.create({
    card: {
        borderColor: colors.border,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    }
})

export default Card;
