import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>Hello! React Context</h1>
    </UserContextProvider>
  );
}

export default App;
