import '../iphone_14_pro_max_eighteen_page/widgets/listellipseseventeen_item_widget.dart';
import 'controller/iphone_14_pro_max_eighteen_controller.dart';
import 'models/iphone_14_pro_max_eighteen_model.dart';
import 'models/listellipseseventeen_item_model.dart';
import 'package:flutter/material.dart';
import 'package:stafin/core/app_export.dart';
import 'package:stafin/widgets/app_bar/appbar_title.dart';
import 'package:stafin/widgets/app_bar/custom_app_bar.dart';

// ignore_for_file: must_be_immutable
class Iphone14ProMaxEighteenPage extends StatelessWidget {
  Iphone14ProMaxEighteenController controller = Get.put(
      Iphone14ProMaxEighteenController(Iphone14ProMaxEighteenModel().obs));

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: Colors.transparent,
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
            Container(
              margin: getMargin(
                left: 51,
                top: 15,
                right: 51,
                bottom: 17,
              ),
              decoration: AppDecoration.outlineBlack9001.copyWith(
                borderRadius: BorderRadiusStyle.roundedBorder5,
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  Align(
                    alignment: Alignment.center,
                    child: Padding(
                      padding: getPadding(
                        left: 2,
                        top: 2,
                        right: 1,
                        bottom: 1,
                      ),
                      child: CommonImageView(
                        svgPath: ImageConstant.imgPlus,
                        height: getSize(
                          20.00,
                        ),
                        width: getSize(
                          20.00,
                        ),
                      ),
                    ),
                  ),
                ],
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
                      .listellipseseventeenItemList.length,
                  itemBuilder: (context, index) {
                    ListellipseseventeenItemModel model = controller
                        .iphone14ProMaxEighteenModelObj
                        .value
                        .listellipseseventeenItemList[index];
                    return ListellipseseventeenItemWidget(
                      model,
                    );
                  },
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
