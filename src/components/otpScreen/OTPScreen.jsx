import React, { useRef, useState } from "react";
import "./OTPScreen.css";

const OTPScreen = () => {
  const otpRef = useRef(new Array(4).fill(""));
  const [otp, setOtp] = useState(0);

  const handleOtp = (element, idx) => {
    if (isNaN(Number(element.target.value))) {
      return;
    }
    otpRef.current = otpRef.current.map((o, id) =>
      id === idx ? element.target.value : o
    );
    setOtp((r) => r + 1);

    if (element.target.value === "") {
      return;
    }

    if (element.target.nextSibling) {
      element.target.nextSibling.focus();
    }
  };

  return (
    <div className="OTP-App">
      Please Enter OTP
      <div className="otp-container">
        {otpRef.current.map((o, idx) => {
          return (
            <input
              maxLength="1"
              type="text"
              className="otp-input-box"
              onChange={(e) => handleOtp(e, idx)}
              key={idx}
              name={"otp" + idx}
              id={idx}
              onFocus={(e) => {
                if (idx !== 0 && otpRef.current[idx - 1] === "") {
                  e.target.previousSibling.focus();
                }
              }}
            />
          );
        })}
        <div className="entered-otp">
          Enter OTP : {otpRef.current.join(" ")}
        </div>
      </div>
    </div>
  );
};

export default OTPScreen;
