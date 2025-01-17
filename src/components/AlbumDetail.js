import React from 'react'
import { Text,View,Image,Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

export default function AlbumDetail( { album }) {
	const { thumbnail_image, title, artist,image,url } = album;
	const { thumbnailContainerStyle,thumbnailStyle,headerContentStyle,headerTextStyle,imageStyle } = styles;

	return (
	   <Card>

		<CardSection>
		 <View style={thumbnailContainerStyle}>
		  <Image style={thumbnailStyle}
		  source={{uri: thumbnail_image }} />
		 </View>
		 <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
         </View>
        </CardSection>

        <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
        </CardSection>

        <CardSection>
        <Button onPress={ () => Linking.openURL(url) } >
         Buy Now!!
        </Button>
        </CardSection>

	   </Card>
	)
}
const styles ={
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	thumbnailStyle: {
		height: 50,
		width: 50,
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	headerTextStyle: {
		fontSize: 18
	},
	imageStyle: {
		flex: 1,
		height: 300,
		width: null
	}
}