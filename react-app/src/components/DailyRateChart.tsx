import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';

type DailyRate = {
  day: String,
  values: DailyRateValues
}

type DailyRateValues = {
  open: String,
  high: String,
  low: String,
  close: String
}

type DailyRateChartProps = {
  data: DailyRate[]
}

export default function DailyRateChart({ data }: DailyRateChartProps) {

  const theme = useTheme();

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="day" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Rate
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="values.open" stroke={theme.palette.info.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}

DailyRateChart.propTypes = {
  data: PropTypes.array
};