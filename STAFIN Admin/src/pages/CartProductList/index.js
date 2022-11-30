import React from "react";

import {
  Row,
  Stack,
  Column,
  Text,
  CheckBox,
  List,
  Line,
  Img,
  Button,
  Input,
} from "components";
import Sidebar6 from "components/Sidebar/Sidebar6";
import Header from "components/Header/Header";

const CartProductListPage = () => {
  return (
    <>
      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center mx-[auto] w-[100%]">
        <Sidebar6 className="w-[17%]" />
        <Stack className="h-[1071px] max-w-[1199px] mx-[auto] sm:px-[15px] relative w-[100%]">
          <Column className="absolute bg-gray_51 bottom-[0] flex flex-col items-center justify-end sm:p-[15px] md:p-[16px] p-[24px] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[14px] sm:mt-[7px] md:mt-[9px] sm:px-[0] w-[100%]">
              <Text
                className="font-poppins text-bluegray_900 w-[auto]"
                as="h3"
                variant="h3"
              >
                Cart
              </Text>
              <Text
                className="font-inter font-normal mt-[3px] not-italic text-bluegray_400 w-[auto]"
                as="h5"
                variant="h5"
              >
                <span className="text-bluegray_400 text-[16px]">
                  Ecommerce/
                </span>
                <span className="text-bluegray_800 text-[16px]"> Cart</span>
              </Text>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[19px] md:mt-[25px] mt-[37px] sm:px-[0] w-[100%]">
              <Column className="bg-white_A700 flex flex-col justify-end sm:mx-[0] sm:p-[15px] md:p-[16px] p-[24px] rounded-radius4 shadow-bs sm:w-[100%] w-[67%]">
                <Text
                  className="font-bold sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[13px] sm:mt-[6px] md:mt-[8px] text-bluegray_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Product List
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[19px] ml-[28px] sm:mt-[20px] md:mt-[26px] mt-[39px] sm:mx-[0] pt-[1px] sm:px-[0] px-[1px] sm:w-[100%] w-[93%]">
                  <CheckBox
                    className="md:h-[12px] h-[16px] sm:h-[9px]"
                    inputClassName="mr-[5px]"
                    name="file One"
                    label=""
                  ></CheckBox>
                  <Text
                    className="font-normal sm:ml-[17px] md:ml-[22px] ml-[33px] not-italic text-bluegray_400 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Product
                  </Text>
                  <Text
                    className="font-normal sm:ml-[107px] md:ml-[138px] ml-[201px] not-italic text-bluegray_400 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Price
                  </Text>
                  <Text
                    className="font-normal sm:ml-[39px] md:ml-[50px] ml-[74px] mt-[4px] not-italic text-bluegray_400 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Quantity
                  </Text>
                  <Text
                    className="font-normal sm:ml-[51px] md:ml-[66px] ml-[96px] not-italic text-bluegray_400 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Total
                  </Text>
                </Row>
                <List
                  className="sm:gap-[12px] md:gap-[16px] gap-[24px] min-h-[auto] sm:ml-[4px] md:ml-[5px] ml-[8px] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:w-[100%] w-[98%]"
                  orientation="vertical"
                >
                  <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-start sm:p-[4px] md:p-[5px] p-[8px] w-[100%]">
                    <CheckBox
                      className="md:h-[12px] h-[16px] sm:h-[9px] ml-[13px] sm:ml-[6px] md:ml-[8px] sm:mt-[18px] md:mt-[23px] mt-[34px]"
                      inputClassName="mr-[5px]"
                      name="file Two"
                      label=""
                    ></CheckBox>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center md:ml-[22px] ml-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                      <Img
                        src="images/img_rectangle.png"
                        className="max-w-[100%] w-[35%]"
                        alt="Rectangle"
                      />
                      <Column className="flex flex-col justify-start md:ml-[16px] ml-[24px] sm:mx-[0] md:pr-[3px] pr-[5px] sm:pt-[2px] md:pt-[3px] pt-[5px] sm:px-[0] sm:w-[100%] w-[55%]">
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Polo Shirt
                        </Text>
                        <Text
                          className="font-normal md:mt-[12px] mt-[18px] sm:mt-[9px] not-italic text-bluegray_400 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Color: Grey, S
                        </Text>
                      </Column>
                    </Row>
                    <Text
                      className="font-normal sm:ml-[15px] md:ml-[20px] ml-[30px] mt-[3px] not-italic text-bluegray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $120.0
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[45px] ml-[66px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[17%]">
                      <Button
                        className="flex sm:h-[18px] md:h-[23px] h-[32px] items-center justify-center sm:w-[17px] md:w-[22px] w-[32px]"
                        size="mdIcn"
                        variant="icbOutlineIndigo51"
                      >
                        <Img
                          src="images/img_minus.svg"
                          className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                          alt="minus"
                        />
                      </Button>
                      <Text
                        className="font-medium sm:ml-[11px] md:ml-[14px] ml-[21px] text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        1
                      </Text>
                      <Button
                        className="flex sm:h-[18px] md:h-[23px] h-[32px] items-center justify-center sm:ml-[11px] md:ml-[15px] ml-[22px] sm:w-[17px] md:w-[22px] w-[32px]"
                        size="lgIcn"
                        variant="icbOutlineIndigo51"
                      >
                        <Img
                          src="images/img_plus_32X32.svg"
                          className="h-[13px] sm:h-[7px] md:h-[9px] flex items-center justify-center"
                          alt="plus"
                        />
                      </Button>
                    </Row>
                    <Text
                      className="font-normal sm:ml-[26px] md:ml-[33px] ml-[49px] mt-[3px] not-italic text-bluegray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $120.0
                    </Text>
                  </Row>
                  <Line className="self-center w-[90%] h-[1px] sm:w-[100%] bg-indigo_51" />
                  <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-start sm:p-[4px] md:p-[5px] p-[8px] w-[100%]">
                    <CheckBox
                      className="md:h-[12px] h-[16px] sm:h-[9px] ml-[13px] sm:ml-[6px] md:ml-[8px] sm:mt-[18px] md:mt-[23px] mt-[34px]"
                      inputClassName="mr-[5px]"
                      name="file Three"
                      label=""
                    ></CheckBox>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center md:ml-[22px] ml-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                      <Img
                        src="images/img_frame_1.png"
                        className="max-w-[100%] w-[35%]"
                        alt="Rectangle One"
                      />
                      <Column className="flex flex-col justify-start md:ml-[16px] ml-[24px] sm:mx-[0] md:pr-[3px] pr-[5px] sm:pt-[2px] md:pt-[3px] pt-[5px] sm:px-[0] sm:w-[100%] w-[55%]">
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Basic T- Shirt
                        </Text>
                        <Text
                          className="font-normal md:mt-[12px] mt-[18px] sm:mt-[9px] not-italic text-bluegray_400 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Color: Grey, S
                        </Text>
                      </Column>
                    </Row>
                    <Text
                      className="font-normal sm:ml-[15px] md:ml-[20px] ml-[30px] mt-[3px] not-italic text-bluegray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $120.0
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[45px] ml-[66px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[17%]">
                      <Button
                        className="flex sm:h-[18px] md:h-[23px] h-[32px] items-center justify-center sm:w-[17px] md:w-[22px] w-[32px]"
                        size="mdIcn"
                        variant="icbOutlineIndigo51"
                      >
                        <Img
                          src="images/img_minus.svg"
                          className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                          alt="minus One"
                        />
                      </Button>
                      <Text
                        className="font-medium sm:ml-[11px] md:ml-[14px] ml-[21px] text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        1
                      </Text>
                      <Button
                        className="flex sm:h-[18px] md:h-[23px] h-[32px] items-center justify-center sm:ml-[11px] md:ml-[15px] ml-[22px] sm:w-[17px] md:w-[22px] w-[32px]"
                        size="lgIcn"
                        variant="icbOutlineIndigo51"
                      >
                        <Img
                          src="images/img_plus_32X32.svg"
                          className="h-[13px] sm:h-[7px] md:h-[9px] flex items-center justify-center"
                          alt="plus One"
                        />
                      </Button>
                    </Row>
                    <Text
                      className="font-normal sm:ml-[26px] md:ml-[33px] ml-[49px] mt-[3px] not-italic text-bluegray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $120.0
                    </Text>
                  </Row>
                  <Line className="self-center w-[90%] h-[1px] sm:w-[100%] bg-indigo_51" />
                  <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-start sm:p-[4px] md:p-[5px] p-[8px] w-[100%]">
                    <CheckBox
                      className="md:h-[12px] h-[16px] sm:h-[9px] ml-[13px] sm:ml-[6px] md:ml-[8px] sm:mt-[18px] md:mt-[23px] mt-[34px]"
                      inputClassName="mr-[5px]"
                      name="file Four"
                      label=""
                    ></CheckBox>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center md:ml-[22px] ml-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                      <Img
                        src="images/img_frame_2.png"
                        className="max-w-[100%] w-[35%]"
                        alt="Rectangle Two"
                      />
                      <Column className="flex flex-col justify-start md:ml-[16px] ml-[24px] sm:mx-[0] md:pr-[4px] pr-[7px] sm:pt-[3px] md:pt-[4px] pt-[7px] sm:px-[0] sm:w-[100%] w-[55%]">
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Trendy Polo
                        </Text>
                        <Text
                          className="font-normal md:mt-[10px] mt-[15px] sm:mt-[7px] not-italic text-bluegray_400 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Color: Grey, S
                        </Text>
                      </Column>
                    </Row>
                    <Text
                      className="font-normal sm:ml-[15px] md:ml-[20px] ml-[30px] mt-[3px] not-italic text-bluegray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $120.0
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[45px] ml-[66px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[17%]">
                      <Button
                        className="flex sm:h-[18px] md:h-[23px] h-[32px] items-center justify-center sm:w-[17px] md:w-[22px] w-[32px]"
                        size="mdIcn"
                        variant="icbOutlineIndigo51"
                      >
                        <Img
                          src="images/img_minus.svg"
                          className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                          alt="minus Two"
                        />
                      </Button>
                      <Text
                        className="font-medium sm:ml-[11px] md:ml-[14px] ml-[21px] text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        1
                      </Text>
                      <Button
                        className="flex sm:h-[18px] md:h-[23px] h-[32px] items-center justify-center sm:ml-[11px] md:ml-[15px] ml-[22px] sm:w-[17px] md:w-[22px] w-[32px]"
                        size="lgIcn"
                        variant="icbOutlineIndigo51"
                      >
                        <Img
                          src="images/img_plus_32X32.svg"
                          className="h-[13px] sm:h-[7px] md:h-[9px] flex items-center justify-center"
                          alt="plus Two"
                        />
                      </Button>
                    </Row>
                    <Text
                      className="font-normal sm:ml-[26px] md:ml-[33px] ml-[49px] mt-[3px] not-italic text-bluegray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $120.0
                    </Text>
                  </Row>
                  <Line className="self-center w-[90%] h-[1px] sm:w-[100%] bg-indigo_51" />
                  <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-start sm:p-[4px] md:p-[5px] p-[8px] w-[100%]">
                    <CheckBox
                      className="md:h-[12px] h-[16px] sm:h-[9px] ml-[13px] sm:ml-[6px] md:ml-[8px] sm:mt-[18px] md:mt-[23px] mt-[34px]"
                      inputClassName="mr-[5px]"
                      name="file Five"
                      label=""
                    ></CheckBox>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center md:ml-[22px] ml-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                      <Img
                        src="images/img_frame_5.png"
                        className="max-w-[100%] w-[35%]"
                        alt="Rectangle Three"
                      />
                      <Column className="flex flex-col justify-start md:ml-[16px] ml-[24px] sm:mx-[0] md:pr-[3px] pr-[5px] sm:pt-[2px] md:pt-[3px] pt-[5px] sm:px-[0] sm:w-[100%] w-[55%]">
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Over Shirt
                        </Text>
                        <Text
                          className="font-normal md:mt-[12px] mt-[18px] sm:mt-[9px] not-italic text-bluegray_400 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Color: Grey, S
                        </Text>
                      </Column>
                    </Row>
                    <Text
                      className="font-normal sm:ml-[15px] md:ml-[20px] ml-[30px] mt-[3px] not-italic text-bluegray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $120.0
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[45px] ml-[66px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[17%]">
                      <Button
                        className="flex sm:h-[18px] md:h-[23px] h-[32px] items-center justify-center sm:w-[17px] md:w-[22px] w-[32px]"
                        size="mdIcn"
                        variant="icbOutlineIndigo51"
                      >
                        <Img
                          src="images/img_minus.svg"
                          className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                          alt="minus Three"
                        />
                      </Button>
                      <Text
                        className="font-medium sm:ml-[11px] md:ml-[14px] ml-[21px] text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        1
                      </Text>
                      <Button
                        className="flex sm:h-[18px] md:h-[23px] h-[32px] items-center justify-center sm:ml-[11px] md:ml-[15px] ml-[22px] sm:w-[17px] md:w-[22px] w-[32px]"
                        size="lgIcn"
                        variant="icbOutlineIndigo51"
                      >
                        <Img
                          src="images/img_plus_32X32.svg"
                          className="h-[13px] sm:h-[7px] md:h-[9px] flex items-center justify-center"
                          alt="plus Three"
                        />
                      </Button>
                    </Row>
                    <Text
                      className="font-normal sm:ml-[26px] md:ml-[33px] ml-[49px] mt-[3px] not-italic text-bluegray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $120.0
                    </Text>
                  </Row>
                  <Line className="self-center w-[90%] h-[1px] sm:w-[100%] bg-indigo_51" />
                  <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-start sm:p-[4px] md:p-[5px] p-[8px] w-[100%]">
                    <CheckBox
                      className="md:h-[12px] h-[16px] sm:h-[9px] ml-[13px] sm:ml-[6px] md:ml-[8px] sm:mt-[18px] md:mt-[23px] mt-[34px]"
                      inputClassName="mr-[5px]"
                      name="file Six"
                      label=""
                    ></CheckBox>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center md:ml-[22px] ml-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                      <Img
                        src="images/img_frame_353X273.png"
                        className="max-w-[100%] w-[35%]"
                        alt="Rectangle Four"
                      />
                      <Column className="flex flex-col justify-start md:ml-[16px] ml-[24px] sm:mx-[0] md:pr-[3px] pr-[5px] sm:pt-[2px] md:pt-[3px] pt-[5px] sm:px-[0] sm:w-[100%] w-[55%]">
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Avo T-Shirt
                        </Text>
                        <Text
                          className="font-normal md:mt-[12px] mt-[18px] sm:mt-[9px] not-italic text-bluegray_400 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Color: Grey, S
                        </Text>
                      </Column>
                    </Row>
                    <Text
                      className="font-normal sm:ml-[15px] md:ml-[20px] ml-[30px] mt-[3px] not-italic text-bluegray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $120.0
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[45px] ml-[66px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[17%]">
                      <Button
                        className="flex sm:h-[18px] md:h-[23px] h-[32px] items-center justify-center sm:w-[17px] md:w-[22px] w-[32px]"
                        size="mdIcn"
                        variant="icbOutlineIndigo51"
                      >
                        <Img
                          src="images/img_minus.svg"
                          className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                          alt="minus Four"
                        />
                      </Button>
                      <Text
                        className="font-medium sm:ml-[11px] md:ml-[14px] ml-[21px] text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        1
                      </Text>
                      <Button
                        className="flex sm:h-[18px] md:h-[23px] h-[32px] items-center justify-center sm:ml-[11px] md:ml-[15px] ml-[22px] sm:w-[17px] md:w-[22px] w-[32px]"
                        size="lgIcn"
                        variant="icbOutlineIndigo51"
                      >
                        <Img
                          src="images/img_plus_32X32.svg"
                          className="h-[13px] sm:h-[7px] md:h-[9px] flex items-center justify-center"
                          alt="plus Four"
                        />
                      </Button>
                    </Row>
                    <Text
                      className="font-normal sm:ml-[26px] md:ml-[33px] ml-[49px] mt-[3px] not-italic text-bluegray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $120.0
                    </Text>
                  </Row>
                  <Line className="self-center w-[90%] h-[1px] sm:w-[100%] bg-indigo_51" />
                  <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-start sm:p-[4px] md:p-[5px] p-[8px] w-[100%]">
                    <CheckBox
                      className="md:h-[12px] h-[16px] sm:h-[9px] ml-[13px] sm:ml-[6px] md:ml-[8px] sm:mt-[18px] md:mt-[23px] mt-[34px]"
                      inputClassName="mr-[5px]"
                      name="file Seven"
                      label=""
                    ></CheckBox>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center md:ml-[22px] ml-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                      <Img
                        src="images/img_frame_4.png"
                        className="max-w-[100%] w-[35%]"
                        alt="Rectangle Five"
                      />
                      <Column className="flex flex-col justify-start md:ml-[16px] ml-[24px] sm:mx-[0] md:pr-[3px] pr-[5px] sm:pt-[2px] md:pt-[3px] pt-[5px] sm:px-[0] sm:w-[100%] w-[55%]">
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Bomber
                        </Text>
                        <Text
                          className="font-normal md:mt-[11px] mt-[17px] sm:mt-[9px] not-italic text-bluegray_400 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Color: Grey, S
                        </Text>
                      </Column>
                    </Row>
                    <Text
                      className="font-normal sm:ml-[15px] md:ml-[20px] ml-[30px] mt-[3px] not-italic text-bluegray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $120.0
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[45px] ml-[66px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[17%]">
                      <Button
                        className="flex sm:h-[18px] md:h-[23px] h-[32px] items-center justify-center sm:w-[17px] md:w-[22px] w-[32px]"
                        size="mdIcn"
                        variant="icbOutlineIndigo51"
                      >
                        <Img
                          src="images/img_minus.svg"
                          className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                          alt="minus Five"
                        />
                      </Button>
                      <Text
                        className="font-medium sm:ml-[11px] md:ml-[14px] ml-[21px] text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        1
                      </Text>
                      <Button
                        className="flex sm:h-[18px] md:h-[23px] h-[32px] items-center justify-center sm:ml-[11px] md:ml-[15px] ml-[22px] sm:w-[17px] md:w-[22px] w-[32px]"
                        size="lgIcn"
                        variant="icbOutlineIndigo51"
                      >
                        <Img
                          src="images/img_plus_32X32.svg"
                          className="h-[13px] sm:h-[7px] md:h-[9px] flex items-center justify-center"
                          alt="plus Five"
                        />
                      </Button>
                    </Row>
                    <Text
                      className="font-normal sm:ml-[26px] md:ml-[33px] ml-[49px] mt-[3px] not-italic text-bluegray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $120.0
                    </Text>
                  </Row>
                </List>
              </Column>
              <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                <Column className="bg-white_A700 flex flex-col items-center justify-end sm:p-[15px] md:p-[22px] p-[32px] rounded-radius4 shadow-bs w-[100%]">
                  <Column className="flex flex-col justify-start mt-[3px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-medium text-bluegray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Promotion
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                      wrapClassName="md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
                      name="Group8229"
                      placeholder="Enter code"
                      shape="RoundedBorder4"
                      size="lg"
                      variant="OutlineIndigo51"
                    ></Input>
                  </Column>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[70%]">
                    <Img
                      src="images/img_offer.svg"
                      className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="offer"
                    />
                    <Text
                      className="flex-grow font-medium ml-[12px] sm:ml-[6px] md:ml-[8px] sm:mr-[14px] md:mr-[19px] mr-[28px] text-indigo_400"
                      as="h6"
                      variant="h6"
                    >
                      Click to find Promotion
                    </Text>
                  </Row>
                </Column>
                <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:p-[15px] md:p-[22px] p-[32px] rounded-radius4 shadow-bs w-[100%]">
                  <Column className="flex flex-col items-center justify-start pt-[4px] sm:px-[0] w-[100%]">
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
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[14px] md:mt-[19px] mt-[28px] w-[100%]">
                      <Text
                        className="font-normal mt-[1px] not-italic text-bluegray_400 w-[auto]"
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
                        $0
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
                      $120.0
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
                    By clicking “Purchase” button, I agree with RiriBa Term and
                    Policy
                  </Text>
                </Column>
              </Column>
            </Row>
          </Column>
          <Header className="absolute bg-white_A700 inset-x-[0] top-[0] w-[100%]" />
          <Line className="absolute bg-indigo_51 h-[1071px] sm:h-[571px] md:h-[738px] left-[0] w-[1px]" />
        </Stack>
      </Row>
    </>
  );
};

export default CartProductListPage;
