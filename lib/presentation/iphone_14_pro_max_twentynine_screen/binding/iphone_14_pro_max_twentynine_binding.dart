import '../controller/iphone_14_pro_max_twentynine_controller.dart';
import 'package:get/get.dart';

class Iphone14ProMaxTwentynineBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => Iphone14ProMaxTwentynineController());
  }
}
