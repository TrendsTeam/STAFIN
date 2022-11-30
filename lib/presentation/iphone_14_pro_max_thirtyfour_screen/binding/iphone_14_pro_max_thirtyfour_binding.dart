import '../controller/iphone_14_pro_max_thirtyfour_controller.dart';
import 'package:get/get.dart';

class Iphone14ProMaxThirtyfourBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => Iphone14ProMaxThirtyfourController());
  }
}
