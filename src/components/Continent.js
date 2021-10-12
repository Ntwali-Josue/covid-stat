import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStats } from '../redux/stats/statsReducer';
import Home from './Home';

const Continent = () => {
  const dispatch = useDispatch();
  const covidStats = useSelector((state) => state.stats.statsList);
  const status = useSelector((state) => state.stats.status);
  useEffect(() => {
    if (status === 'empty') {
      dispatch(fetchStats());
    }
  }, [status]);

  const allStats = covidStats.map((stat) => (
    <Home key={stat.deaths} continent={stat.continent} deaths={stat.deaths} />
  ));

  return (
    <div>
      {allStats}
    </div>
  );
};

export default Continent;
