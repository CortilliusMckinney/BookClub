import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import SignIn from "./components/SignIn";
import AddBook from "./components/AddBook";
import BookDetailPage from "./components/BookDetailPage";
import UploaderEditPage from "./components/UploaderEditPage";
// import FileBase64 from "react-file-base64";


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/"element={<Registration/>} /> */}
          <Route path="/addBook" element={<AddBook/>}/>
          <Route path="/displayBook/:id" element={<BookDetailPage/>} />
          <Route path="/editPage/:id" element={<UploaderEditPage/>} />

          {/* <Route path="/updatePoll/:id" element={<UpdatePoll />} /> */}
           <Route path="/" element={<SignIn/>} />
           <Route path="/signUp" element={<Registration/>} />
        </Routes>
      </BrowserRouter>

      {/* <Registration />  */}
    </div>
  );
}

export default App;
