import 'package:stafin_v1/core/app_export.dart';import 'package:stafin_v1/presentation/iphone_14_pro_max_twentythree_screen/models/iphone_14_pro_max_twentythree_model.dart';import 'package:stafin_v1/widgets/custom_bottom_bar.dart';class Iphone14ProMaxTwentythreeController extends GetxController {Rx<Iphone14ProMaxTwentythreeModel> iphone14ProMaxTwentythreeModelObj = Iphone14ProMaxTwentythreeModel().obs;

Rx<BottomBarEnum> type = BottomBarEnum.Home.obs;

@override void onReady() { super.onReady(); } 
@override void onClose() { super.onClose(); } 
 }
