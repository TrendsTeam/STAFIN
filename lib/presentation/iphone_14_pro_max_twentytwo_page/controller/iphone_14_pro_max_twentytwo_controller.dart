import 'package:stafin_v1/core/app_export.dart';import 'package:stafin_v1/presentation/iphone_14_pro_max_twentytwo_page/models/iphone_14_pro_max_twentytwo_model.dart';import 'package:flutter/material.dart';class Iphone14ProMaxTwentytwoController extends GetxController {Iphone14ProMaxTwentytwoController(this.iphone14ProMaxTwentytwoModelObj);

TextEditingController group127Controller = TextEditingController();

TextEditingController group126Controller = TextEditingController();

Rx<Iphone14ProMaxTwentytwoModel> iphone14ProMaxTwentytwoModelObj;

SelectionPopupModel? selectedDropDownValue;

@override void onReady() { super.onReady(); } 
@override void onClose() { super.onClose(); group127Controller.dispose(); group126Controller.dispose(); } 
onSelected(dynamic value) { selectedDropDownValue = value as SelectionPopupModel; iphone14ProMaxTwentytwoModelObj.value.dropdownItemList.forEach((element) {element.isSelected = false; if (element.id == value.id) {element.isSelected = true;}}); iphone14ProMaxTwentytwoModelObj.value.dropdownItemList.refresh(); } 
 }
