import "./App.css";
import BookView from "./components/BookView";
import { EbookProvider } from "./components/Context/context";

function App() {
  return (
    <div className="App">
      <EbookProvider>
        <BookView />
      </EbookProvider>
    </div>
  );
}

export default App;
