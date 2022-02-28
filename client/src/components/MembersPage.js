import React, { useEffect, useState } from 'react';

function MembersPage({ memberUrl, metricsUrl }) {
	const [userData, setUserData] = useState({ metrics: [] });
	const [metrics, setMetrics] = useState([]);

	useEffect(() => {
		fetch(`${memberUrl}`)
			.then((response) => response.json())
			.then((data) => {
				setUserData(data);
			});
	}, [memberUrl, metrics]);

	function changeMetric(id, value) {
		fetch(`${metricsUrl}/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				size: value,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				setMetrics(data);
			});
	}

	// function changeMetric(id, value) {
	// 	console.log('Clicked changeMetric function');
	// 	fetch(`${metricsUrl}/${id}`, {
	// 		method: 'PATCH',
	// 		body: JSON.stringify({ size: value }),
	// 	})
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			setMetrics(
	// 				metrics.map((metric) => (metric.user === metric ? data : metric))
	// 			);
	// 		});
	// }

	function removeMetric(user) {
		fetch(`${metricsUrl}/${user.id}`, { method: 'DELETE' });
		setMetrics(
			metrics.filter((m) => {
				return m.id !== user.id;
			})
		);
	}

	const userMetrics = userData.metrics.map((user) => {
		const created = user.created_at.split('T')[0];
		if (
			!user.neck_size &&
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
							{user.neck_size ? (
								<li className='neck' id={`neck${user.id}`}>
									<strong>Neck circumference:</strong> {user.neck_size}in
								</li>
							) : null}
							{user.chest_size ? (
								<li className='chest' id={`chest${user.id}`}>
									<strong>Chest circumference:</strong> {user.chest_size}in
								</li>
							) : null}
							{user.waist_size ? (
								<li className='waist' id={user.id}>
									<strong>Waist circumference:</strong> {user.waist_size}in
								</li>
							) : null}
							{user.hip_size ? (
								<li className='hip' id={user.id}>
									<strong>Hip circumference:</strong> {user.hip_size}in
								</li>
							) : null}
							{user.thigh_size ? (
								<li className='thigh' id={user.id}>
									<strong>Thigh circumference:</strong> {user.thigh_size}in
								</li>
							) : null}
							{user.calf_size ? (
								<li className='calf' id={user.id}>
									<strong>Calf circumference:</strong> {user.calf_size}in
								</li>
							) : null}
							{user.bicep_size ? (
								<li className='bicep' id={user.id}>
									<strong>Bicep circumference:</strong> {user.bicep_size}in
								</li>
							) : null}
							{user.forearm_size ? (
								<li className='forearm' id={user.id}>
									<strong>Forearm circumference:</strong> {user.forearm_size}in
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
							{/* create a button to decrement the metric */}
							<button
								className='change_metric'
								id={user.id}
								value='SMALLER'
								onClick={(e) => changeMetric(e.target.id, e.target.value)}
							>
								-
							</button>
							<button
								className='remove_metric'
								value={user.id}
								onClick={() => removeMetric(user)}
							>
								❌
							</button>
							<button
								className='change_metric'
								id={user.id}
								value='LARGER'
								onClick={(e) => changeMetric(e.target.id, e.target.value)}
							>
								ᐩ
							</button>
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
