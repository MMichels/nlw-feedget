import { ArrowLeft } from 'phosphor-react-native';
import React, { useState } from 'react';
import { 
    View, 
    TextInput,
    Image,
    Text,
    TouchableOpacity } from 'react-native';
import { theme } from '../../../theme';
import { FeedbackTypeKey, feedbackTypes } from '../../../utils/feedbackTypes';
import { Button } from './Button';
import { ScreenshotButton } from '../ScreenshotButton';

import { styles } from './styles';
import { captureScreen } from 'react-native-view-shot';
import { Copyright } from '../Copyright';

interface FormProps {
    feedbackType: FeedbackTypeKey;
    onBack: () => void;
    onSuccess: () => void;
}

export function Form({feedbackType, onBack, onSuccess}:FormProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType];
    const [comment, setComment] = useState<string | null>(null);
    const [screenshot, setScreenShot] = useState<string | null>(null);
    const [isSendingFeedback, setIsSendingFeedback] = useState(false);
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);


    function handleTakeScreenShot(){
        setIsTakingScreenshot(true);

        captureScreen({
            format: 'jpg',
            quality: 0.8
        }).then(screenshot => {
            setScreenShot(screenshot);
            setIsTakingScreenshot(false);
        }).catch(exception => {
            console.error("Erro ao obter screenshot: ", exception);
            setIsTakingScreenshot(false);
        });
    }

    function handleRemoveScreenshot(){
        console.log("RemoveScreenshot");
        setScreenShot(null);
    }

    async function handleSubmit(){
        setIsSendingFeedback(true);

        try {
            
        } catch (error) {
            console.error("Erro ao enviar feedback: ", error);
            setIsSendingFeedback(false);
        }


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
                isTakingScreenshot={isTakingScreenshot}
            />
            <Button 
                isLoading={isSendingFeedback}
                onPress={() => handleSubmit()}
                disabled={comment == null || isSendingFeedback}
            />
        </View>
        <Copyright />
    </View>
  );
}