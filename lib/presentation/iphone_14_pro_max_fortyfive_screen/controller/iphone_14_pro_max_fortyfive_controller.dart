import 'package:stafin_v1/core/app_export.dart';import 'package:stafin_v1/presentation/iphone_14_pro_max_fortyfive_screen/models/iphone_14_pro_max_fortyfive_model.dart';import 'package:stafin_v1/widgets/custom_bottom_bar.dart';import 'package:flutter/material.dart';class Iphone14ProMaxFortyfiveController extends GetxController {TextEditingController group138Controller = TextEditingController();

TextEditingController group137Controller = TextEditingController();

Rx<Iphone14ProMaxFortyfiveModel> iphone14ProMaxFortyfiveModelObj = Iphone14ProMaxFortyfiveModel().obs;

Rx<BottomBarEnum> type = BottomBarEnum.Home.obs;

@override void onReady() { super.onReady(); } 
@override void onClose() { super.onClose(); group138Controller.dispose(); group137Controller.dispose(); } 
 }
