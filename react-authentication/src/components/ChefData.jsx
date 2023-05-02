import React, { useEffect, useState } from 'react';

const ChefData = () => {
const [chefinfos,setchefinfos]=useState([]);

useEffect(()=>{
fetch('https://recipe-server-sanoar-hossan.vercel.app/chefdetails')
.then(res=>res.json())
.then(data=>setchefinfos(data))
},[])

    return (
        <div>
            <h1>Chef Information</h1>
            {
                chefinfos.map(chefinfo=><div key={chefinfo.id} className="card w-96 bg-base-100 shadow-xl flex flex-col-reverse">
                <figure><img src={chefinfo.picture} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{chefinfo.name}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>)
            }
        </div>
    );
};

export default ChefData;