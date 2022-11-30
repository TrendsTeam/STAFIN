import 'package:stafin_v1/core/app_export.dart';import 'package:stafin_v1/presentation/iphone_14_pro_max_twelve_screen/models/iphone_14_pro_max_twelve_model.dart';import 'package:flutter/material.dart';class Iphone14ProMaxTwelveController extends GetxController {TextEditingController rectangleFiveController = TextEditingController();

TextEditingController rectangleSixController = TextEditingController();

Rx<Iphone14ProMaxTwelveModel> iphone14ProMaxTwelveModelObj = Iphone14ProMaxTwelveModel().obs;

@override void onReady() { super.onReady(); } 
@override void onClose() { super.onClose(); rectangleFiveController.dispose(); rectangleSixController.dispose(); } 
 }
