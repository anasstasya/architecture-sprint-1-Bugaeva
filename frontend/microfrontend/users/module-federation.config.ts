export const mfConfig = {
  name: "users",
  filename: "remoteEntry.js",  
  exposes: {
    './UserHeaderControl': './src/components/UserHeaderControl.js',
  },
  shared: ["react", "react-dom"],
};
