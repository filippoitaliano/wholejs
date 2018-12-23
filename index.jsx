import React from 'react';
import ReactDOM from 'react-dom';

import workInProgress from './resources/images/work-in-progress.png';

const styles = {
  page: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#313134',
  },
  logo: {
    width: 400,
    maxWidth: '80%',
  },
  img: {
    width: '100%',
  },
  info: {
    marginTop: 25,
    textTransform: 'uppercase',
    fontFamily: 'Open Sans',
    fontWeight: 300,
    color: 'lightgrey',
    fontSize: 12,
  },
  link: {
    color: '#0091FF',
  },
};

const App = () => (
  <div style={styles.page}>
    <div style={styles.logo}>
      <img style={styles.img} src={workInProgress} alt="Work in progress logo" />
    </div>
    <div style={styles.info}>
      Filippo Italiano •&nbsp;
      <a style={styles.link} href="mailto:info@wholejs.com">
        info@wholejs.com
      </a>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
