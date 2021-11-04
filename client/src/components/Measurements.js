import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';

function Measurements({ metricsUrl, user }) {
  const [input, setInput] = useState({
    neck_size: '',
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
    user_id: user.id,
  });

  const [submitted, setSubmitted] = useState(false);

  console.log('Measurements.js user', user);
  console.log('Measurements.js input', input);

  const handleChange = (e) => {
    let attr = e.target.name;
    setInput({ ...input, [attr]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      input.neck_size ||
      input.chest_size ||
      input.waist_size ||
      input.hip_size ||
      input.thigh_size ||
      input.calf_size ||
      input.bicep_size ||
      input.forearm_size ||
      input.height_feet ||
      input.height_inches ||
      input.weight_lbs
    ) {
      await fetch(`${metricsUrl}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          neck_size: input.neck_size,
          chest_size: input.chest_size,
          waist_size: input.waist_size,
          hip_size: input.hip_size,
          thigh_size: input.thigh_size,
          calf_size: input.calf_size,
          bicep_size: input.bicep_size,
          forearm_size: input.forearm_size,
          height_feet: input.height_feet,
          height_inches: input.height_inches,
          weight_lbs: input.weight_lbs,
          user_id: user.id,
        }),
      }).then(() => {
        setInput({
          neck_size: '',
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
          user_id: user.id,
        });
      });
      setSubmitted(true);
    } else {
      alert('Please fill out at least one field');
    }
  }

  if (submitted) return <Navigate to='/memberspage' />;

  return (
    <>
      <Link id='skip' to='/memberspage'>
        Skip
      </Link>
      <div id='measurements_box'>
        <h1 id='measurements_text'>Measurements</h1>
        <form id='measurement_form' autoComplete='off' onSubmit={handleSubmit}>
          <h4 className='measurements_descriptor'>
            Circumference of neck in inches?
          </h4>
          <input
            value={input.neck_size}
            type='number'
            step='0.25'
            className='measurement_fields'
            id='neck_size_field'
            name='neck_size'
            placeholder='Neck size'
            onChange={handleChange}
          />
          <br />
          <h4 className='measurements_descriptor'>
            Circumference of chest in inches?
          </h4>
          <input
            value={input.chest_size}
            type='number'
            step='0.25'
            className='measurement_fields'
            id='chest_size_field'
            name='chest_size'
            placeholder='Chest size'
            onChange={handleChange}
          />
          <br />
          <h4 className='measurements_descriptor'>
            Circumference of waist in inches?
          </h4>
          <input
            value={input.waist_size}
            type='number'
            step='0.25'
            className='measurement_fields'
            id='waist_size'
            name='waist_size'
            placeholder='Waist'
            onChange={handleChange}
          />
          <br />
          <h4 className='measurements_descriptor'>
            Circumference of hips in inches?
          </h4>
          <input
            value={input.hips_size}
            type='number'
            step='0.25'
            className='measurement_fields'
            id='hips_size_field'
            name='hips_size'
            placeholder='Hips'
            onChange={handleChange}
          />
          <br />
          <h4 className='measurements_descriptor'>
            Circumference of thighs in inches?
          </h4>
          <input
            value={input.thigh_size}
            type='number'
            step='0.25'
            className='measurement_fields'
            id='thigh_size_field'
            name='thigh_size'
            placeholder='Thighs'
            onChange={handleChange}
          />
          <br />
          <h4 className='measurements_descriptor'>
            Circumference of calf in inches?
          </h4>
          <input
            value={input.calf_size}
            type='number'
            step='0.25'
            className='measurement_fields'
            id='calf_size_field'
            name='calf_size'
            placeholder='Calf'
            onChange={handleChange}
          />
          <br />
          <h4 className='measurements_descriptor'>
            Circumference of bicep in inches?
          </h4>
          <input
            value={input.bicep_size}
            type='number'
            step='0.25'
            className='measurement_fields'
            id='bicep_size_field'
            name='bicep_size'
            placeholder='Bicep'
            onChange={handleChange}
          />
          <br />
          <h4 className='measurements_descriptor'>
            Circumference of forearm in inches?
          </h4>
          <input
            value={input.forearm_size}
            type='number'
            step='0.25'
            className='measurement_fields'
            id='forearm_size_field'
            name='forearm_size'
            placeholder='Forearm'
            onChange={handleChange}
          />
          <br />
          <h4 className='measurements_descriptor'>What's your height?</h4>
          <input
            value={input.height_feet}
            type='number'
            step='1'
            pattern='\d+'
            className='measurement_fields'
            id='height_feet_field'
            name='height_feet'
            placeholder='Feet'
            onChange={handleChange}
          />
          <br />
          <input
            value={input.height_inches}
            type='number'
            step='1'
            pattern='\d+'
            className='measurement_fields'
            id='height_inches_field'
            name='height_inches'
            placeholder='Inches'
            onChange={handleChange}
          />
          <br />
          <h4 className='measurements_descriptor'>
            What's your weight in Lbs?
          </h4>
          <input
            value={input.weight_lbs}
            type='number'
            ste='0.01'
            className='measurement_fields'
            id='weight_lbs_field'
            name='weight_lbs'
            placeholder='Weight'
            onChange={handleChange}
          />
          <br />
          <input type='submit' value='Submit' id='submit_measurement_button' />
        </form>
      </div>
    </>
  );
}

export default Measurements;
