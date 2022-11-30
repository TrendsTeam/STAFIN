import 'package:flutter/material.dart';
import 'package:stafin_v1/core/app_export.dart';

class CustomBottomBar extends StatelessWidget {
  CustomBottomBar({this.onChanged});

  RxInt selectedIndex = 0.obs;

  List<BottomMenuModel> bottomMenuList = [
    BottomMenuModel(
      icon: ImageConstant.imgHome,
      type: BottomBarEnum.Home,
    ),
    BottomMenuModel(
      icon: ImageConstant.imgIconlylightou,
      type: BottomBarEnum.Iconlylightou,
    ),
    BottomMenuModel(
      icon: ImageConstant.imgMaximize,
      type: BottomBarEnum.Maximize,
    ),
    BottomMenuModel(
      icon: ImageConstant.imgHealthiconsui,
      type: BottomBarEnum.Healthiconsui,
    )
  ];

  Function(BottomBarEnum)? onChanged;

  @override
  Widget build(BuildContext context) {
    return Obx(
      () => Container(
        decoration: BoxDecoration(
          color: ColorConstant.whiteA700,
          border: Border.all(
            color: ColorConstant.deepPurple500,
            width: getHorizontalSize(
              1.00,
            ),
          ),
        ),
        child: BottomNavigationBar(
          backgroundColor: Colors.transparent,
          showSelectedLabels: false,
          showUnselectedLabels: false,
          elevation: 0,
          currentIndex: selectedIndex.value,
          type: BottomNavigationBarType.fixed,
          items: List.generate(bottomMenuList.length, (index) {
            return BottomNavigationBarItem(
              icon: CommonImageView(
                svgPath: bottomMenuList[index].icon,
                height: getSize(
                  26.00,
                ),
                width: getSize(
                  26.00,
                ),
                color: ColorConstant.gray400,
              ),
              activeIcon: CommonImageView(
                svgPath: bottomMenuList[index].icon,
                height: getSize(
                  35.00,
                ),
                width: getSize(
                  35.00,
                ),
                color: ColorConstant.deepPurple500,
              ),
              label: '',
            );
          }),
          onTap: (index) {
            selectedIndex.value = index;
            onChanged!(bottomMenuList[index].type);
          },
        ),
      ),
    );
  }
}

enum BottomBarEnum {
  Home,
  Iconlylightou,
  Maximize,
  Healthiconsui,
}

class BottomMenuModel {
  BottomMenuModel({required this.icon, required this.type});

  String icon;

  BottomBarEnum type;
}

///Set default widget when screen is not configured with bottom menu
Widget getDefaultWidget() {
  return Container(
    color: Colors.white,
    padding: EdgeInsets.all(10),
    child: Center(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(
            'Please replace the respective Widget here',
            style: TextStyle(
              fontSize: 18,
            ),
          ),
        ],
      ),
    ),
  );
}
