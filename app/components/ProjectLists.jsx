import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import projects from './projects';

const ProjectsList = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <div key={index}>
          <h2>{project.name}</h2>
          <p>{project.details}</p>
          <link rel="stylesheet" href= {project.link || project.PlayStore || AppleStore} />
          <Carousel>
            {project.images.map((image, imageIndex) => (
              <div key={imageIndex}>
                <img src={image} alt={`Project ${index + 1} - Image ${imageIndex + 1}`} />
              </div>
            ))}
          </Carousel>
          <a href={project.link}>View Project</a>
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;
