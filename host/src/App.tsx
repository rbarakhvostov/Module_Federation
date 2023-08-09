import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, NavLink, Navigate } from 'react-router-dom';
// import IconButton from '@mui/material/IconButton';
// import {MouseSharp, PhotoCamera} from '@mui/icons-material';

import "./index.css";

const MFE1 =
  React.lazy(() =>
    import('MFE1/MFE1')
  );

const MFE2 =
  React.lazy(() =>
    import('MFE2/MFE2')
  );

const App = () => {
  const [openMFE1, setopenMFE1] = React.useState(false)
  const [openMFE2, setopenMFE2] = React.useState(false)

  const handleCLick1 = () => {
    setopenMFE1((prev) => !prev)
  }

  const handleCLick2 = () => {
    setopenMFE2((prev) => !prev)
  }

  return (
    <div className="container">
      <div className="mf-container">
        <button onClick={handleCLick1}>1</button>
        { openMFE1 && <div>
          <React.Suspense fallback='Loading...'>
            <MFE1 color="blue" />   
          </React.Suspense> 
        </div> }
      </div>
      <div className="mf-container">
        <button onClick={handleCLick2}>2</button>
        { openMFE2 && <div>
          <React.Suspense fallback='Loading...'>
            <MFE2 color="red" />   
          </React.Suspense> 
        </div> }
      </div>
    </div>
    // <>
    //   <nav>
    //     <ul>
    //       <li>
    //         <NavLink
    //           to='/' 
    //           >
    //           <IconButton>
    //             <PhotoCamera></PhotoCamera>
    //           </IconButton>
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink to='/MFE2'>
    //           <IconButton>
    //             <MouseSharp></MouseSharp>
    //           </IconButton>
    //         </NavLink>
    //       </li>
    //     </ul>
    //   </nav>
    //   <Routes>
    //     <Route path="/" element={
    //       <React.Suspense fallback='Loading...'>
    //         <MFE2 color="blue" />
    //       </React.Suspense>
    //     } />
    //     <Route path="/MFE2" element={
    //       <React.Suspense fallback='Loading...'>
    //         <MFE2 color="red"/>
    //       </React.Suspense>
    //     } />
    //     <Route
    //       path="*"
    //       element={<Navigate to="/" />}
    //     />
    //     </Routes>
    // </>
  )
}

ReactDOM.render( <BrowserRouter><App /></BrowserRouter>, document.getElementById("app"));
