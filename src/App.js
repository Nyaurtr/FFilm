import { useState, useEffect, Fragment } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';

import "preline/preline";

import PopupPostComponent from './components/PopUpPostComponent/PopupPostComponent';
import PopupPosterComponent from './components/PopUpPostComponent/PopupPosterComponent';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';

import { routes} from "./routes";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

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
                <Layout>
                  <Page {...propsToPass} />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
