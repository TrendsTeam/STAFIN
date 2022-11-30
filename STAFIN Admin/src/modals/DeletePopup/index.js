import React from "react";
import ModalProvider from "react-modal";

import { Column, Img, Text, Row, Button } from "components";

const DeletePopupModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[100%] flex-col flex"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[198px] p-[288px] rounded-radius4 shadow-bs1 w-[100%]">
            <Img
              src="images/img_group_40X40.svg"
              className="sm:h-[22px] md:h-[28px] h-[40px] max-w-[40px] mx-[auto] sm:px-[15px] w-[100%] sm:w-[21px] md:w-[27px]"
              alt="xcircle"
            />
            <Img
              src="images/img_12.svg"
              className="max-w-[171px] sm:mt-[10px] md:mt-[13px] mt-[20px] mx-[auto] sm:px-[15px] w-[100%]"
              alt="Twelve"
            />
            <Column className="flex flex-col items-center justify-start max-w-[414px] sm:mb-[14px] md:mb-[18px] mb-[27px] sm:mt-[30px] md:mt-[39px] mt-[58px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]">
              <Column className="flex flex-col items-center justify-end p-[2px] sm:px-[0] w-[100%]">
                <Text
                  className="mt-[3px] text-bluegray_800 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Are you sure to delete item?
                </Text>
                <Text
                  className="font-normal sm:mt-[11px] md:mt-[14px] mt-[21px] not-italic text-bluegray_800 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  This item will be delete from your cart
                </Text>
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[25px] md:mt-[33px] mt-[48px] w-[100%]">
                <Button
                  className="cursor-pointer font-bold min-w-[49%] text-[14px] text-center w-[max-content]"
                  shape="CircleBorder28"
                  size="xl"
                  variant="FillRed600"
                >
                  Yes, Delete item
                </Button>
                <Button
                  className="common-pointer cursor-pointer font-normal min-w-[49%] not-italic text-[14px] text-center w-[max-content]"
                  onClick={props.onRequestClose}
                  shape="CircleBorder28"
                  size="xl"
                  variant="FillGray51"
                >
                  Cancel
                </Button>
              </Row>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default DeletePopupModal;
