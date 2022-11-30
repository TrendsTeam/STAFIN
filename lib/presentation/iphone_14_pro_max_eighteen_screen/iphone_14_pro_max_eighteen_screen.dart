import '../iphone_14_pro_max_eighteen_screen/widgets/listellipseseventeen1_item_widget.dart';
import 'controller/iphone_14_pro_max_eighteen_controller.dart';
import 'models/listellipseseventeen1_item_model.dart';
import 'package:flutter/material.dart';
import 'package:stafin_v1/core/app_export.dart';
import 'package:stafin_v1/presentation/iphone_14_pro_max_fifteen_page/iphone_14_pro_max_fifteen_page.dart';
import 'package:stafin_v1/presentation/iphone_14_pro_max_fortyone_page/iphone_14_pro_max_fortyone_page.dart';
import 'package:stafin_v1/presentation/iphone_14_pro_max_seventeen_page/iphone_14_pro_max_seventeen_page.dart';
import 'package:stafin_v1/presentation/iphone_14_pro_max_sixteen_page/iphone_14_pro_max_sixteen_page.dart';
import 'package:stafin_v1/widgets/app_bar/appbar_stack.dart';
import 'package:stafin_v1/widgets/app_bar/appbar_title.dart';
import 'package:stafin_v1/widgets/app_bar/custom_app_bar.dart';
import 'package:stafin_v1/widgets/custom_bottom_bar.dart';

class Iphone14ProMaxEighteenScreen
    extends GetWidget<Iphone14ProMaxEighteenController> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: ColorConstant.whiteA700,
        appBar: CustomAppBar(
          height: getVerticalSize(
            56.00,
          ),
          title: AppbarTitle(
            text: "lbl_subscriptions".tr,
            margin: getMargin(
              left: 45,
            ),
          ),
          actions: [
            AppbarStack(
              margin: getMargin(
                left: 51,
                top: 15,
                right: 51,
                bottom: 17,
              ),
            ),
          ],
        ),
        body: Container(
          width: size.width,
          child: SingleChildScrollView(
            child: Padding(
              padding: getPadding(
                left: 45,
                top: 31,
                right: 45,
              ),
              child: Obx(
                () => ListView.builder(
                  physics: BouncingScrollPhysics(),
                  shrinkWrap: true,
                  itemCount: controller.iphone14ProMaxEighteenModelObj.value
                      .listellipseseventeen1ItemList.length,
                  itemBuilder: (context, index) {
                    Listellipseseventeen1ItemModel model = controller
                        .iphone14ProMaxEighteenModelObj
                        .value
                        .listellipseseventeen1ItemList[index];
                    return Listellipseseventeen1ItemWidget(
                      model,
                    );
                  },
                ),
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
