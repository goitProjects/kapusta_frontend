import React from 'react';
import { Bar, HorizontalBar } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { useWindowSize } from '../../utils/hooks';
import Panel from '../Panel/Panel';

const Chart = ({ chartData }) => {
  const { width } = useWindowSize();
  return (
    <Panel>
      {width < 768 && (
        <HorizontalBar
          data={chartData}
          options={{
            legend: {
              borderWidth: 50,
            },
          }}
          height={600}
          width={300}
        />
      )}
      {width >= 768 && <Bar data={chartData} options={{}} />}
    </Panel>
  );
};

Chart.propTypes = {
  chartData: PropTypes.shape({}).isRequired,
};

export default Chart;
