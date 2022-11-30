import '../controller/iphone_14_pro_max_thirtyone_controller.dart';
import 'package:get/get.dart';

class Iphone14ProMaxThirtyoneBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => Iphone14ProMaxThirtyoneController());
  }
}
