import 'package:stafin_v1/core/app_export.dart';import 'package:stafin_v1/presentation/iphone_14_pro_max_twentyone_page/models/iphone_14_pro_max_twentyone_model.dart';import 'package:flutter/material.dart';class Iphone14ProMaxTwentyoneController extends GetxController {Iphone14ProMaxTwentyoneController(this.iphone14ProMaxTwentyoneModelObj);

TextEditingController groupTenController = TextEditingController();

TextEditingController groupNineController = TextEditingController();

Rx<Iphone14ProMaxTwentyoneModel> iphone14ProMaxTwentyoneModelObj;

@override void onReady() { super.onReady(); } 
@override void onClose() { super.onClose(); groupTenController.dispose(); groupNineController.dispose(); } 
 }
