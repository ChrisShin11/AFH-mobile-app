import React from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Timer from './Timer'

class PomodoroTimer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			workTime: 25,
			breakTime: 5,
			intervalType : "Working",
		}
	}

	// handles completion of timer
	handleTimerCompleted = () => {
		if(this.state.intervalType === "Working")
		{
			this.setState({
				intervalType: "Break"
			})
		}
		else
		{
			this.setState({
				intervalType: "Working"
			})	
		}
	}

	// gets triggered on change of worktimer text
	handleWorkTime = (text) =>
	{
		if(text >= 0)
		{
			this.setState({
				workTime: text
			})
		}
		else{
			alert("Time invalid. Setting value to default. Please enter valid time")
			this.setState({
				workTime: 25
			})
		}
	}

	// gets triggered on change of breaktimer text
	handleBreakTime = (text) =>{
		if(text >= 0)
		{
			this.setState({
				breakTime:  text
			})
		}
		else
		{
			alert("Time invalid. Setting value to default. Please enter valid time")
			this.setState({
				breakTime: 5
			})
		}
	}

	// called to set the timer's time
	handleTime = () => {
		if(this.state.intervalType === "Working")
		{
			return this.state.workTime
		}
		else
		{
			return this.state.breakTime
		}
	}

	render() {
		let time= this.handleTime()
		return (
			<View>
				<View style={styles.time}>
					<View style={styles.inputWrap}>
						<Text style={styles.text} >Session Time:</Text>
						<TextInput  style={styles.textStyle}  keyboardType={"numeric"} defaultValue={''+this.state.workTime} placeholder = "workTime (mins)" onChangeText={this.handleWorkTime} />
						<Text style={styles.textmin} >min</Text>

					</View>
					<View style={styles.inputWrap}>
					<Text style={styles.text}>{'Break Time:    '}</Text>
						<TextInput  style={styles.textStyle}  keyboardType={"numeric"} defaultValue={''+this.state.breakTime} placeholder = "breakTime (mins)" onChangeText={this.handleBreakTime} />
						<Text style={styles.textmin} >min</Text>

					</View>
				</View>
				<Timer
					intervalType={this.state.intervalType}
					Oncomplete={this.handleTimerCompleted}
					period={time}
				/>
			</View>
			)
	}
}

const styles = StyleSheet.create({
    time: {
	 marginTop: "2%",

	 
   },
   inputWrap: {
	 alignItems:'center',
	 flexDirection: 'row',
	 alignContent: 'center',
	 marginBottom:'1%',
   },
   textStyle: {
     fontSize: 50,
	 color: "white",
	 backgroundColor: "rgba(52, 52, 52, 0.7)",
	 paddingLeft:'3%',
	 marginLeft:'2%',
	 width: '10%',
   },
   text: {
	  fontSize: 50,
	  color: "white",
	  textShadowRadius: 10,
	  marginLeft: '30%',
   },
   textmin: {
	fontSize: 50,
	color: "white",
	textShadowRadius: 10,
 },
   title: {
	  alignItems: 'center',
	  flexDirection: 'row',
	  paddingTop: "5%",

   },
 });

export default PomodoroTimer;

