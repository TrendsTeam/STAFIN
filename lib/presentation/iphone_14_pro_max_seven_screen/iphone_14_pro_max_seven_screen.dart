import 'controller/iphone_14_pro_max_seven_controller.dart';import 'package:flutter/material.dart';import 'package:stafin_v1/core/app_export.dart';import 'package:stafin_v1/widgets/custom_button.dart';class Iphone14ProMaxSevenScreen extends GetWidget<Iphone14ProMaxSevenController> {@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: ColorConstant.whiteA700, body: Container(width: size.width, child: SingleChildScrollView(child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, mainAxisAlignment: MainAxisAlignment.start, children: [Padding(padding: getPadding(left: 45, top: 123, right: 45), child: Text("lbl3".tr, overflow: TextOverflow.ellipsis, textAlign: TextAlign.left, style: AppStyle.txtMontserratRomanSemiBold25)), Padding(padding: getPadding(left: 44, top: 6, right: 44), child: Text("lbl_verification".tr, overflow: TextOverflow.ellipsis, textAlign: TextAlign.left, style: AppStyle.txtMontserratRomanMedium25)), Padding(padding: getPadding(left: 45, top: 56, right: 45), child: Text("msg_enter_5_digit_otp".tr, overflow: TextOverflow.ellipsis, textAlign: TextAlign.left, style: AppStyle.txtMontserratRomanRegular15)), Padding(padding: getPadding(left: 45, top: 4, right: 45), child: Text("msg_cdimdas01_gmail_com".tr, overflow: TextOverflow.ellipsis, textAlign: TextAlign.left, style: AppStyle.txtMontserratRomanSemiBold14)), Align(alignment: Alignment.center, child: Padding(padding: getPadding(left: 44, top: 15, right: 44), child: Row(mainAxisAlignment: MainAxisAlignment.start, crossAxisAlignment: CrossAxisAlignment.center, mainAxisSize: MainAxisSize.max, children: [Container(height: getVerticalSize(54.00), width: getHorizontalSize(59.00), decoration: BoxDecoration(color: ColorConstant.whiteA700, borderRadius: BorderRadius.circular(getHorizontalSize(10.00)), border: Border.all(color: ColorConstant.black900, width: getHorizontalSize(0.20)))), Container(height: getVerticalSize(54.00), width: getHorizontalSize(59.00), margin: getMargin(left: 11), decoration: BoxDecoration(color: ColorConstant.whiteA700, borderRadius: BorderRadius.circular(getHorizontalSize(10.00)), border: Border.all(color: ColorConstant.black900, width: getHorizontalSize(0.20)))), Container(height: getVerticalSize(54.00), width: getHorizontalSize(59.00), margin: getMargin(left: 11), decoration: BoxDecoration(color: ColorConstant.whiteA700, borderRadius: BorderRadius.circular(getHorizontalSize(10.00)), border: Border.all(color: ColorConstant.black900, width: getHorizontalSize(0.20)))), Container(height: getVerticalSize(54.00), width: getHorizontalSize(59.00), margin: getMargin(left: 11), decoration: BoxDecoration(color: ColorConstant.whiteA700, borderRadius: BorderRadius.circular(getHorizontalSize(10.00)), border: Border.all(color: ColorConstant.black900, width: getHorizontalSize(0.20)))), Container(height: getVerticalSize(54.00), width: getHorizontalSize(59.00), margin: getMargin(left: 11), decoration: BoxDecoration(color: ColorConstant.whiteA700, borderRadius: BorderRadius.circular(getHorizontalSize(10.00)), border: Border.all(color: ColorConstant.black900, width: getHorizontalSize(0.20))))]))), Padding(padding: getPadding(left: 45, top: 55, right: 45), child: Text("lbl_resend_otp".tr, overflow: TextOverflow.ellipsis, textAlign: TextAlign.left, style: AppStyle.txtMontserratRomanSemiBold14Red300)), CustomButton(width: 339, text: "lbl_verify".tr, margin: getMargin(left: 44, top: 43, right: 44, bottom: 5), onTap: onTapVerify, alignment: Alignment.center)]))))); } 
onTapVerify() { Get.toNamed(AppRoutes.iphone14ProMaxEightScreen); } 
 }