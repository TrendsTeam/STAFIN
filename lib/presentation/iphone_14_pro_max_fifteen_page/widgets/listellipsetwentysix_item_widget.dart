import '../controller/iphone_14_pro_max_fifteen_controller.dart';
import '../models/listellipsetwentysix_item_model.dart';
import 'package:flutter/material.dart';
import 'package:stafin_v1/core/app_export.dart';
import 'package:stafin_v1/widgets/custom_button.dart';

// ignore: must_be_immutable
class ListellipsetwentysixItemWidget extends StatelessWidget {
  ListellipsetwentysixItemWidget(this.listellipsetwentysixItemModelObj,
      {this.onTapRowlow30});

  ListellipsetwentysixItemModel listellipsetwentysixItemModelObj;

  var controller = Get.find<Iphone14ProMaxFifteenController>();

  VoidCallback? onTapRowlow30;

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: Alignment.center,
      child: GestureDetector(
        onTap: () {
          onTapRowlow30!();
        },
        child: Container(
          margin: getMargin(
            top: 23.0,
            bottom: 23.0,
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
                  top: 20,
                  bottom: 21,
                ),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Container(
                      decoration: AppDecoration.fillDeeppurple5000c.copyWith(
                        borderRadius: BorderRadiusStyle.circleBorder15,
                      ),
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: [
                          Padding(
                            padding: getPadding(
                              all: 2,
                            ),
                            child: ClipRRect(
                              borderRadius: BorderRadius.circular(
                                getHorizontalSize(
                                  13.00,
                                ),
                              ),
                              child: CommonImageView(
                                imagePath: ImageConstant.imgEllipse26,
                                height: getSize(
                                  26.00,
                                ),
                                width: getSize(
                                  26.00,
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
                        left: 10,
                        top: 7,
                        bottom: 7,
                      ),
                      child: Text(
                        "lbl_accounts".tr,
                        overflow: TextOverflow.ellipsis,
                        textAlign: TextAlign.left,
                        style: AppStyle.txtMontserratRomanMedium12,
                      ),
                    ),
                  ],
                ),
              ),
              CustomButton(
                width: 81,
                text: "lbl_low_30".tr,
                margin: getMargin(
                  left: 118,
                  top: 21,
                  right: 19,
                  bottom: 21,
                ),
                variant: ButtonVariant.FillBlue50,
                shape: ButtonShape.CircleBorder13,
                padding: ButtonPadding.PaddingAll9,
                fontStyle: ButtonFontStyle.MontserratRomanRegular10,
              ),
            ],
          ),
        ),
      ),
    );
  }
}
