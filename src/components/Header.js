import React from 'react'
import { connect } from 'react-redux';
import { deleteAllTolls } from '../store/actions/actions';
import { deleteAllVehicles } from '../store/actions/vehicleActions';

const Header = ({deleteAllTolls, deleteAllVehicles}) => {
    return (
        <header className='container'>
            <div className='wrap'>
                <div className='flex-between'>
                    <h1>
                        Toll Management Application
                    </h1>
                    <button 
                    className='btn btn-danger' 
                    onClick={() => {
                        if(window.confirm("Please confirm to reset the application")) {
                            deleteAllTolls()
                            deleteAllVehicles()
                        }
                    }}
                    >Reset Application</button>
                </div>
            </div>
        </header>
    )    
}

const mapDispatchToProps = ({
    deleteAllTolls: () => deleteAllTolls(),
    deleteAllVehicles: () => deleteAllVehicles()
});

export default connect(null, mapDispatchToProps)(Header);