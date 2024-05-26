import React from 'react'
import Header from './Header'
import Title from '../Shared/Title'

function AppLayout(WrappedComponent){
  return (props) =>{
    return(
        <div>
            <Title/>
            {/* here applayout is a high order component  */}
            <Header/>
            <WrappedComponent {...props}/>
            <div>Footer</div>
        </div>
    )
  }
}

export default AppLayout