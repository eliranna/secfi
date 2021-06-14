import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import CircularProgress from '@material-ui/core/CircularProgress';
import RateExchangeErrorMessage from './RateExchangeErrorMessage';
import {DailyRateChartProps} from '../types/DailyRateChart';

export default function DailyRateChart({ isLoading, error, data }: DailyRateChartProps) {

  const theme = useTheme();

  return isLoading ?  <CircularProgress/> : (
    error ? <RateExchangeErrorMessage/> : (
      <React.Fragment>
            <ResponsiveContainer>
              <LineChart
                data={data}>
                <XAxis dataKey="day" stroke={theme.palette.text.secondary} />
                <YAxis stroke={theme.palette.text.secondary}/>
                <Line type="monotone" dataKey="values.open" stroke={theme.palette.info.main} dot={false} />
              </LineChart>
            </ResponsiveContainer>
      </React.Fragment>
    )
  );
}

DailyRateChart.propTypes = {
  data: PropTypes.array
};