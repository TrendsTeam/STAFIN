import '../controller/iphone_14_pro_max_thirtytwo_controller.dart';
import '../models/listone_item_model.dart';
import 'package:flutter/material.dart';
import 'package:stafin_v1/core/app_export.dart';

// ignore: must_be_immutable
class ListoneItemWidget extends StatelessWidget {
  ListoneItemWidget(this.listoneItemModelObj);

  ListoneItemModel listoneItemModelObj;

  var controller = Get.find<Iphone14ProMaxThirtytwoController>();

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: getPadding(
        top: 31.395005,
        right: 5,
        bottom: 31.395005,
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisSize: MainAxisSize.max,
        children: [
          Padding(
            padding: getPadding(
              top: 1,
              bottom: 1,
            ),
            child: Text(
              "lbl_1".tr,
              overflow: TextOverflow.ellipsis,
              textAlign: TextAlign.left,
              style: AppStyle.txtMontserratRomanBold35,
            ),
          ),
          Padding(
            padding: getPadding(
              left: 122,
              bottom: 1,
            ),
            child: Text(
              "lbl_22".tr,
              overflow: TextOverflow.ellipsis,
              textAlign: TextAlign.left,
              style: AppStyle.txtMontserratRomanBold35,
            ),
          ),
          Padding(
            padding: getPadding(
              left: 114,
              top: 1,
            ),
            child: Text(
              "lbl_33".tr,
              overflow: TextOverflow.ellipsis,
              textAlign: TextAlign.left,
              style: AppStyle.txtMontserratRomanBold35,
            ),
          ),
        ],
      ),
    );
  }
}
