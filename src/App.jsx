import Toggle from "./Toggle";

function App() {
   return (
      <div className="App">
         <Toggle>
            <Toggle.Active>Active State</Toggle.Active>
            <Toggle.ToggleButton />
            <Toggle.Inactive>Inactive State</Toggle.Inactive>
         </Toggle>
      </div>
   );
}

export default App;
