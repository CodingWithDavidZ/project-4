import React, {useState} from 'react'

function Measurements({apiUrl}) {
    const [input, setInput] = useState({
        chest_size: '',
        waist_size: '',
        hip_size: '',
        thigh_size: '',
        calf_size: '',
        bicep_size: '',
        forearm_size: '',
        height_feet: '',
        height_inches: '',
        weight_lbs: '',
    });

    const handleChange= (e) => {
        let attr = e.target.name;
        setInput({...input, [attr]: e.target.value});
        };

    function handleSubmit(e){
        e.preventDefault();
        fetch(`${apiUrl}`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                chest_size: input.chest_size,
                waist_size: input.waist_size,
                hip_size: input.hip_size,
                thigh_size: input.thigh_size,
                calf_size: input.calf_size,
                bicep_size: input.bicep_size,
                forearm_size: input.forearm_size,
                height_feet: input.height_feet,
                height_inches: input.height_inches,
                weight_lbs: input.weight_lbs
            }),
          }).then(()=>{
              setInput({
            chest_size: '',
            waist_size: '',
            hip_size: '',
            thigh_size: '',
            calf_size: '',
            bicep_size: '',
            forearm_size: '',
            height_feet: '',
            height_inches: '',
            weight_lbs: '',
          });
        });
    }
    return (
        <div id="measurements_box">
            <h1 id="measurements_text">Measurements</h1>
            <form id='measurement_form' autocomplete="off" onsubmit={handleSubmit}>
                <h4 className='measurements_descriptor'>What's the diameter of your chest in inches?</h4>
                <input
                    value={input.chest_size}
                    type='number'
                    step="0.25"
                    className='measurement_fields'
                    id='chest_size_field'
                    name="chest_size"
                    placeholder='Chest size'
                    onChange={handleChange}
                />
                <br/>
                <h4 className='measurements_descriptor'>What's the diameter of your waist in inches?</h4>
                <input
                    value={input.waist_size}
                    type='number'
                    step="0.25"
                    className='measurement_fields'
                    id='waist_size'
                    name="waist_size"
                    placeholder='Waist'
                    onChange={handleChange}
                />
                <br/>
                <h4 className='measurements_descriptor'>What's the diameter of your hips in inches?</h4>
                <input
                    value={input.hips_size}
                    type='number'
                    step="0.25"
                    className='measurement_fields'
                    id='hips_size_field'
                    name="hips_size"
                    placeholder='Hips'
                    onChange={handleChange}
                />
                <br/>
                <h4 className='measurements_descriptor'>What's the diameter of your thighs in inches?</h4>
                <input
                    value={input.thigh_size}
                    type='number'
                    step="0.25"
                    className='measurement_fields'
                    id='thigh_size_field'
                    name="thigh_size"
                    placeholder='Thighs'
                    onChange={handleChange}
                />
                <br/>
                <h4 className='measurements_descriptor'>What's the diameter of your calf in inches?</h4>
                <input
                    value={input.calf_size}
                    type='number'
                    step="0.25"
                    className='measurement_fields'
                    id='calf_size_field'
                    name="calf_size"
                    placeholder='Calf'
                    onChange={handleChange}
                />
                <br/>
                <h4 className='measurements_descriptor'>What's the diameter of your bicep in inches?</h4>
                <input
                    value={input.bicep_size}
                    type='number'
                    step="0.25"
                    className='measurement_fields'
                    id='bicep_size_field'
                    name="bicep_size"
                    placeholder='Bicep'
                    onChange={handleChange}
                />
                <br/>
                <h4 className='measurements_descriptor'>What's the diameter of your forearm in inches?</h4>
                <input
                    value={input.forearm_size}
                    type='number'
                    step="0.25"
                    className='measurement_fields'
                    id='forearm_size_field'
                    name="forearm_size"
                    placeholder='Forearm'
                    onChange={handleChange}
                />
                <br/>
                <h4 className='measurements_descriptor'>What's your height?</h4>
                <input
                    value={input.height_feet}
                    type='number'
                    step='1'
                    pattern="\d+"
                    className='measurement_fields'
                    id='height_feet_field'
                    name="height_feet"
                    placeholder='Feet'
                    onChange={handleChange}
                />
                <br/>
                <input
                    value={input.height_inches}
                    type='number'
                    step='1'
                    pattern="\d+"
                    className='measurement_fields'
                    id='height_inches_field'
                    name="height_inches"
                    placeholder='Inches'
                    onChange={handleChange}
                />
                <br/> 
                <h4 className='measurements_descriptor'>What's your weight in Lbs?</h4>
                <input
                    value={input.first_name}
                    type='number'
                    ste='0.01'
                    className='measurement_fields'
                    id='weight_lbs_field'
                    name="weight_lbs"
                    placeholder='Weight'
                    onChange={handleChange}
                />
                <br/>         
            </form>
            <button id="submit_measurement_button" onclick={handleSubmit}>Submit</button>           
        </div>
    )
}

export default Measurements
