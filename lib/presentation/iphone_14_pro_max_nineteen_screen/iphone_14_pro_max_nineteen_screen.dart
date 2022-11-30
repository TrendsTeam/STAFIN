import 'controller/iphone_14_pro_max_nineteen_controller.dart';
import 'package:flutter/material.dart';
import 'package:stafin_v1/core/app_export.dart';
import 'package:stafin_v1/presentation/iphone_14_pro_max_fifteen_page/iphone_14_pro_max_fifteen_page.dart';
import 'package:stafin_v1/presentation/iphone_14_pro_max_fortyone_page/iphone_14_pro_max_fortyone_page.dart';
import 'package:stafin_v1/presentation/iphone_14_pro_max_seventeen_page/iphone_14_pro_max_seventeen_page.dart';
import 'package:stafin_v1/presentation/iphone_14_pro_max_sixteen_page/iphone_14_pro_max_sixteen_page.dart';
import 'package:stafin_v1/widgets/custom_bottom_bar.dart';

class Iphone14ProMaxNineteenScreen
    extends GetWidget<Iphone14ProMaxNineteenController> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: ColorConstant.whiteA700,
        body: Container(
          width: size.width,
          child: SingleChildScrollView(
            child: Padding(
              padding: getPadding(
                left: 45,
                top: 76,
                right: 45,
                bottom: 76,
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  Padding(
                    padding: getPadding(
                      right: 10,
                    ),
                    child: Text(
                      "lbl_latest_activity".tr,
                      overflow: TextOverflow.ellipsis,
                      textAlign: TextAlign.left,
                      style: AppStyle.txtMontserratRomanSemiBold20,
                    ),
                  ),
                  Padding(
                    padding: getPadding(
                      top: 43,
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      mainAxisSize: MainAxisSize.max,
                      children: [
                        Container(
                          padding: getPadding(
                            left: 22,
                            top: 9,
                            right: 22,
                            bottom: 9,
                          ),
                          decoration:
                              AppDecoration.txtOutlineBlack9000c.copyWith(
                            borderRadius: BorderRadiusStyle.txtRoundedBorder10,
                          ),
                          child: Text(
                            "lbl_daily".tr,
                            overflow: TextOverflow.ellipsis,
                            textAlign: TextAlign.left,
                            style: AppStyle.txtMontserratRomanSemiBold9,
                          ),
                        ),
                        Container(
                          padding: getPadding(
                            left: 17,
                            top: 8,
                            right: 17,
                            bottom: 8,
                          ),
                          decoration:
                              AppDecoration.txtOutlineDeeppurple500.copyWith(
                            borderRadius: BorderRadiusStyle.txtRoundedBorder10,
                          ),
                          child: Text(
                            "lbl_weekly".tr,
                            overflow: TextOverflow.ellipsis,
                            textAlign: TextAlign.left,
                            style: AppStyle.txtMontserratRomanMedium9,
                          ),
                        ),
                        Container(
                          padding: getPadding(
                            left: 15,
                            top: 8,
                            right: 15,
                            bottom: 8,
                          ),
                          decoration:
                              AppDecoration.txtOutlineDeeppurple500.copyWith(
                            borderRadius: BorderRadiusStyle.txtRoundedBorder10,
                          ),
                          child: Text(
                            "lbl_monthly2".tr,
                            overflow: TextOverflow.ellipsis,
                            textAlign: TextAlign.left,
                            style: AppStyle.txtMontserratRomanMedium9,
                          ),
                        ),
                        Container(
                          padding: getPadding(
                            left: 20,
                            top: 8,
                            right: 20,
                            bottom: 8,
                          ),
                          decoration:
                              AppDecoration.txtOutlineDeeppurple500.copyWith(
                            borderRadius: BorderRadiusStyle.txtRoundedBorder10,
                          ),
                          child: Text(
                            "lbl_yearly2".tr,
                            overflow: TextOverflow.ellipsis,
                            textAlign: TextAlign.left,
                            style: AppStyle.txtMontserratRomanMedium9,
                          ),
                        ),
                      ],
                    ),
                  ),
                  Padding(
                    padding: getPadding(
                      top: 47,
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      mainAxisSize: MainAxisSize.max,
                      children: [
                        Row(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            Padding(
                              padding: getPadding(
                                bottom: 1,
                              ),
                              child: Column(
                                mainAxisSize: MainAxisSize.min,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                mainAxisAlignment: MainAxisAlignment.start,
                                children: [
                                  Container(
                                    height: getSize(
                                      35.00,
                                    ),
                                    width: getSize(
                                      35.00,
                                    ),
                                    child: Stack(
                                      alignment: Alignment.centerLeft,
                                      children: [
                                        Align(
                                          alignment: Alignment.center,
                                          child: Padding(
                                            padding: getPadding(
                                              left: 8,
                                              top: 10,
                                              right: 7,
                                              bottom: 10,
                                            ),
                                            child: CommonImageView(
                                              svgPath: ImageConstant.imgFile,
                                              height: getVerticalSize(
                                                15.00,
                                              ),
                                              width: getHorizontalSize(
                                                20.00,
                                              ),
                                            ),
                                          ),
                                        ),
                                        Align(
                                          alignment: Alignment.centerLeft,
                                          child: Container(
                                            height: getSize(
                                              35.00,
                                            ),
                                            width: getSize(
                                              35.00,
                                            ),
                                            decoration: BoxDecoration(
                                              color: ColorConstant.green40033,
                                              borderRadius:
                                                  BorderRadius.circular(
                                                getHorizontalSize(
                                                  17.50,
                                                ),
                                              ),
                                            ),
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                  Container(
                                    height: getSize(
                                      35.00,
                                    ),
                                    width: getSize(
                                      35.00,
                                    ),
                                    margin: getMargin(
                                      top: 28,
                                    ),
                                    child: Stack(
                                      alignment: Alignment.centerLeft,
                                      children: [
                                        Align(
                                          alignment: Alignment.bottomCenter,
                                          child: Padding(
                                            padding: getPadding(
                                              left: 8,
                                              top: 10,
                                              right: 7,
                                              bottom: 9,
                                            ),
                                            child: CommonImageView(
                                              svgPath: ImageConstant.imgClock,
                                              height: getVerticalSize(
                                                15.00,
                                              ),
                                              width: getHorizontalSize(
                                                20.00,
                                              ),
                                            ),
                                          ),
                                        ),
                                        Align(
                                          alignment: Alignment.centerLeft,
                                          child: Container(
                                            height: getSize(
                                              35.00,
                                            ),
                                            width: getSize(
                                              35.00,
                                            ),
                                            decoration: BoxDecoration(
                                              color: ColorConstant.red40033,
                                              borderRadius:
                                                  BorderRadius.circular(
                                                getHorizontalSize(
                                                  17.50,
                                                ),
                                              ),
                                            ),
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                  Container(
                                    height: getSize(
                                      35.00,
                                    ),
                                    width: getSize(
                                      35.00,
                                    ),
                                    margin: getMargin(
                                      top: 28,
                                    ),
                                    child: Stack(
                                      alignment: Alignment.centerLeft,
                                      children: [
                                        Align(
                                          alignment: Alignment.bottomCenter,
                                          child: Padding(
                                            padding: getPadding(
                                              left: 8,
                                              top: 10,
                                              right: 7,
                                              bottom: 9,
                                            ),
                                            child: CommonImageView(
                                              svgPath: ImageConstant.imgClock,
                                              height: getVerticalSize(
                                                15.00,
                                              ),
                                              width: getHorizontalSize(
                                                20.00,
                                              ),
                                            ),
                                          ),
                                        ),
                                        Align(
                                          alignment: Alignment.centerLeft,
                                          child: Container(
                                            height: getSize(
                                              35.00,
                                            ),
                                            width: getSize(
                                              35.00,
                                            ),
                                            decoration: BoxDecoration(
                                              color: ColorConstant.red40033,
                                              borderRadius:
                                                  BorderRadius.circular(
                                                getHorizontalSize(
                                                  17.50,
                                                ),
                                              ),
                                            ),
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                  Container(
                                    height: getSize(
                                      35.00,
                                    ),
                                    width: getSize(
                                      35.00,
                                    ),
                                    margin: getMargin(
                                      top: 28,
                                    ),
                                    child: Stack(
                                      alignment: Alignment.centerLeft,
                                      children: [
                                        Align(
                                          alignment: Alignment.center,
                                          child: Padding(
                                            padding: getPadding(
                                              left: 8,
                                              top: 10,
                                              right: 7,
                                              bottom: 10,
                                            ),
                                            child: CommonImageView(
                                              svgPath: ImageConstant.imgFile,
                                              height: getVerticalSize(
                                                15.00,
                                              ),
                                              width: getHorizontalSize(
                                                20.00,
                                              ),
                                            ),
                                          ),
                                        ),
                                        Align(
                                          alignment: Alignment.centerLeft,
                                          child: Container(
                                            height: getSize(
                                              35.00,
                                            ),
                                            width: getSize(
                                              35.00,
                                            ),
                                            decoration: BoxDecoration(
                                              color: ColorConstant.green40033,
                                              borderRadius:
                                                  BorderRadius.circular(
                                                getHorizontalSize(
                                                  17.50,
                                                ),
                                              ),
                                            ),
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                  Container(
                                    height: getSize(
                                      35.00,
                                    ),
                                    width: getSize(
                                      35.00,
                                    ),
                                    margin: getMargin(
                                      top: 32,
                                    ),
                                    child: Stack(
                                      alignment: Alignment.centerLeft,
                                      children: [
                                        Align(
                                          alignment: Alignment.center,
                                          child: Padding(
                                            padding: getPadding(
                                              left: 8,
                                              top: 10,
                                              right: 7,
                                              bottom: 10,
                                            ),
                                            child: CommonImageView(
                                              svgPath: ImageConstant.imgFile,
                                              height: getVerticalSize(
                                                15.00,
                                              ),
                                              width: getHorizontalSize(
                                                20.00,
                                              ),
                                            ),
                                          ),
                                        ),
                                        Align(
                                          alignment: Alignment.centerLeft,
                                          child: Container(
                                            height: getSize(
                                              35.00,
                                            ),
                                            width: getSize(
                                              35.00,
                                            ),
                                            decoration: BoxDecoration(
                                              color: ColorConstant.green40033,
                                              borderRadius:
                                                  BorderRadius.circular(
                                                getHorizontalSize(
                                                  17.50,
                                                ),
                                              ),
                                            ),
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                  Container(
                                    height: getSize(
                                      35.00,
                                    ),
                                    width: getSize(
                                      35.00,
                                    ),
                                    margin: getMargin(
                                      top: 26,
                                    ),
                                    child: Stack(
                                      alignment: Alignment.centerLeft,
                                      children: [
                                        Align(
                                          alignment: Alignment.center,
                                          child: Padding(
                                            padding: getPadding(
                                              left: 8,
                                              top: 10,
                                              right: 7,
                                              bottom: 10,
                                            ),
                                            child: CommonImageView(
                                              svgPath: ImageConstant.imgFile,
                                              height: getVerticalSize(
                                                15.00,
                                              ),
                                              width: getHorizontalSize(
                                                20.00,
                                              ),
                                            ),
                                          ),
                                        ),
                                        Align(
                                          alignment: Alignment.centerLeft,
                                          child: Container(
                                            height: getSize(
                                              35.00,
                                            ),
                                            width: getSize(
                                              35.00,
                                            ),
                                            decoration: BoxDecoration(
                                              color: ColorConstant.green40033,
                                              borderRadius:
                                                  BorderRadius.circular(
                                                getHorizontalSize(
                                                  17.50,
                                                ),
                                              ),
                                            ),
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                  Container(
                                    height: getSize(
                                      35.00,
                                    ),
                                    width: getSize(
                                      35.00,
                                    ),
                                    margin: getMargin(
                                      top: 28,
                                    ),
                                    child: Stack(
                                      alignment: Alignment.centerLeft,
                                      children: [
                                        Align(
                                          alignment: Alignment.bottomCenter,
                                          child: Padding(
                                            padding: getPadding(
                                              left: 8,
                                              top: 10,
                                              right: 7,
                                              bottom: 9,
                                            ),
                                            child: CommonImageView(
                                              svgPath: ImageConstant.imgClock,
                                              height: getVerticalSize(
                                                15.00,
                                              ),
                                              width: getHorizontalSize(
                                                20.00,
                                              ),
                                            ),
                                          ),
                                        ),
                                        Align(
                                          alignment: Alignment.centerLeft,
                                          child: Container(
                                            height: getSize(
                                              35.00,
                                            ),
                                            width: getSize(
                                              35.00,
                                            ),
                                            decoration: BoxDecoration(
                                              color: ColorConstant.red40033,
                                              borderRadius:
                                                  BorderRadius.circular(
                                                getHorizontalSize(
                                                  17.50,
                                                ),
                                              ),
                                            ),
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                  Container(
                                    height: getSize(
                                      35.00,
                                    ),
                                    width: getSize(
                                      35.00,
                                    ),
                                    margin: getMargin(
                                      top: 28,
                                    ),
                                    child: Stack(
                                      alignment: Alignment.centerLeft,
                                      children: [
                                        Align(
                                          alignment: Alignment.bottomCenter,
                                          child: Padding(
                                            padding: getPadding(
                                              left: 8,
                                              top: 10,
                                              right: 7,
                                              bottom: 9,
                                            ),
                                            child: CommonImageView(
                                              svgPath: ImageConstant.imgClock,
                                              height: getVerticalSize(
                                                15.00,
                                              ),
                                              width: getHorizontalSize(
                                                20.00,
                                              ),
                                            ),
                                          ),
                                        ),
                                        Align(
                                          alignment: Alignment.centerLeft,
                                          child: Container(
                                            height: getSize(
                                              35.00,
                                            ),
                                            width: getSize(
                                              35.00,
                                            ),
                                            decoration: BoxDecoration(
                                              color: ColorConstant.red40033,
                                              borderRadius:
                                                  BorderRadius.circular(
                                                getHorizontalSize(
                                                  17.50,
                                                ),
                                              ),
                                            ),
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                  Container(
                                    height: getSize(
                                      35.00,
                                    ),
                                    width: getSize(
                                      35.00,
                                    ),
                                    margin: getMargin(
                                      top: 28,
                                    ),
                                    child: Stack(
                                      alignment: Alignment.centerLeft,
                                      children: [
                                        Align(
                                          alignment: Alignment.center,
                                          child: Padding(
                                            padding: getPadding(
                                              left: 8,
                                              top: 10,
                                              right: 7,
                                              bottom: 10,
                                            ),
                                            child: CommonImageView(
                                              svgPath: ImageConstant.imgFile,
                                              height: getVerticalSize(
                                                15.00,
                                              ),
                                              width: getHorizontalSize(
                                                20.00,
                                              ),
                                            ),
                                          ),
                                        ),
                                        Align(
                                          alignment: Alignment.centerLeft,
                                          child: Container(
                                            height: getSize(
                                              35.00,
                                            ),
                                            width: getSize(
                                              35.00,
                                            ),
                                            decoration: BoxDecoration(
                                              color: ColorConstant.green40033,
                                              borderRadius:
                                                  BorderRadius.circular(
                                                getHorizontalSize(
                                                  17.50,
                                                ),
                                              ),
                                            ),
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                ],
                              ),
                            ),
                            Padding(
                              padding: getPadding(
                                left: 14,
                                top: 8,
                              ),
                              child: Column(
                                mainAxisSize: MainAxisSize.min,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                mainAxisAlignment: MainAxisAlignment.start,
                                children: [
                                  Padding(
                                    padding: getPadding(
                                      right: 10,
                                    ),
                                    child: Text(
                                      "lbl_transport".tr,
                                      overflow: TextOverflow.ellipsis,
                                      textAlign: TextAlign.left,
                                      style:
                                          AppStyle.txtMontserratRomanMedium10,
                                    ),
                                  ),
                                  Padding(
                                    padding: getPadding(
                                      top: 3,
                                      right: 10,
                                    ),
                                    child: Text(
                                      "lbl_gtbank".tr,
                                      overflow: TextOverflow.ellipsis,
                                      textAlign: TextAlign.left,
                                      style:
                                          AppStyle.txtMontserratRomanRegular8,
                                    ),
                                  ),
                                  Padding(
                                    padding: getPadding(
                                      top: 35,
                                      right: 10,
                                    ),
                                    child: Text(
                                      "lbl_clothes".tr,
                                      overflow: TextOverflow.ellipsis,
                                      textAlign: TextAlign.left,
                                      style:
                                          AppStyle.txtMontserratRomanMedium10,
                                    ),
                                  ),
                                  Padding(
                                    padding: getPadding(
                                      top: 4,
                                      right: 10,
                                    ),
                                    child: Text(
                                      "lbl_gtbank".tr,
                                      overflow: TextOverflow.ellipsis,
                                      textAlign: TextAlign.left,
                                      style:
                                          AppStyle.txtMontserratRomanRegular8,
                                    ),
                                  ),
                                  Padding(
                                    padding: getPadding(
                                      top: 36,
                                    ),
                                    child: Text(
                                      "msg_payment_for_plumber".tr,
                                      overflow: TextOverflow.ellipsis,
                                      textAlign: TextAlign.left,
                                      style:
                                          AppStyle.txtMontserratRomanMedium10,
                                    ),
                                  ),
                                  Padding(
                                    padding: getPadding(
                                      top: 3,
                                      right: 10,
                                    ),
                                    child: Text(
                                      "lbl_gtbank".tr,
                                      overflow: TextOverflow.ellipsis,
                                      textAlign: TextAlign.left,
                                      style:
                                          AppStyle.txtMontserratRomanRegular8,
                                    ),
                                  ),
                                  Padding(
                                    padding: getPadding(
                                      top: 36,
                                      right: 10,
                                    ),
                                    child: Text(
                                      "lbl_shoprite_icm".tr,
                                      overflow: TextOverflow.ellipsis,
                                      textAlign: TextAlign.left,
                                      style:
                                          AppStyle.txtMontserratRomanMedium10,
                                    ),
                                  ),
                                  Padding(
                                    padding: getPadding(
                                      top: 4,
                                      right: 10,
                                    ),
                                    child: Text(
                                      "lbl_sterling_bank".tr,
                                      overflow: TextOverflow.ellipsis,
                                      textAlign: TextAlign.left,
                                      style:
                                          AppStyle.txtMontserratRomanRegular8,
                                    ),
                                  ),
                                  Padding(
                                    padding: getPadding(
                                      top: 36,
                                      right: 10,
                                    ),
                                    child: Text(
                                      "lbl_transport".tr,
                                      overflow: TextOverflow.ellipsis,
                                      textAlign: TextAlign.left,
                                      style:
                                          AppStyle.txtMontserratRomanMedium10,
                                    ),
                                  ),
                                  Padding(
                                    padding: getPadding(
                                      top: 3,
                                      right: 10,
                                    ),
                                    child: Text(
                                      "lbl_sterling_bank".tr,
                                      overflow: TextOverflow.ellipsis,
                                      textAlign: TextAlign.left,
                                      style:
                                          AppStyle.txtMontserratRomanRegular8,
                                    ),
                                  ),
                                  Padding(
                                    padding: getPadding(
                                      top: 38,
                                      right: 10,
                                    ),
                                    child: Text(
                                      "lbl_transport".tr,
                                      overflow: TextOverflow.ellipsis,
                                      textAlign: TextAlign.left,
                                      style:
                                          AppStyle.txtMontserratRomanMedium10,
                                    ),
                                  ),
                                  Padding(
                                    padding: getPadding(
                                      top: 3,
                                      right: 10,
                                    ),
                                    child: Text(
                                      "lbl_sterling_bank".tr,
                                      overflow: TextOverflow.ellipsis,
                                      textAlign: TextAlign.left,
                                      style:
                                          AppStyle.txtMontserratRomanRegular8,
                                    ),
                                  ),
                                  Padding(
                                    padding: getPadding(
                                      top: 35,
                                      right: 10,
                                    ),
                                    child: Text(
                                      "lbl_clothes".tr,
                                      overflow: TextOverflow.ellipsis,
                                      textAlign: TextAlign.left,
                                      style:
                                          AppStyle.txtMontserratRomanMedium10,
                                    ),
                                  ),
                                  Padding(
                                    padding: getPadding(
                                      top: 4,
                                      right: 10,
                                    ),
                                    child: Text(
                                      "lbl_gtbank".tr,
                                      overflow: TextOverflow.ellipsis,
                                      textAlign: TextAlign.left,
                                      style:
                                          AppStyle.txtMontserratRomanRegular8,
                                    ),
                                  ),
                                  Padding(
                                    padding: getPadding(
                                      top: 36,
                                    ),
                                    child: Text(
                                      "msg_payment_for_plumber".tr,
                                      overflow: TextOverflow.ellipsis,
                                      textAlign: TextAlign.left,
                                      style:
                                          AppStyle.txtMontserratRomanMedium10,
                                    ),
                                  ),
                                  Padding(
                                    padding: getPadding(
                                      top: 4,
                                      right: 10,
                                    ),
                                    child: Text(
                                      "lbl_sterling_bank".tr,
                                      overflow: TextOverflow.ellipsis,
                                      textAlign: TextAlign.left,
                                      style:
                                          AppStyle.txtMontserratRomanRegular8,
                                    ),
                                  ),
                                  Padding(
                                    padding: getPadding(
                                      top: 35,
                                      right: 10,
                                    ),
                                    child: Text(
                                      "lbl_shoprite_icm".tr,
                                      overflow: TextOverflow.ellipsis,
                                      textAlign: TextAlign.left,
                                      style:
                                          AppStyle.txtMontserratRomanMedium10,
                                    ),
                                  ),
                                  Padding(
                                    padding: getPadding(
                                      top: 3,
                                      right: 10,
                                    ),
                                    child: Text(
                                      "lbl_gtbank".tr,
                                      overflow: TextOverflow.ellipsis,
                                      textAlign: TextAlign.left,
                                      style:
                                          AppStyle.txtMontserratRomanRegular8,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                        Padding(
                          padding: getPadding(
                            top: 16,
                            bottom: 6,
                          ),
                          child: Column(
                            mainAxisSize: MainAxisSize.min,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            mainAxisAlignment: MainAxisAlignment.start,
                            children: [
                              Align(
                                alignment: Alignment.centerRight,
                                child: Padding(
                                  padding: getPadding(
                                    left: 7,
                                  ),
                                  child: Text(
                                    "lbl_1200_00".tr,
                                    overflow: TextOverflow.ellipsis,
                                    textAlign: TextAlign.left,
                                    style: AppStyle
                                        .txtMontserratRomanMedium10Green400,
                                  ),
                                ),
                              ),
                              Padding(
                                padding: getPadding(
                                  top: 50,
                                ),
                                child: Text(
                                  "lbl_12_000_00".tr,
                                  overflow: TextOverflow.ellipsis,
                                  textAlign: TextAlign.left,
                                  style:
                                      AppStyle.txtMontserratRomanMedium10Red400,
                                ),
                              ),
                              Align(
                                alignment: Alignment.centerRight,
                                child: Padding(
                                  padding: getPadding(
                                    left: 7,
                                    top: 49,
                                  ),
                                  child: Text(
                                    "lbl_2200_00".tr,
                                    overflow: TextOverflow.ellipsis,
                                    textAlign: TextAlign.left,
                                    style: AppStyle
                                        .txtMontserratRomanMedium10Red400,
                                  ),
                                ),
                              ),
                              Align(
                                alignment: Alignment.centerRight,
                                child: Padding(
                                  padding: getPadding(
                                    left: 3,
                                    top: 50,
                                  ),
                                  child: Text(
                                    "lbl_9000_00".tr,
                                    overflow: TextOverflow.ellipsis,
                                    textAlign: TextAlign.left,
                                    style: AppStyle
                                        .txtMontserratRomanMedium10Green400,
                                  ),
                                ),
                              ),
                              Align(
                                alignment: Alignment.centerRight,
                                child: Padding(
                                  padding: getPadding(
                                    left: 4,
                                    top: 50,
                                  ),
                                  child: Text(
                                    "lbl_5000_00".tr,
                                    overflow: TextOverflow.ellipsis,
                                    textAlign: TextAlign.left,
                                    style: AppStyle
                                        .txtMontserratRomanMedium10Green400,
                                  ),
                                ),
                              ),
                              Align(
                                alignment: Alignment.centerRight,
                                child: Padding(
                                  padding: getPadding(
                                    left: 7,
                                    top: 52,
                                  ),
                                  child: Text(
                                    "lbl_1200_00".tr,
                                    overflow: TextOverflow.ellipsis,
                                    textAlign: TextAlign.left,
                                    style: AppStyle
                                        .txtMontserratRomanMedium10Green400,
                                  ),
                                ),
                              ),
                              Padding(
                                padding: getPadding(
                                  top: 50,
                                ),
                                child: Text(
                                  "lbl_12_000_00".tr,
                                  overflow: TextOverflow.ellipsis,
                                  textAlign: TextAlign.left,
                                  style:
                                      AppStyle.txtMontserratRomanMedium10Red400,
                                ),
                              ),
                              Align(
                                alignment: Alignment.centerRight,
                                child: Padding(
                                  padding: getPadding(
                                    left: 7,
                                    top: 49,
                                  ),
                                  child: Text(
                                    "lbl_2200_00".tr,
                                    overflow: TextOverflow.ellipsis,
                                    textAlign: TextAlign.left,
                                    style: AppStyle
                                        .txtMontserratRomanMedium10Red400,
                                  ),
                                ),
                              ),
                              Align(
                                alignment: Alignment.centerRight,
                                child: Padding(
                                  padding: getPadding(
                                    left: 3,
                                    top: 50,
                                  ),
                                  child: Text(
                                    "lbl_9000_00".tr,
                                    overflow: TextOverflow.ellipsis,
                                    textAlign: TextAlign.left,
                                    style: AppStyle
                                        .txtMontserratRomanMedium10Green400,
                                  ),
                                ),
                              ),
                            ],
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
        bottomNavigationBar: CustomBottomBar(
          onChanged: (BottomBarEnum type) {
            controller.type.value = type;
          },
        ),
      ),
    );
  }

  ///Handling view based on bottom click actions
  Widget getCurrentWidget(BottomBarEnum type) {
    switch (type) {
      case BottomBarEnum.Home:
        return Iphone14ProMaxFortyonePage();
      case BottomBarEnum.Iconlylightou:
        return Iphone14ProMaxFifteenPage();
      case BottomBarEnum.Maximize:
        return Iphone14ProMaxSixteenPage();
      case BottomBarEnum.Healthiconsui:
        return Iphone14ProMaxSeventeenPage();
      default:
        return getDefaultWidget();
    }
  }
}
