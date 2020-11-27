import React from 'react';
import FooterX from './Footer/FooterX';
import HeaderX from './Header/HeaderX';

export default function MainLayout({children}){

    return (
        <div>
            <HeaderX/>
                {children}
            <FooterX/>
        </div>
    )
}