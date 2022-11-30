import '../controller/iphone_14_pro_max_twentysix_controller.dart';
import 'package:get/get.dart';

class Iphone14ProMaxTwentysixBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => Iphone14ProMaxTwentysixController());
  }
}
