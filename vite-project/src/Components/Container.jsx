import React from 'react'
import Cards from '../Components/Cards';

export class Container extends React.Component {
  render() {
    return (
      <div className='container-space'>
      <h2>This is the container</h2>
        <Cards/>
      </div>
    )
  }
}

export default Container
