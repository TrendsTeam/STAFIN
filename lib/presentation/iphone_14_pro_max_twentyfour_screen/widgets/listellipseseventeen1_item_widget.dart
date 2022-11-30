import '../controller/iphone_14_pro_max_twentyfour_controller.dart';
import '../models/listellipseseventeen1_item_model.dart';
import 'package:flutter/material.dart';
import 'package:stafin/core/app_export.dart';

// ignore: must_be_immutable
class Listellipseseventeen1ItemWidget extends StatelessWidget {
  Listellipseseventeen1ItemWidget(this.listellipseseventeen1ItemModelObj,
      {this.onTapRowbalanced});

  Listellipseseventeen1ItemModel listellipseseventeen1ItemModelObj;

  var controller = Get.find<Iphone14ProMaxTwentyfourController>();

  VoidCallback? onTapRowbalanced;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        onTapRowbalanced!();
      },
      child: Container(
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
                left: 18,
                top: 15,
                bottom: 14,
              ),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisSize: MainAxisSize.min,
                children: [
                  ClipRRect(
                    borderRadius: BorderRadius.circular(
                      getHorizontalSize(
                        15.00,
                      ),
                    ),
                    child: CommonImageView(
                      imagePath: ImageConstant.imgEllipse1730x30,
                      height: getSize(
                        30.00,
                      ),
                      width: getSize(
                        30.00,
                      ),
                      fit: BoxFit.cover,
                    ),
                  ),
                  Padding(
                    padding: getPadding(
                      left: 11,
                      top: 7,
                      bottom: 8,
                    ),
                    child: Text(
                      "lbl_risevest".tr,
                      overflow: TextOverflow.ellipsis,
                      textAlign: TextAlign.left,
                      style: AppStyle.txtMontserratRomanMedium12,
                    ),
                  ),
                ],
              ),
            ),
            Padding(
              padding: getPadding(
                left: 150,
                top: 22,
                right: 23,
                bottom: 21,
              ),
              child: Text(
                "lbl_balanced".tr,
                overflow: TextOverflow.ellipsis,
                textAlign: TextAlign.left,
                style: AppStyle.txtMontserratRomanRegular12Indigo500,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
