import logo from './logo.svg';
import './App.css';

function App() {
  const share = () => {
    navigator
      .share({
        title: "Referral",
        text: `Hey,buddy!`
      })
      .then(() => {
        console.log("Successfully shared");
      })
      .catch((error) => {
        console.error("Something went wrong", error);
      });
  }
  return (
    <div className="App">
      <header className="App-header">
          Learn React 
      </header>
      <button onClick={() => share()}>
        Share
      </button>
    </div>
  );
}

export default App;
