import React from 'react'
import Person from './Person'


function Namelist() {
  const names=['bruno','charlie','gloria']
  // const Items=[
  //   {
  //     id:1,
  //     name:'vilas',
  //     place:'hyd',
  //   },
  //   {
  //     id:2,
  //     name:'sanjeev',
  //     place:'bihar'
  //   },
  //   {
  //     id:5,
  //     name:'ram',
  //     place:'ayodhya'
  //   }
  // ]
 
//  const person=Items.map(Item => <Person key={Item.name} Item={Item} />)
const kite=names.map((name,index) =><h2 key ={index}> {index} {name} </h2>) 
  return <div>{kite}</div>
  }

export default Namelist
