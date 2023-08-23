import React from "react";
import "./Assets/Css/App.css";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./Pages/Loginform";
import Index from "./Pages/Index";
import store from "./store";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Setting from "./Pages/Setting";
import PrivateRoute from "./Components/PrivateRoute";
import Shootfolioclubs from "./Pages/Shootfolioclubs";
import Addnewclub from "./Pages/Addnewclub";
import Addportfolioclub from "./Pages/Addportfolioclub";
import Defineleaguetype from "./Pages/Defineleaguetype";
import Addnewleague from "./Pages/Addnewleague";
import Addgameplaymode from "./Pages/Addgameplaymode";
import Editclub from "./Pages/Editnewclub";
import Viewportfolio from "./Pages/Viewportfolio";
import Editportfolioclub from "./Pages/Editportfolioclub";
import Editleague from "./Pages/Editleague";
import Gametype from "./Pages/Gametype";
import Addgametype from "./Pages/Addgametype";
import Editgametype from "./Pages/Editgametype";
import Assetmanagement from "./Pages/Assetmanagement";
import Subscription from "./Pages/Subscription";
import Gameplaymode from "./Pages/Gameplaymode";
import Editgameplaymode from "./Pages/Editgameplaymode";
import Addsubscriptionplan from "./Pages/Addsubscriptionplan";
import Editsubscriptionplan from "./Pages/Editsubscriptionplan ";
import Addquestion from "./Pages/Addquestion";
import Quiz from "./Pages/Quiz";
import ManualTransactionHistory from "./Pages/ManualTransactionHistory";
import { Toaster } from "react-hot-toast";
import { NotFound, ProtectedRoutes, ProtectedloginRoutes } from "./Components";
function App() {
  return (
    <div className="app">
      {/* <Provider store={store}> */}
      <HashRouter>
        <Toaster
          toastOptions={{
            style: {
              fontSize: "18px",
            },
          }}
        />
        <Routes>
        <Route path="/manual-transaction-history" element={<ManualTransactionHistory/>}></Route>

          <Route path="/addquestion" element={<Addquestion />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/Dashboard" element={<Home />}></Route>
            <Route path="/Dashboard/users" element={<Users />}></Route>
            <Route path="/Dashboard/setting/:id?" element={<Setting />}></Route>
            <Route
              path="/Dashboard/game/shootfolioclubs"
              element={<Shootfolioclubs />}
            ></Route>
            <Route
              path="/Dashboard/game/addnewclub"
              element={<Addnewclub />}
            ></Route>
            <Route
              path="/Dashboard/game/editclub/:id?"
              element={<Editclub />}
            ></Route>
            <Route
              path="/Dashboard/game/addportfolioclub/:id?"
              element={<Addportfolioclub />}
            ></Route>
            <Route
              path="/Dashboard/game/addnewleague"
              element={<Defineleaguetype />}
            ></Route>
            <Route
              path="/Dashboard/game/editleague/:id"
              element={<Editleague />}
            ></Route>
            <Route
              path="/Dashboard/game/gameleague"
              element={<Addnewleague />}
            ></Route>
            <Route
              path="/Dashboard/game/addgameplaymode"
              element={<Addgameplaymode />}
            ></Route>
            <Route
              path="/Dashboard/game/viewportfolio/:id?"
              element={<Viewportfolio />}
            ></Route>
            <Route
              path="/Dashboard/game/Editportfolioclub/:id?"
              element={<Editportfolioclub />}
            ></Route>
            <Route
              path="/Dashboard/game/gametype"
              element={<Gametype />}
            ></Route>
            <Route
              path="/Dashboard/game/addnewgame"
              element={<Addgametype />}
            ></Route>
            <Route
              path="/Dashboard/game/editgametype/:id?"
              element={<Editgametype />}
            ></Route>
            <Route
              path="/Dashboard/game/assetmanagement"
              element={<Assetmanagement />}
            ></Route>
            <Route
              path="/Dashboard/game/subscription"
              element={<Subscription />}
            ></Route>
            <Route
              path="/Dashboard/game/gameplaymode"
              element={<Gameplaymode />}
            ></Route>
            <Route
              path="/Dashboard/game/editgameplaymode/:id?"
              element={<Editgameplaymode />}
            ></Route>
            <Route
              path="/Dashboard/addsubscriptionplan"
              element={<Addsubscriptionplan />}
            ></Route>
            <Route
              path="/Dashboard/editsubscriptionplan/:id?"
              element={<Editsubscriptionplan />}
            ></Route>
          </Route>
          <Route path="/" element={<Index />}>
            <Route element={<ProtectedloginRoutes />}>
              <Route path="/" element={<Login />}></Route>
            </Route>
          </Route>
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
      {/* </Provider> */}
    </div>
  );
}
export default App;
