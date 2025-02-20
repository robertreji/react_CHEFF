import './index.css'
import { Header ,Form,State,Joke} from './Components'
function App() {
  return (
    <div className=' caret-transparent h-auto min-h-screen flex  justify-center  items-center  pt-10  bg-slate-900'>
      
      <div className='max-w-full w-[800px] h-auto   mb-[60px] rounded-2xl '>
        <Header/>
        <hr />
        <div className= ' bg-gray-100 w-full min-h-[50%] pb-[60px] rounded-b-xl overflow-hidden  '>
          <Form/>
        </div>
      </div>
    </div>
  )
}

export default App
