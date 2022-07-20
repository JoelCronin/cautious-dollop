import React from 'react';
import './styles/projects.css'




export default function Projects({lists}) {

  return (
    <section class="container container-3">
        {lists.map((list) => (
          
            
<article className="project" key={list.id}>
<h3>{list.title}</h3>
<a href={list.gitHub}><img src={list.img} alt={list.description} class="second-project"/></a>
<p>{list.description}</p>
</article>
        ))}
  </section> 
  );
}

