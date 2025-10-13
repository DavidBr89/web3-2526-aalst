import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import MyButton from "./components/MyButton";

function App() {
  return (
    <>
      <Header />
      <Content />
      <MyButton>Knop vanuit App</MyButton>
      <Footer />
    </>
  );
}

export default App;
