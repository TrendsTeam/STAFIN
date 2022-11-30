import '../controller/iphone_14_pro_max_thirty_controller.dart';
import 'package:get/get.dart';

class Iphone14ProMaxThirtyBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => Iphone14ProMaxThirtyController());
  }
}
