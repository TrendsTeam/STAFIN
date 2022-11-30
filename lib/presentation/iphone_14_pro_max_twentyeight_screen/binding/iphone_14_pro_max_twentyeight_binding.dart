import '../controller/iphone_14_pro_max_twentyeight_controller.dart';
import 'package:get/get.dart';

class Iphone14ProMaxTwentyeightBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => Iphone14ProMaxTwentyeightController());
  }
}
