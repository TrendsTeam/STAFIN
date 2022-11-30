import 'package:stafin_v1/core/app_export.dart';import 'package:stafin_v1/presentation/iphone_14_pro_max_fortyfour_screen/models/iphone_14_pro_max_fortyfour_model.dart';import 'package:stafin_v1/widgets/custom_bottom_bar.dart';import 'package:flutter/material.dart';class Iphone14ProMaxFortyfourController extends GetxController {TextEditingController groupSixtyThreeController = TextEditingController();

TextEditingController groupSixtyTwoController = TextEditingController();

Rx<Iphone14ProMaxFortyfourModel> iphone14ProMaxFortyfourModelObj = Iphone14ProMaxFortyfourModel().obs;

Rx<BottomBarEnum> type = BottomBarEnum.Home.obs;

SelectionPopupModel? selectedDropDownValue;

@override void onReady() { super.onReady(); } 
@override void onClose() { super.onClose(); groupSixtyThreeController.dispose(); groupSixtyTwoController.dispose(); } 
onSelected(dynamic value) { selectedDropDownValue = value as SelectionPopupModel; iphone14ProMaxFortyfourModelObj.value.dropdownItemList.forEach((element) {element.isSelected = false; if (element.id == value.id) {element.isSelected = true;}}); iphone14ProMaxFortyfourModelObj.value.dropdownItemList.refresh(); } 
 }
