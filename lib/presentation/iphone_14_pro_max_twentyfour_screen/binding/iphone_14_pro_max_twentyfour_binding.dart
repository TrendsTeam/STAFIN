import '../controller/iphone_14_pro_max_twentyfour_controller.dart';
import 'package:get/get.dart';

class Iphone14ProMaxTwentyfourBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => Iphone14ProMaxTwentyfourController());
  }
}
