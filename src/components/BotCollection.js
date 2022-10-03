import React from "react";
import BotCard from "./BotCard";
function BotCollection({ bots, handleClick}) {

  // console.log("This is:", bot)
  // console.log(data);
  // Your code here



  return (
    <div className="ui four column grid">
      <div className="row">
       {bots.map((bot)=> (<BotCard key={bot.id} bot={bot} handleClick={handleClick} /> )) }
      </div>
    </div>
  );
}

export default BotCollection;
