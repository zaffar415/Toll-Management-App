import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';

const AppLayout = (props) => {
    return (
        <>            
            <main id="main">
                <section className="container">
                    <Header />
                        {props.children}                        
                    <Footer />
                    {/* <div className="flex h-100">
                        <div className="w-25">
                            <SideBar />
                        </div>
                        <div className="w-75">
                        </div>
                    </div> */}
                </section>
            </main>
        </>
    )    
}

export default AppLayout;