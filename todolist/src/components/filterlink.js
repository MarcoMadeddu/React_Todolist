import React from 'react'

const filterLink = ({actionType , children}) =>{
    return(
        <a href ="/" onClick = {
            (e) => {
                e.preventDefault();
            }
        }>
            

        <i>{children}</i>
        </a>
    )
}

export default filterLink;
