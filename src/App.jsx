import './App.css';
import React from 'react';
import './App.css';
import RocketTiles from './components/cards';

function HomePage() {
  const [rocket, setRocket] = React.useState([]);

  const getRocketData = async () => {
    let api = "https://api.spacexdata.com/v4/rockets";
    const response = await fetch(api);    
    const jsonRes = await response.json();
    setRocket(jsonRes);
  }

  React.useEffect(() => {
    getRocketData();
  }, [])
  
  return (
    <>
      {console.log(rocket)}
      
      <RocketTiles response= {rocket}></RocketTiles>
    </>
  );
}

export default HomePage;
