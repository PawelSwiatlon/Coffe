import React from 'react';

import AboutView from '../AboutView/AboutView';
import HeaderView from '../../components/Header/Header';
import ContactView from '../ContactView/ContactView';

const HomeView = () => {
    return(
        <div>
            <HeaderView/>
            <AboutView/>
            <ContactView/>
        </div>
    );
}

export default HomeView;