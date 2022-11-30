import '../controller/iphone_14_pro_max_fortyone_container_controller.dart';
import 'package:get/get.dart';

class Iphone14ProMaxFortyoneContainerBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => Iphone14ProMaxFortyoneContainerController());
  }
}
