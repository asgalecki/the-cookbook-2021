import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRecipeByName } from '../../store/actions/recipeActions';

const linkRef = React.createRef();
const componentRef = React.createRef();

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeName: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      recipeName: ''  
    });
  }

  handleInputChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value    
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.getRecipeByName(this.state.recipeName);
    setTimeout(() => {
      linkRef.current.click();
      componentRef.current.click();
      this.setState({
        recipeName: ''   
      });
    }, 300);
  }

  render() {
    return (
      <div className='dropdown-menu bg-dark' aria-labelledby='navbarDropdownMenuLink' ref={componentRef}>
        <form className='form-inline m-2' onSubmit={this.handleSubmit}>
          <input 
            type='search'
            className='form-control m-1'
            aria-label='Search'
            name='recipeName'
            placeholder='Find a Recipe'
            value={this.state.recipeName}
            onChange={this.handleInputChange}
          />
          <button className='btn btn-outline-light m-1' type='submit'>Search</button>
          <Link to={`/search/${this.state.recipeName}`} className='invisible' ref={linkRef} />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRecipeByName: (recipeName) => dispatch(getRecipeByName(recipeName))
  }
}

export default connect(null, mapDispatchToProps)(SearchBar);