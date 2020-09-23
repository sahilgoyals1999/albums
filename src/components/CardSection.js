import React from 'react';
import { View } from 'react-native';

export default function CardSection(props) {
	return (
		<View style={styles.containerStyle}>
         {props.children}
		</View>
	)
}
const styles = {
	containerStyle: {
		bordorBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justiftContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	}
}