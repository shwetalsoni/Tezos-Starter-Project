import React, { useState, useEffect } from 'react';
import '../static/css/home.css'
import Transfer from './Transfer.js';

import {getContractStorage} from '../tezos';


function Home(){

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        async function fetchStorage() {
            let storage = await getContractStorage();
            console.log(storage);
            let devs = storage.devs.valueMap;
            let users = []
            devs.forEach(dev => {
                users.push(dev);
            });
            setUserData(users);
        }
        fetchStorage();
        
    }, [])

    return(
        <div className="container">
            <div className="row">
                {userData.map((user, index) => 
                    <div className="col-md-4" key={index}>
                        <div className="card">
                            <div className="card-header">
                                <div className="address">{user.address}</div>
                            </div>
                            <div className="card-body">
                                <h2 className="name">{user.name}</h2>
                                <p className="bio">{user.bio}</p>
                                <Transfer
                                    address={user.address}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
            
        </div>
    );
}

export default Home;