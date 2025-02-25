


const SoundcloudButton = () => {
  const mixlr = "sound.png"

  const handleClick = () => {

    window.open("https://soundcloud.com/the-fathers-church", "_blank"); // Redirect to soundcloud link

  };

  return (
    <button
      className="live-button"
      onClick={handleClick}
      style={{
        backgroundColor: "#FF0000",
        cursor: "pointer",
        // maxWidth: "200px",
        height: "30px",
        alignSelf: "flex-end",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        padding: "10px",
        color: "#fff",
        fontSize: "12px",
        fontWeight: "600",
        border: "none",
        borderRadius: "5px",
        transition: "all 0.3s ease",
      }}
    >
     SoundCloud
      <img
            src={mixlr}
            alt="SoundCloud"
            style={{
              height:"20px",
              width: "20px",
              marginLeft: "2px",
            }}
          />
    </button>
  );
};

export default SoundcloudButton;
