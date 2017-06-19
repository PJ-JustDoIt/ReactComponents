// Tools used : Reactjs, CSS animation


var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;        
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
require('./index.css');		

var Nav = require('./components/Nav');
var Zoom=require('./components/Zoom');				
var Quantity=require('./components/Quantity');
var Tabs=require('./components/Tabs');
var FormAndMenu=require('./components/FormAndMenu');

//component definition
class App extends React.Component {			
  render() {								
    return (
     <Router>								
      <div className="container"> 
       <Nav />
       <Switch>
            <Route exact path='/' component={Zoom} />  {/* uses CSS animation */} 
            <Route path='/Quantity' component={Quantity} /> 
            <Route path='/Tabs' component={Tabs} />
            <Route path='/FormAndMenu' component={FormAndMenu} />
            <Route render={function () {        // for none of above paths used 
              return <p>Not Found</p>
            }} />
       </Switch>
      </div>
     </Router>	
    );
  }
}

// Rendering
ReactDOM.render(							
  <App />,
  document.getElementById('app')			
);



