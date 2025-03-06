import './App.css'
import React, { useState } from 'react';
import TwitterFollowCard from './TwitterFollowCard.jsx';

function App() {
  const format = (username) => `@${username}`

  const pheralb = {
    isFollowing: true,
    formatUserName: format,
    name: 'Pher Alb',
    userName: 'pheralb'
  }


  return (
    <>
    <TwitterFollowCard 
      formatUserName={format} 
      isFollowing={false} 
      userName={'midudev'} 
      name={'Juan Jose Pabon'}/>

    <TwitterFollowCard {...pheralb}/>
    <TwitterFollowCard formatUserName={format} isFollowing name={'Elon Musk'} />
    </>

  )
}

export default App; 
