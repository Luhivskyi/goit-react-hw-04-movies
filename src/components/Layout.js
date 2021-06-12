import React from 'react';
import Appbar from './Appbar';
import PropTypes from 'prop-types';

const styles = {
  maxWidth: 1170,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingRight: 12,
  paddingLeft: 12,
};

const Layout = ({ children }) => (
  <div style={styles}>
    <Appbar />
    {children}
  </div>
);

export default Layout;

Layout.protoType = {
  children: PropTypes.element.isRequired,
};
