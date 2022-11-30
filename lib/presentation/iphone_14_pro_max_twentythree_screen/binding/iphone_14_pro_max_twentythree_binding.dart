import '../controller/iphone_14_pro_max_twentythree_controller.dart';
import 'package:get/get.dart';

class Iphone14ProMaxTwentythreeBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => Iphone14ProMaxTwentythreeController());
  }
}
