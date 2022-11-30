import 'package:stafin_v1/core/app_export.dart';import 'package:stafin_v1/presentation/iphone_14_pro_max_one_screen/models/iphone_14_pro_max_one_model.dart';class Iphone14ProMaxOneController extends GetxController {Rx<Iphone14ProMaxOneModel> iphone14ProMaxOneModelObj = Iphone14ProMaxOneModel().obs;

@override void onReady() { super.onReady();Future.delayed(const Duration(milliseconds: 3000), (){
Get.toNamed(AppRoutes.iphone14ProMaxTwoOneScreen);}); } 
@override void onClose() { super.onClose(); } 
 }
