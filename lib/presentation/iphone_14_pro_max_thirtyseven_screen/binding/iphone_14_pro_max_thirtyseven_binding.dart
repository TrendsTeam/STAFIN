import '../controller/iphone_14_pro_max_thirtyseven_controller.dart';
import 'package:get/get.dart';

class Iphone14ProMaxThirtysevenBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => Iphone14ProMaxThirtysevenController());
  }
}
