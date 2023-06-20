export default function WalletFamilySelector({ handleFamilySize }) {
    // Identify different plan buttons
    const size = [
      { id: "0", name: "1" },
      { id: "1", name: "2" },
      { id: "2", name: "3" },
      { id: "3", name: "4" },
    ];
    return (
        <div data-testid="walletFamilySelectorTest">
          <h2>Choose your family size:</h2>
          {size.map((size) => (
            <button
              key={size.id}
              data-id={size.id}
              onClick={(e) => handleFamilySize(e.target.dataset.id)}
              className="Button"
            >
              {size.name}
            </button>
          ))}
        </div>
    );
  }
  