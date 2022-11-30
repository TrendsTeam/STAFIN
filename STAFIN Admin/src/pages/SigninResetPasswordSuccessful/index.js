import React from "react";

import { Column, Img, Text, Button, Row } from "components";

const SigninResetPasswordSuccessfulPage = () => {
  return (
    <>
      <Column className="bg-red_52 flex flex-col font-inter items-center justify-end mx-[auto] sm:p-[15px] md:p-[40px] p-[72px] w-[100%]">
        <Column className="bg-white_A700 flex flex-col items-center justify-end max-w-[613px] mt-[1px] mx-[auto] sm:p-[15px] md:p-[47px] p-[83px] sm:px-[15px] rounded-radius20 shadow-bs1 w-[100%]">
          <Img
            src="images/img_group5.svg"
            className="max-w-[100%] md:mt-[12px] mt-[22px] sm:mt-[9px] w-[34%]"
            alt="GroupFive"
          />
          <Text
            className="leading-[32.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[119px] md:mt-[153px] mt-[271px] sm:mx-[0] text-bluegray_800 text-center sm:w-[100%] w-[51%]"
            as="h2"
            variant="h2"
          >
            Password has been recovered
          </Text>
          <Button
            className="cursor-pointer font-bold min-w-[93%] sm:mt-[39px] md:mt-[51px] mt-[90px] text-[14px] text-center w-[max-content]"
            shape="CircleBorder28"
            size="xl"
            variant="FillDeeporange300"
          >
            LOGIN
          </Button>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center sm:mt-[27px] md:mt-[35px] mt-[63px] sm:mx-[0] pr-[1px] pt-[1px] sm:px-[0] sm:w-[100%] w-[29%]">
            <Img
              src="images/img_arrowleft_20X20.svg"
              className="flex-shrink-0 md:h-[12px] h-[20px] sm:h-[9px] max-w-[100%] mb-[1px] md:w-[11px] w-[20px] sm:w-[8px]"
              alt="arrowleft"
            />
            <Text
              className="flex-grow font-medium md:ml-[3px] sm:ml-[3px] ml-[7px] mr-[1px] mt-[4px] text-indigo_400"
              as="h6"
              variant="h6"
            >
              Back to Sign in
            </Text>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default SigninResetPasswordSuccessfulPage;
