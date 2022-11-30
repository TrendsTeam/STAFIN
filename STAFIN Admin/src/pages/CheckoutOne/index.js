import React from "react";

import { Column, Row, Line, Text, Stack, Img, Button } from "components";
import Sidebar3 from "components/Sidebar/Sidebar3";
import Header from "components/Header/Header";

const CheckoutOnePage = () => {
  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
          <Sidebar3 className="w-[17%]" />
          <Line className="bg-indigo_51 sm:h-[528px] md:h-[682px] h-[990px] max-w-[1px] mx-[auto] sm:px-[15px] w-[100%]" />
          <Column className="flex flex-col items-center max-w-[1198px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Column className="bg-gray_51 flex flex-col items-center justify-end md:p-[15px] sm:p-[15px] p-[23px] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                <Text
                  className="font-poppins mb-[3px] text-bluegray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Checkout
                </Text>
                <Text
                  className="font-inter font-normal sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-bluegray_400 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  <span className="text-bluegray_400 text-[16px]">
                    Shop Central/
                  </span>
                  <span className="text-bluegray_800 text-[16px]"> </span>
                  <span className="text-bluegray_400 text-[16px]">
                    Product detail/
                  </span>
                  <span className="text-bluegray_800 text-[16px]">
                    {" "}
                    Checkout
                  </span>
                </Text>
              </Row>
              <Stack className="h-[802px] sm:mb-[4px] md:mb-[5px] mb-[8px] sm:mt-[19px] md:mt-[24px] mt-[36px] relative sm:w-[100%] w-[99%]">
                <Column className="absolute bottom-[0] flex flex-col justify-start left-[5%] sm:mx-[0] pr-[4px] sm:px-[0] py-[4px] sm:w-[100%] w-[15%]">
                  <Text
                    className="font-normal ml-[3px] not-italic text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Balance
                  </Text>
                  <Text
                    className="font-bold mb-[1px] mt-[11px] sm:mt-[5px] md:mt-[7px] text-white_A700 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    $0.0
                  </Text>
                </Column>
                <Column className="absolute bg-white_A700 flex flex-col items-center justify-start p-[111px] sm:p-[15px] md:p-[76px] rounded-radius4 shadow-bs w-[100%]">
                  <Img
                    src="images/img_group18037.svg"
                    className="max-w-[100%] w-[28%]"
                    alt="Group18037"
                  />
                  <Column className="flex flex-col items-center justify-start mb-[143px] sm:mb-[76px] md:mb-[98px] sm:mt-[34px] md:mt-[44px] mt-[65px] sm:mx-[0] sm:pt-[3px] md:pt-[4px] pt-[6px] sm:px-[0] sm:w-[100%] w-[56%]">
                    <Column className="flex flex-col justify-start w-[100%]">
                      <Text
                        className="sm:ml-[25px] md:ml-[33px] ml-[48px] text-bluegray_900 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Congratulate! Order successfully
                      </Text>
                      <Text
                        className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_900 text-center w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        Your order receipt has been sent to your mail:
                        sambrown@gmail.com. Please check your mail
                      </Text>
                    </Column>
                    <Button
                      className="cursor-pointer font-bold min-w-[41%] sm:mt-[18px] md:mt-[24px] mt-[35px] text-[14px] text-center w-[max-content]"
                      shape="CircleBorder24"
                      size="lg"
                      variant="FillDeeporange300"
                    >
                      Review product
                    </Button>
                  </Column>
                </Column>
              </Stack>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default CheckoutOnePage;
