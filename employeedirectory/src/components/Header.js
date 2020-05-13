import React from "react";

function Header() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Employee Directory</h1>
                <p className="lead">Click on the name column to filter directory by employee names.</p>
            </div>
        </div>
    )
}

export default Header;