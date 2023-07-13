import React from "react";
import axios from 'axios'
 
class Httppost extends React.Component{
    state={
        postList: []
    }
    changes = (event) => {
        this.setState({postList: event.target.value})
    }
    submitDate = (event) => {
        event.preventDefault()
        console.log('click on submit button')
        let user = {
            postList: this.state.postList 
        }
        axios.post ('https://jsonplaceholder.typicode.com/users', {user})
        .than((result) => {
            console.log(result.data)
        })
    }
    render(){
        return(
            <>
            <from onSubmit = {this.submitDate}>
                <label> <input type='text' name='firStName' onChange={this.changes}/></label>
                <button type="submit">submit</button>
            </from>
            </>
        )
    }

}
export default Httppost














































