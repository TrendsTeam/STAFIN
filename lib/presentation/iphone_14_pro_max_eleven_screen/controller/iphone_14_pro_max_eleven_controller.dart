import 'package:stafin_v1/core/app_export.dart';import 'package:stafin_v1/presentation/iphone_14_pro_max_eleven_screen/models/iphone_14_pro_max_eleven_model.dart';import 'package:flutter/material.dart';class Iphone14ProMaxElevenController extends GetxController {TextEditingController mobileNoController = TextEditingController();

Rx<Iphone14ProMaxElevenModel> iphone14ProMaxElevenModelObj = Iphone14ProMaxElevenModel().obs;

@override void onReady() { super.onReady(); } 
@override void onClose() { super.onClose(); mobileNoController.dispose(); } 
 }
