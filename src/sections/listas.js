import React, {Component } from 'react'


class App extends Component {
    render(){
        const numbers = ['Castellano', "Inglés", "Italiano", "Catalán"]
        return(
        <div className="APP">
          <h4>Listas</h4>
            {numbers.map((number, index)=> {
                return <p key={index}> <span> Idioma: </span>{number}</p>
            })}
        </div>
        );
    }
}

export default App;