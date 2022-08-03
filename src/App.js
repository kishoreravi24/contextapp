import ConsumerTest from "./ConsumerTest";
import Context from "./contextManager/Context";
import Name from "./Name";
import UpdateContext from "./UpdateContext";

function App() {
  return (
    <div className="App">
      <Context>
        <Name/>
        <ConsumerTest/>
        <UpdateContext/>
      </Context>
    </div>
  );
}

export default App;
