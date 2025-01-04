const handleContactClick = () => {
  const url = "https://api.whatsapp.com/send?phone=6282125488212";
  window.open(url, "_blank");
};
const Button = ({ name, isBeam = false, containerClass }) => {
  return (
    <button className={`btn ${containerClass}`} onClick={handleContactClick}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;
