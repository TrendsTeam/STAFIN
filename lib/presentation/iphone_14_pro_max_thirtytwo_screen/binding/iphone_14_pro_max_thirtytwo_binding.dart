import '../controller/iphone_14_pro_max_thirtytwo_controller.dart';
import 'package:get/get.dart';

class Iphone14ProMaxThirtytwoBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => Iphone14ProMaxThirtytwoController());
  }
}
