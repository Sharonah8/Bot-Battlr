import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bot, setBot] = useState([])
  useEffect(() => {
    addBot()
  }, [])
  const addBot = async () => {
    try {
      const res = await fetch('http://localhost:8002/bots')
      const data = await res.json()
      setBot(data)

    } catch (error) {
      console.log(error)
    }
  }
  console.log("My data ==>", bot)
  return (
    <div>
      <YourBotArmy />
      <BotCollection bot={bot} />
    </div>
  )
}

export default BotsPage;
