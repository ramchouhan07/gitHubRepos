
const MainMid = ()=>{

    const dataArray = [
        { type: "design system", privacy: "public", language: "React", size: "5220kb", update: "1 day ago" },
        { type: "UI components", privacy: "private", language: "Vue.js", size: "3200kb", update: "2 days ago" },
        { type: "design system", privacy: "public", language: "Angular", size: "4900kb", update: "3 days ago" },
        { type: "web framework", privacy: "private", language: "React", size: "6200kb", update: "5 days ago" },
        { type: "style guide", privacy: "public", language: "Svelte", size: "2500kb", update: "7 days ago" },
        { type: "UI kit", privacy: "private", language: "React", size: "3500kb", update: "10 days ago" },
        { type: "design system", privacy: "public", language: "Angular", size: "4000kb", update: "15 days ago" },
        { type: "design components", privacy: "private", language: "Vue.js", size: "5800kb", update: "20 days ago" },
        { type: "style guide", privacy: "public", language: "React", size: "4300kb", update: "25 days ago" },
        { type: "web framework", privacy: "private", language: "Svelte", size: "3100kb", update: "30 days ago" },
        { type: "UI kit", privacy: "public", language: "Angular", size: "7000kb", update: "35 days ago" },
        { type: "design system", privacy: "private", language: "React", size: "5500kb", update: "40 days ago" },
        { type: "UI components", privacy: "public", language: "Svelte", size: "4600kb", update: "45 days ago" },
        { type: "design system", privacy: "private", language: "Vue.js", size: "5100kb", update: "50 days ago" },
        { type: "web framework", privacy: "public", language: "Angular", size: "3500kb", update: "55 days ago" },
        { type: "design components", privacy: "private", language: "React", size: "3800kb", update: "60 days ago" },
        { type: "UI kit", privacy: "public", language: "Vue.js", size: "3000kb", update: "65 days ago" },
        { type: "style guide", privacy: "private", language: "Angular", size: "4400kb", update: "70 days ago" },
        { type: "design system", privacy: "public", language: "React", size: "5300kb", update: "75 days ago" },
        { type: "web framework", privacy: "private", language: "Svelte", size: "5100kb", update: "80 days ago" },
        { type: "UI components", privacy: "public", language: "Vue.js", size: "3900kb", update: "85 days ago" },
        { type: "style guide", privacy: "private", language: "React", size: "5200kb", update: "90 days ago" },
        { type: "design components", privacy: "public", language: "Angular", size: "4600kb", update: "95 days ago" },
        { type: "web framework", privacy: "private", language: "Vue.js", size: "4700kb", update: "100 days ago" },
        { type: "UI kit", privacy: "public", language: "Svelte", size: "4300kb", update: "105 days ago" },
        { type: "design system", privacy: "private", language: "React", size: "5100kb", update: "110 days ago" },
        { type: "UI components", privacy: "public", language: "Vue.js", size: "4500kb", update: "115 days ago" },
        { type: "design system", privacy: "private", language: "Angular", size: "4700kb", update: "120 days ago" },
        { type: "web framework", privacy: "public", language: "React", size: "5000kb", update: "125 days ago" },
        { type: "UI kit", privacy: "private", language: "Svelte", size: "3900kb", update: "130 days ago" },
        { type: "style guide", privacy: "public", language: "Angular", size: "4100kb", update: "135 days ago" },
        { type: "design system", privacy: "private", language: "React", size: "4800kb", update: "140 days ago" },
        { type: "web framework", privacy: "public", language: "Svelte", size: "4200kb", update: "145 days ago" },
        { type: "UI components", privacy: "private", language: "Vue.js", size: "4900kb", update: "150 days ago" }
      ];
      

    return(<>
    <div>
        {dataArray.map((item)=>{
            return<>
            <div id="type" className="border-2 p-4">
                <div className="flex gap-2 m-3">
                    <h1 className="font-bold">{item.type}</h1>
                    <button className="border-2 rounded-full w-24  border-blue-400 text-blue-500 hover:bg-blue-100">{item.privacy }</button>
                </div>
                <ul className="flex gap-8 m-2">
                    <li>{item.language}</li>
                    <li>{item.size}</li>
                    <li>{item.update}</li>
                </ul>
            
            </div>
            </>
        })}
    </div>
    </>)
}
export default MainMid;