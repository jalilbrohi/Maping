import React from "react";
import Button from "./Button";
import UsageofMap from "./UsageofMap";
import Function from "./Function";
function HomePage() {
  return (
    <div>
      HomePage
      {/* <Button text={"Click Me"} />
      <Button text={"Submitt"} /> */}
    
    <UsageofMap/>
    <div>
    <Function 
          number={1} description={"Welcome to test world"} header={"Tururur"}
          haveHover={false}/>
        
    </div>
    </div>
  );
}

export default HomePage;
