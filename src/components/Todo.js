import React from 'react';
import {StyleSheet} from 'react-native';
import {ListItem, CheckBox, Body, Text} from 'native-base';

function Todo(props){
	return(
		<ListItem>
      <CheckBox checked={props.done} color={props.done ? "green" : "#1E90FF"} onPress={() => props.onPress()} />
			<Body>
				<Text style={props.done ? styles.striked : null}>{props.text}</Text>
			</Body>
    </ListItem>
	);
}

const styles = StyleSheet.create({
	striked: {
		textDecorationLine: 'line-through',
		textDecorationStyle: 'solid',
	},
});

export default Todo;
