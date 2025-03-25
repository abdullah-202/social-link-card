const App = () => {
  const socialLinks = [
    "GitHub",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ];
  return (
    <>
      <div className="w-screen h-screen bg-[#141414] flex flex-col justify-center items-center p-20">
        <div className="bg-[#1f1f1f] flex flex-col p-4 px-6 rounded-xl text-center items-center justify-center">
          <img
            className="rounded-full w-22 mb-6 mt-2"
            src={"./assets/images/avatar-jessica.jpeg"}
            alt="Image of Jessica"
          />
          <h2 className="text-2xl font-semibold">Jessica Randall</h2>
          <p className="text-sm text-[#c5f82a] font-semibold mt-1">
            London, United Kingdom
          </p>
          <span className="text-sm py-6 font-light">
            "Front-end developer and avid reader."
          </span>
          {socialLinks.map((link) => (
            <div
              key={link}
              className="bg-[#333333] hover:bg-[#c5f82a] hover:text-black  py-3 rounded-md mb-[15px] w-full font-bold text-[14px]"
            >
              <a href="#">{link}</a>
            </div>
          ))}
        </div>
        <div className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Abdullah Asif</a>.
        </div>
      </div>
    </>
  );
};
export default App;
