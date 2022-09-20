import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppLayout = (props) => {
    return (
        <>            
            <main id="main">
                <Header />
                    <section className="container">
                            <div className='page-content'>
                                {props.children}                        
                            </div>
                    </section>
                <Footer />                  
            </main>
        </>
    )    
}

export default AppLayout;