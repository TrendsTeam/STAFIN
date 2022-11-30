import '../controller/iphone_14_pro_max_forty_controller.dart';
import 'package:get/get.dart';

class Iphone14ProMaxFortyBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => Iphone14ProMaxFortyController());
  }
}
