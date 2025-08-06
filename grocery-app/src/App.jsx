import AddGroceryForm from './components/AddGroceryForm.jsx'
import Header from './components/Header.jsx'

const App = () => {
  return (<>
    <h1>Hello, React</h1>
    <header>
      <Header />
    </header>
    <main>
      <AddGroceryForm />
    </main>
  </>)
}

export default App
