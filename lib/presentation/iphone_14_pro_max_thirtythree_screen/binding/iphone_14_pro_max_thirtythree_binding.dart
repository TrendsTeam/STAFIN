import '../controller/iphone_14_pro_max_thirtythree_controller.dart';
import 'package:get/get.dart';

class Iphone14ProMaxThirtythreeBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => Iphone14ProMaxThirtythreeController());
  }
}
