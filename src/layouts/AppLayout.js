import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppLayout = (props) => {
    return (
        <>            
            <main id="main">
                <section className="container">
                    <Header />
                        {props.children}                        
                    <Footer />                  
                </section>
            </main>
        </>
    )    
}

export default AppLayout;