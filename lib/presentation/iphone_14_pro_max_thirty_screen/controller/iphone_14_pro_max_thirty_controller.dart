import 'package:stafin_v1/core/app_export.dart';import 'package:stafin_v1/presentation/iphone_14_pro_max_thirty_screen/models/iphone_14_pro_max_thirty_model.dart';import 'package:flutter/material.dart';class Iphone14ProMaxThirtyController extends GetxController {TextEditingController rectangleSixController = TextEditingController();

TextEditingController rectangleSeventeenController = TextEditingController();

Rx<Iphone14ProMaxThirtyModel> iphone14ProMaxThirtyModelObj = Iphone14ProMaxThirtyModel().obs;

SelectionPopupModel? selectedDropDownValue;

SelectionPopupModel? selectedDropDownValue1;

@override void onReady() { super.onReady(); } 
@override void onClose() { super.onClose(); rectangleSixController.dispose(); rectangleSeventeenController.dispose(); } 
onSelected(dynamic value) { selectedDropDownValue = value as SelectionPopupModel; iphone14ProMaxThirtyModelObj.value.dropdownItemList.forEach((element) {element.isSelected = false; if (element.id == value.id) {element.isSelected = true;}}); iphone14ProMaxThirtyModelObj.value.dropdownItemList.refresh(); } 
onSelected1(dynamic value) { selectedDropDownValue1 = value as SelectionPopupModel; iphone14ProMaxThirtyModelObj.value.dropdownItemList1.forEach((element) {element.isSelected = false; if (element.id == value.id) {element.isSelected = true;}}); iphone14ProMaxThirtyModelObj.value.dropdownItemList1.refresh(); } 
 }
