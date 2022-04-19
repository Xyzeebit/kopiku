export const IconButton = ({ icon , text, active }) => (
  <button className={`icon__button ${active}`}>
    <div className="image_container">
      <img
        src={icon}
        alt={text}
        width="25"
        height="25"
      />
    </div>
    <span>{text}</span>
  </button>
)
