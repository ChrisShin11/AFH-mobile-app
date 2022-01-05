import React from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Vibration } from 'react-native';
import TimerHeader from './TimerHeader'
import TimerButtons from './TimerButtons'

class Timer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			running: false,
			time: this.props.period * 60
		}
	}

	// gets called when a stream of new props arrive from parent component
	componentWillReceiveProps(nextProps) {
    	this.setState({ running: false, time: nextProps.period * 60 });
		if(this.state.running === true && this.state.time == 0)
		{
			this.handlePlay()
		}
	  }

	render() {
		return (
			<View>
				<View style={styles.displayContainer}>
					<Text style={styles.displayText}> 
						{Math.floor(this.state.time/60).toString().padStart(2,"0") + ":" + 
						(this.state.time % 60).toString().padStart(2,"0")}
					</Text>
				</View>
                <TimerHeader
                    running={this.state.running}
					intervalType={this.props.intervalType}
				/>                
				<TimerButtons
					play={this.handlePlay}
					pause={this.handlePause}
					reset={this.handleReset}
					running={this.state.running}
				/>
			</View>
		)
	}

	// Invoked immediately after update occurs
	componentDidUpdate() {
		if(this.state.running === true && this.state.time == 0)
		{
			clearInterval(this.timerId)
			this.props.Oncomplete()

		}
		else if(this.state.running === false)
		{
			clearInterval(this.timerId)
		}
	}

	// gets triggered when Play button is pressed
 	handlePlay = () => {
		this.setState({
			running: true
		})
		this.timerId = setInterval(() =>{
			this.setState({
				time: this.state.time - 1
			})
		}, 1000)
	}

	//gets triggered when Pause button is pressed
	handlePause = () => {
		clearInterval(this.timerId)
		this.setState({
			running: false
		})
	}

	// gets triggered when Reset button is pressed
	handleReset = () => {	
        clearInterval(this.timerId)
		this.setState({
			running: false,
            time: this.props.period * 60,
        })
	}
}

export default Timer;

const styles = StyleSheet.create({
  textStyle: {
    // fontSize: 25,
    // fontWeight: "500",
    // letterSpacing: 1.5,
    // marginTop: 40,
    // padding: 20,
  },
  displayContainer: {
	marginLeft: "15%",
	marginRight: "15%",
	marginTop: "5%",
	borderColor: "white",
	borderRadius: 50,
	borderWidth: 10,
	alignItems: 'center',
},
displayText: {
	color: "white",
	fontSize: 100,
	fontWeight: "400",
},

});

