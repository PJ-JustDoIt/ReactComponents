var React = require('react');
var NavLink = require('react-router-dom').NavLink;   //react needs this for anchor tags 

function Nav () {						/* for anchor tags . Note use of activeClassName and exact . activeClassName is applied only for / and not for /...   */
  return (
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/'>Home</NavLink>   
      </li>
      <li>
        <NavLink activeClassName='active' to='/Quantity'>Quantity Component</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/Tabs'>Tab Component</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/FormAndMenu'>FormAndMenu Component</NavLink>
      </li>
    </ul>
  )
}

module.exports = Nav;