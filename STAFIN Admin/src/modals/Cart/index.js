import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, List, Line, Button } from "components";

const CartModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[100%] flex-col flex"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[209px] p-[369px] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-center max-w-[395px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]">
              <Text
                className="flex-grow md:mt-[3px] sm:mt-[3px] mt-[7px] text-bluegray_800"
                as="h2"
                variant="h2"
              >
                My Cart
              </Text>
              <Img
                src="images/img_close.svg"
                className="common-pointer flex-shrink-0 sm:h-[15px] md:h-[19px] h-[32px] max-w-[100%] sm:ml-[118px] md:ml-[152px] ml-[269px] sm:w-[14px] md:w-[18px] w-[32px]"
                onClick={props.onRequestClose}
                alt="close"
              />
            </Row>
            <Column className="flex flex-col justify-start max-w-[395px] mb-[11px] sm:mb-[4px] md:mb-[6px] sm:mt-[21px] md:mt-[27px] mt-[48px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]">
              <List
                className="sm:gap-[28px] md:gap-[36px] gap-[64px] min-h-[auto] w-[100%]"
                orientation="vertical"
              >
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between my-[0] w-[100%]">
                  <Img
                    src="images/img_rectangle.png"
                    className="max-w-[100%] w-[28%]"
                    alt="Rectangle"
                  />
                  <Column className="flex flex-col justify-start sm:mx-[0] pb-[4px] sm:px-[0] sm:w-[100%] w-[67%]">
                    <Column className="flex flex-col justify-start pt-[2px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                        <Text
                          className="flex-grow font-bold text-bluegray_900"
                          as="h4"
                          variant="h4"
                        >
                          Polo Shirt
                        </Text>
                        <Img
                          src="images/img_minus.svg"
                          className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[24px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[24px]"
                          alt="minus"
                        />
                      </Row>
                      <Text
                        className="font-normal mt-[15px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_400 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Color: Grey, S
                      </Text>
                    </Column>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[11px] md:mt-[14px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                      <Button
                        className="flex sm:h-[15px] md:h-[19px] h-[32px] items-center justify-center sm:w-[14px] md:w-[18px] w-[32px]"
                        size="mdIcn"
                        variant="icbOutlineIndigo51"
                      >
                        <Img
                          src="images/img_minus.svg"
                          className="h-[20px] sm:h-[9px] md:h-[12px] flex items-center justify-center"
                          alt="minus One"
                        />
                      </Button>
                      <Text
                        className="font-medium md:ml-[11px] ml-[21px] sm:ml-[9px] text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        1
                      </Text>
                      <Button
                        className="flex sm:h-[15px] md:h-[19px] h-[32px] items-center justify-center md:ml-[12px] ml-[22px] sm:ml-[9px] sm:w-[14px] md:w-[18px] w-[32px]"
                        size="mdIcn"
                        variant="icbOutlineIndigo51"
                      >
                        <Img
                          src="images/img_close.svg"
                          className="h-[20px] sm:h-[9px] md:h-[12px] flex items-center justify-center"
                          alt="close One"
                        />
                      </Button>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[11px] md:mt-[15px] mt-[27px] w-[100%]">
                      <Text
                        className="font-normal mb-[1px] not-italic text-bluegray_400 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Price
                      </Text>
                      <Text
                        className="font-normal mt-[1px] not-italic text-bluegray_800 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $120.0
                      </Text>
                    </Row>
                  </Column>
                </Row>
                <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between my-[0] w-[100%]">
                  <Img
                    src="images/img_frame_1.png"
                    className="max-w-[100%] w-[28%]"
                    alt="Rectangle One"
                  />
                  <Column className="flex flex-col justify-start sm:mx-[0] pb-[4px] sm:px-[0] sm:w-[100%] w-[67%]">
                    <Column className="flex flex-col justify-start pt-[2px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                        <Text
                          className="flex-grow font-bold text-bluegray_900"
                          as="h4"
                          variant="h4"
                        >
                          Basic T-shirt
                        </Text>
                        <Img
                          src="images/img_minus.svg"
                          className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[24px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[24px]"
                          alt="minus One"
                        />
                      </Row>
                      <Text
                        className="font-normal mt-[15px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_400 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Color: Grey, S
                      </Text>
                    </Column>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[11px] md:mt-[14px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                      <Button
                        className="flex sm:h-[15px] md:h-[19px] h-[32px] items-center justify-center sm:w-[14px] md:w-[18px] w-[32px]"
                        size="mdIcn"
                        variant="icbOutlineIndigo51"
                      >
                        <Img
                          src="images/img_minus.svg"
                          className="h-[20px] sm:h-[9px] md:h-[12px] flex items-center justify-center"
                          alt="minus One One"
                        />
                      </Button>
                      <Text
                        className="font-medium md:ml-[11px] ml-[21px] sm:ml-[9px] text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        1
                      </Text>
                      <Button
                        className="flex sm:h-[15px] md:h-[19px] h-[32px] items-center justify-center md:ml-[12px] ml-[22px] sm:ml-[9px] sm:w-[14px] md:w-[18px] w-[32px]"
                        size="mdIcn"
                        variant="icbOutlineIndigo51"
                      >
                        <Img
                          src="images/img_close.svg"
                          className="h-[20px] sm:h-[9px] md:h-[12px] flex items-center justify-center"
                          alt="close Two"
                        />
                      </Button>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[11px] md:mt-[15px] mt-[27px] w-[100%]">
                      <Text
                        className="font-normal mb-[1px] not-italic text-bluegray_400 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Price
                      </Text>
                      <Text
                        className="font-normal mt-[1px] not-italic text-bluegray_800 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $120.0
                      </Text>
                    </Row>
                  </Column>
                </Row>
              </List>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[28px] md:mt-[36px] mt-[64px] pl-[1px] py-[1px] w-[100%]">
                <Text
                  className="font-normal not-italic text-bluegray_400 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Total
                </Text>
                <Text
                  className="font-bold my-[3px] text-bluegray_800 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  $240.0
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[14px] md:mt-[18px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                <Button
                  className="cursor-pointer font-bold min-w-[49%] text-[14px] text-center w-[max-content]"
                  shape="CircleBorder24"
                  size="lg"
                  variant="FillDeeporange300"
                >
                  Purchase now
                </Button>
                <Button
                  className="cursor-pointer font-bold min-w-[48%] text-[14px] text-center w-[max-content]"
                  shape="CircleBorder24"
                  size="lg"
                  variant="FillDeeporange50"
                >
                  Add to cart
                </Button>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[14px] md:mt-[18px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
                <Img
                  src="images/img_computer_1.svg"
                  className="sm:h-[11px] md:h-[14px] h-[24px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[24px]"
                  alt="computer"
                />
                <Column className="flex flex-col md:ml-[13px] ml-[24px] sm:mx-[0] md:pr-[2px] pr-[5px] md:pt-[2px] sm:pt-[2px] pt-[5px] sm:px-[0] sm:w-[100%] w-[82%]">
                  <Text
                    className="font-bold text-bluegray_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Free nationwide shipping
                  </Text>
                  <Text
                    className="font-normal sm:mt-[3px] md:mt-[4px] mt-[8px] not-italic text-bluegray_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    (For order begin $100.0)
                  </Text>
                </Column>
              </Row>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default CartModal;
