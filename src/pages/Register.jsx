import React from "react";



function Register () {
  return (
    <div>
      <nav class="bg-teal-400 md:font-bold lg:font-bold sm:font-bold">
        <div className=" flex justify-center  text-white">
          <h3>Create An Account</h3>
        </div>
      </nav>
      <div className="form">
        <div className="form-body">
          <div className="label">
            <label className="form__label" for="username">
              Username{" "}
            </label>
            <input
              className="form__input"
              type="username"
              id="username"
              placeholder="Username"
            />
          </div>
          {/* <div className="username">
            <label className="form__label" for="firstName">
              First Name{" "}
            </label>
            <input
              className="form__input"
              type="text"
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="lastname">
            <label className="form__label" for="lastName">
              Last Name{" "}
            </label>
            <input
              type="text"
              name=""
              id="lastName"
              className="form__input"
              placeholder="LastName"
            />
          </div>
          <div className="email">
            <label className="form__label" for="email">
              Email{" "}
            </label>
            <input
              type="email"
              id="email"
              className="form__input"
              placeholder="Email"
            />
          </div> */}
          <div className="label">
            <label className="form__label" for="password">
              Password{" "}
            </label>
            <input
              className="form__input"
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="label">
            <label className="form__label" for="confirmPassword">
              Confirm Password{" "}
            </label>
            <input
              className="form__input"
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <a href="form">
          <div class="footer">
            <button type="submit" class="btn" className="bg-blue-500">
              Register
            </button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Register ;
