import React from 'react';
import image1 from'../../assets/proj.png'
import image2 from'../../assets/Homr.png'
import image3 from'../../assets/Bills.png'
import image4 from'../../assets/notekeeper.png'
import image5 from'../../assets/teamgenerator.png'
import image6 from'../../assets/dayplanner.png'

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Projects</h1>
      <section id="projects" class="project-cont">
               
        <h3> 
          Refactor for SEO</h3>
          <a href="https://allen-ek.github.io/code-refactor/">
               
            <img src={image1} alt="https://allen-ek.github.io/code-refactor/" class="float-center" />
              </a>
                       
                       
                  
              
                <h3>Baseball Fan Site</h3>
                <a href="https://shwethareddy0.github.io/homr/">
                   <img src={image2} alt="https://shwethareddy0.github.io/homr/" class="float-center" />
                   </a>
          <h3>Budget Tracker</h3>
         <a href="https://bills-manager2022.herokuapp.com/">
                           <img src={image3} alt="https://bills-manager2022.herokuapp.com/" class="float-center" />
                           </a>
                           <h3>Note Keeper</h3>
                           <a href="https://github.com/allen-ek/note-keeper">
                           <img src={image4} alt="https://github.com/allen-ek/note-keeper" class="float-center" />
                           </a>
                           <h3>Team Page Generator</h3>
                           <a href="https://github.com/allen-ek/CLI-TeamPageGenerator">
                           <img src={image5} alt="https://github.com/allen-ek/CLI-TeamPageGenerator" class="float-center" />
                           </a>
                           <h3>Day Planner</h3>
                           <a href="https://github.com/allen-ek/day-planner">
                           <img src={image6} alt="https://github.com/allen-ek/day-planner" class="float-center" />
                           </a>
           </section>
    </div>
  );
}
