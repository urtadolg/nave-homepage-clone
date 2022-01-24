import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import Header from "./components/header/Header";

library.add(fab, faBars, faTimes);

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
