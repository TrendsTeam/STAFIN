import 'controller/iphone_14_pro_max_twentythree_controller.dart';import 'package:flutter/material.dart';import 'package:stafin_v1/core/app_export.dart';import 'package:stafin_v1/presentation/iphone_14_pro_max_fifteen_page/iphone_14_pro_max_fifteen_page.dart';import 'package:stafin_v1/presentation/iphone_14_pro_max_fortyone_page/iphone_14_pro_max_fortyone_page.dart';import 'package:stafin_v1/presentation/iphone_14_pro_max_seventeen_page/iphone_14_pro_max_seventeen_page.dart';import 'package:stafin_v1/presentation/iphone_14_pro_max_sixteen_page/iphone_14_pro_max_sixteen_page.dart';import 'package:stafin_v1/widgets/app_bar/appbar_stack_1.dart';import 'package:stafin_v1/widgets/app_bar/appbar_title.dart';import 'package:stafin_v1/widgets/app_bar/custom_app_bar.dart';import 'package:stafin_v1/widgets/custom_bottom_bar.dart';class Iphone14ProMaxTwentythreeScreen extends GetWidget<Iphone14ProMaxTwentythreeController> {@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: ColorConstant.whiteA700, appBar: CustomAppBar(height: getVerticalSize(56.00), leadingWidth: 69, leading: AppbarStack1(margin: getMargin(left: 45, top: 16, bottom: 15), onTap: onTapStackarrowone4), centerTitle: true, title: AppbarTitle(text: "lbl_showmax2".tr)), body: Container(width: size.width, child: SingleChildScrollView(child: Padding(padding: getPadding(left: 45, top: 38, right: 45), child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.center, mainAxisAlignment: MainAxisAlignment.start, children: [Padding(padding: getPadding(left: 82, right: 82), child: ClipRRect(borderRadius: BorderRadius.circular(getHorizontalSize(40.00)), child: CommonImageView(imagePath: ImageConstant.imgEllipse231, height: getSize(80.00), width: getSize(80.00), fit: BoxFit.cover))), Padding(padding: getPadding(left: 82, top: 21, right: 82), child: Text("lbl_abimbola_james".tr, overflow: TextOverflow.ellipsis, textAlign: TextAlign.left, style: AppStyle.txtMontserratRomanMedium15)), Padding(padding: getPadding(left: 82, top: 6, right: 82), child: Text("lbl_id_4526896354".tr, overflow: TextOverflow.ellipsis, textAlign: TextAlign.left, style: AppStyle.txtMontserratRomanRegular12Deeppurple500)), Container(margin: getMargin(left: 82, top: 60, right: 82), child: RichText(text: TextSpan(children: [TextSpan(text: "lbl_3200_00".tr, style: TextStyle(color: ColorConstant.deepPurple500, fontSize: getFontSize(18), fontFamily: 'Montserrat', fontWeight: FontWeight.w700)), TextSpan(text: " ", style: TextStyle(color: ColorConstant.teal300, fontSize: getFontSize(18), fontFamily: 'Montserrat', fontWeight: FontWeight.w700)), TextSpan(text: "lbl_weekly2".tr, style: TextStyle(color: ColorConstant.black900, fontSize: getFontSize(18), fontFamily: 'Montserrat', fontWeight: FontWeight.w400))]), textAlign: TextAlign.left)), Align(alignment: Alignment.centerLeft, child: Container(margin: getMargin(top: 89), decoration: AppDecoration.outlineBlack9000c.copyWith(borderRadius: BorderRadiusStyle.roundedBorder10), child: Row(mainAxisAlignment: MainAxisAlignment.center, crossAxisAlignment: CrossAxisAlignment.center, mainAxisSize: MainAxisSize.max, children: [Padding(padding: getPadding(top: 18, bottom: 18), child: CommonImageView(svgPath: ImageConstant.imgClose, height: getSize(18.00), width: getSize(18.00))), Padding(padding: getPadding(left: 7, top: 16, bottom: 18), child: Text("lbl_terminate".tr, overflow: TextOverflow.ellipsis, textAlign: TextAlign.left, style: AppStyle.txtMontserratRomanSemiBold15Red600))])))])))), bottomNavigationBar: CustomBottomBar(onChanged: (BottomBarEnum type) {controller.type.value = type;}))); } 
Widget getCurrentWidget(BottomBarEnum type) { switch (type) {case BottomBarEnum.Home: return Iphone14ProMaxFortyonePage(); case BottomBarEnum.Iconlylightou: return Iphone14ProMaxFifteenPage(); case BottomBarEnum.Maximize: return Iphone14ProMaxSixteenPage(); case BottomBarEnum.Healthiconsui: return Iphone14ProMaxSeventeenPage(); default: return getDefaultWidget();} } 
onTapStackarrowone4() { Get.toNamed(AppRoutes.iphone14ProMaxEighteenScreen); } 
 }