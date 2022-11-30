import '../controller/iphone_14_pro_max_twentyfive_controller.dart';
import 'package:get/get.dart';

class Iphone14ProMaxTwentyfiveBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => Iphone14ProMaxTwentyfiveController());
  }
}
