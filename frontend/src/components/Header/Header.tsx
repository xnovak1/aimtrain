import Button from "../Button/Button";

const Header = () => {
  return <header>
    <img src="/vite.svg" className="logo" alt="logo" />
    <nav>
      <Button text="Leaderboard" />
      <Button text="Sign up" />
      <Button text="Login" />
    </nav>
  </header>
}

export default Header;