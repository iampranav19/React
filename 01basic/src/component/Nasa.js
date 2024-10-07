import React, { useState, useEffect } from 'react';

function Nasa() {
  const [mars, setMars] = useState(null); // Initialize with null to check loading state

  useEffect(() => {
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
      .then((response) => response.json())
      .then((data) => {
        setMars(data); // Set data after fetch
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <>
      <h2>Mars Details</h2>

      {/* Handle loading state */}
      {!mars ? (
        <p>Loading...</p> // Display this while data is being fetched
      ) : (
        <table border={1}>
          <thead>
            <tr>
              <th>Photo ID</th>
              <th>Camera Name</th>
              <th>Rover Name</th>
              <th>Preview</th>
            </tr>
          </thead>
          <tbody>
            {
              mars.photos.map(photo=>
                <tr key={photo.id}>
                <td>{photo.id}</td>
                <td>{photo.camera.full_name}</td>
                <td>{photo.rover.name}</td>
                <td>
                  <img src={photo.img_src} width="100" height="100" alt="Mars" />
                </td>
              </tr>
              )
            }
          </tbody>
        </table>
      )} 
    </>
  );
}

export default Nasa;
