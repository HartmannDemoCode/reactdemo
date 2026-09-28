import './App.css'
import Greeting from './components/Greeting'
import Counter from './components/Counter'
import StudentsViewer from './components/StudentsViewer'
import LiftingStateDemo from './components/LiftingStateDemo'

function App() {
  const students = [
    {id: 1, name: 'Holger', classRoom: 'A'}
    ,{id: 2, name: 'Alberta', classRoom: 'A'}
    ,{id: 3, name: 'Frederik', classRoom: 'B'}
    ,{id: 4, name: 'Franciska', classRoom: 'B'}
    ,{id: 5, name: 'Jonas', classRoom: 'C'}
  ];

  let name = 'React';

  return (
    <>
    {/* <h1>Hello {name}</h1>
    <Greeting name="Holger"/>
    <Greeting name="Henriette"/>
    <StudentsViewer students={students}/> */}
    <LiftingStateDemo/>
    {/* <Counter/> */}
    </>
  )
}

export default App
