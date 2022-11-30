import 'dart:ui';
import 'package:flutter/material.dart';

class ColorConstant {
  static Color gray800F2 = fromHex('#f260331a');

  static Color red600 = fromHex('#db3539');

  static Color red405 = fromHex('#f35f63');

  static Color red400 = fromHex('#f35f62');

  static Color teal300 = fromHex('#549fb9');

  static Color greenA700 = fromHex('#05dd5b');

  static Color deepPurple3007f = fromHex('#7fa871df');

  static Color teal700 = fromHex('#178b61');

  static Color black90007 = fromHex('#07000000');

  static Color deepPurpleA200 = fromHex('#9d53e7');

  static Color black90002 = fromHex('#02000000');

  static Color redA700 = fromHex('#bb0000');

  static Color black90005 = fromHex('#05000000');

  static Color red600Bf = fromHex('#bfdb3539');

  static Color tealA700 = fromHex('#0ccd9d');

  static Color gray400 = fromHex('#bab9ba');

  static Color blue900 = fromHex('#003f84');

  static Color deepPurple5000c = fromHex('#0c7b2cca');

  static Color red40033 = fromHex('#33f35f63');

  static Color deepPurple50019 = fromHex('#197b2cca');

  static Color black9000c = fromHex('#0c000000');

  static Color blue50 = fromHex('#e8f0ff');

  static Color blue51 = fromHex('#e9f0ff');

  static Color deepPurple50 = fromHex('#efe1fc');

  static Color bluegray400 = fromHex('#888888');

  static Color orange900B2 = fromHex('#b2de4a09');

  static Color deepPurple51 = fromHex('#f2ecf9');

  static Color lime900F2 = fromHex('#f25e601a');

  static Color cyan50 = fromHex('#dffbfa');

  static Color whiteA700 = fromHex('#ffffff');

  static Color indigo900F2 = fromHex('#f21b1e60');

  static Color deepOrange50 = fromHex('#f9ecec');

  static Color deepPurple30033 = fromHex('#33a871df');

  static Color deepOrange51 = fromHex('#fde4d9');

  static Color deepPurple500 = fromHex('#7b2cca');

  static Color lime70033 = fromHex('#33c69348');

  static Color red300 = fromHex('#df7171');

  static Color deepPurple300 = fromHex('#a871df');

  static Color lightBlue800 = fromHex('#007bbb');

  static Color red50 = fromHex('#ffe8ec');

  static Color greenA400 = fromHex('#1dda63');

  static Color green400 = fromHex('#47c579');

  static Color red100 = fromHex('#fdd9d9');

  static Color black900 = fromHex('#000000');

  static Color purple900F2 = fromHex('#f24e1b60');

  static Color teal30033 = fromHex('#3348c6a7');

  static Color tealA20033 = fromHex('#335feaf3');

  static Color yellow900 = fromHex('#f8761b');

  static Color redA400 = fromHex('#fb1045');

  static Color indigoA20033 = fromHex('#335f6df3');

  static Color lightGreenA20033 = fromHex('#33a9f35f');

  static Color orange900 = fromHex('#de4a09');

  static Color deepPurple40033 = fromHex('#338e48c6');

  static Color gray900F2 = fromHex('#f2031818');

  static Color gray101 = fromHex('#f9eeff');

  static Color gray102 = fromHex('#eefff4');

  static Color gray100 = fromHex('#eef9ff');

  static Color deepPurple5006c = fromHex('#6c7b2cca');

  static Color bluegray900 = fromHex('#2a074d');

  static Color bluegray500 = fromHex('#5b8999');

  static Color green40033 = fromHex('#3348c679');

  static Color indigo500 = fromHex('#4a47c5');

  static Color fromHex(String hexString) {
    final buffer = StringBuffer();
    if (hexString.length == 6 || hexString.length == 7) buffer.write('ff');
    buffer.write(hexString.replaceFirst('#', ''));
    return Color(int.parse(buffer.toString(), radix: 16));
  }
}
