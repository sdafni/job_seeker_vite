import React from 'react';
import { createRoot } from 'react-dom/client';
//import './index.css'
// import AddJob from '../components/AddJob';
import Frame, { FrameContextConsumer }from 'react-frame-component';


import ContentView from '../components/ContentView';



const body = document.querySelector('body')

const app = document.createElement('div')

app.id = 'react-root'

// Make sure the element that you want to mount the app to has loaded. You can
// also use `append` or insert the app using another method:
// https://developer.mozilla.org/en-US/docs/Web/API/Element#methods
//
// Also control when the content script is injected from the manifest.json:
// https://developer.chrome.com/docs/extensions/mv3/content_scripts/#run_time
if (body) {
  body.prepend(app)
}

const container = document.getElementById('react-root');
const root = createRoot(container);


//head={[<link type="text/css" rel="stylesheet" href={chrome.runtime.getURL("/static/css/content.css")} ></link>]}

root.render(
<ContentView /> 

)




// (
//   <Frame > 
//     <FrameContextConsumer>
//     {
//         ({document, window}) => {
//           return <ContentView document={document} window={window} /> 
//         }
//       }
//       </FrameContextConsumer>
//   </Frame>
// )