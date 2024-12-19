const LeftSide = ()=>{

    return(<>
    <div className="  hidden sm:block justify-center items-center ml-20 mt-[200px]  h-screen ">
       <div className="border-2 border-blue-500 rounded-md bg-gray-50">
       <div className="flex border-b-2 border-blue-500 p-6">
            <img className="w-10 h-10" src="src\components\Codeant.jpg"/>
            <h1 className="font-bold to-blue-950">AI To detectc & Autofix Bad Code</h1>
        </div>
        <ul className="flex gap-4 text-center p-8">
            <li>
                <h1 className="font-bold to-blue-950">30+K</h1>
                <p> Language Support</p>
            </li> 
            <li> 
                <h1 className="font-bold to-blue-950">10+K</h1>
                <p> Developers</p>
            </li> 
            <li> 
                <h1 className="font-bold to-blue-950">100+K</h1>
                <p>Hours saved</p>
            </li>
        </ul>
       </div>
       <img className="bg-white shadow-none" src="src\components\Codeant.jpg" alt="imgLogo" />

     </div>
    </>)
}
export default LeftSide;