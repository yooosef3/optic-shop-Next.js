import { Volume } from 'memfs';

// Create a new volume with the desired options
const vol = Volume.fromJSON(
  { /* Put your initial file system configuration here */ },
  '/path/to/root' // Set a root path for the file system
);

// Export the volume object so it can be used in other parts of the application
export default vol;