import axios from 'axios';
import fbref from './fbconfig.json';

const firebaseUrl = fbref.firebaseConfig.databaseURL;

const getProjectsData = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/projects.json`)
    .then((results) => {
      const { data } = results;
      const projects = [];
      Object.keys(data).forEach((projectId) => {
        data[projectId].id = projectId;
        projects.push(data[projectId]);
      });
      resolve(projects);
    })
    .catch(error => reject(error));
});

export default { getProjectsData };
