import { useState } from "react";

const RightSide = ({handler})=>{
    const [count , setcount ] = useState(1)
  const login = ()=>{
    handler();
  }
const selfHosted = ()=>{
    setcount(0)
}
    return (<>
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <div className="flex">
            <img className="w-10" src="src\components\Codeant.jpg" alt="logo" />
            <h1>CodeAnt Ai</h1>
        </div>
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Welcome to CodeAnt AI</h1>

        <div className="flex justify-center mb-6">
          <button onClick={()=>setcount(1)} className="bg-blue-600 text-white rounded-md px-6 py-3 mx-3 hover:bg-blue-700 focus:outline-none">SAAS</button>
          <button onClick={selfHosted} className= " bg-white text-blue-600 border-2 border-blue-600 rounded-md px-6 py-3 mx-3 hover:bg-blue-600 hover:text-white focus:outline-none active:bg-blue-600">Self Hosted</button>
        </div>

       {count? <div className="flex flex-col space-y-4 mb-6">
          <button onClick={login} className="bg-gray-800 text-white rounded-md px-6 py-3 hover:bg-gray-900 focus:outline-none">
            Sign in with GitHub
          </button>
          <button onClick={login} className="bg-blue-500 text-white rounded-md px-6 py-3 hover:bg-blue-600 focus:outline-none">
            Sign in with Bitbucket
          </button>
          <button onClick={login} className="bg-green-600 text-white rounded-md px-6 py-3 hover:bg-green-700 focus:outline-none">
            Sign in with Azure DevOps
          </button>
          <button onClick={login} className="bg-orange-500 text-white rounded-md px-6 py-3 hover:bg-orange-600 focus:outline-none">
            Sign in with GitLab
          </button>
        </div>:
        <div className="items-center justify-center p-8 mb-6">
            <button onClick={login} className=" m-4 bg-green-600 text-white rounded-md px-6 py-3 hover:bg-green-700 focus:outline-none">
        Sign in with Azure DevOps
      </button>
      <button onClick={login} className="m-4 bg-orange-500 text-white rounded-md px-6 py-3 hover:bg-orange-600 focus:outline-none">
        Sign in with GitLab
      </button>
        </div>
        }

        <p className="text-center text-gray-500 mt-4">
          By singin up you agree to the Privasy Policy
        </p>
      </div>
    </div>
   
    </>)
}
export default RightSide;