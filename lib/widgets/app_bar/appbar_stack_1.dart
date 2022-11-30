import 'package:flutter/material.dart';
import 'package:stafin_v1/core/app_export.dart';

// ignore: must_be_immutable
class AppbarStack1 extends StatelessWidget {
  AppbarStack1({this.margin, this.onTap});

  EdgeInsetsGeometry? margin;

  Function? onTap;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        onTap!();
      },
      child: Padding(
        padding: margin ?? EdgeInsets.zero,
        child: Card(
          clipBehavior: Clip.antiAlias,
          elevation: 0,
          margin: EdgeInsets.all(0),
          color: ColorConstant.whiteA700,
          shape: RoundedRectangleBorder(
            side: BorderSide(
              color: ColorConstant.black900,
              width: getHorizontalSize(
                0.10,
              ),
            ),
            borderRadius: BorderRadiusStyle.roundedBorder5,
          ),
          child: Container(
            height: getSize(
              24.00,
            ),
            width: getSize(
              24.00,
            ),
            decoration: AppDecoration.outlineBlack9001.copyWith(
              borderRadius: BorderRadiusStyle.roundedBorder5,
            ),
            child: Stack(
              children: [
                Align(
                  alignment: Alignment.bottomCenter,
                  child: Padding(
                    padding: getPadding(
                      left: 7,
                      top: 11,
                      right: 7,
                      bottom: 11,
                    ),
                    child: CommonImageView(
                      svgPath: ImageConstant.imgArrow1,
                      height: getVerticalSize(
                        1.00,
                      ),
                      width: getHorizontalSize(
                        10.00,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
