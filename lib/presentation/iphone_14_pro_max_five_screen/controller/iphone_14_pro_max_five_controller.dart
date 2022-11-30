import 'package:stafin_v1/core/app_export.dart';import 'package:stafin_v1/presentation/iphone_14_pro_max_five_screen/models/iphone_14_pro_max_five_model.dart';import 'package:flutter/material.dart';import 'package:stafin_v1/data/models/login/post_login_resp.dart';import 'package:stafin_v1/data/apiClient/api_client.dart';import 'package:stafin_v1/data/models/login/post_login_req.dart';class Iphone14ProMaxFiveController extends GetxController {TextEditingController rectangleFiveController = TextEditingController();

TextEditingController rectangleSixController = TextEditingController();

Rx<Iphone14ProMaxFiveModel> iphone14ProMaxFiveModelObj = Iphone14ProMaxFiveModel().obs;

PostLoginResp postLoginResp = PostLoginResp();

@override void onReady() { super.onReady();PostLoginReq postLoginReq = PostLoginReq();this.callCreateLogin(postLoginReq.toJson(),successCall: _onCreateLoginSuccess,errCall: _onCreateLoginError,); } 
@override void onClose() { super.onClose(); rectangleFiveController.dispose(); rectangleSixController.dispose(); } 
void callCreateLogin(Map req, {VoidCallback? successCall, VoidCallback? errCall}) async  { return  Get.find<ApiClient>().createLogin(headers: {'Content-Type': 'application/json',}, onSuccess: (resp) {onCreateLoginSuccess(resp); if(successCall != null){successCall(); }}, onError: (err) {onCreateLoginError(err); if(errCall != null){errCall(); }}, requestData: req); } 
void onCreateLoginSuccess(var response) { postLoginResp = PostLoginResp.fromJson(response); } 
void onCreateLoginError(var err) { if(err is NoInternetException) {
Get.rawSnackbar(messageText: Text('$err',style: TextStyle(color: Colors.white,),),);
} } 
void _onCreateLoginSuccess() { 

 } 
void _onCreateLoginError() { 
 } 
 }
