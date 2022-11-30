import React from "react";

import {
  Column,
  Row,
  Line,
  Text,
  Input,
  TextArea,
  SelectBox,
  Img,
  Button,
} from "components";
import Sidebar4 from "components/Sidebar/Sidebar4";
import Header from "components/Header/Header";

const ShippingInfoPage = () => {
  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
          <Sidebar4 className="w-[17%]" />
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
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mb-[4px] md:mb-[6px] mb-[9px] sm:mt-[18px] md:mt-[24px] mt-[35px] sm:px-[0] w-[100%]">
                <Column className="bg-white_A700 flex flex-col sm:mx-[0] sm:p-[15px] md:p-[22px] p-[32px] rounded-radius4 shadow-bs sm:w-[100%] w-[67%]">
                  <Column className="flex flex-col justify-end sm:mx-[0] pr-[4px] sm:px-[0] py-[4px] sm:w-[100%] w-[29%]">
                    <Text
                      className="font-bold mt-[2px] text-bluegray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Shipping information
                    </Text>
                    <Text
                      className="font-normal mt-[14px] sm:mt-[7px] md:mt-[9px] not-italic text-bluegray_900 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Fill form below
                    </Text>
                  </Column>
                  <Column className="flex flex-col justify-start sm:mt-[19px] md:mt-[24px] mt-[36px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-medium text-bluegray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Name
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                      wrapClassName="md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
                      type="text"
                      name="Group8265"
                      placeholder="Enter your name"
                      shape="RoundedBorder4"
                      size="xl"
                      variant="OutlineIndigo51"
                    ></Input>
                  </Column>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[14px] md:mt-[18px] mt-[27px] sm:px-[0] w-[100%]">
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
                      <Text
                        className="font-medium text-bluegray_800 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Email address
                      </Text>
                      <Input
                        className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                        wrapClassName="md:mt-[8px] mt-[12px] sm:mt-[6px] sm:mx-[0] sm:w-[100%] w-[94%]"
                        type="email"
                        name="group One"
                        placeholder="Enter your email"
                        shape="RoundedBorder4"
                        size="xl"
                        variant="OutlineIndigo51"
                      ></Input>
                    </Column>
                    <Column className="flex flex-col mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                      <Text
                        className="font-medium text-bluegray_800 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Phone number
                      </Text>
                      <Input
                        className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                        wrapClassName="md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
                        type="number"
                        name="group Two"
                        placeholder="Enter your phone number"
                        shape="RoundedBorder4"
                        size="xl"
                        variant="OutlineIndigo51"
                      ></Input>
                    </Column>
                  </Row>
                  <Column className="flex flex-col justify-start sm:mt-[14px] md:mt-[19px] mt-[28px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-medium text-bluegray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Your address
                    </Text>
                    <TextArea
                      className="font-normal mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                      name="group Three"
                      placeholder="Enter full address"
                    ></TextArea>
                  </Column>
                  <Column className="flex flex-col justify-start sm:mt-[15px] md:mt-[19px] mt-[29px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-medium text-bluegray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Country
                    </Text>
                    <SelectBox
                      className="font-normal mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-[16px] text-bluegray_800 w-[100%]"
                      placeholderClassName="text-bluegray_800"
                      name="country One"
                      placeholder="Vietnam"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_20X20.svg"
                          className="w-[11px] mr-[24px] sm:mr-[12px] sm:w-[5px] md:mr-[16px] md:w-[7px] max-w-[100%]"
                          alt="arrow_down"
                        />
                      }
                      shape="RoundedBorder4"
                      size="md"
                      variant="OutlineIndigo51_1"
                    ></SelectBox>
                  </Column>
                  <Column className="flex flex-col justify-start mb-[4px] sm:mt-[14px] md:mt-[18px] mt-[27px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-medium text-bluegray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Note
                    </Text>
                    <TextArea
                      className="font-normal mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                      name="group Four"
                      placeholder="Write somethhing for us..."
                    ></TextArea>
                  </Column>
                </Column>
                <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                  <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[22px] p-[32px] rounded-radius4 shadow-bs w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_rectangle.png"
                        className="max-w-[100%] w-[36%]"
                        alt="Rectangle"
                      />
                      <Column className="flex flex-col md:ml-[16px] ml-[24px] sm:mx-[0] pb-[4px] sm:px-[0] sm:w-[100%] w-[57%]">
                        <Column className="flex flex-col justify-start sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[54%]">
                          <Text
                            className="font-bold mt-[4px] text-bluegray_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Polo Shirt
                          </Text>
                          <Text
                            className="font-normal mb-[1px] md:mt-[12px] mt-[18px] sm:mt-[9px] not-italic text-bluegray_400 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Color: Grey, S
                          </Text>
                        </Column>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[21px] md:mt-[28px] mt-[41px] w-[100%]">
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
                    <Line className="bg-indigo_51 h-[1px] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]" />
                    <Input
                      className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                      wrapClassName="md:mt-[21px] mt-[31px] sm:mt-[16px] w-[100%]"
                      name="group Five"
                      placeholder="Enter reffered code"
                      shape="RoundedBorder8"
                      size="lg"
                      variant="OutlineIndigo51"
                    ></Input>
                    <Line className="bg-indigo_51 h-[1px] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]" />
                    <Column className="flex flex-col items-center justify-start sm:mt-[16px] md:mt-[21px] mt-[31px] pt-[4px] sm:px-[0] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                        <Text
                          className="font-normal mb-[1px] not-italic text-bluegray_400 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Price
                        </Text>
                        <Text
                          className="font-medium mt-[1px] text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          $120.0
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[12px] md:mt-[15px] mt-[23px] pl-[3px] pt-[3px] w-[100%]">
                        <Text
                          className="font-normal mt-[2px] not-italic text-bluegray_400 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Shipping fee
                        </Text>
                        <Text
                          className="font-medium text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          $10.0
                        </Text>
                      </Row>
                    </Column>
                    <Line className="bg-indigo_51 h-[1px] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[16px] md:mt-[21px] mt-[31px] pl-[1px] sm:px-[0] py-[1px] w-[100%]">
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
                        $130.0
                      </Text>
                    </Row>
                    <Column className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] sm:px-[0] w-[100%]">
                      <Button
                        className="cursor-pointer font-bold text-[14px] text-center w-[100%]"
                        shape="CircleBorder24"
                        size="lg"
                        variant="FillDeeporange300"
                      >
                        Purchase now
                      </Button>
                      <Button
                        className="cursor-pointer font-normal md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-[14px] text-center w-[100%]"
                        shape="CircleBorder24"
                        size="lg"
                        variant="FillGray51"
                      >
                        Scan QR code
                      </Button>
                    </Column>
                    <Text
                      className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] mb-[3px] sm:mt-[19px] md:mt-[25px] mt-[37px] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[91%]"
                      as="h6"
                      variant="h6"
                    >
                      By clicking “Purchase” button, I agree with RiriBa Term
                      and Policy
                    </Text>
                  </Column>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-center sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                    <Img
                      src="images/img_arrowleft_24X24.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="arrowleft"
                    />
                    <Text
                      className="flex-grow font-medium md:ml-[11px] ml-[16px] sm:ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-indigo_400"
                      as="h5"
                      variant="h5"
                    >
                      Back to shopping cart
                    </Text>
                  </Row>
                </Column>
              </Row>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ShippingInfoPage;
