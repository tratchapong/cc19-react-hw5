import {useEffect, useState} from 'react'

function SearchBar(props) {
  const {setSearchText} = props
  const [inputText, setInputText] = useState('')


  // useEffect( ()=>{
  //   fetchProducts(searchText, 1)
  // },[searchText])

  useEffect( ()=>{
    let timer1 = setTimeout( ()=>{
      setSearchText(inputText)
    },1000 )
    return ()=>{
      clearTimeout(timer1)
    }
  })

  return (
    <label>
      <input type="text" placeholder='Search text' 
        value={inputText}
        onChange={e=>setInputText(e.target.value)}
      />
    </label>
  )
}

export default SearchBar