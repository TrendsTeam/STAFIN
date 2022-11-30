import '../controller/iphone_14_pro_max_twentyfive_controller.dart';
import '../models/listmyhousing_item_model.dart';
import 'package:flutter/material.dart';
import 'package:stafin_v1/core/app_export.dart';

// ignore: must_be_immutable
class ListmyhousingItemWidget extends StatelessWidget {
  ListmyhousingItemWidget(this.listmyhousingItemModelObj);

  ListmyhousingItemModel listmyhousingItemModelObj;

  var controller = Get.find<Iphone14ProMaxTwentyfiveController>();

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: getMargin(
        top: 21.0,
        bottom: 21.0,
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
              left: 24,
              top: 16,
              bottom: 14,
            ),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.start,
              children: [
                Align(
                  alignment: Alignment.center,
                  child: Padding(
                    padding: getPadding(
                      right: 1,
                    ),
                    child: Text(
                      "lbl_my_housing".tr,
                      overflow: TextOverflow.ellipsis,
                      textAlign: TextAlign.left,
                      style: AppStyle.txtMontserratRomanMedium12,
                    ),
                  ),
                ),
                Padding(
                  padding: getPadding(
                    top: 9,
                  ),
                  child: Text(
                    "lbl_real_estates".tr,
                    overflow: TextOverflow.ellipsis,
                    textAlign: TextAlign.left,
                    style: AppStyle.txtMontserratRomanRegular12Deeppurple500,
                  ),
                ),
              ],
            ),
          ),
          Padding(
            padding: getPadding(
              left: 158,
              top: 26,
              right: 27,
              bottom: 25,
            ),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.center,
              mainAxisSize: MainAxisSize.min,
              children: [
                Container(
                  height: getVerticalSize(
                    20.00,
                  ),
                  width: getHorizontalSize(
                    19.00,
                  ),
                  child: Stack(
                    alignment: Alignment.centerLeft,
                    children: [
                      Align(
                        alignment: Alignment.centerRight,
                        child: Padding(
                          padding: getPadding(
                            left: 10,
                            top: 6,
                            right: 3,
                            bottom: 6,
                          ),
                          child: CommonImageView(
                            svgPath: ImageConstant.imgFile,
                            height: getVerticalSize(
                              8.00,
                            ),
                            width: getHorizontalSize(
                              12.00,
                            ),
                          ),
                        ),
                      ),
                      Align(
                        alignment: Alignment.centerLeft,
                        child: Container(
                          height: getVerticalSize(
                            20.00,
                          ),
                          width: getHorizontalSize(
                            19.00,
                          ),
                          decoration: BoxDecoration(
                            color: ColorConstant.green40033,
                            borderRadius: BorderRadius.circular(
                              getHorizontalSize(
                                10.00,
                              ),
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                Padding(
                  padding: getPadding(
                    left: 5,
                    top: 2,
                    bottom: 2,
                  ),
                  child: Text(
                    "lbl_10_5".tr,
                    overflow: TextOverflow.ellipsis,
                    textAlign: TextAlign.left,
                    style: AppStyle.txtMontserratRomanLight12,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
