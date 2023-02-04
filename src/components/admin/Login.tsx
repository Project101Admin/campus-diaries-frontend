import React from 'react';
import loginside from "../../assets/images/login/loginside.jpg"
type Props = {};

const Login = (props: Props) => {
  return (
    <div className="w-screen h-screen flex bg-[#7f53fa7a]">
      <div className="mx-auto h-[80vh] my-auto w-[80vw] flex bg-white rounded-2xl">
        <div className="md:flex-[0.5]  w-full rounded-2xl flex flex-col justify-center">
          <div className="flex flex-col">
            <span className="text-3xl mx-8 font-semibold text-left">Login ✌️</span>
            <h4 className="text-left mx-8 my-1 text-sm text-zinc-700">How do i get started ? here</h4>
          </div>
          <div>
            <div>
              <form>
                <div className="m-8">
                  <input
                    type="text"
                    className="focus:outline-none focus:border-none form-control w-full px-4 py-2 text-xl font-normal text-zinc-800 bg-[#7f53fa3d] caret-[#a362fd] bg-clip-padding focus:placeholder:text-transparent rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-[#7f53fa74] focus:border-blue-600"
                    id="exampleFormControlInput2"
                    placeholder="ID"
                  />
                </div>

                <div className="m-8">
                  <input
                    type="password"
                    className="focus:border-none focus:placeholder:text-transparent form-control w-full px-4 py-2 text-xl font-normal text-zinc-800 caret-[#a362fd] bg-[#7f53fa3d] bg-clip-padding rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-[#7f53fa74] focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                  />
                </div>

                <div className="flex justify-end items-center mb-6">
                  <a href="#!" className="text-[#A96CFD] text-lg -mt-6 mx-9">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="button"
                  className=" bg-[#7F53FA] w-[80%] my-2 text-white font-bold text-lg leading-snug tracking-widest uppercase rounded shadow-md hover:bg-[#7242f7] hover:shadow-lg focus:bg-[#703dfc] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#6f3cfb] active:shadow-lg transition duration-150 ease-in-out py-3"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="hidden rounded-r-2xl flex-[0.5] md:flex">
          <img src={loginside} alt="" width="100%" height="100%" className="rounded-r-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Login;
