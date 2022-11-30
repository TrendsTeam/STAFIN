import React from "react";

import { Row, Column, Text, Img, Line, Input, Button } from "components";
import { useGoogleLogin } from "@react-oauth/google";

const SignupDefaultPage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
  });

  return (
    <>
      <Row className="bg-red_53 flex flex-row md:flex-wrap sm:flex-wrap font-inter items-start mx-[auto] sm:p-[15px] md:p-[39px] p-[69px] w-[100%]">
        <Column className="flex flex-col justify-start max-w-[773px] sm:ml-[30px] md:ml-[39px] sm:mt-[10px] md:mt-[13px] mt-[24px] mx-[auto] sm:pr-[3px] md:pr-[5px] pr-[9px] sm:pt-[3px] md:pt-[5px] pt-[9px] sm:px-[15px] w-[100%]">
          <Text
            className="leading-[40.00px] md:leading-[normal] sm:leading-[normal] md:ml-[23px] ml-[42px] sm:mx-[0] text-bluegray_900 text-center sm:w-[100%] w-[36%]"
            as="h1"
            variant="h1"
          >
            Don't worry about overwhelming tasks
          </Text>
          <Img
            src="images/img_group7.svg"
            className="max-w-[100%] sm:mr-[119px] md:mr-[153px] mr-[271px] mt-[105px] sm:mt-[46px] md:mt-[59px] sm:w-[100%] w-[65%]"
            alt="GroupSeven"
          />
        </Column>
        <Column className="bg-white_A700 flex flex-col items-center justify-end max-w-[574px] md:mr-[107px] sm:mr-[83px] mt-[1px] mx-[auto] sm:p-[15px] md:p-[23px] p-[42px] sm:px-[15px] rounded-radius20 shadow-bs1 w-[100%]">
          <Column className="flex flex-col items-center justify-start mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
            <Text className="text-bluegray_800 w-[auto]" as="h2" variant="h2">
              Sign up to Avori
            </Text>
            <Column className="flex flex-col justify-start sm:mt-[20px] md:mt-[26px] mt-[46px] w-[100%]">
              <Row
                className="common-pointer bg-white_A700 border border-indigo_51 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:p-[15px] p-[17px] md:p-[9px] rounded-radius4 sm:w-[100%] w-[93%]"
                onClick={googleSignIn}
              >
                <Img
                  src="images/img_google.svg"
                  className="flex-shrink-0 md:h-[11px] h-[18px] sm:h-[8px] max-w-[100%] md:ml-[3px] sm:ml-[3px] ml-[7px] my-[2px] md:w-[10px] w-[18px] sm:w-[7px]"
                  alt="google"
                />
                <Text
                  className="flex-grow font-medium sm:ml-[43px] md:ml-[55px] ml-[98px] text-bluegray_800"
                  as="h6"
                  variant="h6"
                >
                  Sign up with Google
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] sm:mt-[26px] md:mt-[34px] mt-[61px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                <Line className="bg-indigo_51 h-[1px] sm:my-[2px] md:my-[3px] my-[6px] w-[39%]" />
                <Text
                  className="font-normal sm:ml-[29px] md:ml-[38px] ml-[67px] not-italic text-bluegray_800 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Or
                </Text>
                <Line className="bg-indigo_51 h-[1px] ml-[17px] sm:ml-[7px] md:ml-[9px] sm:my-[2px] md:my-[3px] my-[6px] w-[39%]" />
              </Row>
              <Input
                className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="flex md:mt-[28px] mt-[51px] sm:mt-[22px] sm:mx-[0] sm:w-[100%] w-[93%]"
                type="text"
                name="Textinput"
                placeholder="Full name"
                prefix={
                  <Img
                    src="images/img_user.svg"
                    className="ml-[1px] mr-[16px] sm:mr-[7px] md:mr-[9px] my-[auto]"
                    alt="user"
                  />
                }
                shape="RoundedBorder4"
                size="lg"
                variant="OutlineIndigo51"
              ></Input>
              <Input
                className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="flex md:mt-[30px] mt-[53px] sm:mt-[23px] sm:mx-[0] sm:w-[100%] w-[93%]"
                type="email"
                name="Textinput One"
                placeholder="Email"
                prefix={
                  <Img
                    src="images/img_mail.svg"
                    className="ml-[1px] mr-[16px] sm:mr-[7px] md:mr-[9px] my-[auto]"
                    alt="mail"
                  />
                }
                shape="RoundedBorder4"
                size="lg"
                variant="OutlineIndigo51"
              ></Input>
              <Input
                className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="flex md:mt-[24px] mt-[43px] sm:mt-[18px] sm:mx-[0] sm:w-[100%] w-[93%]"
                type="password"
                name="Textinput Two"
                placeholder="Password"
                prefix={
                  <Img
                    src="images/img_lock_20X20.svg"
                    className="ml-[1px] mr-[16px] sm:mr-[7px] md:mr-[9px] my-[auto]"
                    alt="lock"
                  />
                }
                suffix={
                  <Img
                    src="images/img_eye.svg"
                    className="ml-[35px] mr-[1px] sm:ml-[15px] md:ml-[19px] my-[auto]"
                    alt="eye"
                  />
                }
                shape="RoundedBorder4"
                size="lg"
                variant="OutlineIndigo51"
              ></Input>
              <Text
                className="font-medium leading-[22.00px] md:leading-[normal] sm:leading-[normal] md:ml-[28px] ml-[50px] sm:mt-[34px] md:mt-[44px] mt-[79px] sm:mx-[0] text-bluegray_800 text-center sm:w-[100%] w-[71%]"
                as="h6"
                variant="h6"
              >
                <span className="text-bluegray_400 text-[14px] font-inter">
                  By clicking “SIGN UP" button, I agree with your
                </span>
                <span className="text-bluegray_800 text-[14px] font-inter">
                  {" "}
                </span>
                <a
                  href="javascript:"
                  className="text-bluegray_800 text-[14px] font-inter underline"
                >
                  Term and Policy
                </a>
              </Text>
              <Button
                className="cursor-pointer font-bold min-w-[93%] sm:mt-[23px] md:mt-[30px] mt-[54px] text-[14px] text-center w-[max-content]"
                shape="CircleBorder28"
                size="xl"
                variant="FillDeeporange300"
              >
                SIGN UP
              </Button>
            </Column>
          </Column>
          <Text
            className="font-medium sm:mt-[17px] md:mt-[22px] mt-[39px] text-bluegray_800 w-[auto]"
            as="h6"
            variant="h6"
          >
            <span className="text-bluegray_800 text-[14px] font-inter font-normal not-italic">
              You have an account already?
            </span>
            <span className="text-bluegray_800 text-[14px] font-inter"> </span>
            <a
              href="javascript:"
              className="text-deep_orange_300 text-[14px] font-inter underline"
            >
              Sign in
            </a>
          </Text>
        </Column>
      </Row>
    </>
  );
};

export default SignupDefaultPage;
