import Img from "@/Components/Image/Image";
import { LoginContainer } from "@/styles/Container.styled";
import { Flex, Item } from "@/styles/Flex.styled";
import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { CopyRight } from "@/styles/CopyRight.styled";
import { Button } from "@/styles/Button.style";
import { FAECodeInput } from "@/Components/VerificationInput/VerificationInput";
import { ResendAction, VerificationAction } from "@/helper";
import { Message } from "@/styles/message.style";
import Loader from "@/Components/Loaders/Loader";

function MobileVerification() {
  const router = useRouter();
  const [loader, setLoader] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState({
    type: false,
    message: "",
  });
  const [otp, setOTP] = useState("");
  const query = router.query;
  const { userId, priamryMobile, recreatePassword } = query || {};
  const handleClick = (e: any) => {
    e.preventDefault();
    setLoader(true);
    setErrorMessage({ type: false, message: "" });
    VerificationAction(userId, otp, 1).then((result) => {
      setLoader(false);
      if (result?.code === 0) {
        router.push({
          pathname: "/create-password",
          query: { userId, recreatePassword },
        });
      } else {
        setErrorMessage({ type: false, message: result?.message });
      }
    });
  };

  const resendHandler = () => {
    setLoader(true);
    ResendAction(userId).then((result) => {
      setLoader(false);
      setErrorMessage({
        type: true,
        message:
          result?.message == "Successfully"
            ? "Code Sent! Please check your mobile."
            : result?.message,
      });
    });
  };

  return (
    <LoginContainer>
      <Flex
        style={{
          backgroundColor: "#fff",
        }}
      >
        <Item width={"35%"}>
          <Img
            inlineCss={{
              height: "84vh",
              width: "100%",
            }}
            src={`/assets/images/LoginBg.png`}
          />
          <Img
            inlineCss={{
              position: "absolute",
              width: "15rem",
              top: "21rem",
              bottom: "0",
            }}
            src={`/assets/images/logoOnbanner.png`}
          />
        </Item>
        <Item width={"65%"}>
          <form onSubmit={handleClick}>
            <div style={{}}>
              <h3
                style={{
                  margin: " 0 0 5.8px",
                  fontFamily: "Poppins",
                  fontSize: "30px",
                  fontWeight: "600",
                  fontStretch: "normal",
                  fontStyle: "normal",
                  lineHeight: "normal",
                  letterSpacing: "normal",
                  textAlign: "center",
                  color: "#22272e",
                }}
              >
                Mobile <span style={{ color: "#dc0000" }}>Verification</span>
              </h3>
              <p
                style={{
                  margin: "0.6px 33px 40px 0.9px",
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: "normal",
                  fontStretch: "normal",
                  fontStyle: "normal",
                  lineHeight: "normal",
                  letterSpacing: "normal",
                  textAlign: "center",
                  color: "#757677",
                }}
              >
                Enter the code that was sent to
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  letterSpacing: "normal",
                  textAlign: "center",
                  color: "#444",
                }}
              >
                {"+" + priamryMobile || "mobile number is missed"}
              </p>
              <FAECodeInput getValue={setOTP} />
              <p
                style={{
                  fontSize: "14px",
                  textAlign: "center",
                  color: "#a9a9a9",
                }}
              >
                Having problem?
              </p>
              <button
                style={{
                  margin: "auto",
                  display: "block",
                  background: "initial",
                  border: "0px",
                  outline: "initial",
                  fontSize: "14px",
                  fontWeight: "600",
                  textAlign: "center",
                  cursor: "pointer",
                  color: "#db0406",
                }}
                type="button"
                onClick={resendHandler}
              >
                Resend Code
              </button>
              <Button type="submit" width="340px">
                {" "}
                Verify Number{" "}
              </Button>
              {loader ? (
                <Loader status={loader} />
              ) : (
                <Message type={errorMessage.type}>
                  {" "}
                  {errorMessage.message}{" "}
                </Message>
              )}
            </div>
          </form>
          {/* <InputField /> */}
          <CopyRight>
            Terms & Conditions • Privacy Policy • Copyright • Cookies Policy •
            Help © 2022 Selteq Ltd.
          </CopyRight>
        </Item>
      </Flex>
    </LoginContainer>
  );
}

export default MobileVerification;
