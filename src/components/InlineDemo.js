import React from 'react'

//Stateless Components

export const InlineDemo = (props) => {
    return (
        <div>
            <div className="form-inline">
                <div className="form-group">
                    <input type="text" className="form-control"
                           placeholder="I have to..."
                           onChange={event=> this.setState({text:event.target.value})}
                    />
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => this.addReminder()}
                    >
                        Add Reminder
                    </button>
                </div>
            </div>
        </div>
    )
}


