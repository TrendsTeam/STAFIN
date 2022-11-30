import '../controller/iphone_14_pro_max_eleven_controller.dart';
import '../models/listellipsethree_item_model.dart';
import 'package:flutter/material.dart';
import 'package:stafin_v1/core/app_export.dart';

// ignore: must_be_immutable
class ListellipsethreeItemWidget extends StatelessWidget {
  ListellipsethreeItemWidget(this.listellipsethreeItemModelObj);

  ListellipsethreeItemModel listellipsethreeItemModelObj;

  var controller = Get.find<Iphone14ProMaxElevenController>();

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: Alignment.center,
      child: Container(
        margin: getMargin(
          top: 20.0,
          bottom: 20.0,
        ),
        decoration: AppDecoration.outlineBlack900.copyWith(
          borderRadius: BorderRadiusStyle.roundedBorder10,
        ),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisSize: MainAxisSize.max,
          children: [
            Padding(
              padding: getPadding(
                left: 16,
                top: 9,
                bottom: 10,
              ),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisSize: MainAxisSize.min,
                children: [
                  Container(
                    decoration: AppDecoration.fillOrange900.copyWith(
                      borderRadius: BorderRadiusStyle.roundedBorder17,
                    ),
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      mainAxisAlignment: MainAxisAlignment.start,
                      children: [
                        Padding(
                          padding: getPadding(
                            left: 3,
                            top: 3,
                            right: 2,
                            bottom: 2,
                          ),
                          child: ClipRRect(
                            borderRadius: BorderRadius.circular(
                              getHorizontalSize(
                                15.00,
                              ),
                            ),
                            child: CommonImageView(
                              imagePath: ImageConstant.imgEllipse3,
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
                      ],
                    ),
                  ),
                  Padding(
                    padding: getPadding(
                      left: 15,
                      top: 10,
                      bottom: 9,
                    ),
                    child: Text(
                      "lbl_0451065782".tr,
                      overflow: TextOverflow.ellipsis,
                      textAlign: TextAlign.left,
                      style: AppStyle.txtMontserratRomanRegular12,
                    ),
                  ),
                ],
              ),
            ),
            Padding(
              padding: getPadding(
                left: 131,
                top: 19,
                right: 24,
                bottom: 19,
              ),
              child: Text(
                "lbl_current".tr,
                overflow: TextOverflow.ellipsis,
                textAlign: TextAlign.left,
                style: AppStyle.txtMontserratRomanMedium12Orange900b2,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
