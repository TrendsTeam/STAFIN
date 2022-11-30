import '../controller/iphone_14_pro_max_thirtyeight_controller.dart';
import 'package:get/get.dart';

class Iphone14ProMaxThirtyeightBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => Iphone14ProMaxThirtyeightController());
  }
}
