import '../controller/iphone_14_pro_max_fortythree_controller.dart';
import 'package:get/get.dart';

class Iphone14ProMaxFortythreeBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => Iphone14ProMaxFortythreeController());
  }
}
