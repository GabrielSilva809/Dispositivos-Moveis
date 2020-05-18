import React from 'react';
import {StyleSheet, Alert} from 'react-native';
import {
  Content, 
  Item, 
  Input, 
  Label, 
  Button, 
  Text, 
  List, 
  Separator
} from 'native-base';
import Todo from '../components/Todo';


class HomeScreen extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          text: '',
          todos: [
            {text: 'Nome do Todo', done: false},
            {text: 'Nome do Todo2', done: false},
            {text: 'Nome do Todo3', done: true},
          ],
      };
  }

  handleChangeText(text){
      this.setState({
          text: text ,
      });
  }
addTodo(){
  const todos = this.state.todos.slice();
  const text = this.state.text;
  if (text == '') {
    alert('O campo de texto não pode estar vazio!');
    return;
  }
  if(todos.filter(todo => this.state.text == todo.text && todo.done==false).length == 0){
    this.setState({
      todos: [... todos, {text: text, done: false}],
      text: '',
    });
  } else {
    alert("Já existe To Do com esse nome!");
};
}


toggleTodo(id) {
  let todos = this.state.todos.slice();

  if (!todos[id].done == false) {
    for (let i = 0; i < todos.length; i++) {
      if (todos[id].text == todos[i].text && todos[i].done == !todos[id].done) {
        alert('Existe To Do a fazer com esse nome!');
        this.setState({
          text: '',
        })
        return;
      }
    }
  }

  todos[id].done = !todos[id].done;
  this.setState({
    todos: todos,
  })
}

renderTodos(isDone){
  const todos = this.state.todos.map((todo, id) =>{
    if(todo.done === isDone) {
      return(
        <Todo 
          key={id}
          text={todo.text}
          done={todo.done}
          onPress={() => this.toggleTodo(id)}
        />
      );
    }
  });
  return todos;
}

  render(){
    return (
        <Content style={styles.container}>
            <Item stackedLabel>
              <Label>Digite seu Todo</Label>
              <Input onChangeText={(text) => this.handleChangeText(text)} 
              value={this.state.text}
              />
            </Item>
            <Button rounded success
              onPress={() => this.addTodo()}
              style={styles.marginTop}
              block>
              <Text>Adicionar</Text>
            </Button>
            <List style={styles.marginTop}>
              <Separator bordered>
                <Text>To do (Para fazer)</Text>
              </Separator>
              {this.renderTodos(false)}
              <Separator bordered>
                <Text>Done (Pronto)</Text>
              </Separator>
              {this.renderTodos(true)}
            </List>
            
        </Content>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    paddingHorizontal: 15,
    paddingTop: 5,
  },
  marginTop:{
    marginTop: 15,
  },
});

export default HomeScreen;