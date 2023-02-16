import { useEffect, useState } from 'react';
import Card from '../UI/Card'
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem'

// const DUMMY_MEALS = [
//     {
//       id: 'm1',
//       name: 'Sushi',
//       description: 'Finest fish and veggies',
//       price: 22.99,
//     },
//     {
//       id: 'm2',
//       name: 'Schnitzel',
//       description: 'A german specialty!',
//       price: 16.5,
//     },
//     {
//       id: 'm3',
//       name: 'Barbecue Burger',
//       description: 'American, raw, meaty',
//       price: 12.99,
//     },
//     {
//       id: 'm4',
//       name: 'Green Bowl',
//       description: 'Healthy...and green...',
//       price: 18.99,
//     },
//   ];

  const AvailableMeals = () => {
    const [loadedMeals, setLoadedMeals] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [mealError, setMealError] = useState(null)
    
    useEffect( () => {
      const FetchMeals = async () => {
        
          const response = await fetch('https://react-http-54231-default-rtdb.europe-west1.firebasedatabase.app/meals.json')
          if(!response.ok) {
            throw new Error('STH went wrong!')
          }
          const mealData = await response.json();
          const meals = []
          for( const key in mealData) {
            meals.push({...mealData[key], id: key})
          }
          setLoadedMeals(meals)
          setIsLoading(false)           
       
        }
          FetchMeals().catch(error => {
            setIsLoading(false);
            setMealError(error.message);
          });
        
       
    },[])
  
    if(isLoading) {
      return (
        <section className={classes.mealsLoading}>
          <p>Loading Meals...</p>
        </section>
      )
    }

    if(mealError) {
      return (
        <section className={classes.mealsError}>
          <p>{mealError}</p>
        </section>
      )
    }
    
    const mealList = loadedMeals.map((meal) =>  { return <MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price} />});
    return (
        <section className={classes.meals}>
            <Card>
            <ul>
              {mealList} 
            </ul>
            </Card>
        </section>
    )

  };

  export default AvailableMeals;