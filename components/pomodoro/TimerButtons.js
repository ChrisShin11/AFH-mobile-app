import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


class TimerButtons extends React.Component {
	state = {};

	//renders pause, play and reset buttons
	render() {
		if(this.props.running === true)
		{
			return (
				<View style={styles.buttonview}>
					<TouchableOpacity style={styles.buttonStyle} onPress={this.props.pause}>
						<Text style={styles.buttonText}>Pause</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttonStyle} onPress={this.props.reset}>
						<Text style={styles.buttonText}>Reset</Text>
					</TouchableOpacity>
				</View>
			)
		}
		else
		{
			return(
				<View style={styles.buttonview}>
					<TouchableOpacity style={styles.buttonStyle} onPress={this.props.play}>
						<Text style={styles.buttonText}>Start</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttonStyle} onPress={this.props.reset}>
						<Text style={styles.buttonText}>Reset</Text>
					</TouchableOpacity>
				</View>
				
			)
		}
	}
}

const styles=StyleSheet.create({
	buttonview: {
		marginLeft:'40%',
	
	},
	buttonStyle:{
		marginTop: 15,
		alignItems: "center",
		justifyContent: 'center',
		width:'30%',
		height:'23%',
		borderColor: "white",
		borderRadius: 50,
		borderWidth: 5,	
	}, 
	buttonText: {
		color: "white",
		fontSize: 48,
		textShadowRadius: 15
	},
})

export default TimerButtons