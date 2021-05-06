import {Button, FormControl, InputLabel, Input} from '@material-ui/core'
import React, {useState, useEffect} from 'react';
import Todo from './Todo'
import './App.css';
import db from './firebase';
import firebase from 'firebase'
function App() {

  const[todos, setTodos] = useState([]);
  const [input, setInput]= useState('');

  useEffect(()=>{
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setTodos(snapshot.docs.map(doc=>doc.data().todo))

    })

  },[])



  const addTodo=(event)=>{
    //this will happen whhen we click the button
    event.preventDefault();
    db.collection('todos').add({
      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
  
    setInput('');
  }


  return (
    <div className="App">
      <h1> TODOLISTAPP</h1>
      <form>
      

        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input  value={input} onChange={event=> setInput(event.target.value)}/>
         
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
        ADD TODO
        </Button>
        
      {/* <button type="submit" onClick={addTodo}>ADD TODO</button> */}
      </form>
      
      

      
      <ul>
        {todos.map(todo=>(
          <Todo text={todo} />
          //<li>{todo}</li>
        ))}
      
      </ul>
    </div>
  );
}

export default App;
