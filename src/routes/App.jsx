import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./homePage/homePage";
import LoginPage from "./loginPage/loginPage";
import WorkSpacePage from "./workspacePage/workspacePage";
import BoardsPage from "./boardsPage/boardsPage";
import ListsPage from "./listsPage/listsPage";
import GlobalStyles from "../globalStyles/globalStyles";
import { useState } from "react";
import {
  AuthContext,
  LoadingContext,
  NotificationPopUpContext,
  ShowWSAdderContext,
  UpdateContext,
  WorkspaceArrayContext,
} from "../context/context";
import Header from "../components/header/header";
const App = () => {
  const [auth, setAuth] = useState(false);
  const [update, setUpdate] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [workspaceArray, setWorkspaceArray] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [showWorkspaceAdder, setShowWorkspaceAdder] = useState(false);
  return (
    <>
      <UpdateContext.Provider value={{ update, setUpdate }}>
        <NotificationPopUpContext.Provider
          value={{ showNotification, setShowNotification }}
        >
          <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            <ShowWSAdderContext.Provider
              value={{ showWorkspaceAdder, setShowWorkspaceAdder }}
            >
              <AuthContext.Provider value={{ auth, setAuth }}>
                <WorkspaceArrayContext.Provider
                  value={{ workspaceArray, setWorkspaceArray }}
                >
                  <GlobalStyles />
                  <Router>
                    <Header />
                    <Routes>
                      <Route exact path="/" element={<HomePage />} />
                      <Route path="/login" element={<LoginPage />} />
                      <Route path="/workspace" element={<WorkSpacePage />} />
                      <Route path="/boards/:wuid" element={<BoardsPage />} />
                      <Route path="/lists" element={<ListsPage />} />
                    </Routes>
                  </Router>
                </WorkspaceArrayContext.Provider>
              </AuthContext.Provider>
            </ShowWSAdderContext.Provider>
          </LoadingContext.Provider>
        </NotificationPopUpContext.Provider>
      </UpdateContext.Provider>
    </>
  );
};

export default App;
