import React, { useEffect, useState } from 'react';
import ChangeMetricButton from './ChangeMetricButton';

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

	function removeMetric(user) {
		fetch(`${metricsUrl}/${user.id}`, { method: 'DELETE' });
		setMetrics(
			metrics.filter((m) => {
				return m.id !== user.id;
			})
		);
	}

	const userMetrics = userData.metrics.map((metric) => {
		const created = metric.created_at.split('T')[0];
		if (
			!metric.neck_size &&
			!metric.hip_size &&
			!metric.bicep_size &&
			!metric.chest_size &&
			!metric.calf_size &&
			!metric.thigh_size &&
			!metric.waist_size &&
			!metric.weight_lbs &&
			!metric.forearm_size &&
			!metric.height_feet
		) {
			return null;
		} else {
			return (
				<React.Fragment key={metric.id}>
					<div className='user_metric_box' id={metric.id}>
						<ul id={metric.id} className='metric_ul'>
							{metric.neck_size ? (
								<li
									className='neck_size'
									id={metric.id}
									key={`neck ${metric.id}`}
								>
									<strong>Neck circumference:</strong> {metric.neck_size}in
									<ChangeMetricButton
										metric={metric}
										metricsUrl={metricsUrl}
										setMetrics={setMetrics}
									/>
								</li>
							) : null}
							{metric.chest_size ? (
								<li
									className='chest_size'
									id={metric.id}
									key={`chest ${metric.id}`}
								>
									<strong>Chest circumference:</strong> {metric.chest_size}in
									<ChangeMetricButton
										metric={metric}
										metricsUrl={metricsUrl}
										setMetrics={setMetrics}
									/>
								</li>
							) : null}
							{metric.waist_size ? (
								<li
									className='waist_size'
									id={metric.id}
									key={`waist ${metric.id}`}
								>
									<strong>Waist circumference:</strong> {metric.waist_size}in
									<ChangeMetricButton
										metric={metric}
										metricsUrl={metricsUrl}
										setMetrics={setMetrics}
									/>
								</li>
							) : null}
							{metric.hip_size ? (
								<li
									className='hip_size'
									id={metric.id}
									key={`hip ${metric.id}`}
								>
									<strong>Hip circumference:</strong> {metric.hip_size}in
									<ChangeMetricButton
										metric={metric}
										metricsUrl={metricsUrl}
										setMetrics={setMetrics}
									/>
								</li>
							) : null}
							{metric.thigh_size ? (
								<li
									className='thigh_size'
									id={metric.id}
									key={`thigh ${metric.id}`}
								>
									<strong>Thigh circumference:</strong> {metric.thigh_size}in
									<ChangeMetricButton
										metric={metric}
										metricsUrl={metricsUrl}
										setMetrics={setMetrics}
									/>
								</li>
							) : null}
							{metric.calf_size ? (
								<li
									className='calf_size'
									id={metric.id}
									key={`calf ${metric.id}`}
								>
									<strong>Calf circumference:</strong> {metric.calf_size}in
									<ChangeMetricButton
										metric={metric}
										metricsUrl={metricsUrl}
										setMetrics={setMetrics}
									/>
								</li>
							) : null}
							{metric.bicep_size ? (
								<li
									className='bicep_size'
									id={metric.id}
									key={`bicep ${metric.id}`}
								>
									<strong>Bicep circumference:</strong> {metric.bicep_size}in
									<ChangeMetricButton
										metric={metric}
										metricsUrl={metricsUrl}
										setMetrics={setMetrics}
									/>
								</li>
							) : null}
							{metric.forearm_size ? (
								<li
									className='forearm_size'
									id={metric.id}
									key={`forearm ${metric.id}`}
								>
									<strong>Forearm circumference:</strong> {metric.forearm_size}
									in
									<ChangeMetricButton
										metric={metric}
										metricsUrl={metricsUrl}
										setMetrics={setMetrics}
									/>
								</li>
							) : null}
							{metric.height_feet ? (
								<li
									className='height_feet'
									id={metric.id}
									key={`height ${metric.id}`}
								>
									<strong>Height:</strong> {metric.height_feet}'{' '}
									{metric.height_inches}"
								</li>
							) : null}
							{metric.weight_lbs ? (
								<li
									className='weight_lbs'
									id={metric.id}
									key={`weight ${metric.id}`}
								>
									<strong>Weight:</strong> {metric.weight_lbs}lbs
									<ChangeMetricButton
										metric={metric}
										metricsUrl={metricsUrl}
										setMetrics={setMetrics}
									/>
								</li>
							) : null}
							<li
								className='created'
								id={metric.id}
								key={`created weight ${metric.id}`}
							>
								<strong>Created:</strong>
								{created}
							</li>
							<button
								className='remove_metric'
								value={metric.id}
								key={`remove ${metric.id}`}
								onClick={() => removeMetric(metric)}
							>
								❌
							</button>
						</ul>
					</div>
				</React.Fragment>
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
