import React from "react";

import { Row, Text, Input, Img, Column } from "components";
import { CloseSVG } from "../../../assets/images/index.js";

const Header = (props) => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <header className={props.className}>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mx-[auto] my-[10px] sm:my-[5px] md:my-[6px] sm:w-[100%] w-[96%]">
          <Row className="header-row w-[auto]">
            <Text
              className="font-inter font-medium text-bluegray_800"
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
            className="font-inter font-medium sm:hidden p-[0] text-[12px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
            wrapClassName="flex md:ml-[156px] ml-[227px] sm:hidden sm:mx-[0] sm:w-[100%] w-[38%]"
            name="SearchBox"
            placeholder="Search..."
            prefix={
              <Img
                src="images/img_search.svg"
                className="cursor-pointer ml-[10px] mr-[8px] sm:mr-[4px] sm:ml-[5px] sm:hidden md:mr-[5px] md:ml-[6px] my-[auto]"
                alt="search"
              />
            }
            suffix={
              inputvalue?.length > 0 ? (
                <CloseSVG
                  className="cursor-pointer ml-[10px] mr-[22px] sm:mr-[11px] sm:ml-[5px] sm:hidden md:mr-[15px] md:ml-[6px] my-[auto]"
                  onClick={() => setInputvalue("")}
                  color="#828fa2"
                />
              ) : inputvalue?.length > 0 ? (
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
            className="sm:h-[13px] md:h-[17px] h-[24px] sm:hidden max-w-[100%] ml-[132px] sm:ml-[70px] md:ml-[90px] sm:w-[12px] md:w-[16px] w-[24px]"
            alt="shoppingbag"
          />
          <Column
            className="bg-cover bg-no-repeat flex flex-col sm:h-[13px] md:h-[17px] h-[24px] sm:hidden items-end sm:ml-[12px] md:ml-[16px] ml-[24px] pl-[1px] sm:w-[12px] md:w-[16px] w-[24px]"
            style={{ backgroundImage: "url('images/img_group8200.svg')" }}
          >
            <div className="bg-red_600 sm:h-[5px] md:h-[6px] h-[8px] mb-[14px] sm:mb-[7px] md:mb-[9px] outline outline-[2px] outline-white_A700 rounded-radius50 sm:w-[4px] md:w-[5px] w-[8px]"></div>
          </Column>
          <Text
            className="font-inter font-normal sm:hidden sm:ml-[12px] md:ml-[16px] ml-[24px] not-italic text-gray_500 w-[auto]"
            as="h5"
            variant="h5"
          >
            <span className="text-gray_500 text-[16px]">Hello,</span>
            <span className="text-bluegray_900 text-[16px]"> </span>
            <span className="text-bluegray_900 text-[16px] font-medium">
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
    </>
  );
};

export default Header;
