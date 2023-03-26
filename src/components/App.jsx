import React from "react";
import contacts from "../contacts";
import "/public/styles.css";
import Card from "./Cards";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      id={contact.id}
      name={contact.name}
      imgUrl={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar imgURL="https://pbs.twimg.com/profile_images/1635392893564375041/GT_WiZGZ_400x400.jpg" />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
