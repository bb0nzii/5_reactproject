import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import BoardList from './BoardList';//보드리스트라는 컴포넌트를 사용하겠다는 의미
import Write from './Write';
import Slide from './Slide';
import Header from './include/Header';
import Footer from './include/Footer';


function App() {
  return (
  <>
<Header/>
<Slide/>
<BoardList/>
<Write/>
<Footer/>
  </>  
  );
}

export default App;