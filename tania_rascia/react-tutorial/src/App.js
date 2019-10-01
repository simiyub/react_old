import React, {Component} from 'react';

class App extends Component {
    
    state = {
        characters : [   
        ],
    }

removeCharacter = index => {
    const { characters } = this.state
    
    this.setState(
        {
            characters: characters.filter(( character, i ) => {
                return i !== index
            }),
        })
}

handleSubmit = character =>{
    this.setState({ characters : [...this.state.characters, character] })
}

render(){
    
    const { characters } = this.state
    
return (
<div className="container">
<Table data = { characters } removeCharacter = { this.removeCharacter }/>
<Form handleSubmit={this.handleSubmit}/>
</div>
)
}
}

class Form extends Component{
    constructor(props){
        super(props)
        this.initialiseState = {
            name    : '',
            occupation     : '',
        }
        
        this.state = this.initialiseState
    }
    
    handleChange = event => {
        const { name, value } = event.target
        
        this.setState({
            [name]  :   value,
        })
    }
    
    submitForm = () =>{
        this.props.handleSubmit(this.state)
        this.setState(this.initialiseState)
    }
    render(){
        const { name, occupation } = this.state;
        
        return (
        <form>
            <label>Name</label>
            <input type = "text" name = "name" value = {name} onChange = {this.handleChange}/>
        
            <label>Occupation</label>
            <input type = "text" name = "occupation" value = {occupation} onChange = {this.handleChange}/>

            <input type = "button" value = "Submit" onClick = {this.submitForm}/>            
        </form>
        )
    }
}

class Table extends Component {
    render(){
        const{ data, removeCharacter } = this.props
        return (
        <table>
            <TableHeader/>
            <TableBody data = {data} removeCharacter = { removeCharacter }/>
            </table>
        )
    }
    
}

const TableHeader = () => {
    return (
    <thead>
        <tr>
        <th>Name</th>
        <th>Occupation</th>
        </tr>
        </thead>
    )
}

const TableBody = props => {
    const rows = props.data.map((row, index) =>{
        return (
        <tr key={index}>
            <td>{row.name}</td>
        <td>{row.occupation}</td>
            <td> 
            <button onClick={() =>props.removeCharacter(index)}>Delete</button>
            </td>
        </tr>
            )
    })
    return <tbody>{rows}</tbody>

}

export default App