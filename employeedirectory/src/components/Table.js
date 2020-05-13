import React from "react";

const Table = (props) => {
    return (
        <div className="container">
            <table className="table table-sm">
                <tbody>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                    {/* {props.result.map(result => (
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
                </tbody>

            </table>
        </div>

    )
}
export default Table;