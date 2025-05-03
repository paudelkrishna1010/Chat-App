import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-clip-padding
       bg-gray-400/10 backdrop-blur-lg ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500">ChatApp</span>
        </h1>

        <form>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full input h-10"
            />
          </div>
          
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Username"
              className="w-full input h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              minlength="8"
              className="w-full input h-10"
            />
          </div>
          
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              minlength="8"
              className="w-full input h-10"
            />
          </div>

          <GenderCheckBox />

          <a href="#" className="text-sm hover:text-blue-600 hover:underline mt-2 inline-block"> {"Already have an account?"}</a>

          <div>
            <button className="btn btn-nuetral btn-block mt-4">Sign Up</button>
          </div>

        </form>

      </div>
    </div>
  )
}

export default SignUp