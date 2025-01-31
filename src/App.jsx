import { useEffect, useState } from "react"
import PageNavigate from "./PageNavigate"
import ProductList from "./ProductList"
import SearchBar from "./SearchBar"
import axios from "axios"


function App() {

  const [products, setProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchText, setSearchText] = useState('')

  const fetchProducts = async (searchText,page) => {
    let skip=(+page-1) * 10
    // const resp = await axios.get(`https://dummyjson.com/products?limit=10&skip=${skip}&select=id,title,price`)
    const resp = await axios.get(`https://dummyjson.com/products/search?q=${searchText}&limit=10&skip=${skip}`)
    console.log(resp.data)
    setTotal(resp.data.total)
    setProducts(resp.data.products)
  }
  useEffect( ()=>{
    setCurrentPage(1)
  }, [searchText])

  useEffect( ()=>{
    fetchProducts(searchText, currentPage)
  } ,[searchText, currentPage])

  return (
    <div className="max-w-screen-lg mx-auto bg-slate-300 min-h-screen flex flex-col gap-4">
      <h1 className="text-4xl border text-pink-600 text-center">Products List</h1>
    <div className="flex justify-center gap-4">
      <SearchBar setSearchText={setSearchText}/>
      <PageNavigate currentPage={currentPage} setCurrentPage={setCurrentPage} total={total}/>
    </div>
    <div className='ps-1 pe-5 py-2 bg-white mx-auto min-w-[420px]'>
      <ProductList products={products}/>
    </div>
    </div>
  )
}

export default App
