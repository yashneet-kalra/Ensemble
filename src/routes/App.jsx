import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Regis from "../components/Regis";
import Login from "../components/Login";
import WorkSpacePage from "./workspacePage/workspacePage";
import ListsPage from "./listsPage/listsPage";
import GlobalStyles from "../globalStyles/globalStyles";
import { useState } from "react";
import {
  AuthContext,
  LoadingContext,
  NotificationPopUpContext,
  ShowInputModalContext,
  ShowWSAdderContext,
  UpdateContext,
  WorkspaceArrayContext,
} from "../context/context";
import Header from "../components/header/header";
import styled from "styled-components";
import Sidebar from "../components/sidebar/sidebar";

const PseudoBody = styled.div`
  display: flex;
  /* border: 1px solid black; */
`;

const App = () => {
  const [auth, setAuth] = useState(false);
  const [update, setUpdate] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [workspaceArray, setWorkspaceArray] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [showWorkspaceAdder, setShowWorkspaceAdder] = useState(false);
  const [showInputModal, setShowInputModal] = useState(false);
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
                    <PseudoBody>
                      <Sidebar />
                    <Routes>
                      <Route path="/" element={<Login/>} />
                      <Route path="/Register" element={<Regis/>} />
                      <Route path="/workspace" element={<WorkSpacePage />} />
                      <Route path="/list/:buid" element={<ListsPage />} />
                    </Routes>
                    </PseudoBody>
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
