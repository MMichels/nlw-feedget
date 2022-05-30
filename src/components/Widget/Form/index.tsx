import { Camera } from 'phosphor-react-native';
import React, { useState } from 'react';
import { View, Image, ImageProps, Text, TextInput, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../../../theme';
import { IFeedbackType } from '../../../utils/feedbackTypes';
import { BackButton } from '../BackButton';
import { Copyright } from '../Copyright';
import { ScreenshotButton } from './ScreenshotButton';

import { styles } from './styles';

interface FormProps {
    feedbackType: IFeedbackType;
    onBack: () => void;
}


export function Form({feedbackType, onBack}: FormProps) {
    const [comment, setComment] = useState<string | null>(null);
    const [screenShot, setScreenShot] = useState<string|null>(null);
    const [isLoading, setIsLoading] = useState(false);

    function handleScreenShot(screenshot: string|null): void {
        setScreenShot(screenshot);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <BackButton onPress={() => onBack()}/>
                <View style={styles.titleContainer}>
                    <Image style={styles.image} source={feedbackType.image}/>
                    <Text style={styles.title}>{feedbackType.title}</Text>
                </View>
            </View>
            <TextInput style={styles.textInput}
                onChangeText={(text) => setComment(text)}
                placeholder='Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...'
                placeholderTextColor={theme.colors.text_secondary}  
                multiline      
            >
            </TextInput>
            <View style={styles.action}>
                <ScreenshotButton 
                    screenshot={screenShot}
                    onTakeShot={handleScreenShot} 
                    onRemoveShot={() => handleScreenShot(null)}
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
            <Copyright />
        </View>
    );
}
