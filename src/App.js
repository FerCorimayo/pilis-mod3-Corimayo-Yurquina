import {Routes, Route} from 'react-router-dom'

import Home from "./routes/Home/Home";
import NewCard from "./routes/Card/CreationCard";
import Navigation from "./routes/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path='newCard' element={<NewCard/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
