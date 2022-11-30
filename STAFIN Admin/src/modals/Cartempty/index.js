import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img } from "components";

const CartemptyModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[100%] flex-col flex"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[300px] p-[528px] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-center max-w-[395px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]">
              <Text
                className="flex-grow md:mt-[3px] sm:mt-[3px] mt-[7px] text-bluegray_800"
                as="h2"
                variant="h2"
              >
                My Cart
              </Text>
              <Img
                src="images/img_close.svg"
                className="common-pointer flex-shrink-0 sm:h-[15px] md:h-[19px] h-[32px] max-w-[100%] sm:ml-[118px] md:ml-[152px] ml-[269px] sm:w-[14px] md:w-[18px] w-[32px]"
                onClick={props.onRequestClose}
                alt="close"
              />
            </Row>
            <Img
              src="images/img_20.svg"
              className="max-w-[200px] sm:mt-[33px] md:mt-[43px] mt-[77px] mx-[auto] sm:px-[15px] w-[100%]"
              alt="Twenty"
            />
            <Text
              className="font-normal sm:mb-[38px] md:mb-[50px] mb-[88px] sm:mt-[19px] md:mt-[25px] mt-[44px] not-italic text-bluegray_400 w-[auto]"
              as="h5"
              variant="h5"
            >
              No item. Add more
            </Text>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default CartemptyModal;
