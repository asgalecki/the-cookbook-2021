import React from 'react';
import Welcome from './elements/Welcome';
import Newsletter from './newsletter/Newsletter';
import PopularRecipes from './popularRecipes/PopularRecipes';

class Aside extends React.Component {
  state = { 
    matches: window.matchMedia('(min-width: 768px)').matches
  };

  componentDidMount() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia('(min-width: 768px)').addListener(handler);
  };

  render() {
    const desktopStyle = 'my-2 p-2 border border-light rounded shadow';
    const mobileStyle = 'p-1 mt-4 border-top border-light rounded shadow';
    const captionStyle = 'text-center';

    return (
      <aside className='container col-md-4'>

        {!this.state.matches && ( // Mobile version
          <div>
            <Newsletter className={mobileStyle} captionClassName={captionStyle} />
            <PopularRecipes className={mobileStyle} captionClassName={captionStyle} />
          </div>
        )}

        {this.state.matches && ( // Desktop version
          <div className='ml-4'>
            <Welcome className={desktopStyle} />
            <Newsletter className={desktopStyle} />
            <PopularRecipes className={desktopStyle} />
          </div>
        )}

      </aside>
    )
  };
};

export default Aside;