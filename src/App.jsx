import { useState } from 'react'
// import { IconName } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import Header from './components/Header';
import Category from './components/Category';
import Restaurants from './components/Restaurants';
import OnlineDelivery from './components/OnlineDelivery';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
            <Header/>
            <Category/>
            <Restaurants/>
            <OnlineDelivery/>
    </div>
  )
}

export default App
