import '../controller/iphone_14_pro_max_twentysix_controller.dart';
import '../models/listrectangleten_item_model.dart';
import 'package:flutter/material.dart';
import 'package:stafin_v1/core/app_export.dart';

// ignore: must_be_immutable
class ListrectangletenItemWidget extends StatelessWidget {
  ListrectangletenItemWidget(this.listrectangletenItemModelObj);

  ListrectangletenItemModel listrectangletenItemModelObj;

  var controller = Get.find<Iphone14ProMaxTwentysixController>();

  @override
  Widget build(BuildContext context) {
    return Container(
      height: getVerticalSize(
        106.00,
      ),
      width: getHorizontalSize(
        343.00,
      ),
      margin: getMargin(
        top: 21.5,
        bottom: 21.5,
      ),
      child: Stack(
        alignment: Alignment.center,
        children: [
          Align(
            alignment: Alignment.centerLeft,
            child: ClipRRect(
              borderRadius: BorderRadius.circular(
                getHorizontalSize(
                  10.00,
                ),
              ),
              child: CommonImageView(
                imagePath: ImageConstant.imgRectangle10,
                height: getVerticalSize(
                  106.00,
                ),
                width: getHorizontalSize(
                  343.00,
                ),
                fit: BoxFit.cover,
              ),
            ),
          ),
          Align(
            alignment: Alignment.center,
            child: Padding(
              padding: getPadding(
                left: 21,
                top: 17,
                right: 24,
                bottom: 17,
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    mainAxisSize: MainAxisSize.max,
                    children: [
                      Row(
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
                              imagePath: ImageConstant.imgEllipse174,
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
                              "lbl_0451065782".tr,
                              overflow: TextOverflow.ellipsis,
                              textAlign: TextAlign.left,
                              style:
                                  AppStyle.txtMontserratRomanMedium12WhiteA700,
                            ),
                          ),
                        ],
                      ),
                      Padding(
                        padding: getPadding(
                          top: 8,
                          bottom: 6,
                        ),
                        child: Text(
                          "lbl_savings".tr,
                          overflow: TextOverflow.ellipsis,
                          textAlign: TextAlign.left,
                          style:
                              AppStyle.txtMontserratRomanMedium12Deeporange51,
                        ),
                      ),
                    ],
                  ),
                  Padding(
                    padding: getPadding(
                      top: 19,
                      right: 10,
                    ),
                    child: Text(
                      "lbl_180_000_00".tr,
                      overflow: TextOverflow.ellipsis,
                      textAlign: TextAlign.left,
                      style: AppStyle.txtMontserratRomanSemiBold18,
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
