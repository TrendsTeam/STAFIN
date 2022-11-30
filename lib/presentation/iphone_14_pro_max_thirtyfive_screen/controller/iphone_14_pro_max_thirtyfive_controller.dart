import 'package:stafin_v1/core/app_export.dart';import 'package:stafin_v1/presentation/iphone_14_pro_max_thirtyfive_screen/models/iphone_14_pro_max_thirtyfive_model.dart';import 'package:flutter/material.dart';class Iphone14ProMaxThirtyfiveController extends GetxController {TextEditingController rectangleThirtyTwoController = TextEditingController();

Rx<Iphone14ProMaxThirtyfiveModel> iphone14ProMaxThirtyfiveModelObj = Iphone14ProMaxThirtyfiveModel().obs;

@override void onReady() { super.onReady(); } 
@override void onClose() { super.onClose(); rectangleThirtyTwoController.dispose(); } 
 }
