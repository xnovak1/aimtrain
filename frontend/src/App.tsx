import './App.css'
import { Footer, Header } from "./components"
import { HomePage, RegisterPage, LoginPage, LeaderboardPage, NotFoundPage, AccountPage, GamePage } from "./pages"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="play" element={<GamePage />} />
        <Route path="leaderboard" element={<LeaderboardPage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
