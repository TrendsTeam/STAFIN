import 'package:stafin_v1/core/app_export.dart';import 'package:stafin_v1/presentation/iphone_14_pro_max_fortythree_screen/models/iphone_14_pro_max_fortythree_model.dart';import 'package:stafin_v1/widgets/custom_bottom_bar.dart';import 'package:flutter/material.dart';class Iphone14ProMaxFortythreeController extends GetxController {TextEditingController group118Controller = TextEditingController();

TextEditingController group117Controller = TextEditingController();

Rx<Iphone14ProMaxFortythreeModel> iphone14ProMaxFortythreeModelObj = Iphone14ProMaxFortythreeModel().obs;

Rx<BottomBarEnum> type = BottomBarEnum.Home.obs;

@override void onReady() { super.onReady(); } 
@override void onClose() { super.onClose(); group118Controller.dispose(); group117Controller.dispose(); } 
 }
