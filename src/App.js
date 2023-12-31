// import './App.css';
// import React, { Component}  from 'react'
// import Navbar from './components/Navbar.js'
// // import News from './components/News'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// //import App from './components/News1'
// import News from './components/News1.js'
// import LoadingBar from 'react-top-loading-bar'

// export default class App extends Component {
//   pageSize=20;
//   //apikey = process.env.apikey
//   //apikey=process.env.apikey
//   apikey='c3ea7e2d557844e5b17021d9314b46bd'
//   c='Aakash'
//   state={
//     progress:0
//   }
//   setProgress=(progress)=> {
//     setState({progress:progress})
//   }
//   render() {
//     //const [progress, setProgress] = useState(0)

//     return (
//       <div>
//         <BrowserRouter>
//         <Navbar/>
//         <LoadingBar
//         color='#f11946'
//         progress={state.progress}
//         // onLoaderFinished={() => setProgress(0)}
//         />
//           <Routes>
//             <Route path="/" element={<News setProgress={setProgress} apikey={apikey}  key="general"  pageSize={20} category={"general"} country={"in"}/>} />
//             <Route path="/business" element={<News setProgress={setProgress} apikey={apikey}  key="business"  pageSize={20} category={"business"} country={"in"}/>} />
//             <Route path="/entertainment" element={<News setProgress={setProgress} apikey={apikey}  key="entertainment"  pageSize={20} category={"entertainment"} country={"in"}/>} />
//             <Route path="/general" element={<News setProgress={setProgress} apikey={apikey}  key="general" pageSize={20} category={"general"} country={"in"}/>} />
//             <Route path="/health" element={<News setProgress={setProgress} apikey={apikey}  key="health"  pageSize={20} category={"health"} country={"in"}/>} />
//             <Route path="/science" element={<News setProgress={setProgress} apikey={apikey}  key="science" pageSize={20} category={"science"} country={"in"}/>} />
//             <Route path="/sports" element={<News setProgress={setProgress} apikey={apikey}  key="sports" pageSize={20} category={"sports"} country={"in"}/>} />
//             <Route path="/technology" element={<News setProgress={setProgress} apikey={apikey}  key="technology"  pageSize={20} category={"technology"} country={"in"}/>} />
//           </Routes>
//         </BrowserRouter>
        
        
//         {/* hello {c} */}
//         {/* <News setProgress={setProgress} pageSize={20} category={"science"} country={"in"} /> */}
//       </div>
//     )
//   }
// }

// //react component lifecycle
// //mounting-birth of new component
// //update-growth of your component
// //unmount-dath of your component
// //componentDidUpdate()
// //componentDidMount()
// //componentWillUnmount

// //react hooks
// //allow us to use function based component with class based functionality(using rcc in rfc)
// //common methods 
// //useState
// //useEffect
// //useContext
// //useRef



import './App.css';
import React, { Component,useState}  from 'react'
import Navbar from './components/Navbar.js'
// import News from './components/News'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
//import App from './components/News1'
import News from './components/News1.js'
import LoadingBar from 'react-top-loading-bar'

const App=()=> {
  const pageSize = 5;
  //const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  const [dcountry,setCountry]=useState("in");
  // pageSize=20;
  //apikey = process.env.local.apikey
 const apikey=process.env.REACT_APP_NEWS_API
  // c='Aakash'
  // state={
  //   progress:0
  // }
  // setProgress=(progress)=> {
  //   setState({progress:progress})
  // }
  
    //const [progress, setProgress] = useState(0)
    // const toggleCountry=()=>{
    //   if(country==='in') {
        
    //   }
    //   else {
    //     setMode('Light')
    //     document.body.style.backgroundColor='white';
    //     //alert('light');
    //     showAlert("Light mode has been enabled","success");
    //   }
    // }
    const handleinClick=()=>{
      console.log("india")
      setCountry("in");
    }
    const handleruClick=()=>{
      setCountry("ru");
      console.log("russia")
    }    
    const handleusClick=()=>{
      setCountry("us");
      console.log("usa")
    }  
    const handleauClick=()=>{
      setCountry("au");
      console.log("australia")
    }  
    const handlefrClick=()=>{
      setCountry("fr");
      console.log("france")
    }  
    const handledeClick=()=>{
      setCountry("de");
      console.log("germany")
    }  
    const handlechClick=()=>{
      setCountry("ch");
      console.log("china")
    }  
    const handlegbClick=()=>{
      setCountry("gb");
      console.log("Britain")
    }  
    return (
      <div style={{backgroundColor:"grey"}}>
        <BrowserRouter>
        <Navbar country={dcountry} handleinClick={handleinClick} handleruClick={handleruClick} handleusClick={handleusClick} handleauClick={handleauClick} handledeClick={handledeClick} handlegbClick={handlegbClick} handlechClick={handlechClick} handlefrClick={handlefrClick}/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        />
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} apikey={apikey}  key="general"  pageSize={20} category={"general"} country={dcountry}/>} />
            <Route path="/business" element={<News setProgress={setProgress} apikey={apikey}  key="business"  pageSize={20} category={"business"} country={dcountry}/>} />
            <Route path="/entertainment" element={<News setProgress={setProgress} apikey={apikey}  key="entertainment"  pageSize={20} category={"entertainment"} country={dcountry}/>} />
            <Route path="/general" element={<News setProgress={setProgress} apikey={apikey}  key="general" pageSize={20} category={"general"} country={dcountry}/>} />
            <Route path="/health" element={<News setProgress={setProgress} apikey={apikey}  key="health"  pageSize={20} category={"health"} country={dcountry} />} />
            <Route path="/science" element={<News setProgress={setProgress} apikey={apikey}  key="science" pageSize={20} category={"science"} country={dcountry}/>} />
            <Route path="/sports" element={<News setProgress={setProgress} apikey={apikey}  key="sports" pageSize={20} category={"sports"} country={dcountry}/>} />
            <Route path="/technology" element={<News setProgress={setProgress} apikey={apikey}  key="technology"  pageSize={20} category={"technology"} country={dcountry}/>} />
          </Routes>
        </BrowserRouter>
        
        
        {/* hello {c} */}
        {/* <News setProgress={setProgress} pageSize={20} category={"science"} country={"in"} /> */}
      </div>
    )
  
}
export default App;
//react component lifecycle
//mounting-birth of new component
//update-growth of your component
//unmount-dath of your component
//componentDidUpdate()
//componentDidMount()
//componentWillUnmount

//react hooks
//allow us to use function based component with class based functionality(using rcc in rfc)
//common methods 
//useState
//useEffect
//useContext
//useRef



//mern stack
//mongodb
//expressjs
//react
//nodejs