import '../controller/iphone_14_pro_max_fortyfour_controller.dart';
import 'package:get/get.dart';

class Iphone14ProMaxFortyfourBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => Iphone14ProMaxFortyfourController());
  }
}
