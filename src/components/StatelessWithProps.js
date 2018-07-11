import React from 'react'

//Stateless Components
//pass in StatelessWithProps user={user}

export const StatelessWithProps = (props) => {
    return (
        <div>
            <a>{props.user.name} , pass in the props and render out</a>
        </div>
    )
}




