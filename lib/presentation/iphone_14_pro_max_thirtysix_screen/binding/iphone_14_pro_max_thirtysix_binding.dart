import '../controller/iphone_14_pro_max_thirtysix_controller.dart';
import 'package:get/get.dart';

class Iphone14ProMaxThirtysixBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => Iphone14ProMaxThirtysixController());
  }
}
