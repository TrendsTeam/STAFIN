import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Line,
  Stack,
  SeekBar,
  CheckBox,
  Button,
  Input,
  Grid,
} from "components";
import Header from "components/Header/Header";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
import { CloseSVG } from "../../assets/images/index.js";

const ShopSearchPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
          <aside className="w-[17%]">
            <div className="">
              <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[22px] p-[32px] w-[100%]">
                <Img
                  src="images/img_logo.svg"
                  className="max-w-[88px] mt-[4px] mx-[auto] sm:px-[15px] w-[100%]"
                  alt="Logo"
                />
                <Column className="flex flex-col justify-start max-w-[155px] mb-[1006px] sm:mb-[535px] md:mb-[692px] sm:mt-[19px] md:mt-[24px] mt-[36px] sm:mx-[0] mx-[auto] pt-[1px] sm:px-[15px] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                    <Img
                      src="images/img_grid_20X20.svg"
                      className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="grid"
                    />
                    <Text
                      className="flex-grow font-medium md:ml-[11px] ml-[16px] sm:ml-[8px] text-bluegray_400"
                      as="h6"
                      variant="h6"
                    >
                      Dashboard
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[18px] md:mt-[23px] mt-[34px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                    <Img
                      src="images/img_user_20X20.svg"
                      className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="user"
                    />
                    <Text
                      className="flex-grow font-medium md:ml-[11px] ml-[16px] sm:ml-[8px] text-bluegray_400"
                      as="h6"
                      variant="h6"
                    >
                      Customer
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
                      <Img
                        src="images/img_sort.svg"
                        className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mb-[2px] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="sort"
                      />
                      <Text
                        className="flex-grow font-medium md:ml-[11px] ml-[16px] sm:ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-bluegray_400"
                        as="h6"
                        variant="h6"
                      >
                        Message
                      </Text>
                    </Row>
                    <Text
                      className="bg-red_600 flex font-bold items-center sm:px-[4px] md:px-[5px] px-[8px] rounded-radius50 text-white_A700 w-[24px]"
                      variant="body1"
                    >
                      3
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                    <Img
                      src="images/img_folder.svg"
                      className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="folder"
                    />
                    <Text
                      className="flex-grow font-medium md:ml-[11px] ml-[16px] sm:ml-[8px] text-bluegray_400"
                      as="h6"
                      variant="h6"
                    >
                      File
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
                    <Img
                      src="images/img_calendar.svg"
                      className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="calendar"
                    />
                    <Text
                      className="flex-grow font-medium md:ml-[11px] ml-[16px] sm:ml-[8px] mt-[3px] text-bluegray_400"
                      as="h6"
                      variant="h6"
                    >
                      Calender
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mt-[18px] md:mt-[23px] mt-[34px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[46%]">
                    <Img
                      src="images/img_trash_20X20.svg"
                      className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="trash"
                    />
                    <Text
                      className="flex-grow font-medium mb-[1px] md:ml-[11px] ml-[16px] sm:ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-bluegray_800"
                      as="h6"
                      variant="h6"
                    >
                      Shop
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                    <Img
                      src="images/img_mail_20X20.svg"
                      className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="mail"
                    />
                    <Text
                      className="flex-grow font-medium md:ml-[11px] ml-[16px] sm:ml-[8px] text-bluegray_400"
                      as="h6"
                      variant="h6"
                    >
                      Cart
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
                    <Column className="bg-white_A700 flex flex-col sm:h-[14px] md:h-[18px] h-[26px] items-center justify-start px-[3px] sm:w-[13px] md:w-[17px] w-[26px]">
                      <div className="bg-bluegray_400 sm:h-[11px] md:h-[14px] h-[20px] rounded-radius50 sm:w-[10px] md:w-[13px] w-[20px]"></div>
                    </Column>
                    <Text
                      className="font-medium mb-[2px] ml-[13px] sm:ml-[6px] md:ml-[8px] sm:mt-[3px] md:mt-[4px] mt-[7px] text-bluegray_400 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Settings
                    </Text>
                  </Row>
                </Column>
              </Column>
            </div>
          </aside>
          <Line className="bg-indigo_51 md:h-[1059px] h-[1538px] sm:h-[820px] max-w-[1px] mx-[auto] sm:px-[15px] w-[100%]" />
          <Column className="flex flex-col items-center max-w-[1198px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Row className="bg-gray_51 flex flex-row md:flex-wrap sm:flex-wrap font-poppins items-start justify-between md:p-[15px] sm:p-[15px] p-[23px] w-[100%]">
              <Column className="flex flex-col justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                <Text
                  className="text-bluegray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Shopping centre
                </Text>
                <Stack className="font-inter h-[1050px] sm:mt-[18px] md:mt-[24px] mt-[35px] relative w-[100%]">
                  <Column className="absolute bottom-[24%] flex flex-col inset-x-[0] justify-start sm:mx-[0] mx-[auto] pr-[4px] sm:px-[0] py-[4px] sm:w-[100%] w-[61%]">
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
                  <Column className="absolute bg-white_A700 flex flex-col justify-end sm:p-[15px] md:p-[21px] p-[31px] rounded-radius4 shadow-bs w-[100%]">
                    <Text
                      className="font-bold ml-[1px] sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Categories
                    </Text>
                    <Accordion
                      preExpanded={[0]}
                      className="sm:mt-[18px] md:mt-[23px] mt-[34px] w-[100%]"
                    >
                      {" "}
                      {[...Array(4)].map((item, index) => (
                        <AccordionItem uuid={index} key={Math.random()}>
                          <Column className="flex flex-col justify-start py-[2px] w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                              <Text
                                className="flex-grow font-medium text-bluegray_800"
                                as="h5"
                                variant="h5"
                              >
                                Clothes
                              </Text>
                              <Img
                                src="images/img_arrowup_20X20.svg"
                                className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                                alt="arrowup"
                              />
                            </Row>
                            <Column className="flex flex-col justify-start sm:mb-[10px] md:mb-[13px] mb-[19px] sm:mt-[11px] md:mt-[15px] mt-[22px] sm:mx-[0] p-[3px] sm:px-[0] sm:w-[100%] w-[42%]">
                              <Text
                                className="font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                T-shirts
                              </Text>
                              <Text
                                className="font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] sm:mt-[12px] md:mt-[16px] mt-[24px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Jeans
                              </Text>
                              <Text
                                className="font-medium mb-[1px] sm:ml-[3px] md:ml-[4px] ml-[6px] sm:mt-[12px] md:mt-[16px] mt-[24px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Jackets
                              </Text>
                            </Column>
                          </Column>
                          <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                        </AccordionItem>
                      ))}
                    </Accordion>
                    <Column className="flex flex-col justify-start sm:mt-[12px] md:mt-[15px] mt-[23px] sm:px-[0] w-[100%]">
                      <Text
                        className="font-medium text-bluegray_800 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Price
                      </Text>
                      <Column className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[19px] w-[100%]">
                        <SeekBar
                          inputValue={[null]}
                          trackColors={["", "#e2e8ed"]}
                          thumbClassName="flex justify-center items-center rounded-radius50 outline-none"
                          className="flex md:h-[10px] h-[14px] sm:h-[8px] w-[100%]"
                          trackClassName="h-[4px] sm:h-[3px] md:h-[3px] flex w-[100%]"
                        />{" "}
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[4px] md:mt-[5px] mt-[8px] w-[100%]">
                          <Text
                            className="flex font-medium items-center text-bluegray_400 w-[auto]"
                            variant="body1"
                          >
                            $0
                          </Text>
                          <Text
                            className="font-medium text-bluegray_400 w-[auto]"
                            variant="body1"
                          >
                            $10,000
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                    <Text
                      className="font-medium ml-[1px] sm:mt-[13px] md:mt-[17px] mt-[25px] text-bluegray_800 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Rating
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[11px] mt-[16px] sm:mt-[8px] sm:px-[0] w-[100%]">
                      <CheckBox
                        className="font-medium text-[14px] text-bluegray_800"
                        inputClassName="mr-[5px]"
                        name="Remember"
                        label="5 Stars"
                        size="sm"
                      ></CheckBox>
                      <Img
                        src="images/img_frame_11X77.png"
                        className="max-w-[100%] w-[37%]"
                        alt="Frame One"
                      />
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[11px] mt-[16px] sm:mt-[8px] sm:px-[0] w-[100%]">
                      <CheckBox
                        className="font-medium text-[14px] text-bluegray_800"
                        inputClassName="mr-[5px]"
                        name="Remember One"
                        label="4 Stars"
                        size="sm"
                      ></CheckBox>
                      <Img
                        src="images/img_frame_11X61.png"
                        className="max-w-[100%] w-[30%]"
                        alt="Frame Two"
                      />
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[11px] mt-[16px] sm:mt-[8px] sm:px-[0] w-[100%]">
                      <CheckBox
                        className="font-medium text-[14px] text-bluegray_800"
                        inputClassName="mr-[5px]"
                        name="Remember Two"
                        label="3 Stars"
                        size="sm"
                      ></CheckBox>
                      <Img
                        src="images/img_frame_11X45.png"
                        className="max-w-[100%] w-[22%]"
                        alt="Frame Three"
                      />
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[11px] mt-[16px] sm:mt-[8px] sm:px-[0] w-[100%]">
                      <CheckBox
                        className="font-medium text-[14px] text-bluegray_800"
                        inputClassName="mr-[5px]"
                        name="Remember Three"
                        label="2 Stars"
                        size="sm"
                      ></CheckBox>
                      <Img
                        src="images/img_frame_11X28.png"
                        className="max-w-[100%] w-[14%]"
                        alt="Frame Four"
                      />
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[11px] mt-[16px] sm:mt-[8px] sm:px-[0] w-[100%]">
                      <CheckBox
                        className="font-medium text-[14px] text-bluegray_800"
                        inputClassName="mr-[5px]"
                        name="Remember Four"
                        label="1 Star"
                        size="sm"
                      ></CheckBox>
                      <Img
                        src="images/img_frame_11X12.png"
                        className="max-w-[100%] w-[6%]"
                        alt="Frame Five"
                      />
                    </Row>
                    <Column className="flex flex-col justify-start ml-[1px] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[73%]">
                      <Text
                        className="font-medium text-bluegray_800 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Color
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[10px] md:mt-[13px] mt-[19px] w-[100%]">
                        <Img
                          src="images/img_icon.svg"
                          className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="Icon"
                        />
                        <Column className="bg-light_blue_A700 flex flex-col sm:h-[13px] md:h-[17px] h-[24px] items-center sm:px-[3px] md:px-[4px] px-[6px] rounded-radius50 sm:w-[12px] md:w-[16px] w-[24px]">
                          <div className="bg-white_A700 h-[12px] sm:h-[7px] md:h-[9px] rounded-radius50 w-[12px] sm:w-[6px] md:w-[8px]"></div>
                        </Column>
                        <Img
                          src="images/img_close_24X24.svg"
                          className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="close"
                        />
                        <Img
                          src="images/img_close_1.svg"
                          className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="close One"
                        />
                        <Img
                          src="images/img_close_2.svg"
                          className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="close Two"
                        />
                      </Row>
                    </Column>
                    <Column className="flex flex-col items-center justify-start mb-[1px] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:px-[0] w-[100%]">
                      <Button
                        className="flex items-center justify-center text-center w-[100%]"
                        rightIcon={
                          <Img
                            src="images/img_plus.svg"
                            className="ml-[15px] sm:ml-[7px] md:ml-[10px] text-center"
                            alt="plus"
                          />
                        }
                        shape="CircleBorder24"
                        size="lg"
                        variant="FillDeeporange300"
                      >
                        <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px]">
                          Apply filter
                        </div>
                      </Button>
                      <Row className="bg-gray_51 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mt-[12px] sm:mt-[6px] md:mt-[8px] p-[14px] sm:p-[7px] md:p-[9px] rounded-radius24 w-[100%]">
                        <Text
                          className="flex-grow font-normal sm:ml-[21px] md:ml-[27px] ml-[40px] not-italic text-bluegray_900"
                          as="h6"
                          variant="h6"
                        >
                          Clear all
                        </Text>
                        <Img
                          src="images/img_trash_1.svg"
                          className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:ml-[14px] md:ml-[18px] ml-[27px] sm:mr-[21px] md:mr-[27px] mr-[40px] sm:w-[10px] md:w-[13px] w-[20px]"
                          alt="trash One"
                        />
                      </Row>
                    </Column>
                  </Column>
                </Stack>
              </Column>
              <Column className="flex flex-col font-inter items-center justify-start sm:mb-[13px] md:mb-[17px] mb-[25px] sm:mt-[38px] md:mt-[50px] mt-[73px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                  wrapClassName="flex w-[100%]"
                  name="frame Six"
                  placeholder="Seach name, type,..."
                  prefix={
                    <Img
                      src="images/img_search_24X24.svg"
                      className="cursor-pointer sm:mx-[8px] md:mx-[11px] my-[auto] mx-[16px]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        className="cursor-pointer ml-[10px] mr-[22px] sm:mr-[11px] sm:ml-[5px] md:mr-[15px] md:ml-[6px] my-[auto]"
                        onClick={() => setInputvalue("")}
                        color="#828fa2"
                      />
                    ) : inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#828fa2"
                        className="cursor-pointer ml-[10px] mr-[22px] sm:mr-[11px] sm:ml-[5px] md:mr-[15px] md:ml-[6px] my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                  shape="srcRoundedBorder4"
                  size="mdSrc"
                  variant="srcOutlineBlack9000c"
                ></Input>
                <Stack className="h-[1186px] sm:mt-[10px] md:mt-[13px] mt-[19px] relative w-[100%]">
                  <div className="absolute bg-white_A700 sm:h-[165px] md:h-[212px] h-[308px] inset-x-[0] mx-[auto] rounded-radius4 shadow-bs top-[1%] w-[32%]"></div>
                  <div className="absolute bg-white_A700 sm:h-[165px] md:h-[212px] h-[308px] right-[0] rounded-radius4 shadow-bs top-[1%] w-[32%]"></div>
                  <Grid className="absolute gap-[0] grid grid-cols-1 md:grid-cols-2 min-h-[auto] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs sm:w-[100%] w-[32%]">
                        <Row
                          className="bg-cover bg-no-repeat flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end md:p-[13px] sm:p-[15px] p-[20px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                          style={{
                            backgroundImage:
                              "url('images/img_frame_353X273.png')",
                          }}
                        >
                          <Button
                            className="flex items-center justify-center mb-[283px] md:mb-[194px] min-w-[36%] sm:mb-[150px] text-center w-[max-content]"
                            rightIcon={
                              <Img
                                src="images/img_airplane.svg"
                                className="ml-[11px] sm:ml-[5px] md:ml-[7px] text-center"
                                alt="airplane"
                              />
                            }
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillRed40019"
                          >
                            <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px]">
                              Feature
                            </div>
                          </Button>
                          <Button
                            className="flex items-center justify-center mb-[283px] md:mb-[194px] md:ml-[5px] min-w-[43%] ml-[8px] sm:mb-[150px] sm:ml-[4px] text-center w-[max-content]"
                            rightIcon={
                              <Img
                                src="images/img_offer.svg"
                                className="ml-[13px] sm:ml-[6px] md:ml-[8px] text-center"
                                alt="offer"
                              />
                            }
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillIndigo40019"
                          >
                            <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px]">
                              Flash sale
                            </div>
                          </Button>
                        </Row>
                        <Column className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                          <Column className="flex flex-col items-center justify-start sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[96%]">
                            <Column className="flex flex-col items-center justify-start pb-[4px] w-[100%]">
                              <Text
                                className="font-medium text-bluegray_900 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Avo T-Shirt
                              </Text>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly md:mt-[11px] mt-[17px] sm:mt-[9px] w-[100%]">
                                <Text
                                  className="font-bold font-inter text-bluegray_900 w-[auto]"
                                  as="h4"
                                  variant="h4"
                                >
                                  $120.0
                                </Text>
                                <Text
                                  className="font-normal font-poppins line-through mt-[2px] not-italic text-bluegray_400 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  $140.0
                                </Text>
                              </Row>
                            </Column>
                            <Img
                              src="images/img_frame_11X77.png"
                              className="max-w-[100%] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:w-[100%] w-[72%]"
                              alt="Frame Nine"
                            />
                          </Column>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
                            <Button
                              className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
                              size="xlIcn"
                              variant="icbFillDeeporange300"
                            >
                              <Img
                                src="images/img_plus.svg"
                                className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                                alt="plus"
                              />
                            </Button>
                            <Button
                              className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
                              size="xlIcn"
                              variant="icbFillGray51"
                            >
                              <Img
                                src="images/img_buttonprimary_48X48.svg"
                                className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                                alt="ButtonPrimary"
                              />
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs sm:w-[100%] w-[32%]">
                        <Row
                          className="bg-cover bg-no-repeat flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end md:p-[13px] sm:p-[15px] p-[20px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_frame_1.png')",
                          }}
                        >
                          <Button
                            className="flex items-center justify-center mb-[283px] md:mb-[194px] min-w-[36%] sm:mb-[150px] text-center w-[max-content]"
                            rightIcon={
                              <Img
                                src="images/img_airplane.svg"
                                className="ml-[11px] sm:ml-[5px] md:ml-[7px] text-center"
                                alt="airplane"
                              />
                            }
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillRed40019"
                          >
                            <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px]">
                              Feature
                            </div>
                          </Button>
                          <Button
                            className="flex items-center justify-center mb-[283px] md:mb-[194px] md:ml-[5px] min-w-[43%] ml-[8px] sm:mb-[150px] sm:ml-[4px] text-center w-[max-content]"
                            rightIcon={
                              <Img
                                src="images/img_offer.svg"
                                className="ml-[13px] sm:ml-[6px] md:ml-[8px] text-center"
                                alt="offer"
                              />
                            }
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillIndigo40019"
                          >
                            <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px]">
                              Flash sale
                            </div>
                          </Button>
                        </Row>
                        <Column className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                          <Column className="flex flex-col items-center justify-start sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[96%]">
                            <Column className="flex flex-col items-center justify-start pb-[4px] w-[100%]">
                              <Text
                                className="font-medium text-bluegray_900 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Basic T-Shirt
                              </Text>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly md:mt-[11px] mt-[17px] sm:mt-[9px] w-[100%]">
                                <Text
                                  className="font-bold font-inter text-bluegray_900 w-[auto]"
                                  as="h4"
                                  variant="h4"
                                >
                                  $120.0
                                </Text>
                                <Text
                                  className="font-normal font-poppins line-through mt-[2px] not-italic text-bluegray_400 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  $140.0
                                </Text>
                              </Row>
                            </Column>
                            <Img
                              src="images/img_frame_11X77.png"
                              className="max-w-[100%] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:w-[100%] w-[72%]"
                              alt="Frame One"
                            />
                          </Column>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
                            <Button
                              className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
                              size="xlIcn"
                              variant="icbFillDeeporange300"
                            >
                              <Img
                                src="images/img_plus.svg"
                                className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                                alt="plus One"
                              />
                            </Button>
                            <Button
                              className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
                              size="xlIcn"
                              variant="icbFillGray51"
                            >
                              <Img
                                src="images/img_buttonprimary_48X48.svg"
                                className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                                alt="ButtonPrimary One"
                              />
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs sm:w-[100%] w-[32%]">
                        <Row
                          className="bg-cover bg-no-repeat flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end md:p-[13px] sm:p-[15px] p-[20px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_frame_2.png')",
                          }}
                        >
                          <Button
                            className="flex items-center justify-center mb-[283px] md:mb-[194px] min-w-[36%] sm:mb-[150px] text-center w-[max-content]"
                            rightIcon={
                              <Img
                                src="images/img_airplane.svg"
                                className="ml-[11px] sm:ml-[5px] md:ml-[7px] text-center"
                                alt="airplane"
                              />
                            }
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillRed40019"
                          >
                            <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px]">
                              Feature
                            </div>
                          </Button>
                          <Button
                            className="flex items-center justify-center mb-[283px] md:mb-[194px] md:ml-[5px] min-w-[43%] ml-[8px] sm:mb-[150px] sm:ml-[4px] text-center w-[max-content]"
                            rightIcon={
                              <Img
                                src="images/img_offer.svg"
                                className="ml-[13px] sm:ml-[6px] md:ml-[8px] text-center"
                                alt="offer"
                              />
                            }
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillIndigo40019"
                          >
                            <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px]">
                              Flash sale
                            </div>
                          </Button>
                        </Row>
                        <Column className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                          <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:pt-[2px] md:pt-[3px] pt-[5px] sm:px-[0] sm:w-[100%] w-[96%]">
                            <Column className="flex flex-col items-center justify-start pb-[4px] w-[100%]">
                              <Text
                                className="font-medium text-bluegray_900 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Trendy Polo
                              </Text>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]">
                                <Text
                                  className="font-bold font-inter text-bluegray_900 w-[auto]"
                                  as="h4"
                                  variant="h4"
                                >
                                  $120.0
                                </Text>
                                <Text
                                  className="font-normal font-poppins line-through mt-[2px] not-italic text-bluegray_400 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  $140.0
                                </Text>
                              </Row>
                            </Column>
                            <Img
                              src="images/img_frame_11X77.png"
                              className="max-w-[100%] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:w-[100%] w-[72%]"
                              alt="Frame Two"
                            />
                          </Column>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
                            <Button
                              className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
                              size="xlIcn"
                              variant="icbFillDeeporange300"
                            >
                              <Img
                                src="images/img_plus.svg"
                                className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                                alt="plus Two"
                              />
                            </Button>
                            <Button
                              className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
                              size="xlIcn"
                              variant="icbFillGray51"
                            >
                              <Img
                                src="images/img_buttonprimary_48X48.svg"
                                className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                                alt="ButtonPrimary Two"
                              />
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs sm:w-[100%] w-[32%]">
                        <Row
                          className="bg-cover bg-no-repeat flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end md:p-[13px] sm:p-[15px] p-[20px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_frame_3.png')",
                          }}
                        >
                          <Button
                            className="flex items-center justify-center mb-[283px] md:mb-[194px] min-w-[36%] sm:mb-[150px] text-center w-[max-content]"
                            rightIcon={
                              <Img
                                src="images/img_airplane.svg"
                                className="ml-[11px] sm:ml-[5px] md:ml-[7px] text-center"
                                alt="airplane"
                              />
                            }
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillRed40019"
                          >
                            <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px]">
                              Feature
                            </div>
                          </Button>
                          <Button
                            className="flex items-center justify-center mb-[283px] md:mb-[194px] md:ml-[5px] min-w-[43%] ml-[8px] sm:mb-[150px] sm:ml-[4px] text-center w-[max-content]"
                            rightIcon={
                              <Img
                                src="images/img_offer.svg"
                                className="ml-[13px] sm:ml-[6px] md:ml-[8px] text-center"
                                alt="offer"
                              />
                            }
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillIndigo40019"
                          >
                            <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px]">
                              Flash sale
                            </div>
                          </Button>
                        </Row>
                        <Column className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                          <Column className="flex flex-col items-center justify-start sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[96%]">
                            <Column className="flex flex-col justify-start pb-[4px] w-[100%]">
                              <Text
                                className="font-medium ml-[14px] sm:ml-[7px] md:ml-[9px] text-bluegray_900 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Polo Shirt
                              </Text>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly md:mt-[11px] mt-[17px] sm:mt-[9px] w-[100%]">
                                <Text
                                  className="font-bold font-inter text-bluegray_900 w-[auto]"
                                  as="h4"
                                  variant="h4"
                                >
                                  $120.0
                                </Text>
                                <Text
                                  className="font-normal font-poppins line-through mt-[2px] not-italic text-bluegray_400 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  $140.0
                                </Text>
                              </Row>
                            </Column>
                            <Img
                              src="images/img_frame_11X77.png"
                              className="max-w-[100%] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:w-[100%] w-[72%]"
                              alt="Frame Ten"
                            />
                          </Column>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
                            <Button
                              className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
                              size="xlIcn"
                              variant="icbFillDeeporange300"
                            >
                              <Img
                                src="images/img_plus.svg"
                                className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                                alt="plus One"
                              />
                            </Button>
                            <Button
                              className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
                              size="xlIcn"
                              variant="icbFillGray51"
                            >
                              <Img
                                src="images/img_buttonprimary_48X48.svg"
                                className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                                alt="ButtonPrimary One"
                              />
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs sm:w-[100%] w-[32%]">
                        <Row
                          className="bg-cover bg-no-repeat flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end md:p-[13px] sm:p-[15px] p-[20px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_frame_4.png')",
                          }}
                        >
                          <Button
                            className="flex items-center justify-center mb-[283px] md:mb-[194px] min-w-[36%] sm:mb-[150px] text-center w-[max-content]"
                            rightIcon={
                              <Img
                                src="images/img_airplane.svg"
                                className="ml-[11px] sm:ml-[5px] md:ml-[7px] text-center"
                                alt="airplane"
                              />
                            }
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillRed40019"
                          >
                            <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px]">
                              Feature
                            </div>
                          </Button>
                          <Button
                            className="flex items-center justify-center mb-[283px] md:mb-[194px] md:ml-[5px] min-w-[43%] ml-[8px] sm:mb-[150px] sm:ml-[4px] text-center w-[max-content]"
                            rightIcon={
                              <Img
                                src="images/img_offer.svg"
                                className="ml-[13px] sm:ml-[6px] md:ml-[8px] text-center"
                                alt="offer"
                              />
                            }
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillIndigo40019"
                          >
                            <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px]">
                              Flash sale
                            </div>
                          </Button>
                        </Row>
                        <Column className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                          <Column className="flex flex-col items-center justify-start sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[96%]">
                            <Column className="flex flex-col justify-start pb-[4px] w-[100%]">
                              <Text
                                className="font-medium ml-[14px] sm:ml-[7px] md:ml-[9px] text-bluegray_900 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Bomber
                              </Text>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly md:mt-[11px] mt-[17px] sm:mt-[9px] w-[100%]">
                                <Text
                                  className="font-bold font-inter text-bluegray_900 w-[auto]"
                                  as="h4"
                                  variant="h4"
                                >
                                  $120.0
                                </Text>
                                <Text
                                  className="font-normal font-poppins line-through mt-[2px] not-italic text-bluegray_400 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  $140.0
                                </Text>
                              </Row>
                            </Column>
                            <Img
                              src="images/img_frame_11X77.png"
                              className="max-w-[100%] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:w-[100%] w-[72%]"
                              alt="Frame One One"
                            />
                          </Column>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
                            <Button
                              className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
                              size="xlIcn"
                              variant="icbFillDeeporange300"
                            >
                              <Img
                                src="images/img_plus.svg"
                                className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                                alt="plus One One"
                              />
                            </Button>
                            <Button
                              className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
                              size="xlIcn"
                              variant="icbFillGray51"
                            >
                              <Img
                                src="images/img_buttonprimary_48X48.svg"
                                className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                                alt="ButtonPrimary One One"
                              />
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs sm:w-[100%] w-[32%]">
                        <Row
                          className="bg-cover bg-no-repeat flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end md:p-[13px] sm:p-[15px] p-[20px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_frame_5.png')",
                          }}
                        >
                          <Button
                            className="flex items-center justify-center mb-[283px] md:mb-[194px] min-w-[36%] sm:mb-[150px] text-center w-[max-content]"
                            rightIcon={
                              <Img
                                src="images/img_airplane.svg"
                                className="ml-[11px] sm:ml-[5px] md:ml-[7px] text-center"
                                alt="airplane"
                              />
                            }
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillRed40019"
                          >
                            <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px]">
                              Feature
                            </div>
                          </Button>
                          <Button
                            className="flex items-center justify-center mb-[283px] md:mb-[194px] md:ml-[5px] min-w-[43%] ml-[8px] sm:mb-[150px] sm:ml-[4px] text-center w-[max-content]"
                            rightIcon={
                              <Img
                                src="images/img_offer.svg"
                                className="ml-[13px] sm:ml-[6px] md:ml-[8px] text-center"
                                alt="offer"
                              />
                            }
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillIndigo40019"
                          >
                            <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px]">
                              Flash sale
                            </div>
                          </Button>
                        </Row>
                        <Column className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                          <Column className="flex flex-col items-center justify-start sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[96%]">
                            <Column className="flex flex-col justify-start pb-[4px] w-[100%]">
                              <Text
                                className="font-medium ml-[14px] sm:ml-[7px] md:ml-[9px] text-bluegray_900 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Over Shirt
                              </Text>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly md:mt-[11px] mt-[17px] sm:mt-[9px] w-[100%]">
                                <Text
                                  className="font-bold font-inter text-bluegray_900 w-[auto]"
                                  as="h4"
                                  variant="h4"
                                >
                                  $120.0
                                </Text>
                                <Text
                                  className="font-normal font-poppins line-through mt-[2px] not-italic text-bluegray_400 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  $140.0
                                </Text>
                              </Row>
                            </Column>
                            <Img
                              src="images/img_frame_11X77.png"
                              className="max-w-[100%] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:w-[100%] w-[72%]"
                              alt="Frame Two One"
                            />
                          </Column>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
                            <Button
                              className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
                              size="xlIcn"
                              variant="icbFillDeeporange300"
                            >
                              <Img
                                src="images/img_plus.svg"
                                className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                                alt="plus Two One"
                              />
                            </Button>
                            <Button
                              className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
                              size="xlIcn"
                              variant="icbFillGray51"
                            >
                              <Img
                                src="images/img_buttonprimary_48X48.svg"
                                className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                                alt="ButtonPrimary Two One"
                              />
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                  </Grid>
                </Stack>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mt-[21px] md:mt-[28px] mt-[41px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                  <Button
                    className="flex sm:h-[18px] md:h-[23px] h-[32px] items-center justify-center sm:w-[17px] md:w-[22px] w-[32px]"
                    size="mdIcn"
                    variant="icbOutlineIndigo51"
                  >
                    <Img
                      src="images/img_arrowleft_32X32.svg"
                      className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                      alt="arrowleft"
                    />
                  </Button>
                  <Button
                    className="cursor-pointer font-medium sm:h-[18px] md:h-[23px] h-[32px] sm:ml-[4px] md:ml-[5px] ml-[8px] text-[14px] text-center sm:w-[17px] md:w-[22px] w-[32px]"
                    size="md"
                    variant="OutlineBluegray900"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer font-medium sm:h-[18px] md:h-[23px] h-[32px] sm:ml-[4px] md:ml-[5px] ml-[8px] text-[14px] text-center sm:w-[17px] md:w-[22px] w-[32px]"
                    size="md"
                    variant="OutlineIndigo51"
                  >
                    2
                  </Button>
                  <Button
                    className="cursor-pointer font-medium sm:h-[18px] md:h-[23px] h-[32px] sm:ml-[4px] md:ml-[5px] ml-[8px] text-[14px] text-center sm:w-[17px] md:w-[22px] w-[32px]"
                    size="md"
                    variant="OutlineIndigo51"
                  >
                    ...
                  </Button>
                  <Button
                    className="cursor-pointer font-medium sm:h-[18px] md:h-[23px] h-[32px] sm:ml-[4px] md:ml-[5px] ml-[8px] text-[14px] text-center sm:w-[17px] md:w-[22px] w-[32px]"
                    size="md"
                    variant="OutlineIndigo51"
                  >
                    9
                  </Button>
                  <Button
                    className="flex sm:h-[18px] md:h-[23px] h-[32px] items-center justify-center sm:ml-[4px] md:ml-[5px] ml-[8px] rotate-[180deg] sm:w-[17px] md:w-[22px] w-[32px]"
                    size="mdIcn"
                    variant="icbOutlineIndigo51"
                  >
                    <Img
                      src="images/img_arrowright.svg"
                      className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                      alt="arrowright"
                    />
                  </Button>
                </Row>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ShopSearchPage;
