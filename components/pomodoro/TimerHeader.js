import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

class TimerHeader extends React.Component {

	// handles the display of timer header
	handleDisplay = () => {
		if(this.props.intervalType === "Working")
		{
			if(this.props.running === true) {
				return "Session Running"
			}
			else {
				return "Start Session"
			}	
		}
		else {
			if(this.props.running === true) {
				return "Enjoy your break!"
			}
			else {
				return "Start Session"
			}	
		}

	}
	render() {
	
		let texttoshow = this.handleDisplay()
		return(
			<View style={styles.textStyle}>
				<Text style={styles.textStyle}>{texttoshow}</Text>
			</View>
		)				
	}
}

const styles = StyleSheet.create({
  textStyle: {
	fontSize: 40,
	color: "white",
	alignItems: 'center',
  }
});

export default TimerHeader;