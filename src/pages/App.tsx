import Header from "../components/layout/Header";

function App() {
  return (
    <>
      <Header />
      <div>
        <button onClick={() => alert("HEI")}>Click Me</button>
      </div>
    </>
  );
}

export default App;
