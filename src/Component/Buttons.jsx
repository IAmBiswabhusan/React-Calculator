const Buttons = ({ onButtonClick }) => {
  const buttons = [
    { label: "C", value: "c", className: "clear" },
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "+", value: "+", className: "operator" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "-", value: "-", className: "operator" },

    { label: "6", value: "6" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "*", value: "*", className: "operator" },
    { label: "9", value: "9" },
    { label: "0", value: "0" },
    { label: ".", value: "." },
    { label: "/", value: "/", className: "operator" },

    { label: "=", value: "=", className: "equal" },
  ];

  return (
    <>
      {buttons.map((btn) => (
        <button
          className={`button ${btn.className || ""}`}
          onClick={() => onButtonClick(btn.value)}
          key={btn.label}
        >
          {btn.label}
        </button>
      ))}
    </>
  );
};
export default Buttons;
