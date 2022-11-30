import React from "react";

import { Column, Row, Line, Text, Img, Stack, Button } from "components";
import Sidebar from "components/Sidebar/Sidebar";
import Header from "components/Header/Header";

const EKYCIntroductionStepFourPage = () => {
  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
          <Sidebar className="w-[17%]" />
          <Line className="bg-indigo_51 sm:h-[507px] md:h-[654px] h-[950px] max-w-[1px] mx-[auto] sm:px-[15px] w-[100%]" />
          <Column className="flex flex-col items-center max-w-[1198px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Column className="bg-gray_51 flex flex-col items-center justify-end md:p-[15px] sm:p-[15px] p-[23px] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:mt-[10px] mt-[15px] sm:mt-[7px] sm:px-[0] w-[100%]">
                <Text
                  className="font-poppins mb-[2px] text-bluegray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  eKYC
                </Text>
                <Text
                  className="font-inter font-normal mt-[4px] not-italic text-bluegray_400 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  <span className="text-bluegray_400 text-[16px]">
                    Setting/
                  </span>
                  <span className="text-bluegray_800 text-[16px]"> eKYC</span>
                </Text>
              </Row>
              <Column className="bg-white_A700 flex flex-col items-center justify-start mb-[1px] sm:mt-[18px] md:mt-[24px] mt-[35px] sm:p-[15px] md:p-[57px] p-[83px] rounded-radius4 shadow-bs w-[100%]">
                <Text
                  className="text-bluegray_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Introduction
                </Text>
                <Column className="flex flex-col items-center justify-start sm:mb-[29px] md:mb-[38px] mb-[56px] sm:mt-[33px] md:mt-[42px] mt-[62px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[46%]">
                  <Row className="border border-indigo_51 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:p-[17px] p-[25px] sm:px-[15px] sm:py-[13px] rounded-radius4 shadow-bs2 w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[4px] ml-[7px] sm:mx-[0] sm:px-[0] rounded-radius4 sm:w-[100%] w-[39%]">
                      <Column className="flex flex-col sm:h-[15px] md:h-[20px] h-[28px] items-end outline outline-[0.9px] outline-bluegray_900 px-[2px] rounded-radius2 sm:w-[14px] md:w-[19px] w-[28px]">
                        <Img
                          src="images/img_vector415_1X11.svg"
                          className="max-w-[100%] mr-[2px] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:w-[100%] w-[46%]"
                          alt="Vector415"
                        />
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly mb-[4px] mr-[3px] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[80%]">
                          <Img
                            src="images/img_user_1.svg"
                            className="sm:h-[5px] md:h-[7px] h-[9px] max-w-[100%] mt-[1px] sm:w-[4px] md:w-[6px] w-[9px]"
                            alt="user One"
                          />
                          <Img
                            src="images/img_vector415_1X11.svg"
                            className="max-w-[100%] sm:w-[100%] w-[48%]"
                            alt="Vector416"
                          />
                        </Row>
                      </Column>
                      <Column className="flex flex-col md:ml-[13px] ml-[20px] sm:mx-[0] pr-[3px] sm:px-[0] py-[3px] sm:w-[100%] w-[69%]">
                        <Text
                          className="font-normal not-italic text-bluegray_800 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Bước 1:
                        </Text>
                        <Text
                          className="font-bold mb-[1px] mt-[12px] sm:mt-[6px] md:mt-[8px] text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Scan ID Card
                        </Text>
                      </Column>
                    </Row>
                    <Img
                      src="images/img_checkmark_1.svg"
                      className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:mr-[3px] md:mr-[4px] mr-[7px] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="checkmark"
                    />
                  </Row>
                  <Row className="border border-indigo_51 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[10px] md:mt-[13px] mt-[20px] md:p-[17px] p-[25px] sm:px-[15px] sm:py-[13px] rounded-radius4 shadow-bs2 w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[4px] ml-[7px] sm:mx-[0] sm:px-[0] rounded-radius4 sm:w-[100%] w-[34%]">
                      <Img
                        src="images/img_settings_28X28.svg"
                        className="sm:h-[15px] md:h-[20px] h-[28px] max-w-[100%] sm:w-[14px] md:w-[19px] w-[28px]"
                        alt="settings One"
                      />
                      <Column className="flex flex-col md:ml-[13px] ml-[20px] sm:mx-[0] pr-[3px] sm:px-[0] py-[3px] sm:w-[100%] w-[64%]">
                        <Text
                          className="font-normal mt-[1px] not-italic text-bluegray_800 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Bước 2:
                        </Text>
                        <Text
                          className="font-bold mb-[1px] mt-[12px] sm:mt-[6px] md:mt-[8px] text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Scan Face
                        </Text>
                      </Column>
                    </Row>
                    <Img
                      src="images/img_checkmark_1.svg"
                      className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:mr-[3px] md:mr-[4px] mr-[7px] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="checkmark One"
                    />
                  </Row>
                  <Row className="border border-indigo_51 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[10px] md:mt-[13px] mt-[20px] md:p-[17px] p-[25px] sm:px-[15px] sm:py-[13px] rounded-radius4 shadow-bs2 w-[100%]">
                    <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[4px] ml-[7px] sm:mx-[0] rounded-radius4 sm:w-[100%] w-[55%]">
                      <Stack className="h-[30px] pb-[1px] pr-[1px] relative w-[13%]">
                        <Img
                          src="images/img_02essential.svg"
                          className="absolute h-[28px] max-w-[100%] sm:w-[100%] w-[86%]"
                          alt="02essential"
                        />
                        <Button
                          className="absolute flex h-[13px] sm:h-[7px] md:h-[9px] items-center justify-center right-[3%] w-[13px] sm:w-[6px] md:w-[8px]"
                          shape="icbRoundedBorder6"
                          size="smIcn"
                          variant="icbOutlineBluegray800"
                        >
                          <Img
                            src="images/img_checkmark_3.svg"
                            className="h-[9px] sm:h-[5px] md:h-[7px] flex items-center justify-center"
                            alt="checkmark Two"
                          />
                        </Button>
                      </Stack>
                      <Column className="flex flex-col md:ml-[13px] ml-[20px] sm:mx-[0] pr-[3px] sm:px-[0] py-[3px] sm:w-[100%] w-[78%]">
                        <Text
                          className="font-normal not-italic text-bluegray_800 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Bước 3:
                        </Text>
                        <Text
                          className="font-bold mb-[1px] mt-[12px] sm:mt-[6px] md:mt-[8px] text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Confirm Information
                        </Text>
                      </Column>
                    </Row>
                    <Img
                      src="images/img_checkmark_1.svg"
                      className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:mr-[3px] md:mr-[4px] mr-[7px] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="checkmark Three"
                    />
                  </Row>
                  <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[10px] md:mt-[13px] mt-[20px] sm:p-[15px] md:p-[17px] p-[25px] rounded-radius4 shadow-bs2 w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[4px] ml-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                      <Img
                        src="images/img_reply_28X28.svg"
                        className="sm:h-[15px] md:h-[20px] h-[28px] max-w-[100%] sm:w-[14px] md:w-[19px] w-[28px]"
                        alt="reply"
                      />
                      <Column className="flex flex-col md:ml-[13px] ml-[20px] sm:mx-[0] pr-[3px] pt-[3px] sm:px-[0] sm:w-[100%] w-[64%]">
                        <Text
                          className="font-normal not-italic text-bluegray_800 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Bước 4:
                        </Text>
                        <Text
                          className="font-bold mt-[14px] sm:mt-[7px] md:mt-[9px] text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Signature
                        </Text>
                      </Column>
                    </Row>
                    <Button
                      className="flex sm:h-[13px] md:h-[17px] h-[24px] items-center justify-center sm:mr-[3px] md:mr-[4px] mr-[7px] my-[13px] sm:my-[6px] md:my-[8px] sm:w-[12px] md:w-[16px] w-[24px]"
                      shape="icbRoundedBorder4"
                      size="mdIcn"
                      variant="icbFillWhiteA700"
                    >
                      <Img
                        src="images/img_arrowright_24X24.svg"
                        className="h-[16px] sm:h-[9px] md:h-[12px] flex items-center justify-center"
                        alt="arrowright"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default EKYCIntroductionStepFourPage;
