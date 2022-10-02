import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([])
  useEffect(() => {
    addBot()
  }, [])
  const addBot = async () => {
    try {
      const res = await fetch('http://localhost:8002/bots')
      const data = await res.json()
      setBots(data)

    } catch (error) {
      console.log(error)
    }
  }

  const handleClick = event => {
    console.log(event.target.value);
    console.log('Image clicked');
  };

  console.log("My data ==>", bots)
  return (
    <div>
      <YourBotArmy bots={bots} />
      <BotCollection bots={bots} onClick={handleClick} />
    </div>
  )
}

export default BotsPage;
