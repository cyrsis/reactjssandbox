import React, { Component } from 'react';
import '../../App.css'
import { Clock } from "./Clock";
import {Form, FormControl , Button} from 'react-bootstrap';

class CountDownStateFul extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 25, 2017',
            newDeadline : ''
        }
    }
    render() {
        return (
            <div>

                <div className="CountDownApp">
                    <div className="CountDownAppTitle">
                        CountDown to {this.state.deadline}
                    </div>
                    <Clock deadline={this.state.deadline}/>
                    <Form inline>
                         <FormControl className="Deadline-input"
                         placeholder = 'new date'
                                      onChange={event=> this.setState({newDeadline: event.targe.value})}

                         />
                    </Form>



                </div>
            </div>
        );
    }
}

export default CountDownStateFul;
