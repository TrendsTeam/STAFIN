import 'package:stafin_v1/core/app_export.dart';import 'package:stafin_v1/presentation/iphone_14_pro_max_six_screen/models/iphone_14_pro_max_six_model.dart';import 'package:flutter/material.dart';class Iphone14ProMaxSixController extends GetxController {TextEditingController rectangleFiveController = TextEditingController();

Rx<Iphone14ProMaxSixModel> iphone14ProMaxSixModelObj = Iphone14ProMaxSixModel().obs;

@override void onReady() { super.onReady(); } 
@override void onClose() { super.onClose(); rectangleFiveController.dispose(); } 
 }
