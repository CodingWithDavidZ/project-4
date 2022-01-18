import React, { useEffect, useState } from 'react';

function MembersPage({ memberUrl, metricsUrl }) {
  const [metrics, setMetrics] = useState([]);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');

  // function plusNeck(metric) {
  //   fetch(`/api/metric/${metric.id}/size`, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ size: 'LARGER' }),
  //   }).then(() => {
  //     setMetrics(
  //       metrics.map((m) => {
  //         if (m.id === metric.id) {
  //           return { ...m, neck_size: m.neck_size + 1 };
  //         } else {
  //           return m;
  //         }
  //       })
  //     );
  //   });
  // }

  function removeMetric(metric) {
    fetch(`${metricsUrl}/${metric.id}`, { method: 'DELETE' });
    setMetrics(
      metrics.filter((m) => {
        return m.id !== metric.id;
      })
    );
  }

  // function minusNeck(metric) {
  //   fetch(`/api/metric/${metric.id}/size`, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ size: 'SMALLER' }),
  //   }).then(() => {
  //     setMetrics(
  //       metrics.map((m) => {
  //         if (m.id === metric.id) {
  //           return { ...m, neck_size: m.neck_size - 1 };
  //         } else {
  //           return m;
  //         }
  //       })
  //     );
  //   });
  // }

  useEffect(() => {
    fetch(`${memberUrl}`)
      .then((response) => response.json())
      .then((data) => {
        setMetrics(data.metrics);
        setFirstName(data.first_name);
        setLastName(data.last_name);
      });
  }, [memberUrl]);

  const userMetrics = metrics.map((metric) => {
    return (
      <Metric
        metric={metric}
        removeMetric={removeMetric}
        // plusNeck={plusNeck}
        // minusNeck={minusNeck}
      />
    );
  });

  return (
    <div className='user_metric'>
      <div id='member_name'>
        Member:{first_name} {last_name}
      </div>
      {userMetrics}
    </div>
  );
}

export default MembersPage;

function Metric({ metric, removeMetric }) {
  //TODO make a map function to check for nil values
  const metrics = {
    neck_size: (
      <>
        <li className='neck' id={`neck${metric.id}`} key={`neck${metric.id}`}>
          <strong>Neck circumference:</strong> {metric.neck_size}in
        </li>
      </>
    ),
    waist_size: (
      <li className='waist' id={metric.id} key={`waist${metric.id}`}>
        <strong>Waist circumference:</strong> {metric.waist_size}in
      </li>
    ),

    chest_size: (
      <li className='chest' id={`chest${metric.id}`} key={`chest${metric.id}`}>
        <strong>Chest circumference:</strong> {metric.chest_size}in
      </li>
    ),

    hip_size: (
      <li className='hip' id={metric.id} key={`hip${metric.id}`}>
        <strong>Hip circumference:</strong> {metric.hip_size}in
      </li>
    ),

    thigh_size: (
      <li className='thigh' id={metric.id} key={`thigh${metric.id}`}>
        <strong>Thigh circumference:</strong> {metric.thigh_size}in
      </li>
    ),

    calf_size: (
      <li className='calf' id={metric.id} key={`calf${metric.id}`}>
        <strong>Calf circumference:</strong> {metric.calf_size}in
      </li>
    ),

    bicep_size: (
      <li className='bicep' id={metric.id} key={`bicep${metric.id}`}>
        <strong>Bicep circumference:</strong> {metric.bicep_size}in
      </li>
    ),

    forearm_size: (
      <li className='forearm' id={metric.id} key={`forearm${metric.id}`}>
        <strong>Forearm circumference:</strong> {metric.forearm_size}
        in
      </li>
    ),

    // height: (
    //   <li className='height' id={metric.id} key={`height${metric.id}`}>
    //     <strong>Height:</strong> {metric.height_feet}' {metric.height_inches}"
    //   </li>
    // ),

    weight_lbs: (
      <li className='weight' id={metric.id} key={`weight${metric.id}`}>
        <strong>Weight:</strong> {metric.weight_lbs}lbs
      </li>
    ),
  };

  // const metricType = Object.keys(metric).find(
  //   (k) => k !== 'id' && metric[k] !== null
  // );

  const created = metric.created_at.split('T')[0];

  return (
    <>
      <div className='user_metric_box' id={metric.id}>
        <ul key={metric.id} className='metric_ul'>
          {
            metrics[
              //find all objects with a key that is not null
              Object.keys(metric).find((k) => k !== 'id' && metric[k] !== null)
            ]
          }

          {metric.height_feet ? (
            <li className='height' id={metric.id} key={`height${metric.id}`}>
              <strong>Height:</strong> {metric.height_feet}'{' '}
              {metric.height_inches}"
            </li>
          ) : null}

          <li className='created' id={metric.id} key={`created${metric.id}`}>
            <strong>Created:</strong>
            {created}
          </li>
        </ul>

        <button
          className='remove_metric'
          id={metric.id}
          value={metric.id}
          onClick={() => removeMetric(metric)}
        >
          ❌
        </button>
      </div>
    </>
  );
}
