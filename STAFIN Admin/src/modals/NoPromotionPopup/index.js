import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Stack, Img, Text, Button } from "components";

const NoPromotionPopupModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[100%] flex-col flex"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[195px] p-[284px] rounded-radius4 shadow-bs1 w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end max-w-[388px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]">
              <Stack className="bg-white_A700 h-[298px] sm:p-[15px] md:p-[32px] p-[47px] relative sm:w-[158px] md:w-[205px] w-[298px]">
                <Img
                  src="images/img_group_194X146.svg"
                  className="absolute h-[194px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[49%]"
                  alt="Group"
                />
              </Stack>
              <Img
                src="images/img_group_40X40.svg"
                className="sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] sm:ml-[26px] md:ml-[34px] ml-[50px] mt-[4px] sm:w-[21px] md:w-[27px] w-[40px]"
                alt="xcircle"
              />
            </Row>
            <Column className="flex flex-col items-center justify-end max-w-[413px] sm:mx-[0] mx-[auto] p-[2px] sm:px-[15px] w-[100%]">
              <Text
                className="mt-[3px] text-bluegray_800 w-[auto]"
                as="h2"
                variant="h2"
              >
                No promotion
              </Text>
              <Text
                className="font-normal sm:mt-[11px] md:mt-[14px] mt-[21px] not-italic text-bluegray_800 w-[auto]"
                as="h6"
                variant="h6"
              >
                Follow us to review lattest promotion
              </Text>
            </Column>
            <Button
              className="cursor-pointer font-bold sm:mb-[16px] md:mb-[21px] mb-[31px] min-w-[23%] sm:mt-[25px] md:mt-[33px] mt-[48px] text-[14px] text-center w-[max-content]"
              shape="CircleBorder28"
              size="xl"
              variant="FillDeeporange300"
            >
              Yes, I understand
            </Button>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default NoPromotionPopupModal;
