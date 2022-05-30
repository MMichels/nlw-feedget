import React from 'react';
import { View, Text } from 'react-native';
import { FeedbackTypeKey, feedbackTypes, IFeedbackType } from '../../../utils/feedbackTypes';
import { Copyright } from '../Copyright';
import { Option } from '../Option';

import { styles } from './styles';

interface OptionsProps {
    onSelectFeedbackType: (feedbackType: IFeedbackType) => void;
}


export function Options({onSelectFeedbackType} : OptionsProps) {

    function handleOptionSelected(key: FeedbackTypeKey) {
        var feedbackType = feedbackTypes[key];
        onSelectFeedbackType({
            image: feedbackType.image,
            title: feedbackType.title
        });
    }


  return (
    <View style={styles.container}>
        <Text style={styles.title} >
            Deixe seu feedback
        </Text>

        <View style={styles.options}>
            {
                Object
                .entries(feedbackTypes)
                .map(([key, value]) => (
                    <Option 
                            key={key} 
                            title={value.title} 
                            image={value.image}
                            onPress={() => handleOptionSelected(key as FeedbackTypeKey)}
                        />
                ))
            }
        </View>


        <Copyright />
    </View>
  );
}