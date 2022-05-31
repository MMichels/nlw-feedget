import { ArrowLeft } from 'phosphor-react-native';
import React from 'react';
import { 
    View, 
    TextInput,
    Image,
    Text,
    TouchableOpacity
 } from 'react-native';
import { theme } from '../../theme';
import { FeedbackTypeKey, feedbackTypes } from '../../utils/feedbackTypes';
import { Button } from '../Button';
import { ScreenshotButton } from '../ScreenshotButton';

import { styles } from './styles';

interface FormProps {
    feedbackType: FeedbackTypeKey;
}

export function Form({feedbackType}:FormProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType];


  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity >
                <ArrowLeft size={24} weight='bold' color={theme.colors.text_secondary} />
            </TouchableOpacity>

            <View style={styles.titleContainer}>
                <Image 
                    source={feedbackTypeInfo.image}
                    style={styles.image} />
                <Text style={styles.title} >
                    {feedbackTypeInfo.title}
                </Text>
            </View>

        </View>

        <TextInput 
            multiline
            style={styles.input}
            placeholder={feedbackTypeInfo.placeholder}
            placeholderTextColor={theme.colors.text_secondary}
        />
        <View style={styles.footer}>
            <ScreenshotButton 
                onTakeShot={() => {}}
                onRemoveShot={() => {}}            
                screenshot={null}
            />
            <Button isLoading={false}/>
        </View>
    </View>
  );
}