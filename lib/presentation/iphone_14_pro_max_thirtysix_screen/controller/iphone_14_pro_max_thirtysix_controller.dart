import 'package:stafin_v1/core/app_export.dart';import 'package:stafin_v1/presentation/iphone_14_pro_max_thirtysix_screen/models/iphone_14_pro_max_thirtysix_model.dart';import 'package:flutter/material.dart';class Iphone14ProMaxThirtysixController extends GetxController {TextEditingController rectangleThirtyTwoController = TextEditingController();

Rx<Iphone14ProMaxThirtysixModel> iphone14ProMaxThirtysixModelObj = Iphone14ProMaxThirtysixModel().obs;

@override void onReady() { super.onReady(); } 
@override void onClose() { super.onClose(); rectangleThirtyTwoController.dispose(); } 
 }
