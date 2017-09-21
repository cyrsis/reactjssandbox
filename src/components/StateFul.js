import React, { Component } from 'react';
import { StatelessWithProps } from "./StatelessWithProps";

const user ={
    name: 'Victor'
}

class StateFul extends Component {

    render() {
        return (
            <div>
            <h1>Here is sub stateful</h1>
            <StatelessWithProps user={user}/>
            </div>
        );
    }
}

export default StateFul;
