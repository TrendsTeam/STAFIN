import 'package:stafin_v1/core/app_export.dart';import 'package:stafin_v1/presentation/iphone_14_pro_max_eight_screen/models/iphone_14_pro_max_eight_model.dart';import 'package:flutter/material.dart';class Iphone14ProMaxEightController extends GetxController {TextEditingController rectangleFiveController = TextEditingController();

TextEditingController rectangleSixController = TextEditingController();

Rx<Iphone14ProMaxEightModel> iphone14ProMaxEightModelObj = Iphone14ProMaxEightModel().obs;

@override void onReady() { super.onReady(); } 
@override void onClose() { super.onClose(); rectangleFiveController.dispose(); rectangleSixController.dispose(); } 
 }
