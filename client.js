// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const forwardPanel = new Surface(1000, 600, Surface.SurfaceShape.Flat);
  forwardPanel.setAngle(0, 0);
  const rightPanel = new Surface(1000, 600, Surface.SurfaceShape.Flat);
  rightPanel.setAngle(Math.PI / 2, 0);
  const leftPanel = new Surface(1000, 600, Surface.SurfaceShape.Flat);
  leftPanel.setAngle(Math.PI, 0);
  const rearPanel = new Surface(1000, 600, Surface.SurfaceShape.Flat);
  rearPanel.setAngle(-Math.PI / 2, 0);


  r360.renderToSurface(
    r360.createRoot('RightPanel'),
    rightPanel,
  );
  r360.renderToSurface(
    r360.createRoot('ForwardPanel'),
    forwardPanel,
  );
  r360.renderToSurface(
    r360.createRoot('RearPanel'),
    rearPanel,
  );
  r360.renderToSurface(
    r360.createRoot('LeftPanel'),
    leftPanel,
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('main.jpg'));
}

window.React360 = {init};
