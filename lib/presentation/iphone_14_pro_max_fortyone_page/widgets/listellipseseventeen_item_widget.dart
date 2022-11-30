import '../controller/iphone_14_pro_max_fortyone_controller.dart';
import '../models/listellipseseventeen_item_model.dart';
import 'package:flutter/material.dart';
import 'package:stafin_v1/core/app_export.dart';

// ignore: must_be_immutable
class ListellipseseventeenItemWidget extends StatelessWidget {
  ListellipseseventeenItemWidget(this.listellipseseventeenItemModelObj);

  ListellipseseventeenItemModel listellipseseventeenItemModelObj;

  var controller = Get.find<Iphone14ProMaxFortyoneController>();

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: getMargin(
        top: 19.0,
        bottom: 19.0,
      ),
      decoration: AppDecoration.outlineBlack90007.copyWith(
        borderRadius: BorderRadiusStyle.roundedBorder10,
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisSize: MainAxisSize.max,
        children: [
          Padding(
            padding: getPadding(
              left: 17,
              top: 15,
              bottom: 14,
            ),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(
                getHorizontalSize(
                  15.00,
                ),
              ),
              child: CommonImageView(
                imagePath: ImageConstant.imgEllipse17,
                height: getSize(
                  30.00,
                ),
                width: getSize(
                  30.00,
                ),
                fit: BoxFit.cover,
              ),
            ),
          ),
          Padding(
            padding: getPadding(
              left: 11,
              top: 23,
              bottom: 20,
            ),
            child: Text(
              "msg_checked_inn_using".tr,
              overflow: TextOverflow.ellipsis,
              textAlign: TextAlign.left,
              style: AppStyle.txtMontserratRomanMedium12,
            ),
          ),
          Padding(
            padding: getPadding(
              left: 34,
              top: 22,
              right: 20,
              bottom: 21,
            ),
            child: Text(
              "lbl_time_09_00_am".tr,
              overflow: TextOverflow.ellipsis,
              textAlign: TextAlign.left,
              style: AppStyle.txtMontserratRomanRegular12Deeppurple500,
            ),
          ),
        ],
      ),
    );
  }
}
