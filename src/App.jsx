import Body from "./components/Body";
import Login from "./components/Login";
import Feed from "./components/Feed";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import store from "./utils/appStore";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import RefundCancellations from "./components/RefundCancellations";
import ContactUs from "./components/ContactUs";
import GoPremium from "./components/GoPremium";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Feed />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/go-premium" element={<GoPremium />} />
              <Route
                path="/terms-and-conditions"
                element={<TermsAndConditions />}
              />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route
                path="/refund-cancellations"
                element={<RefundCancellations />}
              />
              <Route path="/contact-us" element={<ContactUs />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
