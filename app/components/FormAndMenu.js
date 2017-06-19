var React = require('react');


class FormAndMenu extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
                   "Name":"",
                   "PhoneNumber":"",
                   "Time": "",
                   "AMPM":"AM"
                  };
    
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleChange = this.handleChange.bind(this);
  }



handleSubmit(event) {
    // event.preventDefault();

    //   $.ajax({
    //   url: '/some/url',
    //   dataType: 'json',
    //   type: 'POST',
    //   data: formData,
    //   success: function(data) {     },
    //   error: function() {   }
    // });
    
}

handleChange(event) {
  this.setState({[event.target.name]: event.target.value});     // why [] ????
}


render() {
    return (
      <div id = "FormAndMenuContainer">
       <div id="ContainerContent">
        <form onSubmit={this.handleSubmit}>
          
          <h4>MAKE  APPOINTMENT  REQUEST </h4>

          <div className="field">
            <label for="Nameid">FULL NAME</label>  {/* There are two different "value " in forms.  a) value = default info that appears. b) Any input / select tag has a value associated with it .This value is sent as event.target.value from the form when u do onChange or onSubmit */}
            <input type="text" value={this.state.Name} name="Name" id="Nameid" onChange={this.handleChange} />  
          </div>

          <div className="field">  
            <label for="Phoneid">PHONE NUMBER</label>  
            <input type="text" value={this.state.PhoneNumber} name="PhoneNumber" id="Phoneid" onChange={this.handleChange} />  
          </div>

          <div>
            <label>APPOINTMENT TIME  </label>
            
            <div>
                <select id="TimeSelectid" name="Time" onChange={this.handleChange}>
                  <option>   1.00    </option>
                  <option>   2.00    </option>
                  <option>   3.00    </option>
                  <option>   4.00    </option>
                  <option>   5.00    </option>
                  <option>   6.00    </option>
                  <option>   7.00    </option>
                  <option>   8.00    </option>
                  <option>   9.00    </option>
                  <option>   10.00   </option>
                  <option>   11.00   </option>
                  <option>   12.00   </option>
                </select>

                 <input type="radio" name="AMPM" id="radiostyle1" value="AM" checked={this.state.AMPM==="AM"} onChange={this.handleChange}/>  {/* checked is default value . value field's value is sent when button is submitted/ onchange . The two radio buttons are lined by name tag*/}
                 <label for="radiostyle1"><span></span> am  </label>
                 
                 <input type="radio" name="AMPM" id="radiostyle2" value="PM" checked={this.state.AMPM==="PM"} onChange={this.handleChange}/>
                 <label for="radiostyle2"><span></span> pm  </label>

              </div>
          </div>    
          <div className="field">
            <input type="submit" value="SUBMIT REQUEST" />
          </div>
        </form>
      </div> 
    <pre>{JSON.stringify(this.state, null, '\t')} </pre>   {/* pre tags are for retaining the format of text  without reformatting them to default indentation etc */}
   </div>
  );
 }
}

module.exports = FormAndMenu;

