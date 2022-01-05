import React from 'react';
import { View, ImageBackground, StyleSheet, Text, KeyboardAvoidingView, Platform, TextInput, ScrollView, Keyboard} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Task from '../components/pomodoro/todoList';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


function todoScreen(props) {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);
  
    const handleAddTask = () => {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task])
      saveTask();
      setTask(null);
    }
  
    const completeTask = (index) => {
      let itemsCopy = [...taskItems];
      deleteTask(index);
      itemsCopy.splice(index, 1);
      setTaskItems(itemsCopy)
    }

    const deleteTask = async (todoIndex) => {
      try{
        const storedToDosStringify = await AsyncStorage.getItem('@ToDos');
        if(storedToDosStringify != null){
          const todos = JSON.parse(storedToDosStringify);
          todos.splice(todoIndex, 1);
          const todosJSON = JSON.stringify(todos);
          await AsyncStorage.setItem('@ToDos', todosJSON);
          console.log(todos);
        }

      } catch (error) {
        const errorMessage = "Failed to delete todo tasks";
        console.log(errorMessage + ":\n" + error.message);
      }
    }

    const saveTask = async () => {
      try{
        const storedToDosStringify = await AsyncStorage.getItem('@ToDos');
        if(storedToDosStringify == null) {
          await AsyncStorage.setItem('@ToDos', JSON.stringify([task]));
          console.log([task]);
        } else {
          const todos = JSON.parse(storedToDosStringify);
          todos.push(task);
          const todosJSON = JSON.stringify(todos);
          await AsyncStorage.setItem('@ToDos', todosJSON);
          console.log(todos);
        }
      } catch (error) {
        const errorMessage = "Failed to save todo tasks";
        console.log(errorMessage + ":\n" + error.message);
      }
    }
    

    React.useEffect(() => {

      const fetchStoredToDos = async () => {
          try{
              const storedToDosStringify = await AsyncStorage.getItem('@ToDos');
              if(storedToDosStringify != null){
                  const storedToDos = JSON.parse(storedToDosStringify);
                  setTaskItems(storedToDos);
                  console.log(storedToDos)
              }
          } catch (error) {
              const errorMessage = "Failed to retrieve todo tasks";
              console.log(errorMessage + ":\n" + error.message);
          }
      };
      fetchStoredToDos();
    }, []);

    return(
        <ImageBackground 
            source={require("../assets/lofi-1.gif")}
            style= {styles.background} 
        >
          <View style={styles.backgroundview}>
            <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks:</Text>
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task style={styles.listText} text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
    </View>
        </ImageBackground>
    );

}

const styles = StyleSheet.create({
    background: {
        flex: 1,
       
    },
    backgroundview: {
      backgroundColor: "rgba(0,0,0,0.8)",
      width: "100%",
      height: "100%"
    },
    container: {
      
    opacity: 0.8,
      marginRight: "5%",
      marginLeft: "5%"
    },
    tasksWrapper: {
      paddingTop: "5%",
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 60,
      fontWeight: 'bold',
      color: "white",
    },
    items: {
      marginTop: '45%',
      fontSize: 50,
    //   marginBottom: 100

    },
    writeTaskWrapper: {
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      borderRadius: 60,
      flex: 1,
      fontSize: 35
    },
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
    },
    addText: {
      fontSize: 40
    },
  });

export default todoScreen;