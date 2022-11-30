import 'controller/iphone_14_pro_max_thirtythree_controller.dart';
import 'package:flutter/material.dart';
import 'package:stafin_v1/core/app_export.dart';

class Iphone14ProMaxThirtythreeScreen
    extends GetWidget<Iphone14ProMaxThirtythreeController> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: ColorConstant.bluegray900,
        body: Container(
          width: size.width,
          child: SingleChildScrollView(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.center,
              mainAxisAlignment: MainAxisAlignment.start,
              children: [
                Padding(
                  padding: getPadding(
                    left: 45,
                    top: 247,
                    right: 45,
                  ),
                  child: CommonImageView(
                    imagePath: ImageConstant.imgImage1,
                    height: getVerticalSize(
                      187.00,
                    ),
                    width: getHorizontalSize(
                      231.00,
                    ),
                  ),
                ),
                Container(
                  width: getHorizontalSize(
                    262.00,
                  ),
                  margin: getMargin(
                    left: 45,
                    top: 16,
                    right: 45,
                  ),
                  child: RichText(
                    text: TextSpan(
                      children: [
                        TextSpan(
                          text: "lbl_transfer2".tr,
                          style: TextStyle(
                            color: ColorConstant.whiteA700,
                            fontSize: getFontSize(
                              16,
                            ),
                            fontFamily: 'Montserrat',
                            fontWeight: FontWeight.w400,
                          ),
                        ),
                        TextSpan(
                          text: "lbl_80_000_002".tr,
                          style: TextStyle(
                            color: ColorConstant.whiteA700,
                            fontSize: getFontSize(
                              16,
                            ),
                            fontFamily: 'Montserrat',
                            fontWeight: FontWeight.w400,
                          ),
                        ),
                        TextSpan(
                          text: "lbl_to".tr,
                          style: TextStyle(
                            color: ColorConstant.whiteA700,
                            fontSize: getFontSize(
                              16,
                            ),
                            fontFamily: 'Montserrat',
                            fontWeight: FontWeight.w400,
                          ),
                        ),
                        TextSpan(
                          text: " \n".tr,
                          style: TextStyle(
                            color: ColorConstant.whiteA700,
                            fontSize: getFontSize(
                              16,
                            ),
                            fontFamily: 'Montserrat',
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                        TextSpan(
                          text: "msg_hillary_bill_clinton2".tr,
                          style: TextStyle(
                            color: ColorConstant.deepPurple50,
                            fontSize: getFontSize(
                              16,
                            ),
                            fontFamily: 'Montserrat',
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                      ],
                    ),
                    textAlign: TextAlign.center,
                  ),
                ),
                Container(
                  margin: getMargin(
                    left: 45,
                    top: 104,
                    right: 45,
                    bottom: 281,
                  ),
                  decoration: AppDecoration.outlineBlack9000c1.copyWith(
                    borderRadius: BorderRadiusStyle.roundedBorder10,
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    mainAxisSize: MainAxisSize.max,
                    children: [
                      Padding(
                        padding: getPadding(
                          top: 18,
                          bottom: 18,
                        ),
                        child: CommonImageView(
                          svgPath: ImageConstant.imgClose18x18,
                          height: getSize(
                            18.00,
                          ),
                          width: getSize(
                            18.00,
                          ),
                        ),
                      ),
                      Padding(
                        padding: getPadding(
                          left: 7,
                          top: 16,
                          bottom: 18,
                        ),
                        child: Text(
                          "lbl_exit".tr,
                          overflow: TextOverflow.ellipsis,
                          textAlign: TextAlign.left,
                          style:
                              AppStyle.txtMontserratRomanSemiBold15Bluegray900,
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
