import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Ragistration() {
  const [user, setuser] = useState({
    fname: "",
    lname:"",
    email: "",
    password: "",
    repassword: "",
  });

  const [msg, setmsg] = useState({ msgs: "", error: "" });

  const handalevent = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setuser({
      ...user,
      [name]: value,
    });
  };
  const register = (e) => {
    e.preventDefault();

    axios.post("http://localhost:9002/auth/register", user)
    .then((res) => {
      console.log(res);
      if (res.data.success) {
        sessionStorage.setItem("token", res.data.token);
        setmsg({ error: "" });
        setmsg({ msgs: "successfully register" });
      }
      if (res.data.error) {
        setmsg({ msgs: "" });
        setmsg({ error: res.data.error });
      }
    });
  };

  return (
    <>
      <center>
        <h2 style={{color:"white"}}>Ragistration form </h2>
        <h4 style={{ color: "green" }}>{msg.msgs}</h4>
        <p style={{ color: "red" }}>{msg.error}</p>

        <form onSubmit={register}>
          <table>
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            FirstName
            </label>
            <p style={{ marginBottom: "0rem" }}>
              <input
                className="form-control"
                style={{ width: "230px" }}
                type="text"
                id="t1"
                placeholder="Enter your name"
                name="fname"
                value={user.fname}
                onChange={handalevent}
                required
              />{" "}
            </p>
            <div
              style={{
                textAlign: "center",
                padding: "0px 0px",
                color: "rgb(255 100 114)",
                height: "18px",
                width: "199px",
              }}
            >
              {" "}
            </div>



            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
          LastName
            </label>
            <p style={{ marginBottom: "0rem" }}>
              <input
                className="form-control"
                style={{ width: "230px" }}
                type="text"
                id="t1"
                placeholder="Enter your name"
                name="lname"
                value={user.lname}
                onChange={handalevent}
                required
              />{" "}
            </p>
            <div
              style={{
                textAlign: "center",
                padding: "0px 0px",
                color: "rgb(255 100 114)",
                height: "18px",
                width: "199px",
              }}
            >
              {" "}
            </div>





            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Email
            </label>
            <p style={{ marginBottom: "0rem" }}>
              <input
                className="form-control"
                style={{ width: "230px" }}
                type="email"
                id="t1"
                placeholder="Enter email id"
                name="email"
                value={user.email}
                onChange={handalevent}
                required
              />{" "}
            </p>
            <div
              style={{
                textAlign: "center",
                padding: "0px 0px",
                color: "rgb(255 100 114)",
                height: "18px",
                width: "199px",
              }}
            >
              {" "}
            </div>

            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              password
            </label>
            <p style={{ marginBottom: "0rem" }}>
              <input
                className="form-control"
                style={{ width: "230px" }}
                type="text"
                id="t1"
                placeholder="password"
                name="password"
                value={user.password}
                onChange={handalevent}
                minLength={4}
                required
              />{" "}
            </p>
            <div
              style={{
                textAlign: "center",
                padding: "0px 0px",
                color: "rgb(255 100 114)",
                height: "18px",
                width: "199px",
              }}
            >
              {" "}
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "15rem" }}
            >
              Register
            </button>
          </table>
        </form>
      </center>
    </>
  );
}
