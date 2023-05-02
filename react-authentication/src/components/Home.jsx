import React from 'react';
import Banner from './Banner';
import ChefData from './ChefData';

const Home = () => {
    return (
        <div>
           <div className="banner py-5">
            <Banner></Banner>
           </div>
           <div className="chefdata flex flex-col-reverse">
            <ChefData></ChefData>
           </div>
        </div>
    );
};

export default Home;