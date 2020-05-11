import React, { useState } from 'react';
import "./css/style.css"
import GuestList from './GuestList'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isFiltered: false,
      guests : [
        {
          name: "Dragan",
          isConfirmed: false
        },
        {name: 'Luka', isConfirmed: true, isEditing: false},
        {name: 'Danijela', isConfirmed: false, isEditing: false},
        {name: 'Emilija', isConfirmed: false, isEditing: false},
        {name: 'Kristina', isConfirmed: false, isEditing: true},
      ]
    }
  }
  getTotalInvited = () => this.state.guests.length;
  getAttendingGuests = () => this.state.guests.filter(p=>p.isConfirmed).length;
  getUnconfirmedInvitations =() => this.state.guests.filter(p=>!p.isConfirmed).length
  toggleGuestPropertyAt = (property, indexToChange) =>{
    // [property] -> computed property
    this.setState({
      guests: this.state.guests.map((guest, index)=>{
        if (index === indexToChange){
          return {
            ...guest,
            [property]: !guest[property]
          }
        }else{
          return guest;
        }
      })
    })
  }

  toggleConfirmationAt =(index)=>{
    this.toggleGuestPropertyAt('isConfirmed', index)
  }

  toggleIsEditingAt = (index)=>{
    this.toggleGuestPropertyAt('isEditing', index)
  }

  setNameAt = (name, index)=>{
    this.setState({
      guests: this.state.guests.map((guest, curIndex)=>{
        if(index===curIndex){
          return {
            ...guest,
            name: name
          }
        }
        return guest
      })
    })
  }

  toggleFilter = () =>{
    this.setState({
      isFiltered: !this.state.isFiltered,
    })
  }
  

  render() {
    return (

      <div className="App" >
        <header>
          <h1>RSVP</h1>
          <p>Developer's MeetUp Switzerland on July 12 in St.Gallen</p>
          <form>
            <input type="text" value="Safia" placeholder="Invite Someone" />
            <button type="submit" name="submit" value="submit">Submit</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox" 
              checked={this.state.isFiltered}
              onChange={this.toggleFilter}/> Hide those who haven't responded
          </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>{this.getAttendingGuests()}</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>{this.getUnconfirmedInvitations() }</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>{this.getTotalInvited()}</td>
              </tr>
            </tbody>
          </table>
          <GuestList guests={this.state.guests} 
          toggleConfirm={this.toggleConfirmationAt}
          toggleEditingAt={this.toggleIsEditingAt}
          setNameAt={this.setNameAt}
          isFiltered={this.state.isFiltered}
          />
        </div>
      </div>
    );
  }
}

export default App;
