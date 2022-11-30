import 'package:stafin_v1/core/app_export.dart';import 'package:stafin_v1/presentation/iphone_14_pro_max_twenty_page/models/iphone_14_pro_max_twenty_model.dart';import 'package:flutter/material.dart';class Iphone14ProMaxTwentyController extends GetxController {Iphone14ProMaxTwentyController(this.iphone14ProMaxTwentyModelObj);

TextEditingController groupFifteenController = TextEditingController();

TextEditingController groupFourteenController = TextEditingController();

Rx<Iphone14ProMaxTwentyModel> iphone14ProMaxTwentyModelObj;

@override void onReady() { super.onReady(); } 
@override void onClose() { super.onClose(); groupFifteenController.dispose(); groupFourteenController.dispose(); } 
 }
