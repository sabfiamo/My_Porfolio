function fetchProjects() {
  return fetch("./projects.json").then((response) => response.json());
}

export default fetchProjects;
