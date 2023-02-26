import './Result.css'
import ReactMarkdown from 'https://esm.sh/react-markdown@7'

export default function Result({MDinput,setMDinput}) {
 return (
  
   <div className='resultcontainer'>
       <ReactMarkdown>{MDinput}</ReactMarkdown>
      
       </div>
 )
}