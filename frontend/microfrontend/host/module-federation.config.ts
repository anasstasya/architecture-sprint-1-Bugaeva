export const mfConfig = {
  name: "host",
  remotes: {
    'users': 'users@http://localhost:8081/remoteEntry.js',
    }, 
  exposes: {},
  shared: ["react", "react-dom"],
};
