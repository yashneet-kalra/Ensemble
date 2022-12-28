import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './homePage/homePage';
import LoginPage from "./loginPage/loginPage";
import WorkSpacePage from './workspacePage/workspacePage';
import BoardsPage from './boardsPage/boardsPage';
import ListsPage from './listsPage/listsPage';
import GlobalStyles from '../globalStyles/globalStyles'
import { useState } from "react";
import { AuthContext, NotificationPopUpContext } from "../context/context";
import Header from "../components/header/header";
const App = () => {
  const [auth, setAuth] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  return ( 
    <>
    <NotificationPopUpContext.Provider value={{showNotification, setShowNotification}}>
    <AuthContext.Provider value={{auth, setAuth}} >
    <GlobalStyles />
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage /> } />
        <Route path="/login" element={<LoginPage /> } />
        <Route path="/workspace" element={ <WorkSpacePage /> } />
        <Route path="/boards" element={<BoardsPage />} />
        <Route path="/lists" element={ <ListsPage /> } />
      </Routes>
    </Router>
    </AuthContext.Provider>
    </NotificationPopUpContext.Provider>
    </>
   );
}
 
export default App;