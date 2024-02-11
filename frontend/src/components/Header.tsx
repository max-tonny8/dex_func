import Logo from "../assets/moralis-logo.svg";
import Eth from "../assets/eth.svg";
import { Link } from "react-router-dom";
import WalletConnectButton from "./WalletConnectButton";

const Header = () => {
  return (
    <header>
      <div className="leftH">
        <img src={Logo} alt="logo" className="logo" />
        <Link to="/" className="link">
          <div className="headerItem">Swap</div>
        </Link>
        <Link to="/tokens" className="link">
          <div className="headerItem">Tokens</div>
        </Link>
      </div>
      <div className="rightH">
        <div className="headerItem">
          <img src={Eth} alt="eth" className="eth" />
          Ethereum
        </div>
        <WalletConnectButton />
      </div>
    </header>
  );
};

export default Header;
