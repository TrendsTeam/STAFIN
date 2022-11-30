import 'package:stafin_v1/core/app_export.dart';import 'package:stafin_v1/presentation/iphone_14_pro_max_thirtyone_screen/models/iphone_14_pro_max_thirtyone_model.dart';import 'package:flutter/material.dart';class Iphone14ProMaxThirtyoneController extends GetxController {TextEditingController mobileNoController = TextEditingController();

TextEditingController priceOneController = TextEditingController();

Rx<Iphone14ProMaxThirtyoneModel> iphone14ProMaxThirtyoneModelObj = Iphone14ProMaxThirtyoneModel().obs;

@override void onReady() { super.onReady(); } 
@override void onClose() { super.onClose(); mobileNoController.dispose(); priceOneController.dispose(); } 
 }
