import React, {useState, useLayoutEffect} from 'react'
import { connect } from 'react-redux';
import { VehicleTypes } from '../helpers/Helper';
import { addToll } from '../store/actions/actions';


const AddToll = ({addToll}) => {
    
    const [name, setName] = useState('')
    const [vehicles, setVehicles] = useState([])
    const [message, setMessage] = useState(null)    
    const [loader, setLoader] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        setLoader(true)
        setMessage(null);    
        // Delaying the process to show loader and experice the real world application
        setTimeout(() => {
            if(!name) {
                setMessage({
                    type:'error',
                    text:"Name is required"
                });
                setLoader(false)

                return false;
            }        
    
            let _message = {}
    
            vehicles.map((vehicle) => {
                for(let index in vehicle) {
                    if(vehicle[index] === '') {
                        _message = {
                            type:'error',
                            text:"All Fields are required"
                        };                    

                        break;
                    }
                }             
                return true;
            })
    
            if(_message.text) {            
                setMessage(_message)
                setLoader(false)
                return false;
            }
    
            addToll({
                name, 
                vehicles,
            });
            
            setLoader(false)
            setMessage({
                type:"success",
                text: "Toll Added Successfully",
            });
    
            let _vehicles = [];
            VehicleTypes.map((type, key) => {            
                return _vehicles.push({
                    type: "",
                    single: "",
                    return: ""
                });
            });
            setVehicles(_vehicles);
            setName('')
            e.target.reset();
        }, 1000)
            
        
    }

    useLayoutEffect(() => {
        let _vehicles = [];
        VehicleTypes.map((type, key) => {            
            return _vehicles.push({
                type: "",
                single: "",
                return: ""
            });
        });
        if(vehicles.length === 0) {
            setVehicles(_vehicles);
        }        
    }, [vehicles])

    return (                      
        <div className='card'> 
            <div className='card-content'>
                <h3 className='text-center'>Add New Toll</h3>
                <form onSubmit={(e) => submitHandler(e)}>
                    <div className='form-group'>
                        <label>Toll Name*</label>
                        <input 
                        type="text" 
                        name="name" 
                        className='form-control' 
                        placeholder="Enter toll name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required={true}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Vehicle Fare Details*</label>
                            {vehicles.map((value, key) => (
                                <div className='flex-between mt-1' key={key}>
                                    <div className='form-group'>
                                        <select
                                        placeholder='Select Vehicle Type'
                                        onChange={(e) => {
                                            let _vehicles = vehicles;
                                            _vehicles[key].type = e.target.value;
                                            setVehicles(_vehicles => [..._vehicles]);    
                                        }}                
                                        required={true}                        
                                        >
                                            <option value="">Select Vehicle Type</option>
                                            {VehicleTypes.map((type, ckey) => (
                                                <option value={type} key={"c"+ckey}>{type}</option>
                                            ))}                                            
                                        </select>
                                    </div>
                                    <div className='form-group'>
                                        <input 
                                        type="number" 
                                        placeholder='Single Journey'
                                        value={value.single}
                                        onChange={(e) => {                                            
                                            vehicles[key].single = e.target.value;
                                            setVehicles(vehicles => [...vehicles]);                                                
                                        }}             
                                        required={true}   
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <input 
                                        type="number" 
                                        placeholder='Return Journey'
                                        value={value.return}
                                        onChange={(e) => {
                                            vehicles[key].return = e.target.value;
                                            setVehicles(vehicles => [...vehicles]);    
                                        }}             
                                        required={true}   
                                        />
                                    </div>
                                </div>
                            ))}                                                    
                    </div>
                    {loader && <div><div class="loader"></div> Please wait....</div>}
                    {message && (
                        <div className={`form-message ${message.type}`}>
                            <span>{message.text}</span>
                        </div>
                    )}

                    <div className='form-group text-right'>
                        <input type="submit" value="Add Toll" className='btn' />
                    </div>
                </form>
            </div>
        </div>            
    )    
}

const mapDispatchToProps = ({
    addToll: (payload) => addToll(payload)
});

export default connect(null, mapDispatchToProps)(AddToll);