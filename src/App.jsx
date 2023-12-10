import Gallery from "./Components/Gallery";
import SearchForm from "./Components/SearchForm";
import ThemeToggle from "./Components/ThemeToggle";
import useGlobalContext from "./Context/Context";
const App = () => {
  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  )
};
export default App;