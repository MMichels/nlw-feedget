import { ArrowLeft } from 'phosphor-react-native';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { theme } from '../../../theme';

import { styles } from './styles';

export function BackButton({...props}: TouchableOpacityProps) {
  return (
    <TouchableOpacity {...props} style={styles.container}>
        <ArrowLeft size={24} weight='bold' color={theme.colors.text_secondary} />
    </TouchableOpacity>
  );
}