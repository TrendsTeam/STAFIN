import '../controller/iphone_14_pro_max_twentyseven_controller.dart';
import '../models/listcar_item_model.dart';
import 'package:flutter/material.dart';
import 'package:stafin_v1/core/app_export.dart';

// ignore: must_be_immutable
class ListcarItemWidget extends StatelessWidget {
  ListcarItemWidget(this.listcarItemModelObj);

  ListcarItemModel listcarItemModelObj;

  var controller = Get.find<Iphone14ProMaxTwentysevenController>();

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: getPadding(
        top: 16.0,
        bottom: 16.0,
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisSize: MainAxisSize.max,
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                height: getSize(
                  35.00,
                ),
                width: getSize(
                  35.00,
                ),
                child: Stack(
                  alignment: Alignment.centerLeft,
                  children: [
                    Align(
                      alignment: Alignment.center,
                      child: Padding(
                        padding: getPadding(
                          left: 8,
                          top: 8,
                          right: 7,
                          bottom: 7,
                        ),
                        child: CommonImageView(
                          svgPath: ImageConstant.imgCar,
                          height: getSize(
                            20.00,
                          ),
                          width: getSize(
                            20.00,
                          ),
                        ),
                      ),
                    ),
                    Align(
                      alignment: Alignment.centerLeft,
                      child: Container(
                        height: getSize(
                          35.00,
                        ),
                        width: getSize(
                          35.00,
                        ),
                        decoration: BoxDecoration(
                          color: ColorConstant.teal30033,
                          borderRadius: BorderRadius.circular(
                            getHorizontalSize(
                              17.50,
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
                  left: 14,
                  top: 12,
                  bottom: 9,
                ),
                child: Text(
                  "lbl_transport".tr,
                  overflow: TextOverflow.ellipsis,
                  textAlign: TextAlign.left,
                  style: AppStyle.txtMontserratRomanMedium10,
                ),
              ),
            ],
          ),
          Padding(
            padding: getPadding(
              left: 207,
              top: 12,
              bottom: 10,
            ),
            child: Text(
              "lbl_6_00".tr,
              overflow: TextOverflow.ellipsis,
              textAlign: TextAlign.left,
              style: AppStyle.txtMontserratRomanRegular10,
            ),
          ),
        ],
      ),
    );
  }
}
