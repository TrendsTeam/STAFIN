import 'package:stafin_v1/core/app_export.dart';import 'package:stafin_v1/presentation/iphone_14_pro_max_twentyseven_screen/models/iphone_14_pro_max_twentyseven_model.dart';import 'package:stafin_v1/widgets/custom_bottom_bar.dart';class Iphone14ProMaxTwentysevenController extends GetxController {Rx<Iphone14ProMaxTwentysevenModel> iphone14ProMaxTwentysevenModelObj = Iphone14ProMaxTwentysevenModel().obs;

Rx<BottomBarEnum> type = BottomBarEnum.Home.obs;

@override void onReady() { super.onReady(); } 
@override void onClose() { super.onClose(); } 
 }
