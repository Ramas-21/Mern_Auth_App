import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [email, setEmail] = useState();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/forgotPassword', {email})
    .then(res => {
        if(res.data.Status === "success") {
            navigate('/login')
        }
    }).catch(err => console.log(err))
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">
        Forgot Password
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-95"
        >
          {loading ? "Please wait..." : "Reset"}
        </button>
      </form>
      <p className="text-red-700 mt-5">
        {error ? error.message || "something went wrong" : ""}
      </p>
    </div>
  );
};

export default ForgotPassword;
