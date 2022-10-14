import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().length(20).required(),
  lastName: yup.string().length(20).required(),
  middleName: yup.string().length(20),
  dateOfBirth: yup.date().required(),
  gender: yup.string().oneOf(["male, female"]).required(),
  phoneNumber: yup.string().length(10).required(),
  email: yup.string().email().required(),
  emergencyContactPerson: yup.string().length(20).required(),
  emergencyContactPersonPhone: yup.string().length(10).required(),
  location: yup.string().length(20).required(),
});
function Form() {
  const { register, handleSubmit, watch } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  // console.log(watch());
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="h-screen bg-gradient-to-br from-fuchsia-400 to-peach-500 to-red-300 flex justify-center items-center ">
      <div className="max-w-2xl w-full bg-blue-300 p-10 rounded-xl shadow-xl justify-center">
        <div className="max-w-xl text-center text-lg font-bold bg-slate-400">
          Patient's Registration Form
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Creating a form */}
          <div className="py-5">
            <div className="flex justify-between">
              <label className="form-label" htmlFor="firstName">
                First Name
              </label>
              <input type="text" {...register("firstName")} />
            </div>
            <div className="flex justify-between py-3">
              <label className="form-label" htmlFor="lastName">
                Last Name
              </label>
              <input type="text" {...register("lastName")} />
            </div>
            <div>
              <label className="form-label" htmlFor="middleName">
                Middle Name
              </label>
              <input type="text" {...register("middleName")} />
            </div>
          </div>
          <div>Gender</div>
          <div>
            <label htmlFor="male">
              <input type="radio" {...register("gender")} value="male" /> Male
            </label>
          </div>

          <div>
            <label htmlFor="female">
              <input type="radio" {...register("gender")} value="female" />{" "}
              Female
            </label>
          </div>

          <div>
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input type="date" {...register("dateOfBirth")} />
          </div>

          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              placeholder="xxx-xxx-xxxx"
              {...register("phoneNumber")}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register("email")}
              placeholder="john.doe@email.com"
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              {...register("address")}
              placeholder="Residential Address"
            />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              {...register("location")}
              placeholder="Town or City"
            />
          </div>
          <div>
            <label htmlFor="occupation">Occupation</label>
            <input
              type="text"
              {...register("occupation")}
              placeholder="eg. Teacher"
            />
          </div>
          <div>
            <label htmlFor="emergencyContactPerson">
              Emergency Contact Person
            </label>
            <input
              type="text"
              {...register("emergencyContactPerson")}
              placeholder="eg. Daniel Ansah"
            />
          </div>
          <div>
            <label htmlFor="emergencyContactPersonPhone">
              'Emergency Contact Person's Phone'
            </label>
            <input
              type="text"
              {...register("emergencyContactPersonPhone")}
              placeholder="eg. 0244556677"
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Form;
