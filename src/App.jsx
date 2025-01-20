import PageNavigate from "./PageNavigate"
import ProductList from "./ProductList"
import SearchBar from "./SearchBar"


function App() {

  return (
    <div className="max-w-screen-lg mx-auto bg-slate-300 min-h-screen flex flex-col gap-4">
      <h1 className="text-4xl border text-pink-600 text-center">Products List</h1>
    <div className="flex justify-center gap-4">
      <SearchBar />
      <PageNavigate />
    </div>
    <div className='ps-1 pe-5 py-2 bg-white mx-auto min-w-[420px]'>
      <ProductList/>
    </div>
    </div>
  )
}

export default App
