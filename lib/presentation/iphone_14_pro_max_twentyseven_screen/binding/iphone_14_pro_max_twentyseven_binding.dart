import '../controller/iphone_14_pro_max_twentyseven_controller.dart';
import 'package:get/get.dart';

class Iphone14ProMaxTwentysevenBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => Iphone14ProMaxTwentysevenController());
  }
}
