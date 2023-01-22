const DownArrow: React.FC<{ onClick: () => void }> = (props) => {
  return (
    <svg
      width="22"
      height="13"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => props.onClick()}
      className="cursor-pointer"
    >
      <path
        d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z"
        fill="#0E8784"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default DownArrow;
