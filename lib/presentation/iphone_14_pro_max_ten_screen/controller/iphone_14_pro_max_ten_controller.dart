import 'package:stafin_v1/core/app_export.dart';import 'package:stafin_v1/presentation/iphone_14_pro_max_ten_screen/models/iphone_14_pro_max_ten_model.dart';import 'package:flutter/material.dart';class Iphone14ProMaxTenController extends GetxController {TextEditingController rectangleFiveController = TextEditingController();

Rx<Iphone14ProMaxTenModel> iphone14ProMaxTenModelObj = Iphone14ProMaxTenModel().obs;

@override void onReady() { super.onReady(); } 
@override void onClose() { super.onClose(); rectangleFiveController.dispose(); } 
 }
