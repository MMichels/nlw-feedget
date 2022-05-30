import { Camera, Trash } from 'phosphor-react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { theme } from '../../../../theme';

import { styles } from './styles';

interface ScreenshotProps {
    screenshot: string | null;
    onTakeShot: (screenshot: string) => void;
    onRemoveShot: () => void;
}


export function ScreenshotButton({screenshot, onTakeShot, onRemoveShot}: ScreenshotProps) {



  return (
    <TouchableOpacity style={styles.screenshotButton}
        onPress={() => screenshot ? onRemoveShot() : onTakeShot("abcd")}
    >
        {
            screenshot ? 
            <Trash 
                size={22} 
                color={theme.colors.text_secondary} 
                weight='fill'
                style={styles.removeIcon}
            /> :
            <Camera 
                weight='regular' 
                size={24} 
                color={theme.colors.text_primary}
            />
        }

    </TouchableOpacity>
  );
}