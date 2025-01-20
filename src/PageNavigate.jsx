function PageNavigate(props) {
  const {currentPage,setCurrentPage, total} = props

  const hdlInputChange = e => {
    if(isNaN(e.target.value) || e.target.value.trim() === '') {
      return setCurrentPage(prv => prv)
    }
    setCurrentPage(e.target.value)
  }

  const hdlPageClick = (n) => {
    if(currentPage+n < 1) {
      return
    }
    setCurrentPage(prv => +prv+n)
  }

  return (
    <div className='flex items-baseline'>
      <button className='border bg-pink-300 px-1'
        onClick={()=>hdlPageClick(-1)}
      >prev</button>
      <input className='w-10' 
        value={currentPage}
        onChange={hdlInputChange}
      />
      <button className='border bg-pink-300 px-1'
        onClick={()=>hdlPageClick(+1)}
      >next</button>
      <p className='ms-2'> { (currentPage-1)*10 + 1 }-{currentPage*10} of {total}</p>
    </div>
  )
}

export default PageNavigate