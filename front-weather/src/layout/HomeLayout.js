import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

export const HomeLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
