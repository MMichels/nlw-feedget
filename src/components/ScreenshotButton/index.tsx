import { Camera, Trash } from 'phosphor-react-native';
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface ScreenshotProps {
    screenshot: string | null;
    onTakeShot: (screenshot: string) => void;
    onRemoveShot: () => void;
}


export function ScreenshotButton({screenshot, onTakeShot, onRemoveShot}: ScreenshotProps) {
    function takeScreenShot(){
        onTakeShot("blsabslb");
    }

  return (
    <TouchableOpacity style={styles.container}
        onPress={screenshot ? onRemoveShot : takeScreenShot}    
    >
        {
            screenshot ? 
                <Trash 
                    style={styles.removeIcon} 
                    size={22} 
                    color={theme.colors.text_secondary}
                /> :
                <Camera
                    size={24} weight='bold'
                    color={theme.colors.text_primary}
                />
        }

    </TouchableOpacity>
  );
}