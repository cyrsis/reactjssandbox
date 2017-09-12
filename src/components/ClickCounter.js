import React, { Component } from 'react';



class ClickCounter extends Component {



    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
    }

    HandleonClickButton = (evt) =>
    {
        this.setState({
            count:this.state.count+1
        });

    }
    render() {
        return (
            <div>
                <button onClick={this.HandleonClickButton}> Click me </button>
                <div>
                    Click Count: {this.state.count}
                </div>
            </div>
        );
    }
}

export default ClickCounter;
