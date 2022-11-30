import 'package:stafin_v1/core/app_export.dart';import 'package:stafin_v1/presentation/iphone_14_pro_max_twentynine_screen/models/iphone_14_pro_max_twentynine_model.dart';import 'package:flutter/material.dart';class Iphone14ProMaxTwentynineController extends GetxController {TextEditingController mobileNoOneController = TextEditingController();

Rx<Iphone14ProMaxTwentynineModel> iphone14ProMaxTwentynineModelObj = Iphone14ProMaxTwentynineModel().obs;

@override void onReady() { super.onReady(); } 
@override void onClose() { super.onClose(); mobileNoOneController.dispose(); } 
 }
