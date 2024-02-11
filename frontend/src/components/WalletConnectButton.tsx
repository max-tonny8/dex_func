import { ConnectKitButton } from "connectkit";

const WalletConnectButton = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, address }) => {
        return (
          <button onClick={show} className="connectButton">
            {isConnected
              ? address?.slice(0, 4) + "..." + address?.slice(38)
              : "Connect"}
          </button>
        );
      }}
    </ConnectKitButton.Custom>
  );
};

export default WalletConnectButton;
