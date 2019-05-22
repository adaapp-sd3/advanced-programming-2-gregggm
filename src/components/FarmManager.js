import React from 'react';
import FarmerDashboard from './dashboards/FarmerDashboard';
import FieldDashboard from './dashboards/FieldDashboard';
import MarketDashboard from './dashboards/MarketDashboard';

const FarmManager = ({ game }) => {
  return (
    <div className="FarmManager">
      <FarmerDashboard farmer={game.farmer} />
      {game.fields.map(
        (field, i) => <FieldDashboard key={i} field={field} />
      )}
      <MarketDashboard market={game.market} />
    </div>
  );
};

export default FarmManager;
