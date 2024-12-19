const Header = ()=>{
    return(<>
   <div className=" border-2 border-blue-300  w-full sm:w-full  sm:flex flex-wrap "> 
    <div className="gap-3 sm:wrap">
        <h1 className="m-3 font-bold">Repositories</h1>
     <div className=" sm:fle-wra">
        <p className="m-2  ">33 total repositories</p>
        <input placeholder="search repositories" className="border-2 m-2 border-gray-300 rounded-full"></input>
     </div>
   </div>
       
   <div className=" right-8 relative sm:absolute flex items-center h-32">
    <div className="flex m-6 rounded-md border-2 p-0 w-28 h-9">
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="2em"
      width="2em"
     margin="0"
     padding = "0"
    >
      <path d="M10 11H7.101l.001-.009a4.956 4.956 0 01.752-1.787 5.054 5.054 0 012.2-1.811c.302-.128.617-.226.938-.291a5.078 5.078 0 012.018 0 4.978 4.978 0 012.525 1.361l1.416-1.412a7.036 7.036 0 00-2.224-1.501 6.921 6.921 0 00-1.315-.408 7.079 7.079 0 00-2.819 0 6.94 6.94 0 00-1.316.409 7.04 7.04 0 00-3.08 2.534 6.978 6.978 0 00-1.054 2.505c-.028.135-.043.273-.063.41H2l4 4 4-4zm4 2h2.899l-.001.008a4.976 4.976 0 01-2.103 3.138 4.943 4.943 0 01-1.787.752 5.073 5.073 0 01-2.017 0 4.956 4.956 0 01-1.787-.752 5.072 5.072 0 01-.74-.61L7.05 16.95a7.032 7.032 0 002.225 1.5c.424.18.867.317 1.315.408a7.07 7.07 0 002.818 0 7.031 7.031 0 004.395-2.945 6.974 6.974 0 001.053-2.503c.027-.135.043-.273.063-.41H22l-4-4-4 4z" />
    </svg>
    <button className=" m-0 hover:bg-gray-400">refresh all</button>
    </div>
  
   <button className="bg-blue-600 rounded-md h-8 hover:bg-blue-500"> + add repositories</button>
   </div>
    </div>
    
    </>)
}
export default Header;