import { TouchableOpacity } from '@gorhom/bottom-sheet';
import React from 'react';
import { Image, ImageProps, Text } from 'react-native';
import { TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface OptionProps extends TouchableOpacityProps {
    title: string;
    image: ImageProps
}


export function Option({title, image, ...props}: OptionProps) {
  return (
    <TouchableOpacity 
        {...props} 
        style={styles.container}
    >
        <Image source={image} style={styles.image} />

        <Text 
            style={styles.title}
        >
            {title}
        </Text>

    </TouchableOpacity>
  );
}