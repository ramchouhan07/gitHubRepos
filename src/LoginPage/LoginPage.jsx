import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Loginpage = ({handler})=>{

    return(<>
    <div className="flex">
        <LeftSide/>
        <RightSide handler={handler}/>
    </div>
    </>)
}
export default Loginpage;