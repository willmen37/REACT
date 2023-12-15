import './App.css'
import HomePage from "./components/HomePage";
import Recipes from './components/Recipes';
import RecipeDetails from './components/RecipeDetails';
import { Route, Routes} from 'react-router-dom'
import Dashboard from "./components/Dashboard"

function App() {
 

  return (
    <>
      <Dashboard/>
      <Routes>
        <Route path='/' component={HomePage} />
        <Route path='/recipes' component={Recipes}/>
        <Route path='/recipe:id' component={RecipeDetails}/>


        hello 
        
      </Routes>
    </>
    
  )
}

export default App
