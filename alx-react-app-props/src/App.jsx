import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import UserProfile from "./components/UserProfile";
import UserContext from "./components/UserContext";
function App() {
  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserContext.Provider value={userData}>
        <UserProfile />
      </UserContext.Provider>
    </>
  );
}
