
const LearningSection = () => {
  return (
    // height hard coded as it affect svg
    <div className="hidden lg:block w-full h-[500px] bg-gradient-to-b from-[#F58C4A] to-[#FF8CBC] ">
      <div className="h-full w-full flex flex-col justify-center items-center overflow-hidden px-5 box-border">
        {/* Title */}
        
        <div className="relative flex items-center">
          <span className="absolute left-[-40px] top-[-20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 37 37"
              width="40"
              height="40"
            >
              <path
                d="M 27.5 24 C 27.5 24 10.863 17.495 5 5.5"
                fill="transparent"
                strokeWidth="3"
                stroke="white"
                strokeLinecap="round"
              />
              <path
                d="M 15 12 C 15 12 3.908 7.781 0 0"
                transform="translate(7.567 23.943) rotate(-27 7.5 6)"
                fill="transparent"
                strokeWidth="3"
                stroke="white"
                strokeLinecap="round"
              />
              <path
                d="M 33.5 16 C 33.5 16 27.5 11.683 27.5 3"
                fill="transparent"
                strokeWidth="3"
                stroke="white"
                strokeLinecap="round"
              />
            </svg>
          </span>
          {/* Title */}
          <h1 className="font-poppins text-6xl font-bold text-black">
            learn anything and everything
          </h1>
        </div>

        {/* Subtitle */}
        <p
          className="max-w-3xl text-center font-be-vietnam text-lg font-medium tracking-[-0.01em] mt-4"
          style={{
            lineHeight: "1.6em",
            color: "rgb(8, 62, 50)",
          }}
        >
          Unlock your potential with access to expert mentors who help you
          explore any passion and achieve any goal. From mastering new skills to
          navigating college applications, we provide the guidance you need to
          learn anything and everything.
        </p>
      </div>
    </div>
  )
}

export default LearningSection
