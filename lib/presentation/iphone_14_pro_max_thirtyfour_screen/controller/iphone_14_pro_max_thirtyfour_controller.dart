import 'package:stafin_v1/core/app_export.dart';import 'package:stafin_v1/presentation/iphone_14_pro_max_thirtyfour_screen/models/iphone_14_pro_max_thirtyfour_model.dart';import 'package:stafin_v1/widgets/custom_bottom_bar.dart';class Iphone14ProMaxThirtyfourController extends GetxController {Rx<Iphone14ProMaxThirtyfourModel> iphone14ProMaxThirtyfourModelObj = Iphone14ProMaxThirtyfourModel().obs;

Rx<BottomBarEnum> type = BottomBarEnum.Home.obs;

@override void onReady() { super.onReady(); } 
@override void onClose() { super.onClose(); } 
 }
