import "./App.css";
import { BiLogIn } from "react-icons/bi";
import { BsFillArrowRightCircleFill, BsArrowUpRight } from "react-icons/bs";
import { FaCirclePlay } from "react-icons/fa6";
import { GoDot, GoDotFill } from "react-icons/go";

function App() {
  return (
    <div className="bg-black text-[#E3E3E3] p-10">
      {/* NAVBAR */}
      <div className="nav-bar flex justify-between">
        <div className="text-2xl font-semibold">
          <p>Oucher</p>
        </div>

        <div className="flex gap-10">
          <div>Services</div>
          <div>Contact</div>
          <div>About</div>
        </div>

        <div className="flex gap-5">
          <div>Sign Up</div>
          <div>
            <button className="border-solid border-2 rounded-full border-white p-2">
              {<BiLogIn />}
            </button>
          </div>
        </div>
      </div>

      {/* LINE */}
      <div className="my-3">
        <hr />
      </div>

      {/*MAIN */}

      <div className="flex w-[100vw]">
        <div className="w-[50vw] h-[85vh] ">
          <div className="text-[85px] ml-5 mt-12 mb-12 leading-[1.2]">
            <p>UNLIMITED</p>
            <p>PRETENTIOUS</p>
            <p className="flex">
              <div className="bg-[url('D:\Octanet\landing-page\Components\brunnetteM.png')] border-solid border-4 border-black  relative rounded-full bg-cover h-[100px] w-[100px]">
              </div>
              <div className="bg-[url('D:\Octanet\landing-page\Components\brunnetteF.png')] relative right-5 border-solid border-4 border-black  rounded-full bg-cover h-[100px] w-[100px]">
              </div>
              <div className="bg-[url('D:\Octanet\landing-page\Components\ebony.png')] relative right-10 border-solid border-4 border-black rounded-full bg-cover h-[100px] w-[100px]">
              </div>
              <span>IDEAS</span>
            </p>
          </div>
          <div>
            <hr className="w-[90%]" />
          </div>
          <div className="flex justify-between mt-5 text-xl mr-20">
            <div>OUR SOLUTIONS</div>
            <div>
              <p>WE PROVIDE THE FULL</p> <p>FUNNEL APPROACH</p>
            </div>
          </div>
        </div>

        <div className="w-[50vw] h-[85vh] text-black font-medium">
          <div className="bg-[#b4a0d1] items-center rounded-3xl mt-20 h-[75%] w-[80%] text-xl font-medium flex flex-col relative">
            <div className="absolute top-10 left-10">
              <p>YOUR</p>
              <p>BUSINESS</p>
              <p>BOOST</p>
            </div>

            <div className="bg-[url('D:\Octanet\landing-page\Components\main.png')] bg-cover w-[100%] h-[100%] absolute left-10"></div>

            <div className="flex justify-between w-[80%] absolute bottom-10 border-black border-2 rounded-2xl">
              <div className="font-medium p-3">Book Demo Call</div>
              <div className=" text-3xl p-3">
                <BsFillArrowRightCircleFill />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}

      <div className="flex justify-evenly mt-20">
        <div className="w-[25vw] h-[40vh] ">
          <div className="flex gap-2  text-white">
            <div className="m-2 text-5xl">{<FaCirclePlay />}</div>
            <div className="mt-2">
              <p>Let's see</p>
              <p>How We Did it</p>
            </div>
          </div>
          <div className="p-2">
            <div className="mt-7">
              <span className="border-2 rounded-3xl p-2">Web Analytics</span>
            </div>
            <div className="mt-7">
              <span className="border-2 rounded-3xl p-2">Email Marketing</span>
            </div>
            <div className="mt-7">
              <span className="border-2 rounded-3xl p-2">SEO 2.0 </span>
            </div>
          </div>
        </div>
        <div className="w-[25vw] h-[40vh] flex flex-col justify-between rounded-3xl text-xl font-semibold text-black mr-2 bg-[#fd5e09]">
          <div className="m-5">
            <p>Unique</p>
            <p>Business Solutions</p>
          </div>
          <div className="m-5">logo</div>
        </div>
        <div className="w-[25vw] h-[40vh] text-black rounded-3xl flex flex-col justify-between mr-2 bg-[#e0e0e0]">
          <div className="flex justify-between m-5">
            <div className="flex ">
              <div>
                <GoDot />
              </div>
              <div>
                <GoDotFill />
              </div>
            </div>
            <div>
              <BsArrowUpRight className="text-5xl ml-auto" />
            </div>
          </div>
          <div className="text-5xl font-semibold m-5">Our Case Study</div>
        </div>
        <div className=" flex flex-col justify-between w-[25vw] h-[40vh] text-black rounded-3xl mr-2 bg-[#fdc959]">
          <div className="text-xl font-semibold m-5">
            <p>Successful</p> 
            <p>Projects</p> 
          </div>
          <div className="text-7xl m-5">
            <p>700 <sup>+</sup></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
