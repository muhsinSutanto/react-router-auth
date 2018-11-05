import React, { Component } from 'react';
import axios from 'axios'
import DetailEmployees from './DetailEmployees';

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
                {this.state.employees.map((employee, index => {
                    return <DetailEmployees />
                }))}
            </div>
             );
    }
}
 
export default Employees;