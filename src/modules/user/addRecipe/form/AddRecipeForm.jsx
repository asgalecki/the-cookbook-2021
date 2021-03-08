import React from 'react';
import { connect } from 'react-redux';
import { createRecipe } from '../../../../store/actions/recipeActions';
import validateYouTubeUrl from '../../../../helpers/validateYouTubeUrl';

import NameInput from './NameInput';
import CategoryOption from './CategoryOption';
import AreaOption from './AreaOption';
import IngredientInput from './IngredientInput';
import MeasureInput from './MeasureInput';
import InstructionInput from './InstructionInput';
import ImageInput from './ImageInput';
import VideoInput from './VideoInput';

class AddRecipeForm extends React.Component {
  state = {
    strMeal: '',
    strCategory: 'Miscellaneous',
    strArea: 'Unknown',
    strMealThumb: '',
    strIngredient: [''],
    strMeasure: [''],
    strInstructions: '',
    strYoutube: '',
    displayMessage: false
  };

  handleInputChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleFormElement = (name, value) => {
    this.setState({ [name]: value });
  };

  handleElement = (e, name) => {
    let elementArray;
    ( name === 'strMeasure' ? elementArray = [...this.state.strMeasure] : elementArray = [...this.state.strIngredient] )
    elementArray[e.target.dataset.id] = e.target.value;
    this.setState({ 
      [name]: elementArray
    });
  };

  addElement = (e, name) => {
    let elementArray;
    ( name === 'strMeasure' ? elementArray = [...this.state.strMeasure] : elementArray = [...this.state.strIngredient] )
    elementArray[e.target.dataset.id] = e.target.value;
    this.setState({
      [name]: [...elementArray, e]
    });
  }

  removeElement = (e, name) => {
    let elementArray;
    ( name === 'strMeasure' ? elementArray = [...this.state.strMeasure] : elementArray = [...this.state.strIngredient] )
    elementArray.pop();
    this.setState({ 
      [name]: elementArray
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.strIngredient.length !== this.state.strMeasure.length) {
      return alert('Ingredients and Measure must have the same number of elements!');
    }

    const isYoutubeValid = validateYouTubeUrl(this.state.strYoutube);

    if (isYoutubeValid || !this.state.strYoutube) {
      this.setState({
        strYoutube: isYoutubeValid
      });

      if (!this.state.strMealThumb) {
        this.setState({
          strMealThumb: 'https://unsplash.com/photos/baI6aII6Cvk/download?force=true&w=640'
        });
      }

      this.setState({
        displayMessage: true
      });

      setTimeout(() => {
        this.props.createRecipe(this.state);
        this.props.history.push('/');
      }, 1000);

    } else {
      this.setState({
        strYoutube: 'It seems that this address is incorrect. Try again.'
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <NameInput {...this.state.strMeal} handleFormElement={this.handleFormElement} />
        <CategoryOption {...this.state.strCategory} handleFormElement={this.handleFormElement} />
        <AreaOption {...this.state.strArea} handleFormElement={this.handleFormElement} />
        { this.state.strIngredient.map((ingredient, index) => {
          let ingredientId = `ingredient-${index}`;
          return (
            <IngredientInput 
              {...this.state.strIngredient} 
              handleElement={this.handleElement} 
              addElement={this.addElement} 
              removeElement={this.removeElement} 
              lengthValue={this.state.strIngredient.length}
              ingredientId={ingredientId}
              index={index}
            />
          )
        })}
        { this.state.strMeasure.map((measure, index) => {
          let measureId = `measure-${index}`;
          return (
            <MeasureInput 
              {...this.state.strMeasure} 
              handleElement={this.handleElement} 
              addElement={this.addElement} 
              removeElement={this.removeElement} 
              lengthValue={this.state.strMeasure.length}
              measureId={measureId}
              index={index}
            />
          )
        })}
        <InstructionInput {...this.state.strInstructions} handleFormElement={this.handleFormElement} />
        <ImageInput {...this.state.strMealThumb} handleFormElement={this.handleFormElement} />
        <VideoInput {...this.state.strYoutube} handleFormElement={this.handleFormElement} />

        <button type='submit' className='btn btn-warning'>Add recipe</button>
        <p className='my-4 text-muted text-center'>*Required.</p>

        { this.state.displayMessage ? <p className='my-4 text-warning text-center'>Your recipe has been successfully added.</p> : null }

      </form>
    )
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createRecipe: (recipe) => dispatch(createRecipe(recipe))
  }
}

export default connect(null, mapDispatchToProps)(AddRecipeForm);