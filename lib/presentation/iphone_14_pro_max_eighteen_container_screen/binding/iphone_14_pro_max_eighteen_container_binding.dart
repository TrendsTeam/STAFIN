import '../controller/iphone_14_pro_max_eighteen_container_controller.dart';
import 'package:get/get.dart';

class Iphone14ProMaxEighteenContainerBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => Iphone14ProMaxEighteenContainerController());
  }
}
