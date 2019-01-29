import React from 'react';
import './Todos.css'

const Todos = (props) => {
  console.log('------>',props)

  return (
    <div className="Todos">
      <h2>{props.title}</h2>
      <ul>
        {props.items.map((item, index)=> {
          return <li key={"s1"+index}><input type="checkbox"/>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Todos;
