import { ArrowLeft } from 'phosphor-react-native';
import React, { useState } from 'react';
import { 
    View, 
    TextInput,
    Image,
    Text,
    TouchableOpacity,
    ActivityIndicator
 } from 'react-native';
import { theme } from '../../../theme';
import { FeedbackTypeKey, feedbackTypes } from '../../../utils/feedbackTypes';
import { Button } from './Button';
import { ScreenshotButton } from '../ScreenshotButton';

import { styles } from './styles';

interface FormProps {
    feedbackType: FeedbackTypeKey;
    onBack: () => void;
}

export function Form({feedbackType, onBack}:FormProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType];
    const [comment, setComment] = useState<string | null>(null);
    const [screenshot, setScreenShot] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    function handleTakeScreenShot(){
        console.log("TakeScreenshot");
        setScreenShot("screenshot");
    }

    function handleRemoveScreenshot(){
        console.log("RemoveScreenshot");
        setScreenShot(null);
    }
    

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity 
                onPress={onBack}
            >
                <ArrowLeft size={24} weight='bold' color={theme.colors.text_secondary} />
            </TouchableOpacity>

            <View style={styles.titleContainer}>
                <Image 
                    source={feedbackTypeInfo.image as object}
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
            onChangeText={setComment}
        />
        <View style={styles.action}>
            <ScreenshotButton 
                onTakeShot={handleTakeScreenShot}
                onRemoveShot={handleRemoveScreenshot}            
                screenshot={screenshot}
            />
            <TouchableOpacity 
                style={styles.submitButton}
                disabled={comment == null}                
            >
                {
                    isLoading ? 
                    <ActivityIndicator 
                        color={theme.colors.text_on_brand_color}
                    /> :
                    <Text 
                        style={{
                            color: theme.colors.text_on_brand_color, 
                            fontSize: 14,
                            fontFamily: theme.fonts.medium
                        }}>
                        Enviar feedback
                    </Text>
                }
            </TouchableOpacity>
        </View>
    </View>
  );
}