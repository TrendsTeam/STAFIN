import '../iphone_14_pro_max_fortyone_page/widgets/listellipseseventeen_item_widget.dart';
import 'controller/iphone_14_pro_max_fortyone_controller.dart';
import 'models/iphone_14_pro_max_fortyone_model.dart';
import 'models/listellipseseventeen_item_model.dart';
import 'package:flutter/material.dart';
import 'package:stafin_v1/core/app_export.dart';
import 'package:stafin_v1/widgets/app_bar/appbar_stack.dart';
import 'package:stafin_v1/widgets/app_bar/appbar_title.dart';
import 'package:stafin_v1/widgets/app_bar/custom_app_bar.dart';

// ignore_for_file: must_be_immutable
class Iphone14ProMaxFortyonePage extends StatelessWidget {
  Iphone14ProMaxFortyoneController controller = Get.put(
      Iphone14ProMaxFortyoneController(Iphone14ProMaxFortyoneModel().obs));

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
            text: "msg_office_activities".tr,
            margin: getMargin(
              left: 45,
            ),
          ),
          actions: [
            AppbarStack(
              margin: getMargin(
                left: 51,
                top: 16,
                right: 51,
                bottom: 16,
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
                top: 32,
                right: 45,
              ),
              child: Obx(
                () => ListView.builder(
                  physics: BouncingScrollPhysics(),
                  shrinkWrap: true,
                  itemCount: controller.iphone14ProMaxFortyoneModelObj.value
                      .listellipseseventeenItemList.length,
                  itemBuilder: (context, index) {
                    ListellipseseventeenItemModel model = controller
                        .iphone14ProMaxFortyoneModelObj
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
