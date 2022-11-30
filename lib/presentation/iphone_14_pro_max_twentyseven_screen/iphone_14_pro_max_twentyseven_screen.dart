import '../iphone_14_pro_max_twentyseven_screen/widgets/listcar_item_widget.dart';
import 'controller/iphone_14_pro_max_twentyseven_controller.dart';
import 'models/listcar_item_model.dart';
import 'package:flutter/material.dart';
import 'package:stafin_v1/core/app_export.dart';
import 'package:stafin_v1/presentation/iphone_14_pro_max_fifteen_page/iphone_14_pro_max_fifteen_page.dart';
import 'package:stafin_v1/presentation/iphone_14_pro_max_fortyone_page/iphone_14_pro_max_fortyone_page.dart';
import 'package:stafin_v1/presentation/iphone_14_pro_max_seventeen_page/iphone_14_pro_max_seventeen_page.dart';
import 'package:stafin_v1/presentation/iphone_14_pro_max_sixteen_page/iphone_14_pro_max_sixteen_page.dart';
import 'package:stafin_v1/widgets/app_bar/appbar_stack_1.dart';
import 'package:stafin_v1/widgets/app_bar/appbar_title.dart';
import 'package:stafin_v1/widgets/app_bar/custom_app_bar.dart';
import 'package:stafin_v1/widgets/custom_bottom_bar.dart';

class Iphone14ProMaxTwentysevenScreen
    extends GetWidget<Iphone14ProMaxTwentysevenController> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: ColorConstant.whiteA700,
        appBar: CustomAppBar(
          height: getVerticalSize(
            56.00,
          ),
          leadingWidth: 69,
          leading: AppbarStack1(
            margin: getMargin(
              left: 45,
              top: 15,
              bottom: 16,
            ),
          ),
          centerTitle: true,
          title: AppbarTitle(
            text: "lbl_spending".tr,
          ),
        ),
        body: Container(
          width: size.width,
          child: SingleChildScrollView(
            child: Padding(
              padding: getPadding(
                left: 45,
                top: 36,
                right: 45,
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  Obx(
                    () => ListView.builder(
                      physics: BouncingScrollPhysics(),
                      shrinkWrap: true,
                      itemCount: controller.iphone14ProMaxTwentysevenModelObj
                          .value.listcarItemList.length,
                      itemBuilder: (context, index) {
                        ListcarItemModel model = controller
                            .iphone14ProMaxTwentysevenModelObj
                            .value
                            .listcarItemList[index];
                        return ListcarItemWidget(
                          model,
                        );
                      },
                    ),
                  ),
                  Align(
                    alignment: Alignment.center,
                    child: Container(
                      width: getHorizontalSize(
                        333.00,
                      ),
                      margin: getMargin(
                        top: 61,
                        right: 1,
                      ),
                      child: RichText(
                        text: TextSpan(
                          children: [
                            TextSpan(
                              text: "msg_you_have_a_steady2".tr,
                              style: TextStyle(
                                color: ColorConstant.black900,
                                fontSize: getFontSize(
                                  10,
                                ),
                                fontFamily: 'Montserrat',
                                fontWeight: FontWeight.w400,
                              ),
                            ),
                            TextSpan(
                              text: "lbl_keep_it_up".tr,
                              style: TextStyle(
                                color: ColorConstant.black900,
                                fontSize: getFontSize(
                                  12,
                                ),
                                fontFamily: 'Montserrat',
                                fontWeight: FontWeight.w700,
                              ),
                            ),
                            TextSpan(
                              text: "lbl".tr,
                              style: TextStyle(
                                color: ColorConstant.black900,
                                fontSize: getFontSize(
                                  12,
                                ),
                                fontFamily: 'Montserrat',
                                fontWeight: FontWeight.w400,
                              ),
                            ),
                          ],
                        ),
                        textAlign: TextAlign.left,
                      ),
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
