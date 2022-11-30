import React from "react";

import {
  Column,
  Row,
  Line,
  Text,
  Button,
  Img,
  RadioGroup,
  Radio,
  List,
  Stack,
} from "components";
import Sidebar from "components/Sidebar/Sidebar";
import Header from "components/Header/Header";

const CalenderDayNoeventPage = () => {
  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
          <Sidebar className="w-[17%]" />
          <Line className="bg-indigo_51 sm:h-[506px] md:h-[654px] h-[950px] max-w-[1px] mx-[auto] sm:px-[15px] w-[100%]" />
          <Column className="flex flex-col items-center max-w-[1198px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Column className="bg-gray_51 flex flex-col font-poppins justify-end md:p-[15px] sm:p-[15px] p-[23px] w-[100%]">
              <Text
                className="mt-[14px] sm:mt-[7px] md:mt-[9px] text-bluegray_900 w-[auto]"
                as="h3"
                variant="h3"
              >
                Calendar
              </Text>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center justify-between mb-[1px] sm:mt-[20px] md:mt-[26px] mt-[38px] sm:px-[0] w-[100%]">
                <Column className="bg-white_A700 flex flex-col sm:mx-[0] sm:p-[15px] md:p-[22px] p-[32px] rounded-radius4 shadow-bs sm:w-[100%] w-[24%]">
                  <Column className="flex flex-col justify-start mt-[3px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] not-italic text-bluegray_400 sm:w-[100%] w-[94%]"
                      as="h6"
                      variant="h6"
                    >
                      Click in the calendar to create event
                    </Text>
                    <Button
                      className="flex items-center justify-center md:mt-[21px] mt-[31px] sm:mt-[16px] text-center w-[100%]"
                      rightIcon={
                        <Img
                          src="images/img_plus.svg"
                          className="ml-[3px] text-center"
                          alt="plus"
                        />
                      }
                      shape="CircleBorder24"
                      size="lg"
                      variant="FillDeeporange300"
                    >
                      <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px]">
                        Create new event
                      </div>
                    </Button>
                  </Column>
                  <RadioGroup
                    className="sm:mt-[17px] md:mt-[22px] mt-[32px] sm:w-[100%] w-[62%]"
                    name="radiogroupprofileviews one"
                  >
                    <Radio
                      value="NewEvent"
                      className="font-medium sm:mr-[15px] md:mr-[20px] mr-[30px] mt-[2px] sm:pl-[4px] md:pl-[5px] pl-[8px] text-[16px] text-bluegray_800"
                      inputClassName="h-[8px] mr-[5px] w-[8px]"
                      checked={false}
                      name="radiogroupprofileviews one"
                      label="New Event"
                      variant="FillGreen700_1"
                    ></Radio>
                    <Radio
                      value="MyEventOnly"
                      className="font-medium sm:mt-[13px] md:mt-[17px] mt-[25px] text-[16px] text-bluegray_800 w-[100%]"
                      inputClassName="h-[8px] mr-[5px] w-[8px]"
                      checked={false}
                      name="radiogroupprofileviews one"
                      label="My Event Only"
                      size="sm"
                      variant="FillIndigo400"
                    ></Radio>
                    <Radio
                      value="Meeting"
                      className="font-medium sm:mr-[25px] md:mr-[32px] mr-[47px] sm:mt-[10px] md:mt-[13px] mt-[20px] text-[16px] text-bluegray_800"
                      inputClassName="h-[8px] mr-[5px] w-[8px]"
                      checked={false}
                      name="radiogroupprofileviews one"
                      label="Meeting"
                      size="sm"
                      variant="FillAmber300"
                    ></Radio>
                    <Radio
                      value="Error"
                      className="font-medium sm:mb-[2px] md:mb-[3px] mb-[5px] sm:mr-[39px] md:mr-[51px] mr-[75px] sm:mt-[11px] md:mt-[15px] mt-[22px] sm:pl-[4px] md:pl-[5px] pl-[8px] text-[16px] text-bluegray_800"
                      inputClassName="h-[8px] mr-[5px] w-[8px]"
                      checked={false}
                      name="radiogroupprofileviews one"
                      label="Error"
                      variant="FillRed600_1"
                    ></Radio>
                  </RadioGroup>
                  <Line className="bg-indigo_51 h-[1px] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]" />
                  <Text
                    className="font-normal sm:mt-[17px] md:mt-[22px] mt-[33px] not-italic text-bluegray_400 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Team members
                  </Text>
                  <List
                    className="min-h-[auto] sm:mt-[20px] md:mt-[26px] mt-[38px] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                      <Text
                        className="flex font-bold items-center sm:mt-[2px] md:mt-[3px] mt-[5px] text-bluegray_800 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        🚗
                      </Text>
                      <Text
                        className="font-medium sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[2px] text-bluegray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        @Avo
                      </Text>
                      <Button
                        className="cursor-pointer font-medium min-w-[49%] sm:ml-[19px] md:ml-[25px] ml-[37px] text-[12px] text-center w-[max-content]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="FillGray105"
                      >
                        Lead design
                      </Button>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                      <Text
                        className="flex font-bold items-center sm:mt-[2px] md:mt-[3px] mt-[5px] text-bluegray_800 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        ⚽
                      </Text>
                      <Text
                        className="font-medium mt-[2px] text-bluegray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        @Nhun
                      </Text>
                      <Button
                        className="cursor-pointer font-medium min-w-[49%] text-[12px] text-center w-[max-content]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="FillGray105"
                      >
                        Product design
                      </Button>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                      <Text
                        className="flex font-bold items-center sm:mt-[2px] md:mt-[3px] mt-[5px] text-bluegray_800 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        👑
                      </Text>
                      <Text
                        className="font-medium sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[2px] text-bluegray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        @Riri
                      </Text>
                      <Button
                        className="cursor-pointer font-medium min-w-[49%] sm:ml-[22px] md:ml-[28px] ml-[42px] text-[12px] text-center w-[max-content]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="FillGray105"
                      >
                        Product design
                      </Button>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                      <Text
                        className="flex font-bold items-center sm:mt-[2px] md:mt-[3px] mt-[5px] text-bluegray_800 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        ✈
                      </Text>
                      <Text
                        className="font-medium sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[2px] text-bluegray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        @Juki
                      </Text>
                      <Button
                        className="cursor-pointer font-medium min-w-[49%] sm:ml-[18px] md:ml-[24px] ml-[35px] text-[12px] text-center w-[max-content]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="FillGray105"
                      >
                        Product design
                      </Button>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                      <Text
                        className="flex font-bold items-center sm:mt-[2px] md:mt-[3px] mt-[5px] text-bluegray_800 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        💣
                      </Text>
                      <Text
                        className="font-medium sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[2px] text-bluegray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        @Nobi
                      </Text>
                      <Button
                        className="cursor-pointer font-medium min-w-[49%] sm:ml-[15px] md:ml-[20px] ml-[30px] text-[12px] text-center w-[max-content]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="FillGray105"
                      >
                        Product design
                      </Button>
                    </Row>
                  </List>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mb-[4px] md:mb-[5px] mb-[8px] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
                    <Img
                      src="images/img_plus_24X24.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="plus One"
                    />
                    <Text
                      className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[2px] not-italic text-deep_orange_300"
                      as="h5"
                      variant="h5"
                    >
                      Add member
                    </Text>
                  </Row>
                </Column>
                <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[17px] p-[26px] rounded-radius4 shadow-bs sm:w-[100%] w-[75%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                      <Text
                        className="mb-[4px] mt-[11px] sm:mt-[5px] md:mt-[7px] text-bluegray_900 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        <span className="text-bluegray_900 text-[24px] font-inter font-bold sm:text-[20px] md:text-[22px]">
                          24{" "}
                        </span>
                        <span className="text-bluegray_900 text-[24px] font-inter font-bold sm:text-[20px] md:text-[22px]">
                          January{" "}
                        </span>
                        <span className="text-indigo_400 text-[24px] font-inter font-bold sm:text-[20px] md:text-[22px]">
                          2022
                        </span>
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[30%]">
                        <Button
                          className="flex sm:h-[22px] md:h-[28px] h-[40px] items-center justify-center rounded-radius50 sm:w-[21px] md:w-[27px] w-[40px]"
                          size="lgIcn"
                          variant="icbFillGray51"
                        >
                          <Img
                            src="images/img_arrowdown_20X20.svg"
                            className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                            alt="arrowleft"
                          />
                        </Button>
                        <Button
                          className="flex sm:h-[22px] md:h-[28px] h-[40px] items-center justify-center rounded-radius50 sm:w-[21px] md:w-[27px] w-[40px]"
                          size="lgIcn"
                          variant="icbFillGray51"
                        >
                          <Img
                            src="images/img_arrowright_20X20.svg"
                            className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                            alt="arrowright"
                          />
                        </Button>
                      </Row>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[31%]">
                      <Button
                        className="cursor-pointer font-normal min-w-[32%] not-italic text-[14px] text-center w-[max-content]"
                        shape="CircleBorder20"
                        size="md"
                        variant="FillBluegray900"
                      >
                        Day
                      </Button>
                      <Button
                        className="cursor-pointer font-normal min-w-[32%] not-italic text-[14px] text-center w-[max-content]"
                        shape="CircleBorder20"
                        size="md"
                        variant="OutlineIndigo51"
                      >
                        Week
                      </Button>
                      <Button
                        className="cursor-pointer font-normal min-w-[32%] not-italic text-[14px] text-center w-[max-content]"
                        shape="CircleBorder20"
                        size="md"
                        variant="OutlineIndigo51"
                      >
                        Month
                      </Button>
                    </Row>
                  </Row>
                  <Stack className="h-[642px] sm:mb-[3px] md:mb-[4px] mb-[6px] sm:mt-[15px] md:mt-[20px] mt-[30px] relative sm:w-[100%] w-[99%]">
                    <Column className="absolute border border-indigo_51 border-solid bottom-[0] flex flex-col items-center justify-start p-[121px] md:p-[83px] sm:px-[15px] sm:py-[64px] w-[100%]">
                      <Img
                        src="images/img_19.svg"
                        className="max-w-[100%] w-[24%]"
                        alt="Nineteen"
                      />
                      <Text
                        className="font-normal md:mb-[110px] mb-[160px] sm:mb-[85px] sm:mt-[29px] md:mt-[38px] mt-[56px] not-italic text-bluegray_400 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        <span className="text-bluegray_400 text-[16px] font-inter">
                          No Event.{" "}
                        </span>
                        <span className="text-indigo_400 text-[16px] font-inter font-medium">
                          Create new
                        </span>
                      </Text>
                    </Column>
                    <Button
                      className="absolute cursor-pointer font-normal not-italic text-[16px] text-center top-[0] w-[100%]"
                      size="lg"
                      variant="OutlineIndigo51"
                    >
                      Friday
                    </Button>
                  </Stack>
                </Column>
              </Row>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default CalenderDayNoeventPage;
