import "./styles/App.css";
import "./styles/Variables.css";
import "./styles/CommonStyles.css";
import NavigationBar from "./components/layout/navbar/NavigationBar";
import Content from "./components/layout/content";
import Footer from "./components/layout/footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
        <Content />
        <Footer />
      </header>
    </div>
  );
}

export default App;
