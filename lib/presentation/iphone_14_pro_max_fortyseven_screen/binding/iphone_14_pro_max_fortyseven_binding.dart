import '../controller/iphone_14_pro_max_fortyseven_controller.dart';
import 'package:get/get.dart';

class Iphone14ProMaxFortysevenBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => Iphone14ProMaxFortysevenController());
  }
}
