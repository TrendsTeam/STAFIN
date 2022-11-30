import React from "react";

import {
  Column,
  Row,
  Img,
  Line,
  Text,
  Input,
  Button,
  SelectBox,
  List,
  Stack,
  Radio,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DashboardThreePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
          <aside className="w-[6%]">
            <div className="">
              <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[19px] p-[29px] w-[100%]">
                <Img
                  src="images/img_bookmark.svg"
                  className="max-w-[22px] sm:mt-[3px] md:mt-[4px] mt-[7px] mx-[auto] sm:px-[15px] w-[100%]"
                  alt="bookmark"
                />
                <Column className="flex flex-col items-center justify-start max-w-[26px] sm:mb-[495px] md:mb-[640px] mb-[930px] sm:mt-[19px] md:mt-[24px] mt-[36px] mx-[auto] sm:px-[15px] w-[100%]">
                  <Img
                    src="images/img_grid.svg"
                    className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                    alt="grid"
                  />
                  <Img
                    src="images/img_user_20X20.svg"
                    className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:mt-[18px] md:mt-[23px] mt-[34px] sm:w-[10px] md:w-[13px] w-[20px]"
                    alt="user"
                  />
                  <Img
                    src="images/img_sort.svg"
                    className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:mt-[18px] md:mt-[23px] mt-[34px] sm:w-[10px] md:w-[13px] w-[20px]"
                    alt="sort"
                  />
                  <Img
                    src="images/img_folder.svg"
                    className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:mt-[18px] md:mt-[23px] mt-[34px] sm:w-[10px] md:w-[13px] w-[20px]"
                    alt="folder"
                  />
                  <Img
                    src="images/img_calendar.svg"
                    className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:mt-[18px] md:mt-[23px] mt-[34px] sm:w-[10px] md:w-[13px] w-[20px]"
                    alt="calendar"
                  />
                  <Img
                    src="images/img_trash.svg"
                    className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:mt-[18px] md:mt-[23px] mt-[34px] sm:w-[10px] md:w-[13px] w-[20px]"
                    alt="trash"
                  />
                  <Img
                    src="images/img_mail_20X20.svg"
                    className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:mt-[18px] md:mt-[23px] mt-[34px] sm:w-[10px] md:w-[13px] w-[20px]"
                    alt="mail"
                  />
                  <Column className="bg-white_A700 flex flex-col sm:h-[14px] md:h-[18px] h-[26px] items-center justify-start sm:mt-[18px] md:mt-[23px] mt-[34px] px-[3px] w-[100%]">
                    <div className="bg-bluegray_400 sm:h-[11px] md:h-[14px] h-[20px] rounded-radius50 sm:w-[10px] md:w-[13px] w-[20px]"></div>
                  </Column>
                </Column>
              </Column>
            </div>
          </aside>
          <Line className="bg-indigo_51 md:h-[1007px] h-[1463px] sm:h-[780px] max-w-[1px] mx-[auto] sm:px-[15px] w-[100%]" />
          <Column className="flex flex-col items-center max-w-[1355px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]">
            <header className="bg-white_A700 w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] mx-[auto] my-[10px] sm:my-[5px] md:my-[6px] sm:px-[0] sm:w-[100%] w-[97%]">
                <Row className="header-row w-[auto] mt-[14px] mb-[11px] sm:mb-[5px] sm:mt-[7px] md:mb-[7px] md:mt-[9px]">
                  <Text
                    className="font-medium text-bluegray_800"
                    as="h6"
                    variant="h6"
                  >
                    Welcomback, Team!
                  </Text>
                  <div className="mobile-menu">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </Row>
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-medium sm:hidden p-[0] text-[12px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                  wrapClassName="flex md:ml-[209px] ml-[305px] sm:hidden sm:mx-[0] sm:w-[100%] w-[33%]"
                  name="SearchBox"
                  placeholder="Search..."
                  prefix={
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer ml-[3px] mr-[8px] sm:mr-[4px] sm:hidden md:mr-[5px] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#828fa2"
                        className="cursor-pointer ml-[10px] mr-[22px] sm:mr-[11px] sm:ml-[5px] sm:hidden md:mr-[15px] md:ml-[6px] my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                  shape="srcRoundedBorder4"
                  size="smSrc"
                  variant="srcOutlineBluegray200"
                ></Input>
                <Img
                  src="images/img_shoppingbag.svg"
                  className="sm:h-[13px] md:h-[17px] h-[24px] sm:hidden max-w-[100%] sm:ml-[112px] md:ml-[145px] ml-[211px] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="shoppingbag"
                />
                <Column
                  className="bg-cover bg-no-repeat flex flex-col sm:h-[13px] md:h-[17px] h-[24px] sm:hidden items-end sm:ml-[12px] md:ml-[16px] ml-[24px] pl-[1px] sm:w-[12px] md:w-[16px] w-[24px]"
                  style={{ backgroundImage: "url('images/img_group8450.svg')" }}
                >
                  <div className="bg-red_600 sm:h-[5px] md:h-[6px] h-[8px] mb-[14px] sm:mb-[7px] md:mb-[9px] outline outline-[2px] outline-white_A700 rounded-radius50 sm:w-[4px] md:w-[5px] w-[8px]"></div>
                </Column>
                <Text
                  className="font-normal sm:hidden sm:ml-[12px] md:ml-[16px] ml-[24px] not-italic text-gray_500 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  <span className="text-gray_500 text-[16px] font-inter">
                    Hello,
                  </span>
                  <span className="text-bluegray_900 text-[16px] font-inter">
                    {" "}
                  </span>
                  <span className="text-bluegray_900 text-[16px] font-inter font-medium">
                    Sam
                  </span>
                </Text>
                <Img
                  src="images/img_sherlocktoyfa.png"
                  className="sm:h-[22px] md:h-[28px] h-[40px] sm:hidden ml-[13px] sm:ml-[6px] md:ml-[8px] rounded-radius50 sm:w-[21px] md:w-[27px] w-[40px]"
                  alt="SherlockToyFa"
                />
              </Row>
            </header>
            <Row className="bg-gray_51 flex flex-row md:flex-wrap sm:flex-wrap font-poppins items-center justify-end pl-[12px] sm:pl-[6px] md:pl-[8px] py-[12px] sm:py-[6px] md:py-[8px] w-[100%]">
              <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[73%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                  <Text
                    className="text-bluegray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Overview
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[20%]">
                    <Button
                      className="flex items-center justify-center w-[25%]"
                      shape="icbRoundedBorder4"
                      size="xlIcn"
                      variant="icbFillWhiteA700"
                    >
                      <Img
                        src="images/img_download.svg"
                        className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                        alt="download"
                      />
                    </Button>
                    <SelectBox
                      className="font-medium sm:mx-[0] text-[14px] text-bluegray_800 sm:w-[100%] w-[70%]"
                      placeholderClassName="text-bluegray_800"
                      name="dropdown"
                      placeholder="Last week"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_20X20.svg"
                          className="w-[20px] h-[20px] mr-[16px] sm:mr-[8px] sm:h-[11px] sm:w-[10px] md:mr-[11px] md:h-[14px] md:w-[13px] max-w-[100%]"
                          alt="arrow_down"
                        />
                      }
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillWhiteA700"
                    ></SelectBox>
                  </Row>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center justify-between sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
                  <List
                    className="sm:gap-[10px] md:gap-[13px] gap-[20px] min-h-[auto] w-[21%]"
                    orientation="vertical"
                  >
                    <Column className="bg-white_A700 flex flex-col items-center justify-end my-[0] sm:p-[15px] md:p-[24px] p-[36px] rounded-radius4 shadow-bs w-[100%]">
                      <Img
                        src="images/img_signal.svg"
                        className="max-w-[100%] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:w-[100%] w-[59%]"
                        alt="signal"
                      />
                      <Column className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
                        <Text
                          className="font-normal not-italic text-bluegray_400 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Total Tasks
                        </Text>
                        <Text
                          className="font-bold mt-[13px] sm:mt-[6px] md:mt-[8px] text-bluegray_800 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          120
                        </Text>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 flex flex-col items-center justify-end my-[0] sm:p-[15px] md:p-[24px] p-[36px] rounded-radius4 shadow-bs w-[100%]">
                      <Img
                        src="images/img_signal_43X73.svg"
                        className="max-w-[100%] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:w-[100%] w-[57%]"
                        alt="signal One"
                      />
                      <Column className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                        <Text
                          className="font-normal not-italic text-bluegray_400 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          New Tasks
                        </Text>
                        <Text
                          className="font-bold mt-[13px] sm:mt-[6px] md:mt-[8px] text-bluegray_800 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          60
                        </Text>
                      </Column>
                    </Column>
                  </List>
                  <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[22px] p-[32px] rounded-radius4 shadow-bs sm:w-[100%] w-[44%]">
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                        <Text
                          className="flex-grow font-bold text-bluegray_900"
                          as="h4"
                          variant="h4"
                        >
                          Statistics
                        </Text>
                        <Img
                          src="images/img_user_32X32.svg"
                          className="flex-shrink-0 sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] sm:w-[17px] md:w-[22px] w-[32px]"
                          alt="user One"
                        />
                      </Row>
                      <Column className="flex flex-col items-center justify-start sm:mt-[14px] md:mt-[19px] mt-[28px] sm:px-[0] w-[100%]">
                        <Img
                          src="images/img_frame_139X344.svg"
                          className="max-w-[100%] sm:w-[100%] w-[97%]"
                          alt="Frame"
                        />
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[11px] md:mt-[14px] mt-[21px] pb-[2px] px-[2px] w-[100%]">
                          <Text
                            className="font-normal my-[1px] not-italic text-bluegray_400 w-[auto]"
                            variant="body1"
                          >
                            Mon
                          </Text>
                          <Text
                            className="font-normal my-[1px] not-italic text-bluegray_400 w-[auto]"
                            variant="body1"
                          >
                            Tue
                          </Text>
                          <Text
                            className="font-normal my-[1px] not-italic text-bluegray_400 w-[auto]"
                            variant="body1"
                          >
                            Wed
                          </Text>
                          <Text
                            className="font-normal my-[1px] not-italic text-bluegray_400 w-[auto]"
                            variant="body1"
                          >
                            Thu
                          </Text>
                          <Text
                            className="font-normal mb-[2px] not-italic text-bluegray_400 w-[auto]"
                            variant="body1"
                          >
                            Fri
                          </Text>
                          <Text
                            className="font-normal my-[1px] not-italic text-bluegray_400 w-[auto]"
                            variant="body1"
                          >
                            Sat
                          </Text>
                          <Text
                            className="font-normal my-[1px] not-italic text-bluegray_400 w-[auto]"
                            variant="body1"
                          >
                            Sun
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                    <Row className="bg-gray_105 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[11px] md:mt-[15px] mt-[22px] md:p-[11px] sm:p-[15px] p-[16px] rounded-radius4 w-[100%]">
                      <Column className="flex flex-col md:ml-[5px] ml-[8px] sm:mx-[0] pr-[3px] sm:px-[0] py-[3px] sm:w-[100%] w-[70%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Data project report
                        </Text>
                        <Text
                          className="font-normal mb-[1px] mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-bluegray_900 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          • In process
                        </Text>
                      </Column>
                      <Column className="bg-indigo_52 flex flex-col sm:h-[35px] md:h-[45px] h-[64px] items-center sm:ml-[10px] md:ml-[13px] ml-[20px] px-[4px] rounded-radius50 sm:w-[34px] md:w-[44px] w-[64px]">
                        <div className="bg-indigo_400 sm:h-[30px] md:h-[39px] h-[56px] rounded-radius50 shadow-bs3 sm:w-[29px] md:w-[38px] w-[56px]"></div>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[22px] p-[32px] rounded-radius4 shadow-bs sm:w-[100%] w-[32%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                      <Text
                        className="flex-grow font-bold text-bluegray_900"
                        as="h4"
                        variant="h4"
                      >
                        Sales
                      </Text>
                      <Img
                        src="images/img_user_32X32.svg"
                        className="flex-shrink-0 sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] sm:w-[17px] md:w-[22px] w-[32px]"
                        alt="user Two"
                      />
                    </Row>
                    <Stack className="h-[190px] sm:mt-[17px] md:mt-[22px] mt-[32px] relative sm:w-[101px] md:w-[130px] w-[190px]">
                      <CircularProgressbar
                        className="absolute border-solid sm:h-[102px] md:h-[131px] h-[190px] overflow-visible w-[100%]"
                        value="28"
                        name="Group"
                        strokeWidth={1}
                        styles={{
                          trail: { strokeWidth: 1, stroke: "" },
                          path: {
                            strokeLinecap: "square",
                            height: "100%",
                            transformOrigin: "center",
                            transform: "rotate(225deg)",
                          },
                        }}
                      ></CircularProgressbar>
                      <Column className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[46%]">
                        <Text
                          className="font-normal not-italic text-bluegray_800 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Total
                        </Text>
                        <Text
                          className="mt-[13px] sm:mt-[6px] md:mt-[8px] text-bluegray_800 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          $2,000
                        </Text>
                      </Column>
                    </Stack>
                    <List
                      className="sm:gap-[10px] md:gap-[13px] gap-[20px] min-h-[auto] sm:mt-[19px] md:mt-[25px] mt-[37px] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                        <Radio
                          value="CurrentWeek"
                          className="font-normal not-italic text-[14px] text-bluegray_400"
                          inputClassName="h-[8px] mr-[5px] w-[8px]"
                          checked={false}
                          name="ProfileViewsTwo"
                          label="Current Week"
                          size="sm"
                          variant="FillRed600"
                        ></Radio>
                        <Text
                          className="font-medium text-bluegray_800 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          $1,200
                        </Text>
                        <Row className="bg-green_700_63 flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center sm:mx-[0] my-[1px] pr-[2px] py-[2px] rounded-radius4 sm:w-[100%] w-[21%]">
                          <Img
                            src="images/img_arrowup.svg"
                            className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mt-[1px] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="arrowup"
                          />
                          <Text
                            className="flex-grow font-normal mr-[1px] mt-[2px] not-italic text-green_700"
                            as="h6"
                            variant="h6"
                          >
                            0.2%
                          </Text>
                        </Row>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                        <Radio
                          value="LastWeek"
                          className="font-normal not-italic text-[14px] text-bluegray_400"
                          inputClassName="h-[8px] mr-[5px] w-[8px]"
                          checked={false}
                          name="ProfileViewsThree"
                          label="Last Week"
                          size="sm"
                          variant="FillGreen700"
                        ></Radio>
                        <Text
                          className="font-medium text-bluegray_800 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          $800
                        </Text>
                        <Row className="bg-green_700_63 flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center sm:mx-[0] my-[1px] pr-[2px] py-[2px] rounded-radius4 sm:w-[100%] w-[21%]">
                          <Img
                            src="images/img_arrowup.svg"
                            className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mt-[1px] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="arrowup One"
                          />
                          <Text
                            className="flex-grow font-normal mr-[1px] mt-[2px] not-italic text-green_700"
                            as="h6"
                            variant="h6"
                          >
                            0.2%
                          </Text>
                        </Row>
                      </Row>
                    </List>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center justify-between sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]">
                  <Stack className="h-[465px] relative sm:w-[100%] w-[55%]">
                    <Column className="absolute bottom-[22%] flex flex-col justify-start sm:mx-[0] pr-[4px] sm:px-[0] py-[4px] right-[30%] sm:w-[100%] w-[31%]">
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
                    <Column className="absolute bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[16px] p-[24px] rounded-radius4 shadow-bs w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Statistics
                        </Text>
                        <Button
                          className="flex items-center justify-center min-w-[37%] text-center w-[max-content]"
                          leftIcon={
                            <Img
                              src="images/img_calendar_20X20.svg"
                              className="mr-[10px] sm:mr-[5px] md:mr-[6px] text-center"
                              alt="calendar"
                            />
                          }
                          shape="RoundedBorder4"
                          size="md"
                          variant="OutlineBluegray200"
                        >
                          <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px]">
                            13 Aug - 20 Aug
                          </div>
                        </Button>
                      </Row>
                      <Column className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] sm:mx-[0] pb-[2px] sm:px-[0] sm:w-[100%] w-[99%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                          <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              Su
                            </Text>
                            <Text
                              className="font-normal sm:mt-[14px] md:mt-[19px] mt-[28px] not-italic text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              Sa
                            </Text>
                            <Text
                              className="flex font-normal items-center sm:mt-[14px] md:mt-[18px] mt-[27px] not-italic text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              Fr
                            </Text>
                            <Text
                              className="font-normal sm:mt-[14px] md:mt-[19px] mt-[28px] not-italic text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              Th
                            </Text>
                            <Text
                              className="font-normal sm:mt-[14px] md:mt-[19px] mt-[28px] not-italic text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              We
                            </Text>
                            <Text
                              className="font-normal sm:mt-[14px] md:mt-[18px] mt-[27px] not-italic text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              Tu
                            </Text>
                            <Text
                              className="font-normal sm:mt-[14px] md:mt-[19px] mt-[28px] not-italic text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              Mo
                            </Text>
                          </Column>
                          <Line className="bg-indigo_51 sm:h-[137px] md:h-[177px] h-[256px] w-[1px]" />
                          <Stack className="font-poppins h-[256px] sm:ml-[18px] md:ml-[23px] ml-[34px] relative sm:w-[100%] w-[81%]">
                            <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between left-[0] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                              <Stack className="h-[256px] relative sm:w-[100%] w-[75%]">
                                <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between left-[11%] sm:mx-[0] sm:px-[0] right-[14%] sm:w-[100%] w-[75%]">
                                  <Line className="bg-indigo_51 sm:h-[137px] md:h-[177px] h-[256px] w-[1px]" />
                                  <Line className="bg-indigo_51 sm:h-[137px] md:h-[177px] h-[256px] w-[1px]" />
                                  <Line className="bg-indigo_51 sm:h-[137px] md:h-[177px] h-[256px] w-[1px]" />
                                  <Line className="bg-indigo_51 sm:h-[137px] md:h-[177px] h-[256px] w-[1px]" />
                                </Row>
                                <Img
                                  src="images/img_frame_246X252.svg"
                                  className="absolute bottom-[1%] h-[246px] max-w-[100%] top-[3%] w-[100%]"
                                  alt="Frame One"
                                />
                              </Stack>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[19%]">
                                <Line className="bg-indigo_51 sm:h-[137px] md:h-[177px] h-[256px] w-[1px]" />
                                <Line className="bg-indigo_51 sm:h-[137px] md:h-[177px] h-[256px] w-[1px]" />
                              </Row>
                            </Row>
                            <Row
                              className="absolute bg-cover bg-no-repeat flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly sm:mx-[0] md:p-[10px] p-[15px] sm:p-[7px] right-[0] shadow-bs2 top-[11%] sm:w-[100%] w-[38%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group8984.svg')",
                              }}
                            >
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
                                <div className="bg-indigo_400 sm:h-[4px] md:h-[5px] h-[6px] sm:mb-[2px] md:mb-[3px] mb-[5px] mt-[1px] rounded-radius50 sm:w-[3px] md:w-[4px] w-[6px]"></div>
                                <Text
                                  className="font-semibold sm:ml-[4px] md:ml-[5px] ml-[8px] text-bluegray_900 w-[auto]"
                                  variant="body1"
                                >
                                  150.0
                                </Text>
                              </Row>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center mb-[1px] mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                                <div className="bg-amber_300 sm:h-[4px] md:h-[5px] h-[6px] sm:mb-[2px] md:mb-[3px] mb-[5px] mt-[1px] rounded-radius50 sm:w-[3px] md:w-[4px] w-[6px]"></div>
                                <Text
                                  className="font-semibold sm:ml-[4px] md:ml-[5px] ml-[8px] text-bluegray_900 w-[auto]"
                                  variant="body1"
                                >
                                  120.0
                                </Text>
                              </Row>
                            </Row>
                          </Stack>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[11px] md:mt-[14px] mt-[21px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            variant="body1"
                          >
                            -300
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            variant="body1"
                          >
                            -200
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            variant="body1"
                          >
                            -100
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            variant="body1"
                          >
                            0
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            variant="body1"
                          >
                            100
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            variant="body1"
                          >
                            200
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            variant="body1"
                          >
                            300
                          </Text>
                        </Row>
                      </Column>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center sm:mb-[4px] md:mb-[6px] mb-[9px] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] pt-[1px] sm:px-[0] sm:w-[100%] w-[32%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mb-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                          <div className="bg-amber_300 sm:h-[4px] md:h-[5px] h-[6px] my-[2px] rounded-radius50 sm:w-[3px] md:w-[4px] w-[6px]"></div>
                          <Text
                            className="font-medium sm:ml-[4px] md:ml-[5px] ml-[8px] text-bluegray_400 w-[auto]"
                            variant="body1"
                          >
                            Income
                          </Text>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[16px] ml-[24px] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                          <div className="bg-indigo_400 sm:h-[4px] md:h-[5px] h-[6px] sm:mb-[2px] md:mb-[3px] mb-[5px] mt-[1px] rounded-radius50 sm:w-[3px] md:w-[4px] w-[6px]"></div>
                          <Text
                            className="font-medium sm:ml-[4px] md:ml-[5px] ml-[8px] text-bluegray_400 w-[auto]"
                            variant="body1"
                          >
                            Expenses
                          </Text>
                        </Row>
                      </Row>
                    </Column>
                  </Stack>
                  <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[22px] p-[32px] rounded-radius4 shadow-bs sm:w-[100%] w-[44%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                      <Text
                        className="flex-grow font-bold text-bluegray_900"
                        as="h4"
                        variant="h4"
                      >
                        Total projects
                      </Text>
                      <Img
                        src="images/img_user_32X32.svg"
                        className="flex-shrink-0 sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] sm:w-[17px] md:w-[22px] w-[32px]"
                        alt="user Three"
                      />
                    </Row>
                    <List
                      className="sm:gap-[21px] md:gap-[27px] gap-[40px] min-h-[auto] sm:mt-[15px] md:mt-[19px] mt-[29px] w-[100%]"
                      orientation="vertical"
                    >
                      <Column className="flex flex-col justify-start sm:pb-[2px] md:pb-[3px] pb-[5px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Mobile app (4/12)
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between mt-[13px] sm:mt-[6px] md:mt-[8px] rounded-radius8 w-[100%]">
                          <div
                            className="sm:h-[5px] md:h-[6px] h-[8px] mb-[1px] sm:mt-[3px] md:mt-[4px] mt-[6px] overflow-hidden relative sm:w-[100%] w-[84%]"
                            name="Group One"
                          >
                            <div className="w-full h-full absolute bg-gray_51 rounded-[4px]"></div>
                            <div
                              className="h-full absolute bg-indigo_400  rounded-[4px]"
                              style={{ width: "27%" }}
                            ></div>
                          </div>
                          <Text
                            className="font-normal not-italic text-bluegray_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            34%
                          </Text>
                        </Row>
                      </Column>
                      <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                      <Column className="flex flex-col justify-start sm:pb-[2px] md:pb-[3px] pb-[5px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Landing page (2/4)
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between mt-[13px] sm:mt-[6px] md:mt-[8px] rounded-radius8 w-[100%]">
                          <div
                            className="sm:h-[5px] md:h-[6px] h-[8px] mb-[1px] sm:mt-[3px] md:mt-[4px] mt-[6px] overflow-hidden relative sm:w-[100%] w-[84%]"
                            name="Group Two"
                          >
                            <div className="w-full h-full absolute bg-gray_51 rounded-[4px]"></div>
                            <div
                              className="h-full absolute bg-green_700  rounded-[4px]"
                              style={{ width: "62%" }}
                            ></div>
                          </div>
                          <Text
                            className="font-normal not-italic text-bluegray_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            50%
                          </Text>
                        </Row>
                      </Column>
                      <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                      <Column className="flex flex-col justify-start sm:pb-[2px] md:pb-[3px] pb-[5px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Branding (2/2)
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between mt-[13px] sm:mt-[6px] md:mt-[8px] rounded-radius8 w-[100%]">
                          <div
                            className="sm:h-[5px] md:h-[6px] h-[8px] mb-[1px] sm:mt-[3px] md:mt-[4px] mt-[6px] overflow-hidden relative sm:w-[100%] w-[87%]"
                            name="Group Three"
                          >
                            <div className="w-full h-full absolute bg-gray_51 rounded-[4px]"></div>
                            <div
                              className="h-full absolute bg-amber_300  rounded-[4px]"
                              style={{ width: "96%" }}
                            ></div>
                          </div>
                          <Text
                            className="font-normal not-italic text-bluegray_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            100%
                          </Text>
                        </Row>
                      </Column>
                      <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                      <Column className="flex flex-col justify-start sm:pb-[2px] md:pb-[3px] pb-[5px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Branding (2/8)
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between mt-[13px] sm:mt-[6px] md:mt-[8px] rounded-radius8 w-[100%]">
                          <div
                            className="sm:h-[5px] md:h-[6px] h-[8px] mb-[1px] sm:mt-[3px] md:mt-[4px] mt-[6px] overflow-hidden relative sm:w-[100%] w-[87%]"
                            name="Group Four"
                          >
                            <div className="w-full h-full absolute bg-gray_51 rounded-[4px]"></div>
                            <div
                              className="h-full absolute bg-red_600  rounded-[4px]"
                              style={{ width: "17%" }}
                            ></div>
                          </div>
                          <Text
                            className="font-normal not-italic text-bluegray_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            25%
                          </Text>
                        </Row>
                      </Column>
                    </List>
                  </Column>
                </Row>
                <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:p-[15px] md:p-[17px] p-[26px] rounded-radius4 shadow-bs w-[100%]">
                  <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Text
                        className="font-bold text-bluegray_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Transactions history
                      </Text>
                      <Button
                        className="flex items-center justify-center min-w-[19%] text-center w-[max-content]"
                        leftIcon={
                          <Img
                            src="images/img_calendar_20X20.svg"
                            className="mr-[10px] sm:mr-[5px] md:mr-[6px] text-center"
                            alt="calendar"
                          />
                        }
                        shape="RoundedBorder4"
                        size="md"
                        variant="OutlineBluegray200"
                      >
                        <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px]">
                          13 Aug - 20 Aug
                        </div>
                      </Button>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[13px] ml-[20px] sm:mt-[15px] md:mt-[19px] mt-[29px] sm:mx-[0] pr-[4px] pt-[4px] sm:px-[0] sm:w-[100%] w-[89%]">
                      <Text
                        className="font-normal not-italic text-bluegray_400 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        No.
                      </Text>
                      <Text
                        className="font-normal sm:ml-[26px] md:ml-[33px] ml-[49px] not-italic text-bluegray_400 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Customer
                      </Text>
                      <Text
                        className="font-normal ml-[104px] sm:ml-[55px] md:ml-[71px] not-italic text-bluegray_400 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Date
                      </Text>
                      <Text
                        className="font-normal ml-[112px] sm:ml-[59px] md:ml-[77px] not-italic text-bluegray_400 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Amount
                      </Text>
                      <Text
                        className="font-normal sm:ml-[38px] md:ml-[50px] ml-[73px] not-italic text-bluegray_400 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Order No.
                      </Text>
                      <Text
                        className="font-normal sm:ml-[31px] md:ml-[40px] ml-[59px] mt-[2px] not-italic text-bluegray_400 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Payment type
                      </Text>
                    </Row>
                    <List
                      className="gap-[0] min-h-[auto] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="bg-gray_51 flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[13px] sm:p-[15px] p-[20px] w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          1
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[46px] ml-[67px] sm:mx-[0] md:pr-[4px] pr-[6px] sm:px-[0] sm:w-[100%] w-[14%]">
                          <Img
                            src="images/img_robototoyfacefi.png"
                            className="sm:h-[13px] md:h-[17px] h-[24px] rounded-radius50 sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="RobotoToyFaceFi"
                          />
                          <Text
                            className="flex-grow font-medium ml-[12px] sm:ml-[6px] md:ml-[8px] text-bluegray_800"
                            as="h5"
                            variant="h5"
                          >
                            Ackerman
                          </Text>
                        </Row>
                        <Text
                          className="font-medium sm:ml-[30px] md:ml-[39px] ml-[58px] text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          12.02.2022
                        </Text>
                        <Text
                          className="font-medium sm:ml-[33px] md:ml-[42px] ml-[62px] text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          $20.0
                        </Text>
                        <Text
                          className="font-medium sm:ml-[46px] md:ml-[59px] ml-[87px] text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          #21033
                        </Text>
                        <Text
                          className="font-medium sm:ml-[39px] md:ml-[50px] ml-[74px] text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Visa Card
                        </Text>
                        <Img
                          src="images/img_user_32X32.svg"
                          className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] ml-[107px] sm:ml-[56px] md:ml-[73px] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="user Four"
                        />
                      </Row>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[13px] sm:p-[15px] p-[20px] w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          2
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[44px] ml-[65px] sm:mx-[0] pr-[2px] sm:px-[0] sm:w-[100%] w-[9%]">
                          <Img
                            src="images/img_fidenza978toy.png"
                            className="sm:h-[13px] md:h-[17px] h-[24px] rounded-radius50 sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="Fidenza978Toy"
                          />
                          <Text
                            className="flex-grow font-medium ml-[12px] sm:ml-[6px] md:ml-[8px] text-bluegray_800"
                            as="h5"
                            variant="h5"
                          >
                            Avori
                          </Text>
                        </Row>
                        <Text
                          className="font-medium ml-[101px] sm:ml-[53px] md:ml-[69px] text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          12.02.2022
                        </Text>
                        <Text
                          className="font-medium sm:ml-[33px] md:ml-[42px] ml-[62px] text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          $32.0
                        </Text>
                        <Text
                          className="font-medium sm:ml-[46px] md:ml-[59px] ml-[87px] text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          #21034
                        </Text>
                        <Text
                          className="font-medium sm:ml-[39px] md:ml-[50px] ml-[74px] text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Visa Card
                        </Text>
                        <Img
                          src="images/img_user_32X32.svg"
                          className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] ml-[107px] sm:ml-[56px] md:ml-[73px] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="user Five"
                        />
                      </Row>
                    </List>
                  </Column>
                  <Row className="bg-gray_51 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mb-[3px] md:mb-[4px] mb-[6px] sm:mx-[0] md:p-[13px] sm:p-[15px] p-[20px] sm:w-[100%] w-[99%]">
                    <Text
                      className="font-medium text-bluegray_800 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      3
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-center md:ml-[44px] ml-[64px] sm:mx-[0] md:pr-[4px] pr-[6px] sm:px-[0] sm:w-[100%] w-[13%]">
                      <Img
                        src="images/img_vangoghbyamrit.png"
                        className="sm:h-[13px] md:h-[17px] h-[24px] rounded-radius50 sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="VanGoghByAmrit"
                      />
                      <Text
                        className="flex-grow font-medium ml-[12px] sm:ml-[6px] md:ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-bluegray_800"
                        as="h5"
                        variant="h5"
                      >
                        Benjamin
                      </Text>
                    </Row>
                    <Text
                      className="font-medium sm:ml-[34px] md:ml-[44px] ml-[65px] text-bluegray_800 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      24.01.2022
                    </Text>
                    <Text
                      className="font-medium sm:ml-[33px] md:ml-[42px] ml-[62px] text-bluegray_800 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      $16.0
                    </Text>
                    <Text
                      className="font-medium sm:ml-[47px] md:ml-[61px] ml-[90px] text-bluegray_800 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      #21030
                    </Text>
                    <Text
                      className="font-medium sm:ml-[39px] md:ml-[50px] ml-[74px] text-bluegray_800 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      MasterCard
                    </Text>
                    <Img
                      src="images/img_user_32X32.svg"
                      className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[47px] md:ml-[61px] ml-[90px] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="user Six"
                    />
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col font-inter items-center md:ml-[13px] ml-[20px] sm:mx-[0] sm:p-[15px] md:p-[22px] p-[32px] rounded-radius4 shadow-bs sm:w-[100%] w-[26%]">
                <Column className="flex flex-col items-center justify-start mt-[11px] sm:mt-[5px] md:mt-[7px] sm:px-[0] w-[100%]">
                  <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                      <Button
                        className="flex sm:h-[22px] md:h-[28px] h-[40px] items-center justify-center rounded-radius50 sm:w-[21px] md:w-[27px] w-[40px]"
                        size="xlIcn"
                        variant="icbFillGray51"
                      >
                        <Img
                          src="images/img_buttonprimary.svg"
                          className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                          alt="ButtonPrimary"
                        />
                      </Button>
                      <Text
                        className="font-normal mt-[14px] sm:mt-[7px] md:mt-[9px] not-italic text-bluegray_800 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        <span className="text-bluegray_800 text-[14px] font-inter">
                          Febuary{" "}
                        </span>
                        <span className="text-bluegray_400 text-[14px] font-inter">
                          2022
                        </span>
                      </Text>
                      <Button
                        className="flex sm:h-[22px] md:h-[28px] h-[40px] items-center justify-center rounded-radius50 sm:w-[21px] md:w-[27px] w-[40px]"
                        size="xlIcn"
                        variant="icbFillGray51"
                      >
                        <Img
                          src="images/img_play.svg"
                          className="flex items-center justify-center"
                          alt="play"
                        />
                      </Button>
                    </Row>
                    <div className="sm:mt-[12px] md:mt-[15px] mt-[23px] w-[100%]"></div>
                  </Column>
                  <Column className="flex flex-col font-poppins items-center justify-start sm:mt-[21px] md:mt-[28px] mt-[41px] w-[100%]">
                    <Line className="bg-indigo_51 h-[1px] w-[100%]" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[16px] md:mt-[21px] mt-[31px] w-[100%]">
                      <Text
                        className="flex-grow font-medium text-bluegray_900"
                        as="h4"
                        variant="h4"
                      >
                        Recent activities
                      </Text>
                      <Img
                        src="images/img_user_32X32.svg"
                        className="flex-shrink-0 sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] sm:w-[17px] md:w-[22px] w-[32px]"
                        alt="user Seven"
                      />
                    </Row>
                    <Column className="flex flex-col font-inter justify-start sm:mt-[19px] md:mt-[25px] mt-[37px] w-[100%]">
                      <Text
                        className="font-medium text-bluegray_400 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Feb 24, 2022
                      </Text>
                      <List
                        className="min-h-[auto] sm:mt-[13px] md:mt-[17px] mt-[26px] pr-[10px] sm:pr-[5px] md:pr-[6px] w-[100%]"
                        orientation="vertical"
                      >
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                          <Img
                            src="images/img_robototoyfacefi.png"
                            className="sm:h-[25px] md:h-[32px] h-[46px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[46px]"
                            alt="RobotoToyFaceFi One"
                          />
                          <Column className="flex flex-col sm:mx-[0] pr-[4px] pt-[4px] sm:px-[0] sm:w-[100%] w-[77%]">
                            <Text
                              className="font-normal not-italic text-bluegray_900 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Ackerman
                            </Text>
                            <Text
                              className="font-medium leading-[24.00px] md:leading-[normal] sm:leading-[normal] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] text-bluegray_900 sm:w-[100%] w-[95%]"
                              as="h5"
                              variant="h5"
                            >
                              <span className="text-bluegray_900 text-[16px] font-inter">
                                Changelog Revamp{" "}
                              </span>
                              <span className="text-red_600 text-[16px] font-inter">
                                #ver 1.0
                              </span>
                              <span className="text-bluegray_900 text-[16px] font-inter">
                                {" "}
                                Homescreen{" "}
                              </span>
                            </Text>
                            <Text
                              className="font-normal md:mt-[10px] mt-[15px] sm:mt-[7px] not-italic text-bluegray_400 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              2min ago
                            </Text>
                          </Column>
                        </Row>
                        <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[0] w-[100%]">
                          <Img
                            src="images/img_punktoyface1.png"
                            className="sm:h-[25px] md:h-[32px] h-[46px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[46px]"
                            alt="PunkToyFaceOne"
                          />
                          <Column className="flex flex-col md:ml-[11px] ml-[16px] sm:mx-[0] pr-[4px] pt-[4px] sm:px-[0] sm:w-[100%] w-[77%]">
                            <Text
                              className="font-normal not-italic text-bluegray_800 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Blanker
                            </Text>
                            <Text
                              className="font-medium leading-[24.00px] md:leading-[normal] sm:leading-[normal] mt-[13px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] text-bluegray_900 sm:w-[100%] w-[98%]"
                              as="h5"
                              variant="h5"
                            >
                              Create user flow for Data Projects
                            </Text>
                            <Text
                              className="font-normal sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-bluegray_400 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              2min ago
                            </Text>
                          </Column>
                        </Row>
                        <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                          <Img
                            src="images/img_vangoghbyamrit.png"
                            className="sm:h-[25px] md:h-[32px] h-[46px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[46px]"
                            alt="VanGoghByAmrit One"
                          />
                          <Column className="flex flex-col md:ml-[11px] ml-[16px] sm:mx-[0] pr-[3px] pt-[3px] sm:px-[0] sm:w-[100%] w-[76%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Lee Ri
                            </Text>
                            <Text
                              className="font-medium mt-[14px] sm:mt-[7px] md:mt-[9px] text-bluegray_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Revision design system
                            </Text>
                            <Text
                              className="font-normal sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-bluegray_400 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              2min ago
                            </Text>
                          </Column>
                        </Row>
                        <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[0] w-[100%]">
                          <Img
                            src="images/img_rarepepenakam.png"
                            className="sm:h-[25px] md:h-[32px] h-[46px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[46px]"
                            alt="RarePepeNakam"
                          />
                          <Column className="flex flex-col md:ml-[11px] ml-[16px] sm:mx-[0] pr-[4px] pt-[4px] sm:px-[0] sm:w-[100%] w-[77%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Jackson
                            </Text>
                            <Text
                              className="font-medium mt-[14px] sm:mt-[7px] md:mt-[9px] text-bluegray_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Changelog Scan ID Card
                            </Text>
                            <Text
                              className="font-normal sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-bluegray_400 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              2min ago
                            </Text>
                          </Column>
                        </Row>
                        <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                          <Img
                            src="images/img_tintin22.png"
                            className="sm:h-[25px] md:h-[32px] h-[46px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[46px]"
                            alt="TinTinTwentyTwo"
                          />
                          <Column className="flex flex-col md:ml-[11px] ml-[16px] sm:mx-[0] pr-[4px] pt-[4px] sm:px-[0] sm:w-[100%] w-[72%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Yomaha
                            </Text>
                            <Text
                              className="font-medium mt-[13px] sm:mt-[6px] md:mt-[8px] text-bluegray_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Pitching with client
                            </Text>
                            <Text
                              className="font-normal sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-bluegray_400 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              2min ago
                            </Text>
                          </Column>
                        </Row>
                      </List>
                    </Column>
                  </Column>
                </Column>
                <Column className="flex flex-col sm:h-[145px] md:h-[188px] h-[272px] justify-start sm:mt-[19px] md:mt-[25px] mt-[37px] sm:w-[144px] md:w-[187px] w-[272px]">
                  <Text
                    className="font-medium text-bluegray_400 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Feb 23, 2022
                  </Text>
                  <List
                    className="min-h-[auto] sm:mt-[13px] md:mt-[17px] mt-[26px] pr-[10px] sm:pr-[5px] md:pr-[6px] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_robototoyfacefi.png"
                        className="sm:h-[25px] md:h-[32px] h-[46px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[46px]"
                        alt="RobotoToyFaceFi Two"
                      />
                      <Column className="flex flex-col sm:mx-[0] pr-[4px] pt-[4px] sm:px-[0] sm:w-[100%] w-[77%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Ackerman
                        </Text>
                        <Text
                          className="font-medium leading-[24.00px] md:leading-[normal] sm:leading-[normal] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] text-bluegray_900 sm:w-[100%] w-[95%]"
                          as="h5"
                          variant="h5"
                        >
                          <span className="text-bluegray_900 text-[16px] font-inter">
                            Changelog Revamp{" "}
                          </span>
                          <span className="text-red_600 text-[16px] font-inter">
                            #ver 1.0
                          </span>
                          <span className="text-bluegray_900 text-[16px] font-inter">
                            {" "}
                            Homescreen{" "}
                          </span>
                        </Text>
                        <Text
                          className="font-normal md:mt-[10px] mt-[15px] sm:mt-[7px] not-italic text-bluegray_400 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          2min ago
                        </Text>
                      </Column>
                    </Row>
                    <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_punktoyface1.png"
                        className="sm:h-[25px] md:h-[32px] h-[46px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[46px]"
                        alt="PunkToyFaceOne One"
                      />
                      <Column className="flex flex-col md:ml-[11px] ml-[16px] sm:mx-[0] pr-[4px] pt-[4px] sm:px-[0] sm:w-[100%] w-[77%]">
                        <Text
                          className="font-normal not-italic text-bluegray_800 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Blanker
                        </Text>
                        <Text
                          className="font-medium leading-[24.00px] md:leading-[normal] sm:leading-[normal] mt-[13px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] text-bluegray_900 sm:w-[100%] w-[98%]"
                          as="h5"
                          variant="h5"
                        >
                          Create user flow for Data Projects
                        </Text>
                        <Text
                          className="font-normal sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-bluegray_400 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          2min ago
                        </Text>
                      </Column>
                    </Row>
                  </List>
                </Column>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default DashboardThreePage;
