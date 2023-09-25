import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function BackgroundManager() {
  const location = useLocation();
  // url("http://localhost:3000/static/media/Image%20Home%20page.74a327ab7247036cf260.jpg")
  // url("http://localhost:3000/static/media/Image%202.5c99338ca2e9b459491c.jpg")
  // url("http://localhost:3000/static/media/Image%20Home%20page.74a327ab7247036cf260.jpg")
  useEffect(() => {
    const routeToBackgroundImage = {
      '/': 'http://localhost:3000/static/media/Image%20Home%20page.74a327ab7247036cf260.jpg', 
      '/chat': "http://localhost:3000/static/media/Image%202.5c99338ca2e9b459491c.jpg",
    };
    console.log(location.pathname)
    console.log(routeToBackgroundImage[location.pathname])
    document.body.style.backgroundImage = `url(${routeToBackgroundImage[location.pathname]})`;
  }, [location.pathname]);

  return null;
}

export default BackgroundManager;
