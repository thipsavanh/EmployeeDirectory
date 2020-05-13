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
    API.loadEmployees()
    .then(res=>{this.setState({ results: res.data.results, searchResults: res.data.results })})
    .catch(err => console.log(err));
}

handleFormSubmit = event => {
    event.preventDefault();
};

handleInputChange = e => {
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

// render() {
//     return(
//         <div>
//         <Search 
//         onChange={this.handleInputChange}
//         value={this.state.search} 
//         handleFormSubmit={this.handleFormSubmit}
//         />
//         <Table results={this.state.searchResult} />
//         </div>
//     )
// };
     
}
