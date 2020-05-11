import React from 'react';
import "./css/style.css"
import GuestList from './GuestList'
import Counter from './Counter'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      personToInvite: '',
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

  invitePerson =(e) =>{
    e.preventDefault();
  this.setState({
    
    guests: [
      {
        name: this.state.personToInvite,
        isEditing: false,
        isConfirmed: false
      },
      ...this.state.guests
    ],
    personToInvite: ''
  })
   
  }

  handleInvite = e =>{
    this.setState({
      personToInvite: e.target.value
    })
  }

  handleRemove = (index) =>{
    this.setState({
      guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index + 1)
      ]
    })
  }
  

  render() {
    return (

      <div className="App" >
        <header>
          <h1>RSVP</h1>
          <p>Developer's MeetUp Switzerland on July 12 in St.Gallen</p>
          <form onSubmit={this.invitePerson}>
            <input type="text" 
            placeholder="Invite Someone" 
            value={this.state.personToInvite}
            onChange={this.handleInvite}/>
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
          <Counter 
          numberAttending={this.getAttendingGuests()}
          numberUnconfirmed={this.getUnconfirmedInvitations() }
          numberTotal={this.getTotalInvited()}/>
          
          <GuestList guests={this.state.guests} 
          toggleConfirm={this.toggleConfirmationAt}
          toggleEditingAt={this.toggleIsEditingAt}
          setNameAt={this.setNameAt}
          isFiltered={this.state.isFiltered}
          handleRemove={this.handleRemove}
          pendingGuest={this.state.personToInvite}
          />
        </div>
      </div>
    );
  }
}

export default App;
