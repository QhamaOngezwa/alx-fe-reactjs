import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import UserProfile from "./components/UserProfile";
function App() {
  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserProfile name="Qhama" age="26" bio="Creative enthusiast" />
    </>
  );
}
export default App;
