module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "767px" },
      md: { min: "768px", max: "991px" },
    },
    extend: {
      colors: {
        light_blue_300: "#64d3ff",
        gray_800_07: "#4c4c4c07",
        red_401: "#c16244",
        red_400: "#ce704c",
        deep_purple_600: "#4f3cc9",
        green_700: "#279044",
        green_300_19: "#91ba8319",
        red_400_19: "#e04b4319",
        pink_A100: "#ff72d2",
        yellow_A400: "#ffe900",
        light_blue_A700: "#018df0",
        deep_orange_101: "#efc7a5",
        deep_orange_100: "#fec9ac",
        gray_400: "#bac1c1",
        gray_800: "#4f2d2a",
        gray_801: "#3a4146",
        bluegray_400_87: "#828fa287",
        black_900_0c: "#0000000c",
        orange_200: "#efc985",
        bluegray_800: "#36414f",
        bluegray_402: "#868686",
        bluegray_401: "#8d7ea3",
        bluegray_400: "#828fa2",
        lime_50: "#fdf5ee",
        blue_100: "#d1dcf8",
        lime_51: "#faf3ea",
        black_900_19: "#00000019",
        blue_101: "#caddff",
        gray_52: "#f9f4fa",
        gray_51: "#f8f8f8",
        red_55: "#fff3f0",
        red_53: "#fef5ef",
        red_54: "#fff3ef",
        red_51: "#fdf4ee",
        amber_A200: "#ffcf3d",
        red_52: "#fbf3ec",
        gray_50: "#f6f6fe",
        red_50: "#fff4ef",
        green_700_63: "#27904463",
        black_900_66: "#01040c66",
        yellow_900: "#ff8b17",
        deep_purple_A100: "#a288ff",
        pink_400: "#ef466f",
        orange_A100: "#ffcf80",
        gray_105: "#f4f4fa",
        gray_103: "#f4faf6",
        gray_500: "#a6a5a5",
        gray_104: "#faf4f4",
        gray_900: "#22252d",
        gray_101: "#fbf8f3",
        gray_102: "#f2f2f2",
        gray_100: "#f3f6fd",
        bluegray_701: "#2e6458",
        bluegray_700: "#4a5258",
        bluegray_301: "#7ea8c4",
        bluegray_300: "#859ba9",
        indigo_400_99: "#5564d799",
        red_600: "#e04243",
        blue_A200: "#5288df",
        blue_A201: "#5288ff",
        bluegray_900_60: "#2d2d2d60",
        teal_301: "#62b3ab",
        teal_300: "#5ac49a",
        gray_400_19: "#c6c6c619",
        deep_orange_300: "#ff8b6a",
        orange_A201: "#f8ad43",
        orange_A200: "#f79a45",
        amber_301: "#f8d24a",
        amber_302: "#ffd166",
        red_A200: "#fe533e",
        yellow_50: "#fffbed",
        amber_300: "#ffc85f",
        blue_50: "#e8f5fe",
        red_600_63: "#e0424363",
        blue_51: "#e6f1ff",
        indigo_400: "#5564d7",
        bluegray_200: "#c0c7d0",
        indigo_400_19: "#5564d719",
        white_A700: "#ffffff",
        indigo_401: "#6478d3",
        purple_200: "#ea98d4",
        deep_orange_50: "#ffebe5",
        light_blue_A200: "#42c1f4",
        red_500: "#fe4c40",
        teal_200: "#8dbad3",
        black_900: "#000000",
        deep_orange_200: "#ffab90",
        indigo_52: "#e8e8ff",
        indigo_53: "#eceef9",
        indigo_50: "#e4ecf9",
        indigo_51: "#e2e8ed",
        bluegray_900_97: "#2d2d2d97",
        bluegray_900: "#2d2d2d",
        indigo_100: "#bbcaea",
        orange_50: "#ffeddc",
        bluegray_902: "#2e2e2e",
        bluegray_901: "#2e363a",
      },
      borderRadius: {
        radius2: "2px",
        radius4: "4px",
        radius5: "5px",
        radius8: "8px",
        radius10: "10px",
        radius12: "12px",
        radius16: "16px",
        radius20: "20px",
        radius23: "23px",
        radius24: "24px",
        radius28: "28px",
        radius31: "31px",
        radius32: "32px",
        radius40: "40px",
        radius50: "50%",
        radius083: "0.83px",
        radius997: "9.97px",
        radius1165: "11.65px",
        radius6665: "6.665px",
        radius24035: "24.035px",
      },
      boxShadow: {
        bs5: "0px 10px  20px 0px #4c4c4c07",
        bs4: "0px 10px  60px 0px #c6c6c619",
        bs3: "0px 4px  8px 0px #5564d799",
        bs1: "0px 4px  120px 0px #91ba8319",
        bs: "0px 4px  120px 0px #0000000c",
        bs2: "0px 4px  60px 0px #00000019",
      },
      fontFamily: { inter: "Inter", poppins: "Poppins" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
