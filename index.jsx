import autoBind from 'auto-bind';
import React from 'react';
import ReactDOM from 'react-dom';

import workInProgress from './resources/images/work-in-progress.png';

import AnimatedSquare from './src/components/animated-square/AnimatedSquare';

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

class App extends React.Component {
  constructor(props) {
    super(props);
    autoBind.react(this);
    this.state = { instance: 3 };
  }

  componentDidMount() {
    setInterval(this.updateInstance, 7000);
  }

  componentWillUnmount() {
    clearInterval(this.updateInstance);
  }

  updateInstance() {
    this.setState({ instance: Math.floor(Math.random() * 10 + 1) });
  }

  render() {
    const { instance } = this.state;

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
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
