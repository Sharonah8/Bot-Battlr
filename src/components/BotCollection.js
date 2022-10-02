import React from "react";
import BotCard from "./BotCard";
function BotCollection({ bot }) {

  console.log("This is:", bot)
  // console.log(data);
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
       {bot.map((bot)=> (<BotCard bot={bot} /> )) }
      </div>
    </div>
  );
}

export default BotCollection;
