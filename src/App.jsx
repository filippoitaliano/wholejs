import React, { useState, useEffect, useCallback } from 'react';

import workInProgress from '../resources/images/work-in-progress.png';

import AnimatedSquare from './AnimatedSquare.jsx';

const styles = {
  page: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#313134',
    overflow: 'hidden',
  },
  logo: {
    marginTop: 100,
    width: 300,
    maxWidth: '60%',
    zIndex: 100,
  },
  img: {
    width: '100%',
  },
  info: {
    marginBottom: 100,
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

const App = () => {
  const [instance, setInstance] = useState(3);

  const updateInstance = useCallback(() => {
    setInstance(Math.floor(Math.random() * 10 + 1));
  }, []);

  useEffect(() => {
    setInterval(updateInstance, 7000);
    return () => {
      clearInterval(updateInstance);
    };
  }, []);

  return (
    <div key={instance} style={styles.page}>
      <div style={styles.logo}>
        <img style={styles.img} src={workInProgress} alt="Work in progress logo" />
      </div>
      <div style={styles.info}>
        Filippo Italiano •&nbsp;
        <a style={styles.link} href="mailto:info@wholejs.com">
          info@wholejs.com
        </a>
      </div>
      {[...Array(instance).keys()].map(() => (
        <AnimatedSquare
          x={Math.random() * window.innerHeight}
          y={Math.random() * window.innerWidth}
        />
      ))}
    </div>
  );
};

export default App;
