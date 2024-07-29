import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '../Themed';
import { colors } from '@/constants/Colors';

const ExpenseText = ({text}:{text:string}) => {
    return (
        <Text style={{color: colors.red, fontWeight: 'bold'}}>₹ {text}</Text>
    );
}

const styles = StyleSheet.create({})

export default ExpenseText;
