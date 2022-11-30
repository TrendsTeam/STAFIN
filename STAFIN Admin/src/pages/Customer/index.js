import React from "react";

import {
  Column,
  Text,
  Stack,
  Row,
  Img,
  CheckBox,
  Slider,
  List,
  Button,
} from "components";
import Header1 from "components/Header/Header1";

const CustomerPage = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A700 flex flex-col items-center justify-start w-[100%]">
          <Column className="bg-white_A700 flex flex-col justify-start sm:pl-[15px] md:pl-[167px] pl-[243px] w-[100%]">
            <Header1 className="bg-white_A700 max-w-[1197px] mx-[auto] sm:px-[15px] w-[100%]" />
            <Column className="bg-gray_51 flex flex-col font-poppins justify-end max-w-[1197px] mx-[auto] md:p-[15px] sm:p-[15px] p-[23px] sm:px-[15px] w-[100%]">
              <Text
                className="md:mt-[10px] mt-[15px] sm:mt-[7px] text-bluegray_900 w-[auto]"
                as="h3"
                variant="h3"
              >
                Customer
              </Text>
              <Stack className="bg-white_A700 font-inter h-[810px] mb-[1px] sm:mt-[19px] md:mt-[25px] mt-[37px] sm:pr-[15px] md:pr-[22px] pr-[32px] relative rounded-radius4 shadow-bs w-[100%]">
                <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between left-[3%] sm:mx-[0] sm:px-[0] top-[4%] sm:w-[100%] w-[91%]">
                  <Text
                    className="flex-grow font-bold mb-[1px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-bluegray_900"
                    as="h4"
                    variant="h4"
                  >
                    Customer List
                  </Text>
                  <Img
                    src="images/img_search_24X24.svg"
                    className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                    alt="search"
                  />
                </Row>
                <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap inset-x-[0] items-center sm:mx-[0] mx-[auto] p-[1px] sm:px-[0] top-[12%] sm:w-[100%] w-[91%]">
                  <CheckBox
                    className="md:h-[12px] h-[16px] sm:h-[9px] my-[1px]"
                    inputClassName="mr-[5px]"
                    name="file"
                    label=""
                  ></CheckBox>
                  <Text
                    className="font-normal sm:ml-[29px] md:ml-[38px] ml-[56px] my-[2px] not-italic text-bluegray_400 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Customer
                  </Text>
                  <Text
                    className="font-normal ml-[104px] sm:ml-[55px] md:ml-[71px] my-[2px] not-italic text-bluegray_400 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Address
                  </Text>
                  <Text
                    className="font-normal sm:ml-[104px] md:ml-[135px] ml-[197px] my-[2px] not-italic text-bluegray_400 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Phone
                  </Text>
                  <Text
                    className="font-normal md:ml-[106px] ml-[155px] sm:ml-[82px] my-[2px] not-italic text-bluegray_400 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Order No.
                  </Text>
                  <Text
                    className="font-normal sm:ml-[42px] md:ml-[55px] ml-[80px] my-[2px] not-italic text-bluegray_400 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Status
                  </Text>
                </Row>
                <Slider
                  slidesToShow={3}
                  activeIndex={sliderState}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  activeSlideCSS="scale-[1.00] absolute"
                  ref={sliderRef}
                  className="absolute w-[100%]"
                  items={[...Array(9)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <List
                        className="min-h-[auto] w-[100%]"
                        orientation="vertical"
                      >
                        <Row className="bg-gray_51 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end my-[0] md:p-[11px] sm:p-[15px] p-[17px] w-[100%]">
                          <CheckBox
                            className="md:h-[12px] h-[16px] sm:h-[9px]"
                            inputClassName="mr-[5px]"
                            name="file One"
                            label=""
                          ></CheckBox>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[38px] ml-[56px] sm:mx-[0] pr-[3px] sm:px-[0] sm:w-[100%] w-[8%]">
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
                              Jack
                            </Text>
                          </Row>
                          <Text
                            className="font-medium ml-[103px] sm:ml-[54px] md:ml-[70px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            2371 Reppert Coal Road
                          </Text>
                          <Text
                            className="font-medium sm:ml-[39px] md:ml-[51px] ml-[75px] text-indigo_400 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            601-540-6298
                          </Text>
                          <Text
                            className="font-medium sm:ml-[47px] md:ml-[61px] ml-[89px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            #12931
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[9%] sm:ml-[52px] md:ml-[67px] ml-[98px] text-[14px] text-center w-[max-content]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[31px] md:ml-[40px] ml-[59px] mr-[3px] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="user"
                          />
                        </Row>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end my-[0] md:p-[11px] sm:p-[15px] p-[17px] w-[100%]">
                          <CheckBox
                            className="md:h-[12px] h-[16px] sm:h-[9px]"
                            inputClassName="mr-[5px]"
                            name="file Two"
                            label=""
                          ></CheckBox>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-center md:ml-[38px] ml-[56px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                            <Img
                              src="images/img_fidenza978toy.png"
                              className="sm:h-[13px] md:h-[17px] h-[24px] rounded-radius50 sm:w-[12px] md:w-[16px] w-[24px]"
                              alt="Fidenza978Toy"
                            />
                            <Text
                              className="flex-grow font-medium ml-[12px] sm:ml-[6px] md:ml-[8px] sm:mt-[3px] md:mt-[4px] mt-[6px] text-bluegray_800"
                              as="h5"
                              variant="h5"
                            >
                              Fort Myers
                            </Text>
                          </Row>
                          <Text
                            className="font-medium sm:ml-[31px] md:ml-[40px] ml-[59px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            927 Sunburst Drive
                          </Text>
                          <Text
                            className="font-medium ml-[112px] sm:ml-[59px] md:ml-[77px] text-indigo_400 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            239-346-5244
                          </Text>
                          <Text
                            className="font-medium sm:ml-[45px] md:ml-[59px] ml-[86px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            #12932
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[9%] sm:ml-[51px] md:ml-[66px] ml-[96px] text-[14px] text-center w-[max-content]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[31px] md:ml-[40px] ml-[59px] mr-[3px] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="user One"
                          />
                        </Row>
                        <Row className="bg-gray_51 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end my-[0] md:p-[11px] sm:p-[15px] p-[17px] w-[100%]">
                          <CheckBox
                            className="md:h-[12px] h-[16px] sm:h-[9px]"
                            inputClassName="mr-[5px]"
                            name="file Three"
                            label=""
                          ></CheckBox>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-center md:ml-[38px] ml-[56px] sm:mx-[0] md:pr-[4px] pr-[6px] sm:px-[0] sm:w-[100%] w-[11%]">
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
                            1671 Carriage Court
                          </Text>
                          <Text
                            className="font-medium ml-[107px] sm:ml-[56px] md:ml-[73px] text-indigo_400 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            760-390-1331
                          </Text>
                          <Text
                            className="font-medium sm:ml-[49px] md:ml-[63px] ml-[92px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            #12933
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[9%] sm:ml-[50px] md:ml-[65px] ml-[95px] text-[14px] text-center w-[max-content]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[31px] md:ml-[40px] ml-[59px] mr-[3px] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="user Two"
                          />
                        </Row>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end my-[0] md:p-[11px] sm:p-[15px] p-[17px] w-[100%]">
                          <CheckBox
                            className="md:h-[12px] h-[16px] sm:h-[9px]"
                            inputClassName="mr-[5px]"
                            name="file Four"
                            label=""
                          ></CheckBox>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-center md:ml-[38px] ml-[56px] sm:mx-[0] md:pr-[4px] pr-[7px] sm:px-[0] sm:w-[100%] w-[11%]">
                            <Img
                              src="images/img_fidenza978toy.png"
                              className="sm:h-[13px] md:h-[17px] h-[24px] rounded-radius50 sm:w-[12px] md:w-[16px] w-[24px]"
                              alt="Fidenza978Toy One"
                            />
                            <Text
                              className="flex-grow font-medium ml-[12px] sm:ml-[6px] md:ml-[8px] sm:mt-[3px] md:mt-[4px] mt-[6px] text-bluegray_800"
                              as="h5"
                              variant="h5"
                            >
                              Flanagan
                            </Text>
                          </Row>
                          <Text
                            className="font-medium sm:ml-[34px] md:ml-[44px] ml-[65px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            121 Courtright Street
                          </Text>
                          <Text
                            className="font-medium ml-[100px] sm:ml-[53px] md:ml-[68px] text-indigo_400 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            701-565-0439
                          </Text>
                          <Text
                            className="font-medium sm:ml-[47px] md:ml-[61px] ml-[89px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            #12934
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[9%] sm:ml-[50px] md:ml-[65px] ml-[95px] text-[14px] text-center w-[max-content]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillRed600"
                          >
                            Error
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[31px] md:ml-[40px] ml-[59px] mr-[3px] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="user Three"
                          />
                        </Row>
                        <Row className="bg-gray_51 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end my-[0] md:p-[11px] sm:p-[15px] p-[17px] w-[100%]">
                          <CheckBox
                            className="md:h-[12px] h-[16px] sm:h-[9px]"
                            inputClassName="mr-[5px]"
                            name="file Five"
                            label=""
                          ></CheckBox>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[38px] ml-[56px] sm:mx-[0] pr-[2px] sm:px-[0] w-[10%] sm:w-[100%]">
                            <Img
                              src="images/img_vangoghbyamrit.png"
                              className="sm:h-[13px] md:h-[17px] h-[24px] rounded-radius50 sm:w-[12px] md:w-[16px] w-[24px]"
                              alt="VanGoghByAmrit One"
                            />
                            <Text
                              className="flex-grow font-medium ml-[12px] sm:ml-[6px] md:ml-[8px] text-bluegray_800"
                              as="h5"
                              variant="h5"
                            >
                              Nicoletti
                            </Text>
                          </Row>
                          <Text
                            className="font-medium sm:ml-[40px] md:ml-[52px] ml-[76px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            1060 Stark Hollow Road
                          </Text>
                          <Text
                            className="font-medium sm:ml-[43px] md:ml-[56px] ml-[82px] text-indigo_400 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            {" "}
                            970-757-0036
                          </Text>
                          <Text
                            className="font-medium sm:ml-[45px] md:ml-[58px] ml-[85px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            #12935
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[9%] sm:ml-[51px] md:ml-[66px] ml-[96px] text-[14px] text-center w-[max-content]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[31px] md:ml-[40px] ml-[59px] mr-[3px] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="user Four"
                          />
                        </Row>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end my-[0] md:p-[11px] sm:p-[15px] p-[17px] w-[100%]">
                          <CheckBox
                            className="md:h-[12px] h-[16px] sm:h-[9px]"
                            inputClassName="mr-[5px]"
                            name="file Six"
                            label=""
                          ></CheckBox>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[38px] ml-[56px] sm:mx-[0] pr-[2px] sm:px-[0] sm:w-[100%] w-[9%]">
                            <Img
                              src="images/img_fidenza978toy.png"
                              className="sm:h-[13px] md:h-[17px] h-[24px] rounded-radius50 sm:w-[12px] md:w-[16px] w-[24px]"
                              alt="Fidenza978Toy Two"
                            />
                            <Text
                              className="flex-grow font-medium ml-[12px] sm:ml-[6px] md:ml-[8px] text-bluegray_800"
                              as="h5"
                              variant="h5"
                            >
                              Robert
                            </Text>
                          </Row>
                          <Text
                            className="font-medium sm:ml-[46px] md:ml-[60px] ml-[88px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            424 Charter Street
                          </Text>
                          <Text
                            className="font-medium ml-[115px] sm:ml-[61px] md:ml-[79px] text-indigo_400 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            913-207-2627
                          </Text>
                          <Text
                            className="font-medium sm:ml-[49px] md:ml-[63px] ml-[92px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            #12936
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[9%] sm:ml-[50px] md:ml-[65px] ml-[95px] text-[14px] text-center w-[max-content]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[31px] md:ml-[40px] ml-[59px] mr-[3px] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="user Five"
                          />
                        </Row>
                        <Row className="bg-gray_51 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end my-[0] md:p-[11px] sm:p-[15px] p-[17px] w-[100%]">
                          <CheckBox
                            className="md:h-[12px] h-[16px] sm:h-[9px]"
                            inputClassName="mr-[5px]"
                            name="file Seven"
                            label=""
                          ></CheckBox>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[38px] ml-[56px] sm:mx-[0] pr-[3px] sm:px-[0] sm:w-[100%] w-[9%]">
                            <Img
                              src="images/img_vangoghbyamrit.png"
                              className="sm:h-[13px] md:h-[17px] h-[24px] rounded-radius50 sm:w-[12px] md:w-[16px] w-[24px]"
                              alt="VanGoghByAmrit Two"
                            />
                            <Text
                              className="flex-grow font-medium ml-[12px] sm:ml-[6px] md:ml-[8px] text-bluegray_800"
                              as="h5"
                              variant="h5"
                            >
                              Rankin
                            </Text>
                          </Row>
                          <Text
                            className="font-medium sm:ml-[46px] md:ml-[59px] ml-[87px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            60 Corpening Drive
                          </Text>
                          <Text
                            className="font-medium ml-[111px] sm:ml-[59px] md:ml-[76px] text-indigo_400 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            248-930-4978
                          </Text>
                          <Text
                            className="font-medium sm:ml-[46px] md:ml-[59px] ml-[87px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            #12937
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[9%] sm:ml-[51px] md:ml-[66px] ml-[96px] text-[14px] text-center w-[max-content]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillAmber300"
                          >
                            Pending
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[31px] md:ml-[40px] ml-[59px] mr-[3px] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="user Six"
                          />
                        </Row>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end my-[0] md:p-[11px] sm:p-[15px] p-[17px] w-[100%]">
                          <CheckBox
                            className="md:h-[12px] h-[16px] sm:h-[9px]"
                            inputClassName="mr-[5px]"
                            name="file Eight"
                            label=""
                          ></CheckBox>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[38px] ml-[56px] sm:mx-[0] md:pr-[4px] pr-[6px] sm:px-[0] sm:w-[100%] w-[13%]">
                            <Img
                              src="images/img_fidenza978toy.png"
                              className="sm:h-[13px] md:h-[17px] h-[24px] rounded-radius50 sm:w-[12px] md:w-[16px] w-[24px]"
                              alt="Fidenza978Toy Three"
                            />
                            <Text
                              className="flex-grow font-medium ml-[12px] sm:ml-[6px] md:ml-[8px] text-bluegray_800"
                              as="h5"
                              variant="h5"
                            >
                              Clementine
                            </Text>
                          </Row>
                          <Text
                            className="font-medium sm:ml-[25px] md:ml-[33px] ml-[48px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            4337 Fleming Way
                          </Text>
                          <Text
                            className="font-medium ml-[118px] sm:ml-[62px] md:ml-[81px] text-indigo_400 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            757-735-4769
                          </Text>
                          <Text
                            className="font-medium sm:ml-[48px] md:ml-[62px] ml-[91px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            #12938
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[9%] sm:ml-[50px] md:ml-[65px] ml-[95px] text-[14px] text-center w-[max-content]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[31px] md:ml-[40px] ml-[59px] mr-[3px] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="user Seven"
                          />
                        </Row>
                        <Row className="bg-gray_51 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end my-[0] md:p-[11px] sm:p-[15px] p-[17px] w-[100%]">
                          <CheckBox
                            className="md:h-[12px] h-[16px] sm:h-[9px]"
                            inputClassName="mr-[5px]"
                            name="file Nine"
                            label=""
                          ></CheckBox>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[38px] ml-[56px] sm:mx-[0] pr-[2px] sm:px-[0] w-[10%] sm:w-[100%]">
                            <Img
                              src="images/img_vangoghbyamrit.png"
                              className="sm:h-[13px] md:h-[17px] h-[24px] rounded-radius50 sm:w-[12px] md:w-[16px] w-[24px]"
                              alt="VanGoghByAmrit Three"
                            />
                            <Text
                              className="flex-grow font-medium ml-[12px] sm:ml-[6px] md:ml-[8px] text-bluegray_800"
                              as="h5"
                              variant="h5"
                            >
                              Mitchell
                            </Text>
                          </Row>
                          <Text
                            className="font-medium sm:ml-[42px] md:ml-[54px] ml-[79px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            2758 My Drive
                          </Text>
                          <Text
                            className="font-medium md:ml-[102px] ml-[149px] sm:ml-[79px] text-indigo_400 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            631-827-7596
                          </Text>
                          <Text
                            className="font-medium sm:ml-[48px] md:ml-[62px] ml-[91px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            #12939
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[9%] sm:ml-[50px] md:ml-[65px] ml-[95px] text-[14px] text-center w-[max-content]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[31px] md:ml-[40px] ml-[59px] mr-[3px] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="user Eight"
                          />
                        </Row>
                      </List>
                    </React.Fragment>
                  ))}
                  Indicator={({ isActive }) => {
                    if (isActive) {
                      return <div className="" />;
                    }
                    return <div className="" role="button" tabIndex={0} />;
                  }}
                />
                <Img
                  src="images/img_close.svg"
                  className="absolute h-[24px] max-w-[100%] right-[0] top-[4%] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="close"
                />
                <Row className="absolute bottom-[4%] flex flex-row md:flex-wrap sm:flex-wrap inset-x-[0] items-center sm:mx-[0] mx-[auto] sm:px-[0] sm:w-[100%] w-[95%]">
                  <Button
                    className="cursor-pointer flex sm:h-[18px] md:h-[23px] h-[32px] items-center justify-center sm:w-[17px] md:w-[22px] w-[32px]"
                    onClick={() => sliderRef.current?.slidePrev()}
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
                    className="cursor-pointer flex sm:h-[18px] md:h-[23px] h-[32px] items-center justify-center sm:ml-[4px] md:ml-[5px] ml-[8px] sm:w-[17px] md:w-[22px] w-[32px]"
                    onClick={() => sliderRef.current?.slideNext()}
                    size="lgIcn"
                    variant="icbOutlineIndigo51"
                  >
                    <Img
                      src="images/img_arrowright_32X32.svg"
                      className="flex items-center justify-center"
                      alt="arrowright"
                    />
                  </Button>
                  <Text
                    className="font-medium sm:ml-[406px] md:ml-[525px] ml-[764px] text-bluegray_400 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    9 of 200 data
                  </Text>
                </Row>
              </Stack>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default CustomerPage;
