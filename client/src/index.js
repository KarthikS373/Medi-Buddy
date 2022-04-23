import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { VideoContexProvider } from "./socket/videoSocket";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <VideoContexProvider>
      <App />
    </VideoContexProvider>
  </React.StrictMode>
);
