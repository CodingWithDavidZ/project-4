import React from 'react';

function ChangeMetricButton({ metric, metricsUrl, setMetrics }) {
	function changeMetric(id, value, metric) {
		console.log('id', id, 'value', value, 'metric', metric);
		fetch(`${metricsUrl}/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				size: value,
				metric: metric,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				setMetrics(data);
			});
	}

	return (
		<>
			<button
				className='change_metric'
				id={metric.id}
				value='SMALLER'
				onClick={(e) =>
					changeMetric(
						metric.id,
						'SMALLER',
						e.target.parentElement.parentElement.className
					)
				}
			>
				➖
			</button>
			<button
				className='change_metric'
				id={metric.id}
				value='LARGER'
				onClick={(e) =>
					changeMetric(
						metric.id,
						'LARGER',
						e.target.parentElement.parentElement.className
					)
				}
			>
				➕
			</button>
		</>
	);
}

export default ChangeMetricButton;
