import React from 'react'

//Stateless Components

export const DisplayText = (props) => {

    console.log(this.props)

    var isOld = this.props[1].gender === 'Male' ? "he is a man" : "She is a women"
    return (
        <div>

          //  <p>he is at {this.props[1].first_name}</p>

        </div>
    )
}


