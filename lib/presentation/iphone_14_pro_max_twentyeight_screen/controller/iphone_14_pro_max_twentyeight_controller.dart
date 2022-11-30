import 'package:stafin_v1/core/app_export.dart';import 'package:stafin_v1/presentation/iphone_14_pro_max_twentyeight_screen/models/iphone_14_pro_max_twentyeight_model.dart';import 'package:flutter/material.dart';class Iphone14ProMaxTwentyeightController extends GetxController {TextEditingController rectangleFiveController = TextEditingController();

TextEditingController rectangleSixController = TextEditingController();

TextEditingController rectangleSevenController = TextEditingController();

Rx<Iphone14ProMaxTwentyeightModel> iphone14ProMaxTwentyeightModelObj = Iphone14ProMaxTwentyeightModel().obs;

@override void onReady() { super.onReady(); } 
@override void onClose() { super.onClose(); rectangleFiveController.dispose(); rectangleSixController.dispose(); rectangleSevenController.dispose(); } 
 }
