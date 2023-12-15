import React from 'react'
import {useEffect} from 'react'

const Dashboard = () => {

  let key = import.meta.env.VITE_KEY
  let url= `https://api.spoonacular.com/recipes/random?apiKey=${key}`
  

  async function getRecipe() {
    try {
    const response = await fetch(url)
    const data = await response.json()
    } catch (error) {
      console.log(error)
    }
  }

  getRecipe()

  return (
    <div className='nes-text is-primary'>Dashboard</div>
  )
}

export default Dashboard