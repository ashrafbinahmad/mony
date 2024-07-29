import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '../Themed';
import { colors } from '@/constants/Colors';

const IncomeText = ({text}:{text:string}) => {
    return (
        <Text style={{color: colors.green, fontWeight: 'bold'}}>₹ {text}</Text>
    );
}

const styles = StyleSheet.create({})

export default IncomeText;
