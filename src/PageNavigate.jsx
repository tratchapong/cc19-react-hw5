import {useEffect, useState} from 'react'

function PageNavigate(props) {
  const {fetchProducts, total} = props
  const [inputPage, setInputPage] = useState(1)

  useEffect(()=>{
    fetchProducts(inputPage)
  },[inputPage])

  const hdlPageClick = (n) => {
    if(inputPage+n < 1) {
      return
    }
    setInputPage(prv => +prv+n)
  }

  return (
    <div className='flex items-baseline'>
      <button className='border bg-pink-300 px-1'
        onClick={()=>hdlPageClick(-1)}
      >prev</button>
      <input className='w-10' 
        value={inputPage}
        onChange={e=>setInputPage(e.target.value)}
      />
      <button className='border bg-pink-300 px-1'
        onClick={()=>hdlPageClick(+1)}
      >next</button>
      <p className='ms-2'> { (inputPage-1)*10 + 1 }-{inputPage*10} of {total}</p>
    </div>
  )
}

export default PageNavigate