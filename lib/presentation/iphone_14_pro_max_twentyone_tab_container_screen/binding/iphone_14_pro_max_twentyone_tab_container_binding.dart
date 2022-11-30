import '../controller/iphone_14_pro_max_twentyone_tab_container_controller.dart';
import 'package:get/get.dart';

class Iphone14ProMaxTwentyoneTabContainerBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => Iphone14ProMaxTwentyoneTabContainerController());
  }
}
