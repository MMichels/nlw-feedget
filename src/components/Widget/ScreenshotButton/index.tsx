import { Camera, Trash } from 'phosphor-react-native';
import React from 'react';
import { View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { theme } from '../../../theme';

import { styles } from './styles';

interface ScreenshotProps {
    screenshot: string | null;
    isTakingScreenshot: boolean;
    onTakeShot: (screenshot: string) => void;
    onRemoveShot: () => void;
}


export function ScreenshotButton({screenshot, isTakingScreenshot, onTakeShot, onRemoveShot}: ScreenshotProps) {
    function takeScreenShot(){
        onTakeShot("blsabslb");
    }

  return (
    <TouchableOpacity style={styles.container}
        onPress={screenshot ? onRemoveShot : takeScreenShot}    
    >
        {
            isTakingScreenshot ? 
            <ActivityIndicator 
                color={theme.colors.text_on_brand_color}
            /> :
                screenshot ? 
                    <View>
                        <Image 
                            style={styles.image}
                            source={{uri: screenshot}}
                        />
                        <Trash 
                        style={styles.removeIcon} 
                        size={22} 
                        color={theme.colors.text_secondary}
                    /> 
                    </View>:
                    <Camera
                        size={24} weight='bold'
                        color={theme.colors.text_primary}
                    />
        }

    </TouchableOpacity>
  );
}