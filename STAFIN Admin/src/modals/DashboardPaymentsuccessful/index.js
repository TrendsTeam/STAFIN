import React from "react";
import ModalProvider from "react-modal";

import { Column, Img, Text, Row, Button } from "components";
import { useNavigate } from "react-router-dom";

const DashboardPaymentsuccessfulModal = (props) => {
  const navigate = useNavigate();

  function handleNavigate() {
    //TODO: You had integrated navigation action, since you've not selected the target page,
    // you will have to update navigation code manually.
    navigate("");
  }

  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[100%] flex-col flex"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="flex flex-col items-center justify-start md:p-[165px] p-[240px] sm:px-[15px] sm:py-[127px] w-[100%]">
            <Img
              src="images/img_group_40X40.svg"
              className="sm:h-[22px] md:h-[28px] h-[40px] max-w-[40px] mx-[auto] sm:px-[15px] w-[100%] sm:w-[21px] md:w-[27px]"
              alt="Group"
            />
            <Column className="bg-white_A700 flex flex-col items-center justify-end max-w-[400px] mb-[1px] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] mx-[auto] sm:p-[15px] md:p-[22px] p-[32px] sm:px-[15px] rounded-radius4 shadow-bs1 w-[100%]">
              <Img
                src="images/img_layer2.svg"
                className="max-w-[100%] sm:mt-[45px] md:mt-[59px] mt-[86px] sm:w-[100%] w-[56%]"
                alt="LayerTwo"
              />
              <Column className="flex flex-col items-center justify-start sm:mt-[27px] md:mt-[35px] mt-[51px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[73%]">
                <Text
                  className="text-bluegray_800 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Payment Successful
                </Text>
                <Text
                  className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[11px] md:mt-[14px] mt-[21px] not-italic text-bluegray_800 text-center w-[100%]"
                  as="h6"
                  variant="h6"
                >
                  <span className="text-bluegray_800 text-[14px] font-inter">
                    Add
                  </span>
                  <span className="text-green_700 text-[14px] font-inter font-medium">
                    {" "}
                    200.000đ
                  </span>
                  <span className="text-bluegray_800 text-[14px] font-inter">
                    {" "}
                    to your wallet already
                    <br />
                    Check your new balance!
                  </span>
                </Text>
              </Column>
              <Text
                className="font-normal sm:mt-[12px] md:mt-[16px] mt-[24px] not-italic text-bluegray_400 w-[auto]"
                as="h6"
                variant="h6"
              >
                Send receipt to
              </Text>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:mt-[12px] mt-[18px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                <Button
                  className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
                  size="xlIcn"
                  variant="icbOutlineIndigo51"
                >
                  <Img
                    src="images/img_lightbulb.svg"
                    className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                    alt="lightbulb"
                  />
                </Button>
                <Button
                  className="common-pointer flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center md:ml-[11px] ml-[16px] sm:ml-[8px] rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
                  onClick={handleNavigate}
                  size="xlIcn"
                  variant="icbOutlineIndigo51"
                >
                  <Img
                    src="images/img_facebook.svg"
                    className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                    alt="facebook"
                  />
                </Button>
                <Button
                  className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center md:ml-[11px] ml-[16px] sm:ml-[8px] rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
                  size="xlIcn"
                  variant="icbOutlineIndigo51"
                >
                  <Img
                    src="images/img_globe.svg"
                    className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                    alt="globe"
                  />
                </Button>
              </Row>
              <Button
                className="cursor-pointer font-bold min-w-[100%] sm:mt-[17px] md:mt-[22px] mt-[32px] text-[14px] text-center w-[max-content]"
                shape="CircleBorder28"
                size="xl"
                variant="FillDeeporange300"
              >
                Yes, I understand
              </Button>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default DashboardPaymentsuccessfulModal;
