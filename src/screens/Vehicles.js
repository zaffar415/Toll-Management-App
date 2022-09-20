import React,{useState} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddToll from '../components/AddToll';
import AddVehicle from '../components/AddVehicle';
import Pagination from '../components/Pagination';

const Vehicles = (props) => {

    const [modalVisibility, setModalVisibility] = useState('none')    
    const [tollModalVisibility, setTollModalVisibility] = useState('none')    
    const [search, setSearch] = useState('')
    const [tollName, setTollName] = useState('')
    const limit = 5;
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)           
        

    const TBody = ({setTotalPages}) => {
        let _vehicles = props.vehicles;
        if(search !== '') {
            _vehicles = _vehicles.filter((vehicle) => vehicle.number.toLowerCase().includes(search.toLowerCase()))
        }
        
        if(tollName !== '') {               
            _vehicles = _vehicles.filter((vehicle) => vehicle.toll === tollName)
        }
        
        let rows = []
        if(_vehicles.length) {
            
            let start = (currentPage * limit) - limit
            for(let i=start; i<start+limit; i++) {                
                if(_vehicles[i]) {                                                
                    rows.push(<tr key={i}>
                        <td>{i+1}</td>
                        <td>{_vehicles[i].type}</td>
                        <td>{_vehicles[i].number}</td>
                        <td>{_vehicles[i].date}</td>
                        <td>{_vehicles[i].toll}</td>
                        <td>{_vehicles[i].tariff}</td>
                    </tr>);
                }
            }                        
            setTotalPages(props.tolls.length > limit ? Math.floor(_vehicles.length/limit) + 1 : 1);            
            
        } else {
            rows.push(<tr>
                <td colspan="5" className='text-center'>No Vehicles Found</td>
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
                            <div>
                                <h3>Vehicles</h3>                
                            </div>
                            <div className="flex-around">
                                <Link className='btn btn-primary' onClick={() => setModalVisibility('block')}>Add Vehicle Entry</Link>
                                <Link className='btn btn-primary' onClick={() => setTollModalVisibility('block')}>Add New Toll</Link>
                                <Link to="/tolls" className='btn btn-primary'>View All Tolls</Link>
                            </div>
                        </div>                        
                    </div>
                    <div className='card-content spacing-top'>
                        <form>
                            <div className='flex-between'>                                
                                <div className="form-group">
                                    <label> Filter By TollName :</label>
                                    <select
                                    value={tollName}
                                    onChange={(e) => setTollName(e.target.value)}
                                    >
                                        <option value="">-- None --</option>
                                        {props.tolls && props.tolls.map((toll, key) => (
                                            <option value={toll.name} key={key}>{toll.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label> Search :</label>
                                    <input type="search" placeholder="Search" 
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    />
                                </div>
                            </div>
                        </form>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Vehicle Type</th>
                                    <th>vehicle Number</th>
                                    <th>Date/Time</th>
                                    <th>Toll Name</th>
                                    <th>Tariff</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TBody setTotalPages={setTotalPages} />
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

const mapStateToProps = state => ({
    tolls: state.toll,
    vehicles:state.vehicles
})

export default connect(mapStateToProps)(Vehicles);