import React from 'react';
import './projects.css'




export default function Projects({lists}) {

  return (
    <div>  
        {lists.map((list) => (
            
        <div key={list.id}>
            <h2> {list.title} </h2>
            <img src= {list.img} />
            <p>{list.description}</p>
            <p>{list.gitHub}</p>
            <p>{list.deployed}</p>
        </div>  
        ))}
    </div> 
  );
}