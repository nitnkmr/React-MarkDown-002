import './Markdowninput.css'

function Markdowninput({MDinput,setMDinput}){
    return(
        <div className="inputcontainer">
          <textarea value={MDinput} onChange={(ele)=>{
                const newValue = ele.currentTarget.value;
            setMDinput(newValue)
            {console.log(newValue)}
            
          }}></textarea>
        </div>
    )
}

export default Markdowninput
