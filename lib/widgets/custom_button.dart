import 'package:flutter/material.dart';
import 'package:stafin_v1/core/app_export.dart';

class CustomButton extends StatelessWidget {
  CustomButton(
      {this.shape,
      this.padding,
      this.variant,
      this.fontStyle,
      this.alignment,
      this.onTap,
      this.width,
      this.margin,
      this.prefixWidget,
      this.suffixWidget,
      this.text});

  ButtonShape? shape;

  ButtonPadding? padding;

  ButtonVariant? variant;

  ButtonFontStyle? fontStyle;

  Alignment? alignment;

  VoidCallback? onTap;

  double? width;

  EdgeInsetsGeometry? margin;

  Widget? prefixWidget;

  Widget? suffixWidget;

  String? text;

  @override
  Widget build(BuildContext context) {
    return alignment != null
        ? Align(
            alignment: alignment ?? Alignment.center,
            child: _buildButtonWidget(),
          )
        : _buildButtonWidget();
  }

  _buildButtonWidget() {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        width: getHorizontalSize(width ?? 0),
        margin: margin,
        padding: _setPadding(),
        decoration: _buildDecoration(),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            prefixWidget ?? SizedBox(),
            Text(
              text ?? "",
              textAlign: TextAlign.center,
              style: _setFontStyle(),
            ),
            suffixWidget ?? SizedBox(),
          ],
        ),
      ),
    );
  }

  _buildDecoration() {
    return BoxDecoration(
      color: _setColor(),
      border: _setBorder(),
      borderRadius: _setBorderRadius(),
      boxShadow: _setBoxShadow(),
    );
  }

  _setPadding() {
    switch (padding) {
      case ButtonPadding.PaddingAll3:
        return getPadding(
          all: 3,
        );
      case ButtonPadding.PaddingAll9:
        return getPadding(
          all: 9,
        );
      default:
        return getPadding(
          all: 15,
        );
    }
  }

  _setColor() {
    switch (variant) {
      case ButtonVariant.OutlineDeeppurple500:
        return ColorConstant.whiteA700;
      case ButtonVariant.OutlineDeeppurpleA200:
        return ColorConstant.whiteA700;
      case ButtonVariant.OutlineDeeppurple500_1:
        return ColorConstant.whiteA700;
      case ButtonVariant.OutlineBlack9000c_1:
        return ColorConstant.whiteA700;
      case ButtonVariant.OutlineBlack9000c_2:
        return ColorConstant.deepPurple5006c;
      case ButtonVariant.FillBlue50:
        return ColorConstant.blue50;
      case ButtonVariant.FillBlue51:
        return ColorConstant.blue51;
      case ButtonVariant.FillRed50:
        return ColorConstant.red50;
      default:
        return ColorConstant.deepPurple500;
    }
  }

  _setBorder() {
    switch (variant) {
      case ButtonVariant.OutlineDeeppurple500:
        return Border.all(
          color: ColorConstant.deepPurple500,
          width: getHorizontalSize(
            0.10,
          ),
        );
      case ButtonVariant.OutlineDeeppurpleA200:
        return Border.all(
          color: ColorConstant.deepPurpleA200,
          width: getHorizontalSize(
            0.10,
          ),
        );
      case ButtonVariant.OutlineDeeppurple500_1:
        return Border.all(
          color: ColorConstant.deepPurple500,
          width: getHorizontalSize(
            0.20,
          ),
        );
      case ButtonVariant.OutlineBlack9000c:
      case ButtonVariant.OutlineBlack9000c_1:
      case ButtonVariant.OutlineBlack9000c_2:
      case ButtonVariant.FillBlue50:
      case ButtonVariant.FillBlue51:
      case ButtonVariant.FillRed50:
        return null;
      default:
        return null;
    }
  }

  _setBorderRadius() {
    switch (shape) {
      case ButtonShape.CircleBorder13:
        return BorderRadius.circular(
          getHorizontalSize(
            13.00,
          ),
        );
      case ButtonShape.Square:
        return BorderRadius.circular(0);
      default:
        return BorderRadius.circular(
          getHorizontalSize(
            10.00,
          ),
        );
    }
  }

  _setBoxShadow() {
    switch (variant) {
      case ButtonVariant.OutlineDeeppurple500:
        return [
          BoxShadow(
            color: ColorConstant.black90005,
            spreadRadius: getHorizontalSize(
              2.00,
            ),
            blurRadius: getHorizontalSize(
              2.00,
            ),
            offset: Offset(
              0,
              4,
            ),
          )
        ];
      case ButtonVariant.OutlineDeeppurpleA200:
        return [
          BoxShadow(
            color: ColorConstant.black90005,
            spreadRadius: getHorizontalSize(
              2.00,
            ),
            blurRadius: getHorizontalSize(
              2.00,
            ),
            offset: Offset(
              0,
              4,
            ),
          )
        ];
      case ButtonVariant.OutlineBlack9000c_1:
        return [
          BoxShadow(
            color: ColorConstant.black9000c,
            spreadRadius: getHorizontalSize(
              2.00,
            ),
            blurRadius: getHorizontalSize(
              2.00,
            ),
            offset: Offset(
              0,
              4,
            ),
          )
        ];
      case ButtonVariant.OutlineBlack9000c_2:
        return [
          BoxShadow(
            color: ColorConstant.black9000c,
            spreadRadius: getHorizontalSize(
              2.00,
            ),
            blurRadius: getHorizontalSize(
              2.00,
            ),
            offset: Offset(
              0,
              4,
            ),
          )
        ];
      case ButtonVariant.OutlineDeeppurple500_1:
      case ButtonVariant.FillBlue50:
      case ButtonVariant.FillBlue51:
      case ButtonVariant.FillRed50:
        return null;
      default:
        return [
          BoxShadow(
            color: ColorConstant.black9000c,
            spreadRadius: getHorizontalSize(
              2.00,
            ),
            blurRadius: getHorizontalSize(
              2.00,
            ),
            offset: Offset(
              0,
              4,
            ),
          )
        ];
    }
  }

  _setFontStyle() {
    switch (fontStyle) {
      case ButtonFontStyle.MontserratRomanSemiBold13:
        return TextStyle(
          color: ColorConstant.deepPurple500,
          fontSize: getFontSize(
            13,
          ),
          fontFamily: 'Montserrat',
          fontWeight: FontWeight.w600,
        );
      case ButtonFontStyle.MontserratRomanSemiBold13DeeppurpleA200:
        return TextStyle(
          color: ColorConstant.deepPurpleA200,
          fontSize: getFontSize(
            13,
          ),
          fontFamily: 'Montserrat',
          fontWeight: FontWeight.w600,
        );
      case ButtonFontStyle.MontserratRomanMedium9:
        return TextStyle(
          color: ColorConstant.deepPurple500,
          fontSize: getFontSize(
            9,
          ),
          fontFamily: 'Montserrat',
          fontWeight: FontWeight.w500,
        );
      case ButtonFontStyle.MontserratRomanSemiBold9:
        return TextStyle(
          color: ColorConstant.deepPurple500,
          fontSize: getFontSize(
            9,
          ),
          fontFamily: 'Montserrat',
          fontWeight: FontWeight.w600,
        );
      case ButtonFontStyle.MontserratRomanSemiBold15:
        return TextStyle(
          color: ColorConstant.whiteA700,
          fontSize: getFontSize(
            15,
          ),
          fontFamily: 'Montserrat',
          fontWeight: FontWeight.w600,
        );
      case ButtonFontStyle.MontserratRomanRegular10:
        return TextStyle(
          color: ColorConstant.black900,
          fontSize: getFontSize(
            10,
          ),
          fontFamily: 'Montserrat',
          fontWeight: FontWeight.w400,
        );
      default:
        return TextStyle(
          color: ColorConstant.whiteA700,
          fontSize: getFontSize(
            18,
          ),
          fontFamily: 'Montserrat',
          fontWeight: FontWeight.w600,
        );
    }
  }
}

enum ButtonShape {
  Square,
  RoundedBorder10,
  CircleBorder13,
}
enum ButtonPadding {
  PaddingAll15,
  PaddingAll3,
  PaddingAll9,
}
enum ButtonVariant {
  OutlineBlack9000c,
  OutlineDeeppurple500,
  OutlineDeeppurpleA200,
  OutlineDeeppurple500_1,
  OutlineBlack9000c_1,
  OutlineBlack9000c_2,
  FillBlue50,
  FillBlue51,
  FillRed50,
}
enum ButtonFontStyle {
  MontserratRomanSemiBold18,
  MontserratRomanSemiBold13,
  MontserratRomanSemiBold13DeeppurpleA200,
  MontserratRomanMedium9,
  MontserratRomanSemiBold9,
  MontserratRomanSemiBold15,
  MontserratRomanRegular10,
}
