import 'package:stafin_v1/core/app_export.dart';
import 'package:stafin_v1/presentation/iphone_14_pro_max_twentyone_tab_container_screen/models/iphone_14_pro_max_twentyone_tab_container_model.dart';
import 'package:stafin_v1/widgets/custom_bottom_bar.dart';
import 'package:flutter/material.dart';

class Iphone14ProMaxTwentyoneTabContainerController extends GetxController
    with GetSingleTickerProviderStateMixin {
  Rx<Iphone14ProMaxTwentyoneTabContainerModel>
      iphone14ProMaxTwentyoneTabContainerModelObj =
      Iphone14ProMaxTwentyoneTabContainerModel().obs;

  late TabController group159Controller =
      Get.put(TabController(vsync: this, length: 2));

  Rx<BottomBarEnum> type = BottomBarEnum.Home.obs;

  @override
  void onReady() {
    super.onReady();
  }

  @override
  void onClose() {
    super.onClose();
  }
}
