import React from "react";

import { Column, Row, Line, Text, Img, Button, Stack } from "components";
import Sidebar1 from "components/Sidebar/Sidebar1";
import Header from "components/Header/Header";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";

const TracktasksPage = () => {
  return (
    <>
      <Column className="flex flex-col font-poppins items-center justify-start mx-[auto] w-[100%]">
        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
          <Sidebar1 className="w-[17%]" />
          <Line className="bg-indigo_51 sm:h-[507px] md:h-[654px] h-[950px] max-w-[1px] mx-[auto] sm:px-[15px] w-[100%]" />
          <Column className="flex flex-col font-inter items-center max-w-[1198px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Column className="bg-gray_51 flex flex-col font-poppins items-center justify-center md:p-[13px] sm:p-[15px] p-[19px] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:mt-[12px] mt-[18px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                <Text
                  className="mt-[2px] text-bluegray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Product design
                </Text>
                <Text
                  className="font-normal not-italic text-bluegray_400 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  <span className="text-bluegray_400 text-[16px] font-poppins">
                    File management/
                  </span>
                  <span className="text-bluegray_800 text-[16px] font-poppins">
                    {" "}
                    Product design
                  </span>
                </Text>
              </Row>
              <Accordion
                preExpanded={[0]}
                className="font-inter sm:mb-[52px] md:mb-[68px] mb-[99px] sm:mt-[18px] md:mt-[24px] mt-[35px] w-[100%]"
              >
                {" "}
                {[...Array(3)].map((item, index) => (
                  <AccordionItem uuid={index} key={Math.random()}>
                    <Column className="bg-white_A700 flex flex-col items-center justify-start sm:py-[15px] md:py-[16px] py-[24px] rounded-radius4 shadow-bs w-[100%]">
                      <AccordionItemHeading className="w-full">
                        <AccordionItemButton>
                          <AccordionItemState>
                            {({ expanded }) => (
                              <Column className="flex flex-col items-center justify-between w-[100%]">
                                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                                  <Img
                                    src="images/img_arrowup_24X24.svg"
                                    className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                                    alt="arrowup"
                                  />
                                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-poppins items-start justify-center md:ml-[11px] ml-[16px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
                                    {expanded && (
                                      <Img
                                        src="images/img_television.svg"
                                        className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                                        alt="television"
                                      />
                                    )}
                                    <Text
                                      className="font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[3px] not-italic text-bluegray_900 w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      In process (10)
                                    </Text>
                                    {!expanded && (
                                      <Img
                                        src="images/img_television.svg"
                                        className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                                        alt="television One"
                                      />
                                    )}
                                  </Row>
                                  <Button
                                    className="cursor-pointer font-normal min-w-[10%] sm:ml-[424px] md:ml-[548px] ml-[797px] not-italic text-[14px] text-center w-[max-content]"
                                    shape="CircleBorder20"
                                    size="md"
                                    variant="FillGray51"
                                  >
                                    Edit{" "}
                                  </Button>
                                </Row>
                                <Line className="bg-indigo_51 h-[1px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]" />
                              </Column>
                            )}
                          </AccordionItemState>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel className="w-full">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-poppins items-center sm:mb-[4px] md:mb-[5px] mb-[8px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                          <Column className="border-2 border-indigo_51 border-solid flex flex-col items-center sm:mx-[0] md:p-[37px] p-[55px] sm:px-[15px] sm:py-[29px] rounded-radius4 sm:w-[100%] w-[24%]">
                            <Button
                              className="flex sm:h-[30px] md:h-[39px] h-[56px] items-center justify-center md:mt-[11px] mt-[17px] sm:mt-[9px] rounded-radius50 sm:w-[29px] md:w-[38px] w-[56px]"
                              size="2xlIcn"
                              variant="icbFillRed55"
                            >
                              <Img
                                src="images/img_plus_24X24.svg"
                                className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                                alt="plus"
                              />
                            </Button>
                            <Column className="flex flex-col items-center justify-start md:mb-[11px] mb-[17px] sm:mb-[9px] sm:mt-[21px] md:mt-[27px] mt-[40px] pt-[3px] sm:px-[0] px-[3px] w-[100%]">
                              <Text
                                className="font-bold text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Add file
                              </Text>
                              <Text
                                className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[17px] sm:mt-[9px] sm:mx-[0] not-italic text-bluegray_800 text-center sm:w-[100%] w-[95%]"
                                as="h6"
                                variant="h6"
                              >
                                Add file to manage your vital task
                              </Text>
                            </Column>
                          </Column>
                          <Column className="bg-white_A700 flex flex-col md:ml-[13px] ml-[20px] sm:mx-[0] sm:p-[15px] md:p-[21px] p-[31px] rounded-radius4 shadow-bs sm:w-[100%] w-[24%]">
                            <Column className="flex flex-col items-center justify-start ml-[1px] sm:mt-[3px] md:mt-[4px] mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                              <Text
                                className="font-bold text-bluegray_900 w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                LD presentation file
                              </Text>
                              <Text
                                className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] not-italic text-bluegray_800 sm:w-[100%] w-[92%]"
                                as="h6"
                                variant="h6"
                              >
                                Introduction about LD
                                <br />
                                Project in detail
                              </Text>
                            </Column>
                            <Column className="flex flex-col justify-start sm:mt-[14px] md:mt-[18px] mt-[27px] sm:px-[0] w-[100%]">
                              <Text
                                className="font-normal not-italic text-bluegray_900 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Process (80%)
                              </Text>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[14px] md:mt-[18px] mt-[27px] w-[100%]">
                                <Line className="bg-indigo_400 h-[5px] w-[18%]" />
                                <Line className="bg-indigo_400 h-[5px] w-[18%]" />
                                <Line className="bg-indigo_400 h-[5px] w-[18%]" />
                                <Line className="bg-indigo_400 h-[5px] w-[18%]" />
                                <Line className="bg-indigo_51 h-[5px] w-[18%]" />
                              </Row>
                            </Column>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end mb-[1px] ml-[1px] sm:mt-[14px] md:mt-[19px] mt-[28px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_900 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Members
                                </Text>
                                <Stack className="h-[32px] sm:mt-[10px] md:mt-[13px] mt-[19px] relative rounded-radius16 w-[30%]">
                                  <Img
                                    src="images/img_robototoyfacefi.png"
                                    className="absolute sm:h-[18px] md:h-[23px] h-[32px] left-[0] rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
                                    alt="RobotoToyFaceFi"
                                  />
                                  <Img
                                    src="images/img_fidenza978toy.png"
                                    className="absolute sm:h-[18px] md:h-[23px] h-[32px] right-[0] rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
                                    alt="Fidenza978Toy"
                                  />
                                </Stack>
                              </Column>
                              <Button
                                className="flex sm:h-[18px] md:h-[23px] h-[32px] items-center justify-center sm:mt-[18px] md:mt-[24px] mt-[35px] rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
                                size="mdIcn"
                                variant="icbFillGray51"
                              >
                                <Img
                                  src="images/img_overflowmenu.svg"
                                  className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                                  alt="overflowmenu"
                                />
                              </Button>
                            </Row>
                          </Column>
                          <Column className="bg-white_A700 flex flex-col md:ml-[13px] ml-[20px] sm:mx-[0] sm:p-[15px] md:p-[21px] p-[31px] rounded-radius4 shadow-bs sm:w-[100%] w-[24%]">
                            <Column className="flex flex-col justify-start ml-[1px] mt-[1px] sm:mx-[0] md:pr-[4px] pr-[6px] sm:pt-[3px] md:pt-[4px] pt-[6px] sm:px-[0] sm:w-[100%] w-[92%]">
                              <Text
                                className="font-bold text-bluegray_900 w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Urgent Tasks
                              </Text>
                              <Text
                                className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] md:ml-[5px] ml-[8px] mr-[1px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] not-italic text-bluegray_800 sm:w-[100%] w-[95%]"
                                as="h6"
                                variant="h6"
                              >
                                Introduction about LD
                                <br />
                                Project in detail
                              </Text>
                            </Column>
                            <Column className="flex flex-col justify-start sm:mt-[14px] md:mt-[18px] mt-[27px] sm:px-[0] w-[100%]">
                              <Text
                                className="font-normal not-italic text-bluegray_900 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Process (10%)
                              </Text>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[14px] md:mt-[18px] mt-[27px] w-[100%]">
                                <Line className="bg-indigo_400 h-[5px] w-[18%]" />
                                <Line className="bg-indigo_51 h-[5px] w-[18%]" />
                                <Line className="bg-indigo_51 h-[5px] w-[18%]" />
                                <Line className="bg-indigo_51 h-[5px] w-[18%]" />
                                <Line className="bg-indigo_51 h-[5px] w-[18%]" />
                              </Row>
                            </Column>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end mb-[1px] ml-[1px] sm:mt-[14px] md:mt-[19px] mt-[28px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_900 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Members
                                </Text>
                                <Stack className="h-[32px] sm:mt-[10px] md:mt-[13px] mt-[19px] relative rounded-radius16 w-[30%]">
                                  <Img
                                    src="images/img_robototoyfacefi.png"
                                    className="absolute sm:h-[18px] md:h-[23px] h-[32px] left-[0] rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
                                    alt="RobotoToyFaceFi One"
                                  />
                                  <Img
                                    src="images/img_fidenza978toy.png"
                                    className="absolute sm:h-[18px] md:h-[23px] h-[32px] right-[0] rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
                                    alt="Fidenza978Toy One"
                                  />
                                </Stack>
                              </Column>
                              <Button
                                className="flex sm:h-[18px] md:h-[23px] h-[32px] items-center justify-center sm:mt-[18px] md:mt-[24px] mt-[35px] rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
                                size="mdIcn"
                                variant="icbFillGray51"
                              >
                                <Img
                                  src="images/img_overflowmenu.svg"
                                  className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                                  alt="overflowmenu One"
                                />
                              </Button>
                            </Row>
                          </Column>
                          <Column className="bg-white_A700 flex flex-col md:ml-[13px] ml-[20px] sm:mx-[0] sm:p-[15px] md:p-[21px] p-[31px] rounded-radius4 shadow-bs sm:w-[100%] w-[24%]">
                            <Column className="flex flex-col justify-start ml-[1px] mt-[1px] sm:mx-[0] pr-[4px] pt-[4px] sm:px-[0] sm:w-[100%] w-[92%]">
                              <Text
                                className="font-bold text-bluegray_900 w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Plan for 2022
                              </Text>
                              <Text
                                className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] md:ml-[5px] ml-[8px] mr-[3px] sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] not-italic text-bluegray_800 sm:w-[100%] w-[94%]"
                                as="h6"
                                variant="h6"
                              >
                                Introduction about LD
                                <br />
                                Project in detail
                              </Text>
                            </Column>
                            <Column className="flex flex-col justify-start sm:mt-[14px] md:mt-[18px] mt-[27px] sm:px-[0] w-[100%]">
                              <Text
                                className="font-normal not-italic text-bluegray_900 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Process (0%)
                              </Text>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[14px] md:mt-[18px] mt-[27px] w-[100%]">
                                <Line className="bg-indigo_51 h-[5px] w-[18%]" />
                                <Line className="bg-indigo_51 h-[5px] w-[18%]" />
                                <Line className="bg-indigo_51 h-[5px] w-[18%]" />
                                <Line className="bg-indigo_51 h-[5px] w-[18%]" />
                                <Line className="bg-indigo_51 h-[5px] w-[18%]" />
                              </Row>
                            </Column>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end mb-[1px] ml-[1px] sm:mt-[14px] md:mt-[19px] mt-[28px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_900 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Members
                                </Text>
                                <Img
                                  src="images/img_tintin22.png"
                                  className="sm:h-[18px] md:h-[23px] h-[32px] sm:mt-[10px] md:mt-[13px] mt-[19px] rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
                                  alt="TinTinTwentyTwo"
                                />
                              </Column>
                              <Button
                                className="flex sm:h-[18px] md:h-[23px] h-[32px] items-center justify-center sm:mt-[18px] md:mt-[24px] mt-[35px] rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
                                size="mdIcn"
                                variant="icbFillGray51"
                              >
                                <Img
                                  src="images/img_overflowmenu.svg"
                                  className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                                  alt="overflowmenu Two"
                                />
                              </Button>
                            </Row>
                          </Column>
                        </Row>
                      </AccordionItemPanel>
                    </Column>
                  </AccordionItem>
                ))}
              </Accordion>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default TracktasksPage;
