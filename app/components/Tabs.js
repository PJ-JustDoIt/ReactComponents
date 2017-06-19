var React = require('react');


function Tabbox (props) { 
  var tabList = [ 
                 {tabName: "Tab 1",
                  textContent: "Text Content for Tab 1 goes here"},
                 {tabName: "Tab 2",
                  textContent: "Text Content for Tab 2 goes here"},
                 {tabName: "Tab 3",
                  textContent: "Text Content for Tab 3 goes here"}
                ];


  return (
    <ul id='tabPane'>
      {tabList.map(function (tab) {
        return (
          <li style={tab.tabName !== props.selectedTab.tabName ? {color : '#000000'} : null}
           onClick = {props.onSelect.bind(null, tab)} 
            key={tab.tabName}>
              {tab.tabName}
          </li>
        )
      })}
    </ul>
  )               
}

function Textbox (props) { 
  return (
   <div id="textPane"> 
    {props.textContent} 
   </div> 
  )               
}


class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: {}
    }
    this.updateTab = this.updateTab.bind(this);
  }

  updateTab(tab) {
    this.setState(function () {
      return {
        selectedTab : tab 			
      }
    });
  }

render() {
    return (
       <div id="tabcontainer">

         <Tabbox
          selectedTab={this.state.selectedTab}
          onSelect={this.updateTab} />
          
         <Textbox textContent={this.state.selectedTab.textContent} />

       </div> 
    );
  }
}

module.exports = Tabs;