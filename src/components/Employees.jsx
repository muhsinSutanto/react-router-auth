import React, { Component } from 'react';
import axios from 'axios'

class Employees extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            employees : []
         }
    }

    componentDidMount =()=> {
        this.getData();
    }

    getData = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/employees`, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        })
        .then(res => {
            console.log(res)
            if (res.data.data) {
                this.setState({
                    employees: res.data.data
                })
            }
        })
        .catch(err => console.log(err))
    }

    render() { 
        return ( 
            <div>
                <p>list of Employees</p>
                <p>{this.state.employees.map((employee, index) => {
                    return(
                        <ul>
                            <li key={index}>first name : {employee.first_name} </li>
                            <li key={index}>last name : {employee.last_name} </li>
                            <hr />
                        </ul>
                    )
                })}</p>
            </div>
             );
    }
}
 
export default Employees;