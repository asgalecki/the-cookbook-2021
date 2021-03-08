import React from 'react';

const Ingredients = (props) => {
  const { recipe } = props;
  let combinedArray;

  if (recipe.authorId) {
    // RECIPE FROM FIRESTORE
    combinedArray = (ingredients, measure) => {
      const newArray = [];
  
      for (let i = 0; i < ingredients.length; i++) {
        const combinedElement = `${measure[i]} - ${ingredients[i]}`;
        newArray.push(combinedElement);
      }
  
      return newArray;
    }
  } else {
    // RECIPE FROM API
    combinedArray = () => {
      const newArray = [];
  
      for (let i = 1; i < 21; i++) {
        const measure = `strMeasure${i}`;
        const ingredient = `strIngredient${i}`;
        const combinedElement = `${recipe[measure]} - ${recipe[ingredient]}`;
        if (recipe[measure] && recipe[ingredient]) {
          newArray.push(combinedElement);
        }
      }
  
      return newArray;
    }
  }

  return (
    <div className='my-2'>
      <h5 className='text-uppercase my-2'>Ingredients</h5>
      <ul className='list-unstyled'>
        {(recipe.authorId) ? 
          (combinedArray(recipe.strIngredient, recipe.strMeasure).map(element => <li>{element}</li>))
        : 
          (combinedArray().map(element => <li>{element}</li>))
        }
      </ul>
    </div>
  )
}

export default Ingredients;