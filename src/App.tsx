import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppView from "./views/AppView";
import ComponentView from "./views/ComponentView";
import ViewSwitcher from "./components/ViewSwitcher";
import "./styles/custom-bootstrap.scss";

function App() {
  const [view, setView] = useState<"app" | "components">("app");

  return (
    <div className="container mt-4 pt-5 bg-gray">
      <div
      // Dynamic CSS for mobile view, causes some errors when doing a class resize so this seems to be best method for keeping viewswitcher in view on mobile devices for now
        style={{
          paddingTop: window.innerWidth <= 576 ? "5rem" : "0", 
        }}
      >
        <ViewSwitcher
          view={view}
          onSwitch={() => setView(view === "app" ? "components" : "app")}
        />
      </div>
      <hr />
      {view === "app" ? <ComponentView /> : <AppView />}
    </div>
  );
}

export default App;