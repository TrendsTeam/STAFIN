import React from "react";
import ModalProvider from "react-modal";

import { Column, Img, Text, Stack, Input } from "components";

const DashboardSubcribleModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[100%] flex-col flex"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="flex flex-col items-center justify-end md:p-[295px] p-[429px] sm:px-[15px] sm:py-[228px] w-[100%]">
            <Img
              src="images/img_group_40X40.svg"
              className="sm:h-[22px] md:h-[28px] h-[40px] max-w-[40px] mt-[1px] mx-[auto] sm:px-[15px] w-[100%] sm:w-[21px] md:w-[27px]"
              alt="Group"
            />
            <Column className="bg-white_A700 flex flex-col items-center justify-start max-w-[478px] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] mx-[auto] sm:p-[15px] md:p-[22px] p-[32px] sm:px-[15px] rounded-radius4 shadow-bs1 w-[100%]">
              <Column className="flex flex-col justify-start pr-[3px] pt-[3px] sm:px-[0] w-[100%]">
                <Text
                  className="text-bluegray_800 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Subcrible
                </Text>
                <Text
                  className="font-normal sm:mt-[13px] md:mt-[17px] mt-[25px] not-italic text-bluegray_800 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Subcribe our newletter and get notification to stay update
                </Text>
              </Column>
              <Column className="flex flex-col justify-start sm:mt-[18px] md:mt-[24px] mt-[35px] sm:px-[0] w-[100%]">
                <Text
                  className="font-medium text-bluegray_800 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Email
                </Text>
                <Stack className="h-[56px] mt-[12px] sm:mt-[6px] md:mt-[8px] relative w-[100%]">
                  <Img
                    src="images/img_cursor.svg"
                    className="absolute h-[20px] inset-y-[0] max-w-[100%] my-[auto] right-[5%] sm:w-[10px] md:w-[13px] w-[20px]"
                    alt="cursor"
                  />
                  <Input
                    className="font-medium p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                    wrapClassName="absolute flex w-[100%]"
                    type="email"
                    name="email One"
                    placeholder="Ackermanlhn@gmail.com"
                    prefix={
                      <Img
                        src="images/img_mail.svg"
                        className="ml-[4px] mr-[16px] sm:mr-[8px] md:mr-[11px] left-[1%] right-[4%] absolute my-[auto]"
                        alt="mail"
                      />
                    }
                    shape="RoundedBorder4"
                    size="xl"
                    variant="OutlineIndigo51"
                  ></Input>
                </Stack>
              </Column>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default DashboardSubcribleModal;
