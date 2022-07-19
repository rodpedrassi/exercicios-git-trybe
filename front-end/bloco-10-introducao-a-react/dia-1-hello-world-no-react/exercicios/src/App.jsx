import './App.css';
import Header from './Header';
import Content from './Content';

const Task = (value) => <li>{value}</li>;
const tasks = ['lalala', 'lelele', 'lilili'];

function App() {
  return (
    <>
      <ul>{tasks.map((task) => Task(task))}</ul>
      <Header></Header>
      {/* <Content></Content> */}
    </>
  );
}

export default App;
