import '../controller/iphone_14_pro_max_fortytwo_controller.dart';
import 'package:get/get.dart';

class Iphone14ProMaxFortytwoBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => Iphone14ProMaxFortytwoController());
  }
}
