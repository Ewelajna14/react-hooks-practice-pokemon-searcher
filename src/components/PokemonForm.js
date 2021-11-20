import React, {useState} from "react";
import { Form } from "semantic-ui-react";


function PokemonForm({onNewPokemon}) {

const[name, setName]= useState("")
const[hp, sethp]= useState("")
const[front, setFront]= useState("")
const[back, setBack]= useState("")

function handleName(event){
setName(event.target.value)
}

function handleHp(event){
sethp(event.target.value)
}

function handleFront(event){
setFront(event.target.value)
}

function handleBack(event){
setBack(event.target.value)
}

function handleSubmit(event){
event.preventDefault()
const newPokemon ={
  name:name,
  hp:hp,
  sprites:{
  front:front,
  back:back
  }
}
fetch("http://localhost:3001/pokemon", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPokemon),
  })
    .then((r) => r.json())
    .then((newPokemon) => onNewPokemon(newPokemon));

setName("");
sethp("")
setFront("")
setBack("")

}


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={handleName} fluid label="Name" placeholder="Name" name="name" value={name}/>
          <Form.Input onChange={handleHp} fluid label="hp" placeholder="hp" name="hp" value={hp}/>
          <Form.Input onChange={handleFront}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={front}
          />
          <Form.Input onChange={handleBack}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={back}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
