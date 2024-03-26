import React from 'react'
import Cards from '../Components/Cards';

export class Container extends React.Component {
  render() {
    return (
      <div className='container' lg={3} sm={6} md={4}>
      <h2>This is the container</h2>
        <Cards/>
      </div>
    )
  }
}

export default Container
