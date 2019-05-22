import React from 'react';
import { mapObjIndexed } from 'ramda';

const FieldDashboard = ({ field }) => {
	const contents = () => {
		const contains = mapObjIndexed(
			(val, key) => (
				<div>
					{key} {val}
				</div>
			),
	
			field.items.reduce((acc, curr) => {
				if (!acc[curr.name]) {
					acc[curr.name] = 0;
				}
				acc[curr.name] += 1;
	
				return acc;
			}, {})
		)
		
		let arr = [];
		for (const key in contains) {
			arr.push(contains[key])
		}
		return arr;
	}

	const yieldField = () => {
		field.yield()
	}

  return (
    <div>
      <div className="FieldDashboard">
        <h2>Field {field.position.x}x{field.position.y}</h2>
        {contents()}
				<button onClick={ yieldField }>Yield</button>
      </div>
    </div>
  );
};

export default FieldDashboard;
