import React from "react";

class Info extends React.Component {
  render() {
    const title = "this is my title.";
    const showTitle = true;
    return (
      <div>
        <h3>{showTitle ? title : "No title"}</h3>
        <h1>Inventory System</h1>
        <p>manage your stuff.</p>
      </div>
    );
  }
}

/* function Info(){
    const title = "this is my title.";
    const showTitle = true;
    return (
      <div>
        <h3>{showTitle ? title:"No title"}</h3>
        <h1>Inventory System</h1>
         <p>manage your stuff.</p>
      </div>
  
    );
  
  } */
export default Info;
