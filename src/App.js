import React, { useState } from 'react';
import "./css/style.css"
import GuestList from './GuestList'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      guests : [
        {
          name: "Dragan",
          isConfirmed: false
        },
        {name: 'Luka', isConfirmed: true},
        {name: 'Danijela', isConfirmed: false},
        {name: 'Emilija', isConfirmed: false},
        {name: 'Kristina', isConfirmed: false},
      ]
    }
  }
  getTotalInvited = () => this.state.guests.length;
  getAttendingGuests = () => this.state.guests.filter(p=>p.isConfirmed).length;
  getUnconfirmedInvitations =() => this.state.guests.filter(p=>!p.isConfirmed).length
  toggleConfirmationAt = (indexToChange) =>{
    console.log("toggle confirmation at index ", indexToChange)
    this.setState({
      guests: this.state.guests.map((guest, index)=>{
        if (index === indexToChange){
          return {
            ...guest,
            isConfirmed: !guest.isConfirmed
          }
        }else{
          return guest;
        }
      })
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
              <input type="checkbox" /> Hide those who haven't responded
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
          <GuestList guests={this.state.guests} toggleConfirm={this.toggleConfirmationAt}/>
        </div>
      </div>
    );
  }
}

export default App;
