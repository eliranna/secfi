import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function Headline(props: any) {
  return (
    <Typography component="h1" variant="h1" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}

Headline.propTypes = {
  children: PropTypes.node,
};