import '../controller/iphone_14_pro_max_eighteen_controller.dart';
import '../models/listellipseseventeen_item_model.dart';
import 'package:flutter/material.dart';
import 'package:stafin/core/app_export.dart';

// ignore: must_be_immutable
class ListellipseseventeenItemWidget extends StatelessWidget {
  ListellipseseventeenItemWidget(this.listellipseseventeenItemModelObj);

  ListellipseseventeenItemModel listellipseseventeenItemModelObj;

  var controller = Get.find<Iphone14ProMaxEighteenController>();

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
                Padding(
                  padding: getPadding(
                    left: 11,
                    top: 7,
                    bottom: 7,
                  ),
                  child: Text(
                    "lbl_dstv".tr,
                    overflow: TextOverflow.ellipsis,
                    textAlign: TextAlign.left,
                    style: AppStyle.txtMontserratRomanMedium12,
                  ),
                ),
              ],
            ),
          ),
          Container(
            margin: getMargin(
              left: 129,
              top: 23,
              right: 20,
              bottom: 20,
            ),
            child: RichText(
              text: TextSpan(
                children: [
                  TextSpan(
                    text: "lbl_monthly".tr,
                    style: TextStyle(
                      color: ColorConstant.deepPurple500,
                      fontSize: getFontSize(
                        12,
                      ),
                      fontFamily: 'Montserrat',
                      fontWeight: FontWeight.w400,
                    ),
                  ),
                  TextSpan(
                    text: "lbl_9000".tr,
                    style: TextStyle(
                      color: ColorConstant.deepPurple500,
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
        ],
      ),
    );
  }
}
