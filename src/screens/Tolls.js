import React, {useState, useLayoutEffect} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddToll from '../components/AddToll';
import AddVehicle from '../components/AddVehicle';
import Pagination from '../components/Pagination';
import { VehicleTypes } from '../helpers/Helper';
import { updateToll } from '../store/actions/actions';

const Tolls = (props) => {

    const [modalVisibility, setModalVisibility] = useState('none')    
    const [tollModalVisibility, setTollModalVisibility] = useState('none')    
    const [search, setSearch] = useState('')
    const limit = 5;
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)           

    const deleteHandler = async(index) => {
        if(window.confirm("Are you sure to Delete ?")) {
            let _tolls = props.tolls.filter((toll, key) => {        
                return key !== index;
            });
    
            props.updateToll(_tolls);        

            alert("Deleted Successfully");
        }
    }

    const Tbody = () => {

        // Filter Items
        let tolls = search === '' ? props.tolls : props.tolls.filter((toll) => toll.name.includes(search))

        let rows = []
        let start = (currentPage * limit) - limit
        if(tolls) {
            for(let i=start ; i<start+limit; i++) {
                let Vehicles = [];
                if(tolls[i]) {

                    VehicleTypes.map((val) => {
                        let v = tolls[i].vehicles.filter((toll) => toll.type == val)                         
                        Vehicles.push(<td>{v[0]?.single}/{v[0]?.return}</td>)
                    })                                          
                    rows.push(<tr>
                        <td>{tolls[i].name}</td>
                        {Vehicles}                    
                        <td><button className='btn btn-danger' onClick={() => deleteHandler(i)}>Delete</button></td>
                    </tr>);
                }
            }             
                                   
            setTotalPages(tolls.length > limit ? Math.floor(tolls.length/limit) + 1 : 1);            
            
        } else {
            rows.push(<tr>
                <td colspan="5">No Tolls Found</td>
            </tr>);
        }

        
        return rows;
    }

    return (
        <div className='content'>
            <div className='wrap'>                
                <div className='card'>                    
                    <div className='card-head'>
                        <div className='flex-between'>
                            <div className='flex-around'>
                                <h3>Tollgate List</h3>                                                                            
                                <form>
                                    <div className="form-group" style={{marginBottom:15}}>
                                        <input type="search" placeholder="Search" value={search} 
                                        onChange={(e) => setSearch(e.target.value) } />
                                    </div>
                                </form>  
                            </div>
                            <div className="flex-around">
                            <Link className='btn btn-primary' onClick={() => setModalVisibility('block')}>Add Vehicle Entry</Link>
                                <Link className='btn btn-primary' onClick={() => setTollModalVisibility('block')}>Add New Toll</Link>
                                <Link to="/" className='btn btn-primary'>View Vehicles</Link>
                            </div>                          
                        </div>                        
                    </div>
                    <div className='card-content spacing-top'>                        
                        <table className="table mt-1">
                            <thead>
                                <tr>
                                    <th>TollName</th>
                                    <th>Car/Jeep/Van</th>
                                    <th>LCV</th>
                                    <th>Trucks/ Bus</th>
                                    <th>Heavy Vehicle</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <Tbody />     
                            </tbody>
                        </table>                        
                    </div>

                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
                </div>                
            </div>
            <div className="modal" style={{display: modalVisibility}}>
                <button className="close" onClick={() => setModalVisibility('none')}>&times;</button>
                <div className="modal-content">
                    <AddVehicle />
                </div>
            </div>
            <div className="modal" style={{display: tollModalVisibility}}>
                <button className="close" onClick={() => setTollModalVisibility('none')}>&times;</button>
                <div className="modal-content">
                    <AddToll />
                </div>
            </div>        
        </div>
    )    
}

const mapStateToProps = (state) => ({
    tolls:state.toll
})

const mapDispatchToProps = ({
    updateToll: (payload) => updateToll(payload)
})

export default connect(mapStateToProps, mapDispatchToProps)(Tolls);