import React from 'react';

import Navbar from '../components/navbar';
import Homepage from '../components/homepage';
import Bio from '../components/bio';
// import Footer from '../components/footer';

import projectsData from '../data/projects-data';

import './App.scss';

class App extends React.Component {
  state = {
    projects: [],
  }

  componentDidMount() {
    projectsData.getProjectsData()
      .then((data) => {
        this.setState({ projects: data });
      })
      .catch();
  }

  render() {
    const { projects } = this.state;
    return (
      <div className="App h-100">
        <Navbar />
        <Homepage projects={projects} />
        <Bio />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
