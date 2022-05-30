import { StyleSheet } from 'react-native';
import { theme } from '../../../../theme';

export const styles = StyleSheet.create({  
    screenshotButton: {
        alignItems: 'center',
        justifyContent: 'center',

        width: 40,
        height: 40,
        borderRadius: 4,
        marginRight: 8,
        backgroundColor: theme.colors.surface_secondary,   
        
        position: 'relative',
    },
    removeIcon : {
        position: 'absolute',
        bottom: 0,
        right: 0
    }
});