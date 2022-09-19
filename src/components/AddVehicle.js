import React, {useState} from 'react'
import { connect } from 'react-redux';
import { VehicleTypes } from '../helpers/Helper';
import { addVehicle } from '../store/actions/vehicleActions';

const AddVehicle = ({tolls, vehicles, addVehicle}) => {

    const [toll, setToll] = useState('')
    const [type, setType] = useState('')
    const [number, setNumber] = useState('')
    const [tariff, setTariff] = useState(0)
    const [message, setMessage] = useState(null)    

    const submitHandler = (e) => {
        e.preventDefault();
        if(!toll || !type || !number || !tariff) {
            setMessage({
                type:'error',
                text:'All fields are required',
            });
            return false;
        }

        
        addVehicle({
            toll, 
            type,
            number, 
            tariff,
            date: new Date().toLocaleString()
        });

        setMessage({
            type:'success',
            text:'Vehicle Addded Successfully',
        });

        e.target.reset();
        
    }    
    
    console.log(vehicles)

    return (        
        <div className='card'> 
            <div className='card-content'>
                <h3 className='text-center'>Add New Toll</h3>
                <form onSubmit={(e) => submitHandler(e)}>
                    <div className='form-group'>
                        <label>Select Toll Name*</label>
                        <select 
                        className='form-control'
                        value={toll}
                        onChange={(e) => setToll(e.target.value)}
                        required={true}
                        >
                            <option value="">Select Toll</option>
                            {tolls && tolls.map((toll, index) => (
                                <option value={index} key={index}>{toll.name}</option>                                
                            ))}                            
                        </select>
                    </div>
                    <div className='form-group'>
                        <label>Select Vehicle Type*</label>
                        <select 
                        className='form-control'
                        value={type}
                        onChange={(e) => {
                            setType(e.target.value)
                            for(let v in tolls[toll].vehicles) {
                                console.log(e.target.value, )
                                if(e.target.value == tolls[toll].vehicles[v].type) {
                                    console.log('v', v);
                                    setTariff(tolls[toll].vehicles[v].single)
                                }   
                            }
                        }}
                        required={true}
                        >
                            <option value="">Select Vehicle Type</option>
                            {VehicleTypes.map((type, key) => (
                                <option value={type} key={key}>{type}</option>
                            ))}                                            
                        </select>
                    </div>
                    <div className='form-group'>
                        <label>Vehicle Number*</label>                                
                        <input 
                        type="text" 
                        className='form-control' 
                        placeholder="Enter vehicle number" 
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        required={true}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Tariff*</label>                                
                        <input 
                        type="text" 
                        className='form-control' 
                        placeholder="Tariff" 
                        value={tariff}
                        onChange={(e) => setTariff(e.target.value)}
                        required={true}
                        disabled={true}
                        />
                    </div>                          
                    {message && (
                        <div className={`form-message ${message.type}`}>
                            <span>{message.text}</span>
                        </div>
                    )}  
                    <div className='form-group text-right'>
                        <input type="submit" value="Add Entry" className='btn' />
                    </div>
                </form>
            </div>
        </div>            
    )    
}

const mapStateToProps = state => ({
    tolls: state.toll,
    vehicles: state.vehicles
})


const mapDispatchToProps = ({
    addVehicle:(payload) => addVehicle(payload)
})

export default connect(mapStateToProps, mapDispatchToProps)(AddVehicle);