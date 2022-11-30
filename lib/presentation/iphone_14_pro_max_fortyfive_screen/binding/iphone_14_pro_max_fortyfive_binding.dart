import '../controller/iphone_14_pro_max_fortyfive_controller.dart';
import 'package:get/get.dart';

class Iphone14ProMaxFortyfiveBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => Iphone14ProMaxFortyfiveController());
  }
}
