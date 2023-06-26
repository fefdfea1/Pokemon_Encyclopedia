import PageHeader from "./Common/PageHeader";
import { BrowserRouter } from "react-router-dom";
import PageNavigator from "./PageNavigator";
function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <PageNavigator />
    </BrowserRouter>
  );
}

export default App;
