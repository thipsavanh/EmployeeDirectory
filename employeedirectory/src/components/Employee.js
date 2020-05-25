import React, { Component } from "react";
import Search from "./Search";
import Table from "./Table";
import API from "../utils/API";

class Employee extends Component {
    state = {
        searchResult: [],
        search: "",
        results: [],
        error: ""
    };

componentDidMount = () => {
    this.loadEmployees()
};

loadEmployees = () => {
    API.searchEmployees()
   .then(res => this.setState( {
    results: res.data.results,
    // searchResult: res.data.results,
    error: "" 
   })).catch(err => this.setState({
    error: err.message
   })
   )
}

handleFormSubmit = event => {
    event.preventDefault();
};

handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    let searchArray;
    console.log(value);
    searchArray = ([...this.state.results]);
    console.log(searchArray);
    const searchValue = this.searchEmployee(searchArray, value)
    this.setState({
        [name]: value,
        searchResult: searchValue,
    });
};

searchEmployee = (array, value) => {
    console.log(value);
    console.log(array);
    const directory = array.filter(employee => {
       return (employee.name.first.includes(value) || employee.name.last.includes(value)
       || employee.email.includes(value) || employee.email.includes(value) || employee.dob.includes(value))
    })
   this.setState({ results: directory });
};

render() {
    console.log(this.state.results)
    const { error, results } = this.state;
    return(
        <div>
        <Search 
        onChange={this.handleInputChange}
        value={this.state.search} 
        handleFormSubmit={this.handleFormSubmit}
        />
        <Table results={this.state.results} />
         {/* {this.state.results.map(result => (
                        <tr key={result.name} className="list-group-item">
                            <th>
                                <img alt={result.name.first} src={result.picture.thumbnail}></img>
                            </th>
                            <td>{result.name.first} {result.name.last}</td>
                            <td>{result.phone}</td>
                            <td>{result.email}</td>
                            <td>{result.dob}</td>
                        </tr>
                    ))} */}
        </div>
    )
};
     
}

export default Employee;