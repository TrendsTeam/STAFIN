import 'package:flutter/material.dart';
import 'package:stafin_v1/core/app_export.dart';

// ignore: must_be_immutable
class AppbarStack extends StatelessWidget {
  AppbarStack({this.margin, this.onTap});

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
              23.00,
            ),
            width: getSize(
              23.00,
            ),
            decoration: AppDecoration.outlineBlack9001.copyWith(
              borderRadius: BorderRadiusStyle.roundedBorder5,
            ),
            child: Stack(
              children: [
                Align(
                  alignment: Alignment.center,
                  child: Padding(
                    padding: getPadding(
                      left: 2,
                      top: 2,
                      right: 1,
                      bottom: 1,
                    ),
                    child: CommonImageView(
                      svgPath: ImageConstant.imgPlus,
                      height: getSize(
                        20.00,
                      ),
                      width: getSize(
                        20.00,
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
