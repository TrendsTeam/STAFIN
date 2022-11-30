import '../controller/iphone_14_pro_max_thirtyfive_controller.dart';
import 'package:get/get.dart';

class Iphone14ProMaxThirtyfiveBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => Iphone14ProMaxThirtyfiveController());
  }
}
