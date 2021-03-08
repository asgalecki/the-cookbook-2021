import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Navbar from './static/navbar/Navbar';
import Footer from './static/footer/Footer';

import Recipe from './modules/recipe/Recipe';
import Recipes from './modules/recipes/Recipes';
import Contact from './modules/contact/Contact';
import Categories from './modules/categories/Categories';
import FilteredRecipes from './modules/search/FilteredRecipes';

import AddRecipe from './modules/user/addRecipe/AddRecipe';
import Settings from './modules/user/userSettings/Settings';
import MyRecipes from './modules/user/userRecipes/UserRecipes';

import SignIn from './modules/auth/signIn/SignIn';
import SignUp from './modules/auth/signUp/SignUp';
import ResetPassword from './modules/auth/resetPassword/ResetPassword';

import Home from './pages/Home';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';
import Sitemap from './pages/Sitemap';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <ScrollUpButton 
            AnimationDuration={1000} 
            style={{zIndex: 2}}
          />
          <Route render={({location}) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={1000}
                classNames='fade'  
              >
                <Switch location={location} >
                  <Route exact path='/' component={Home} />
                  <Route exact path='/recipes' component={Categories} />
                  <Route exact path='/recipes/:id' component={Recipes} />
                  <Route exact path='/recipes/:category/:id' component={Recipe} />
                  <Route exact path='/search/:name' component={FilteredRecipes} />
                  <Route path='/contact' component={Contact} />
                  <Route path='/add' component={AddRecipe} />
                  <Route path='/myrecipes' component={MyRecipes} />
                  <Route path='/signin' component={SignIn} />
                  <Route path='/signup' component={SignUp} />
                  <Route path='/settings' component={Settings} />
                  <Route path='/resetpassword' component={ResetPassword} />
                  <Route path='/about' component={About} />
                  <Route path='/terms' component={Terms} />
                  <Route path='/privacy' component={Privacy} />
                  <Route path='/sitemap' component={Sitemap} />
                  <Route component={NotFound} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  };
};

export default App;