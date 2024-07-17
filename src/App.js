import { useState, useEffect, Fragment } from 'react';
import { useLocation, Routes, Route, Navigate } from 'react-router-dom';

import "preline/preline";

import PopupPostComponent from './components/PopUpPostComponent/PopupPostComponent';
import PopupPosterComponent from './components/PopUpPostComponent/PopupPosterComponent';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';

import { routes} from "./routes";
import LoginPage from './pages/SigninPage/LoginPage';
import SignupPage from './pages/SigninPage/SignupPage';
import ResetPasswordPage from './pages/SigninPage/ResetPasswordPage';

function App() {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false)


  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  useEffect(() =>{
    const token = sessionStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  },[]);

  const [popupPost, setPopupPost] = useState(false);
  const [popupPoster, setPopupPoster] = useState(false); 

  return (
    <div className='app'>
      
      <PopupPostComponent trigger={popupPost} setTrigger={setPopupPost} onClose={(e) => {
        console.log(e.target);
        if (e.target.id === "maindiv") {
          setPopupPost(false);
        }
      }}/>
      
      <PopupPosterComponent trigger={popupPoster} setTrigger={setPopupPoster} onClose={(e) => {
        console.log(e.target);
        if (e.target.id === "maindiv") {
          setPopupPoster(false);
        }
      }}/>  

      <Routes>
        <Route
          path="/login"
          element={!isAuthenticated ? <LoginPage /> : <Navigate to="/home" />}
        />
        <Route
          path="/signup"
          element={!isAuthenticated ? <SignupPage /> : <Navigate to="/home" />}
        />
        <Route
          path="/resetPassword"
          element={!isAuthenticated ? <ResetPasswordPage /> : <Navigate to="/home" />}
        />
        {routes.map((route, index) => {
          const Page = route.page;
          const Layout = route.isShowSidebar ? DefaultComponent : Fragment;

          const propsToPass = route.props
            ? Object.fromEntries(
                Object.entries(route.props).map(([key, value]) => [
                  key,
                  eval(value),
                ])
              )
            : {};

          return (
            <Route
              key={index}
              path={route.path}
              element={
                isAuthenticated ? (
                  <Layout>
                    <Page {...propsToPass} />
                  </Layout>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
