import React, { useEffect, useState } from 'react';

function MembersPage({ memberUrl }) {
  const [userData, setUserData] = useState({ metrics: [] });

  useEffect(() => {
    fetch(`${memberUrl}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);

  const userMetrics = userData.metrics.map((user) => {
    const created = user.created_at.split('T')[0];
    if (
      !user.hips_size &&
      !user.bicep_size &&
      !user.chest_size &&
      !user.calf_size &&
      !user.thigh_size &&
      !user.waist_size &&
      !user.weight_lbs &&
      !user.forearm_size &&
      !user.height_feet
    ) {
      return null;
    } else {
      return (
        <>
          <div className='user_metric_box' id={user.id}>
            <ul id={user.id} className='metric_ul'>
              {user.chest_size ? (
                <li className='chest' id={`chest${user.id}`}>
                  <strong>Chest diameter:</strong> {user.chest_size}in
                </li>
              ) : null}
              {user.waist_size ? (
                <li className='waist' id={user.id}>
                  <strong>Waist diameter:</strong> {user.waist_size}in
                </li>
              ) : null}
              {user.hip_size ? (
                <li className='hip' id={user.id}>
                  <strong>Hip diameter:</strong> {user.hip_size}in
                </li>
              ) : null}
              {user.thigh_size ? (
                <li className='thigh' id={user.id}>
                  <strong>Thigh diameter:</strong> {user.thigh_size}in
                </li>
              ) : null}
              {user.calf_size ? (
                <li className='calf' id={user.id}>
                  <strong>Calf diameter:</strong> {user.calf_size}in
                </li>
              ) : null}
              {user.bicep_size ? (
                <li className='bicep' id={user.id}>
                  <strong>Bicep diameter:</strong> {user.bicep_size}in
                </li>
              ) : null}
              {user.forearm_size ? (
                <li className='forearm' id={user.id}>
                  <strong>Forearm diameter:</strong> {user.forearm_size}in
                </li>
              ) : null}
              {user.height_feet ? (
                <li className='height' id={user.id}>
                  <strong>Height:</strong> {user.height_feet}'{' '}
                  {user.height_inches}"
                </li>
              ) : null}
              {user.weight_lbs ? (
                <li className='weight' id={user.id}>
                  <strong>Weight:</strong> {user.weight_lbs}lbs
                </li>
              ) : null}
              <li className='created' id={user.id}>
                <strong>Created:</strong>
                {created}
              </li>
            </ul>
          </div>
        </>
      );
    }
  });

  return (
    <div className='user_metrics'>
      <div id='member_name'>
        Member:{userData.first_name} {userData.last_name}
      </div>
      {userMetrics}
    </div>
  );
}

export default MembersPage;
