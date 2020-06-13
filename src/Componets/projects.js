import React from 'react';
import Thumbnail from './thumbnail.js'; // Import the Thumbnail component
import "./styles/cards.css";
 
function Projects() {
  return (
    <div>
        <h4 className="title">Projects</h4>
        <div className="card-group">
            <div className="card">
                <Thumbnail
                link="/twitter"
                image="http://twitter-image-url.jpg"
                title="BudgetTracker"
                description="Individuals and families can submit their monthly expenses or bills and 
                track their finances in a visual real-time chart. The data is stored on our servers." 
                />
            </div>
            <div className="card">
                <Thumbnail
                link="/Facebook"
                image="http://twitter-image-url.jpg"
                title="ArabicBabyNames"
                description="Families can get guidance in finding the perfect name for their baby. 
                They will get an english definition, a picture of a famous celebrity and can pick gender."
                />
            </div>
            <div className="card">
                <Thumbnail
                link="/LinkedIn"
                image="http://twitter-image-url.jpg"
                title="PoliceData"
                description="Information about police killings from The WallStreet Journal 
                was imported into a D3 and Victory Chart application to analyze trends based on demographics."
                />
            </div>
      </div>
    </div>
  )
}

 
export default Projects;