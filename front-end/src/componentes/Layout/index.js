import { Footer } from "./Footer";
import { Header } from "./Header";
import { HomeView } from "../../views/Home";

export function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
