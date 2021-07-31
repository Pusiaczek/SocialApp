import React, { useState, useReducer } from 'react';
import SocialHeader from './Header/SocialHeader';
import SocialBody from './Body/SocialBody';

import loggingReducer from './loggingReducer';

import styles from './SocialMain.module.css';


function SocialMain() {
    const [isLogged, dispatchLoggin] = useReducer( loggingReducer , false)

    return (
        <div className={styles.socialMain}>
            <SocialHeader isLogged={isLogged} />
            <SocialBody />
        </div>
    )
}

export default SocialMain;