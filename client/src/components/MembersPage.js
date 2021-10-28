import React, { useEffect, useState } from 'react';

function MembersPage({ memberUrl }) {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch(`${memberUrl}`)
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);

  console.log(userData);

  const userMetrics = userData.metrics.map((user) => {
    const created = user.created_at.split('T')[0];
    return (
      <div className='user_metric_box'>
        <ul id={user.user_id}>
          <li>Chest diameter: {user.chest_size}in</li>
          <li>Waist diameter: {user.waist_size}in</li>
          <li>Hip diameter: {user.hip_size}in</li>
          <li>Thigh diameter: {user.thigh_size}in</li>
          <li>Calf diameter: {user.calf_size}in</li>
          <li>Bicep diameter: {user.bicep_size}in</li>
          <li>Forearm diameter: {user.forearm_size}in</li>
          <li>
            Height: {user.height_feet}' {user.height_inches}"
          </li>
          <li>Weight: {user.weight_lbs}lbs</li>
          <li>Created:{created}</li>
        </ul>
      </div>
    );
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
