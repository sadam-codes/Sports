import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./Navigation/RouterConfig";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
