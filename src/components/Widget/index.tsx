import BottomSheet from '@gorhom/bottom-sheet';
import { ChatTeardropDots } from 'phosphor-react-native';
import React, { useState } from 'react';
import { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { theme } from '../../theme';
import { IFeedbackType } from '../../utils/feedbackTypes';
import { Form } from './Form';
import { Options } from './Options';

import { styles } from './styles';

function Widget() {
	const [feedbackType, setFeedbackType] = useState<IFeedbackType | null>(null);

    const bottomSheetRef = useRef<BottomSheet>(null);

	function handleOpen(){
		bottomSheetRef.current?.expand();
	}

	function handleSelectFeedbackType(feedbackType: IFeedbackType){
		setFeedbackType(feedbackType);
	}

	function handleFormBack() {
		setFeedbackType(null);
	}

	return (
		<>
			<TouchableOpacity 
				style={styles.button}
				onPress={handleOpen}
			>
				<ChatTeardropDots 
					size={24}
					weight="bold"
					color={theme.colors.text_on_brand_color}
				/>
			</TouchableOpacity>
			<BottomSheet
				ref={bottomSheetRef}
				snapPoints={[1, 280]}
				backgroundStyle={styles.modal}
				handleIndicatorStyle={styles.indicator}				
			>
				{
					feedbackType == null? 
					<Options onSelectFeedbackType={handleSelectFeedbackType}/>:
					<Form feedbackType={feedbackType} onBack={handleFormBack}/>

				}
			</BottomSheet>
		</>
	);
}

export default gestureHandlerRootHOC(Widget);