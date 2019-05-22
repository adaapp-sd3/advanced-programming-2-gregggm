import React from 'react';

// TODO
const FarmerDashboard = ({farmer}) => {
	const { milk, beef, lamb, wool, eggs, chicken, straw, bread, corn } = farmer.inventory;

	return (<div className="FarmerDashboard">
		<h1>Inventory</h1>
		<p>Milk:{milk} Beef:{beef} Lamb:{lamb} Wool:{wool} Eggs:{eggs} Chicken:{chicken} Straw:{straw} Bread:{bread} Corn:{corn}</p>
	</div>)
}

export default FarmerDashboard;