import React from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';

function MainLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default MainLayout;
