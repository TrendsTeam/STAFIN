import 'controller/iphone_14_pro_max_twentyone_tab_container_controller.dart';
import 'package:flutter/material.dart';
import 'package:stafin_v1/core/app_export.dart';
import 'package:stafin_v1/presentation/iphone_14_pro_max_fifteen_page/iphone_14_pro_max_fifteen_page.dart';
import 'package:stafin_v1/presentation/iphone_14_pro_max_fortyone_page/iphone_14_pro_max_fortyone_page.dart';
import 'package:stafin_v1/presentation/iphone_14_pro_max_seventeen_page/iphone_14_pro_max_seventeen_page.dart';
import 'package:stafin_v1/presentation/iphone_14_pro_max_sixteen_page/iphone_14_pro_max_sixteen_page.dart';
import 'package:stafin_v1/presentation/iphone_14_pro_max_twentytwo_page/iphone_14_pro_max_twentytwo_page.dart';
import 'package:stafin_v1/widgets/app_bar/appbar_stack_1.dart';
import 'package:stafin_v1/widgets/app_bar/appbar_title.dart';
import 'package:stafin_v1/widgets/app_bar/custom_app_bar.dart';
import 'package:stafin_v1/widgets/custom_bottom_bar.dart';

class Iphone14ProMaxTwentyoneTabContainerScreen
    extends GetWidget<Iphone14ProMaxTwentyoneTabContainerController> {
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
          title: AppbarTitle(
            text: "msg_add_subscription".tr,
            margin: getMargin(
              left: 70,
            ),
          ),
        ),
        body: Container(
          width: size.width,
          child: SingleChildScrollView(
            child: Padding(
              padding: getPadding(
                left: 41,
                top: 46,
                right: 41,
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  Container(
                    width: getHorizontalSize(
                      347.00,
                    ),
                    child: TabBar(
                      controller: controller.group159Controller,
                      tabs: [
                        Tab(
                          text: "lbl_branded".tr,
                        ),
                        Tab(
                          text: "lbl_personal".tr,
                        ),
                      ],
                      labelColor: ColorConstant.deepPurple500,
                      unselectedLabelColor: ColorConstant.deepPurple500,
                      indicator: BoxDecoration(
                        color: ColorConstant.whiteA700,
                        borderRadius: BorderRadius.circular(
                          getHorizontalSize(
                            10.00,
                          ),
                        ),
                        boxShadow: [
                          BoxShadow(
                            color: ColorConstant.black9000c,
                            spreadRadius: getHorizontalSize(
                              2.00,
                            ),
                            blurRadius: getHorizontalSize(
                              2.00,
                            ),
                            offset: Offset(
                              0,
                              4,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                  Container(
                    margin: getMargin(
                      left: 4,
                      top: 60,
                      right: 4,
                    ),
                    height: getVerticalSize(
                      438.00,
                    ),
                    child: TabBarView(
                      controller: controller.group159Controller,
                      children: [
                        Iphone14ProMaxTwentytwoPage(),
                        Iphone14ProMaxTwentytwoPage(),
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
