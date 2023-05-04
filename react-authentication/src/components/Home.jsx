import React from 'react';
import Banner from './Banner';
import ChefData from './ChefData';
import Special from '../extra-section/Special';

const Home = () => {
    return (
        <div>
           <div className="banner py-5">
            <Banner></Banner>
           </div>
           <div className="chefdata flex flex-col-reverse">
       
          <ChefData></ChefData>
        
      </div>
      <div className="special py-7">
        <Special></Special>
      </div>
        </div>
    );
};

export default Home;