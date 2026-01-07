import React from 'react';
import './ShuffleGalleryStyles.css';

const ShufflingGallery = ({ items = [] }) => {
  const defaultItems = [
    {
      title: "Kitten: Ollie (12 Weeks)",
      img: {
        src: "https://assets.codepen.io/652/the-lucky-neko-CM7a-XBD4AU-unsplash.jpg",
        alt: "a white kitten with brown and black spots sitting with its paws slightly outstretched.",
      },
    },
    {
      title: "Puppy: Barney (9 Weeks)",
      img: {
        src: "https://assets.codepen.io/652/karsten-winegeart-NE0XGVKTmcA-unsplash.jpg",
        alt: "a brown French bulldog puppy laying down and looking up with a hopeful look in its eyes.",
      },
    },
    {
      title: "Cat: Walter (5 Years)",
      img: {
        src: "https://assets.codepen.io/652/kabo-NjWZ07sPEJE-unsplash.jpg",
        alt: "A large long-haired orange cat with a white belly.",
      },
    },
    {
      title: "Dog: Miss Sunshine (2 Years)",
      img: {
        src: "https://assets.codepen.io/652/giacomo-lucarini-7M0SG3ZKdlE-unsplash.jpg",
        alt: "A light brown, long-haired chihuahua sitting next to three rubber duckies.",
      },
    },
    {
      title: "Kitten: Reese (8 Weeks)",
      img: {
        src: "https://assets.codepen.io/652/sergey-semin-Y0WXj3xqJz0-unsplash.jpg",
        alt: "A tabby kitten with green eyes.",
      },
    },
  ];

  const galleryItems = items.length > 0 ? items : defaultItems;

  return (
    <div className="shuffling-gallery-container">
      <div className="creationsBlocUl">
        {galleryItems.map((item, index) => (
          <figure key={index} className="creaBlock creaBlockPrez">
            <div className="lineSeparator"></div>
            <div className="blocImg">
              <img src={item.img.src} alt={item.img.alt} />
            </div>
            <figcaption>{item.title}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default ShufflingGallery;