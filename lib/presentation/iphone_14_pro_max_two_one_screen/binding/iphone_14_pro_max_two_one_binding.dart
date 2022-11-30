import '../controller/iphone_14_pro_max_two_one_controller.dart';
import 'package:get/get.dart';

class Iphone14ProMaxTwoOneBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => Iphone14ProMaxTwoOneController());
  }
}
