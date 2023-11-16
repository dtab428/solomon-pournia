import * as React from "react";
import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
     size = 36,
     width,
     height,
     ...props
}) => (
     <svg
          fill="none"
          height={size || height}
          viewBox="0 0 32 32"
          width={size || width}
          {...props}
     >
          <path
               clipRule="evenodd"
               d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
               fill="currentColor"
               fillRule="evenodd"
          />
     </svg>
);

export const DiscordIcon: React.FC<IconSvgProps> = ({
     size = 24,
     width,
     height,
     ...props
}) => {
     return (
          <svg
               height={size || height}
               viewBox="0 0 24 24"
               width={size || width}
               {...props}
          >
               <path
                    d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
                    fill="currentColor"
               />
          </svg>
     );
};

export const TwitterIcon: React.FC<IconSvgProps> = ({
     size = 24,
     width,
     height,
     ...props
}) => {
     return (
          <svg
               height={size || height}
               viewBox="0 0 24 24"
               width={size || width}
               {...props}
          >
               <path
                    d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                    fill="currentColor"
               />
          </svg>
     );
};

export const GithubIcon: React.FC<IconSvgProps> = ({
     size = 24,
     width,
     height,
     ...props
}) => {
     return (
          <svg
               height={size || height}
               viewBox="0 0 24 24"
               width={size || width}
               {...props}
          >
               <path
                    clipRule="evenodd"
                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                    fill="currentColor"
                    fillRule="evenodd"
               />
          </svg>
     );
};

export const MoonFilledIcon = ({
     size = 24,
     width,
     height,
     ...props
}: IconSvgProps) => (
     <svg
          aria-hidden="true"
          focusable="false"
          height={size || height}
          role="presentation"
          viewBox="0 0 24 24"
          width={size || width}
          {...props}
     >
          <path
               d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
               fill="currentColor"
          />
     </svg>
);

export const SunFilledIcon = ({
     size = 24,
     width,
     height,
     ...props
}: IconSvgProps) => (
     <svg
          aria-hidden="true"
          focusable="false"
          height={size || height}
          role="presentation"
          viewBox="0 0 24 24"
          width={size || width}
          {...props}
     >
          <g fill="currentColor">
               <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
               <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
          </g>
     </svg>
);

export const HeartFilledIcon = ({
     size = 24,
     width,
     height,
     ...props
}: IconSvgProps) => (
     <svg
          aria-hidden="true"
          focusable="false"
          height={size || height}
          role="presentation"
          viewBox="0 0 24 24"
          width={size || width}
          {...props}
     >
          <path
               d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
               fill="currentColor"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={1.5}
          />
     </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
     <svg
          aria-hidden="true"
          fill="none"
          focusable="false"
          height="1em"
          role="presentation"
          viewBox="0 0 24 24"
          width="1em"
          {...props}
     >
          <path
               d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
               stroke="currentColor"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
          />
          <path
               d="M22 22L20 20"
               stroke="currentColor"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
          />
     </svg>
);

export const NextUILogo: React.FC<IconSvgProps> = (props) => {
     const { width, height = 40 } = props;

     return (
          <svg
               fill="none"
               height={height}
               viewBox="0 0 161 32"
               width={width}
               xmlns="http://www.w3.org/2000/svg"
               {...props}
          >
               <path
                    className="fill-black dark:fill-white"
                    d="M55.6827 5V26.6275H53.7794L41.1235 8.51665H40.9563V26.6275H39V5H40.89L53.5911 23.1323H53.7555V5H55.6827ZM67.4831 26.9663C66.1109 27.0019 64.7581 26.6329 63.5903 25.9044C62.4852 25.185 61.6054 24.1633 61.0537 22.9582C60.4354 21.5961 60.1298 20.1106 60.1598 18.6126C60.132 17.1113 60.4375 15.6228 61.0537 14.2563C61.5954 13.0511 62.4525 12.0179 63.5326 11.268C64.6166 10.5379 65.8958 10.16 67.1986 10.1852C68.0611 10.1837 68.9162 10.3468 69.7187 10.666C70.5398 10.9946 71.2829 11.4948 71.8992 12.1337C72.5764 12.8435 73.0985 13.6889 73.4318 14.6152C73.8311 15.7483 74.0226 16.9455 73.9968 18.1479V19.0773H63.2262V17.4194H72.0935C72.1083 16.4456 71.8952 15.4821 71.4714 14.6072C71.083 13.803 70.4874 13.1191 69.7472 12.6272C68.9887 12.1348 68.1022 11.8812 67.2006 11.8987C66.2411 11.8807 65.3005 12.1689 64.5128 12.7223C63.7332 13.2783 63.1083 14.0275 62.6984 14.8978C62.2582 15.8199 62.0314 16.831 62.0352 17.8546V18.8476C62.009 20.0078 62.2354 21.1595 62.6984 22.2217C63.1005 23.1349 63.7564 23.9108 64.5864 24.4554C65.4554 24.9973 66.4621 25.2717 67.4831 25.2448C68.1676 25.2588 68.848 25.1368 69.4859 24.8859C70.0301 24.6666 70.5242 24.3376 70.9382 23.919C71.3183 23.5345 71.6217 23.0799 71.8322 22.5799L73.5995 23.1604C73.3388 23.8697 72.9304 24.5143 72.4019 25.0506C71.8132 25.6529 71.1086 26.1269 70.3314 26.4434C69.4258 26.8068 68.4575 26.9846 67.4831 26.9663V26.9663ZM78.8233 10.4075L82.9655 17.325L87.1076 10.4075H89.2683L84.1008 18.5175L89.2683 26.6275H87.103L82.9608 19.9317L78.8193 26.6275H76.6647L81.7711 18.5169L76.6647 10.4062L78.8233 10.4075ZM99.5142 10.4075V12.0447H91.8413V10.4075H99.5142ZM94.2427 6.52397H96.1148V22.3931C96.086 22.9446 96.2051 23.4938 96.4597 23.9827C96.6652 24.344 96.9805 24.629 97.3589 24.7955C97.7328 24.9548 98.1349 25.0357 98.5407 25.0332C98.7508 25.0359 98.9607 25.02 99.168 24.9857C99.3422 24.954 99.4956 24.9205 99.6283 24.8853L100.026 26.5853C99.8062 26.6672 99.5805 26.7327 99.3511 26.7815C99.0274 26.847 98.6977 26.8771 98.3676 26.8712C97.6854 26.871 97.0119 26.7156 96.3973 26.4166C95.7683 26.1156 95.2317 25.6485 94.8442 25.0647C94.4214 24.4018 94.2097 23.6242 94.2374 22.8363L94.2427 6.52397ZM118.398 5H120.354V19.3204C120.376 20.7052 120.022 22.0697 119.328 23.2649C118.644 24.4235 117.658 25.3698 116.477 26.0001C115.168 26.6879 113.708 27.0311 112.232 26.9978C110.759 27.029 109.302 26.6835 107.996 25.9934C106.815 25.362 105.827 24.4161 105.141 23.2582C104.447 22.0651 104.092 20.7022 104.115 19.319V5H106.08V19.1831C106.061 20.2559 106.324 21.3147 106.843 22.2511C107.349 23.1459 108.094 23.8795 108.992 24.3683C109.993 24.9011 111.111 25.1664 112.242 25.139C113.373 25.1656 114.493 24.9003 115.495 24.3683C116.395 23.8815 117.14 23.1475 117.644 22.2511C118.16 21.3136 118.421 20.2553 118.402 19.1831L118.398 5ZM128 5V26.6275H126.041V5H128Z"
               />
               <path
                    className="fill-black dark:fill-white"
                    d="M23.5294 0H8.47059C3.79241 0 0 3.79241 0 8.47059V23.5294C0 28.2076 3.79241 32 8.47059 32H23.5294C28.2076 32 32 28.2076 32 23.5294V8.47059C32 3.79241 28.2076 0 23.5294 0Z"
               />
               <path
                    className="fill-white dark:fill-black"
                    d="M17.5667 9.21729H18.8111V18.2403C18.8255 19.1128 18.6 19.9726 18.159 20.7256C17.7241 21.4555 17.0968 22.0518 16.3458 22.4491C15.5717 22.8683 14.6722 23.0779 13.6473 23.0779C12.627 23.0779 11.7286 22.8672 10.9521 22.4457C10.2007 22.0478 9.5727 21.4518 9.13602 20.7223C8.6948 19.9705 8.4692 19.1118 8.48396 18.2403V9.21729H9.72854V18.1538C9.71656 18.8298 9.88417 19.4968 10.2143 20.0868C10.5362 20.6506 11.0099 21.1129 11.5814 21.421C12.1689 21.7448 12.8576 21.9067 13.6475 21.9067C14.4374 21.9067 15.1272 21.7448 15.7169 21.421C16.2895 21.1142 16.7635 20.6516 17.0844 20.0868C17.4124 19.4961 17.5788 18.8293 17.5667 18.1538V9.21729ZM23.6753 9.21729V22.845H22.4309V9.21729H23.6753Z"
               />
          </svg>
     );
};

export const AmazonLogo: React.FC<IconSvgProps> = (props) => {
     const { width, height = 100 } = props;
     return (
          <svg
               xmlns="http://www.w3.org/2000/svg"
               version="1.1"
               width={width}
               height={height}
               style={{ fill: "#221f1f" }}
               viewBox="0 0 603 182"
          >
               <path
                    d="m 374.00642,142.18404 c -34.99948,25.79739 -85.72909,39.56123 -129.40634,39.56123 -61.24255,0 -116.37656,-22.65135 -158.08757,-60.32496 -3.2771,-2.96252 -0.34083,-6.9999 3.59171,-4.69283 45.01431,26.19064 100.67269,41.94697 158.16623,41.94697 38.774689,0 81.4295,-8.02237 120.6499,-24.67006 5.92501,-2.51683 10.87999,3.88009 5.08607,8.17965"
                    id="path8"
                    style={{ fill: "#ff9900" }}
               />
               <path
                    d="m 388.55678,125.53635 c -4.45688,-5.71527 -29.57261,-2.70033 -40.84585,-1.36327 -3.43442,0.41947 -3.95874,-2.56925 -0.86517,-4.71905 20.00346,-14.07844 52.82696,-10.01483 56.65462,-5.2958 3.82764,4.74526 -0.99624,37.64741 -19.79373,53.35128 -2.88385,2.41195 -5.63662,1.12734 -4.35198,-2.07113 4.2209,-10.53917 13.68519,-34.16054 9.20211,-39.90203"
                    id="path10"
                    style={{ fill: "#ff9900" }}
               />
               <path
                    d="M 348.49744,20.06598 V 6.38079 c 0,-2.07113 1.57301,-3.46062 3.46062,-3.46062 h 61.26875 c 1.96628,0 3.53929,1.41571 3.53929,3.46062 v 11.71893 c -0.0262,1.96626 -1.67788,4.53551 -4.61418,8.59912 l -31.74859,45.32893 c 11.79759,-0.28837 24.25059,1.46814 34.94706,7.49802 2.41195,1.36327 3.06737,3.35575 3.25089,5.32203 V 99.4506 c 0,1.99248 -2.20222,4.32576 -4.5093,3.1198 -18.84992,-9.88376 -43.887,-10.95865 -64.72939,0.10487 -2.12356,1.15354 -4.35199,-1.15354 -4.35199,-3.14602 V 85.66054 c 0,-2.22843 0.0262,-6.02989 2.25463,-9.41186 l 36.78224,-52.74829 h -32.01076 c -1.96626,0 -3.53927,-1.38948 -3.53927,-3.43441"
                    id="path12"
               />
               <path
                    d="m 124.99883,105.45424 h -18.64017 c -1.78273,-0.13107 -3.19845,-1.46813 -3.32954,-3.17224 V 6.61676 c 0,-1.91383 1.59923,-3.43442 3.59171,-3.43442 h 17.38176 c 1.80898,0.0786 3.25089,1.46814 3.38199,3.19845 v 12.50545 h 0.34082 c 4.53551,-12.08598 13.05597,-17.7226 24.53896,-17.7226 11.66649,0 18.95477,5.63662 24.19814,17.7226 4.5093,-12.08598 14.76008,-17.7226 25.74495,-17.7226 7.81262,0 16.35931,3.22467 21.57646,10.46052 5.89879,8.04857 4.69281,19.74128 4.69281,29.99208 l -0.0262,60.37739 c 0,1.91383 -1.59923,3.46061 -3.59171,3.46061 h -18.61397 c -1.86138,-0.13107 -3.35574,-1.62543 -3.35574,-3.46061 V 51.29025 c 0,-4.03739 0.36702,-14.10466 -0.52434,-17.93233 -1.38949,-6.42311 -5.55797,-8.23209 -10.95865,-8.23209 -4.5093,0 -9.22833,3.01494 -11.14216,7.83885 -1.91383,4.8239 -1.73031,12.89867 -1.73031,18.32557 v 50.70338 c 0,1.91383 -1.59923,3.46061 -3.59171,3.46061 h -18.61395 c -1.88761,-0.13107 -3.35576,-1.62543 -3.35576,-3.46061 L 152.946,51.29025 c 0,-10.67025 1.75651,-26.37415 -11.48298,-26.37415 -13.39682,0 -12.87248,15.31063 -12.87248,26.37415 v 50.70338 c 0,1.91383 -1.59923,3.46061 -3.59171,3.46061"
                    id="path14"
               />
               <path
                    d="m 469.51439,1.16364 c 27.65877,0 42.62858,23.75246 42.62858,53.95427 0,29.17934 -16.54284,52.32881 -42.62858,52.32881 -27.16066,0 -41.94697,-23.75246 -41.94697,-53.35127 0,-29.78234 14.96983,-52.93181 41.94697,-52.93181 m 0.15729,19.53156 c -13.73761,0 -14.60278,18.71881 -14.60278,30.38532 0,11.69271 -0.18352,36.65114 14.44549,36.65114 14.44548,0 15.12712,-20.13452 15.12712,-32.40403 0,-8.07477 -0.34082,-17.72257 -2.779,-25.3779 -2.09735,-6.65906 -6.26581,-9.25453 -12.19083,-9.25453"
                    id="path16"
               />
               <path
                    d="M 548.00762,105.45424 H 529.4461 c -1.86141,-0.13107 -3.35577,-1.62543 -3.35577,-3.46061 l -0.0262,-95.69149 c 0.1573,-1.75653 1.7041,-3.1198 3.59171,-3.1198 h 17.27691 c 1.62543,0.0786 2.96249,1.17976 3.32954,2.67412 v 14.62899 h 0.3408 c 5.21717,-13.0822 12.53165,-19.32181 25.40412,-19.32181 8.36317,0 16.51662,3.01494 21.75999,11.27324 4.87633,7.65532 4.87633,20.5278 4.87633,29.78233 v 60.22011 c -0.20973,1.67786 -1.75653,3.01492 -3.59169,3.01492 h -18.69262 c -1.70411,-0.13107 -3.11982,-1.38948 -3.30332,-3.01492 V 50.47753 c 0,-10.46052 1.20597,-25.77117 -11.66651,-25.77117 -4.5355,0 -8.70399,3.04117 -10.77512,7.65532 -2.62167,5.84637 -2.96249,11.66651 -2.96249,18.11585 v 51.5161 c -0.0262,1.91383 -1.65166,3.46061 -3.64414,3.46061"
                    id="path18"
               />
               <use
                    xlinkHref="#path30"
                    transform="translate(244.36719)"
                    id="use28"
               />
               <path
                    d="M 55.288261,59.75829 V 55.7209 c -13.475471,0 -27.711211,2.88385 -27.711211,18.77125 0,8.04857 4.16847,13.50169 11.32567,13.50169 5.24337,0 9.93618,-3.22467 12.8987,-8.46805 3.670341,-6.44935 3.486841,-12.50544 3.486841,-19.7675 m 18.79747,45.43378 c -1.23219,1.10111 -3.01495,1.17976 -4.40444,0.4457 -6.18716,-5.1385 -7.28828,-7.52423 -10.69647,-12.42678 -10.224571,10.4343 -17.460401,13.55409 -30.726141,13.55409 -15.67768,0 -27.89471,-9.67401 -27.89471,-29.04824 0,-15.12713 8.20587,-25.43035 19.87236,-30.46398 10.1197,-4.45688 24.25058,-5.24337 35.051931,-6.47556 v -2.41195 c 0,-4.43066 0.34082,-9.67403 -2.25465,-13.50167 -2.280881,-3.43442 -6.632861,-4.85013 -10.460531,-4.85013 -7.10475,0 -13.44924,3.64414 -14.99603,11.19459 -0.31461,1.67789 -1.5468,3.32955 -3.22467,3.4082 L 6.26276,32.67628 C 4.74218,32.33548 3.0643,31.10327 3.48377,28.76999 7.65225,6.85271 27.44596,0.24605 45.16856,0.24605 c 9.071011,0 20.921021,2.41195 28.078221,9.28076 9.07104,8.46804 8.20587,19.7675 8.20587,32.06321 v 29.04826 c 0,8.73022 3.61794,12.55786 7.02613,17.27691 1.20597,1.67786 1.46814,3.69656 -0.05244,4.95497 -3.80144,3.17225 -10.56538,9.07104 -14.28819,12.37436 l -0.05242,-0.0525"
                    id="path30"
               />
          </svg>
     );
};

export const BarnesNoblesLogo: React.FC<IconSvgProps> = (props) => {
     return (
          <svg
               xmlns="http://www.w3.org/2000/svg"
               id="Layer_1"
               viewBox="0 0 307 47"
          >
               <path
                    d="M307 39v6.5h-17v-43h15.8V9h-8.3v11.5h7.4v6h-7.5V39h9.6zM268.5 2.4h8V39h9v6.5h-17V2.4zM263 33.2c0 9-4 12.3-11 12.3h-9.6v-43h9.7c7.7 0 9.7 4.4 9.7 11.7 0 5.4-2 8.2-5.3 8.4 3.7 0 6.6 3.7 6.6 10.6h-.1zM251.4 7.5H250V20h2c2 0 2.3-2 2.3-5.6 0-5-.6-7-3-7l.1.1zm.3 17.6H250v15.3h2c2.3 0 3-1.4 3-8 0-4.7-.7-7.2-3.3-7.2v-.1zm-25.4 21.2c-6.7 0-10.2-2.8-10.2-22.2 0-18.8 3-22 10.3-22 7.5 0 10.3 3.2 10.3 22 0 18.4-3 22.2-10.3 22.2h-.1zm2-36.2c-.3-3-1-3.7-2-3.7-1.2 0-1.8.6-2 3.7-.2 3-.2 7.3-.2 14 0 8 0 11 .3 13.8.2 3.3.8 3.6 2 3.6 1.3 0 1.7 0 2-3.6V10l-.1.1zm-29 19.5c-.7-2-1.2-4.4-1.8-7.4.4 5.8.4 7.4.4 12.5v11h-7.3v-43h7.2s3.2 12.7 4 15.3c.7 2.7 1.3 4.8 1.5 6.8-.2-4.3-.2-9.4-.2-13.7V2.4h7v43H204l-4.8-16 .1.2zM144 34.2c0 7-3 12-9.8 12-5.8 0-9.7-3-9.7-10.5 0-1.7 0-3.3.4-4.6h7c-.3 1.6-.5 2.6-.5 4.5 0 4.8 1.2 5.6 3 5.6 1.3 0 2.3-.7 2.3-5.5 0-4.2-3-7.3-6-11-3.2-3.6-6.5-8.4-6.5-12.4 0-6.4 3-10 9.2-10 6 0 9.3 3.2 9.3 9.5 0 1.4-.4 2.5-.6 3.5h-6.4l.2-3c0-4-.6-5.5-2.3-5.5-1.8 0-2 1.7-2 4.8 0 4 3 7 5.7 10.2 3.6 4.6 6.6 8.2 6.6 12.7l.1-.3zM103 2.5h16V9h-8.3v11.5h7.4v6h-7.3V39h9.5v6.5h-17v-43h-.3zm-18 27c-.6-2-1.2-4.4-1.7-7.4.4 5.8.4 7.4.4 12.5v11h-7.2v-43h7.2l4 15.3c.8 2.7 1.4 4.8 1.8 6.8-.2-4.3-.4-9.4-.4-13.7V2.4h7v43h-6.3l-4.7-16-.1.1zm-21.4-6c5 1.2 5.5 7 5.5 12.2 0 4 .3 7.7.8 9.8h-8c0-1.8-.5-2.5-.5-6.6v-5.4c0-3.5-1.2-6-3.7-6.7h-.4v18.5h-8v-43H61c5.3 0 9 3 9 11 0 6.6-3 9.5-6.4 10v.2zm-5-15.6h-1.4v12.3h2.3c2 0 2.6-1.3 2.6-5 0-6.5-1-7.4-3.5-7.3zM35.8 38.5h-5l-.6 7h-6.7l6.3-43.3h7.6l7.3 43.2h-8l-1-7 .1.1zm-1.4-13c-.2-2-1-8.3-1-12.4-.3 4.3-1 10.4-1 12.3l-1 8.3h4l-1-8.2zM20.6 33c0 9-4 12.3-11 12.3H0v-43h9.7c7.6 0 9.6 4.4 9.6 11.7 0 5.4-2 8.2-5.3 8.4 3.7 0 6.6 3.7 6.6 10.6zM9 7.5H7.5V20h2c2 0 2.3-2 2.3-5.6 0-5-.5-7-3-7l.2.1zM9.2 25H7.6v15.3h2c2.3 0 3-1.4 3-8 0-4.7-.7-7.2-3.3-7.2l-.1-.1z"
                    fill="#366251"
               />
               <path
                    d="M186.8 27.8c-.2 1.4-1 2.5-2.6 2.5-3.3 0-.7-5-3.8-5-1.8 0-3 1.6-5 5.8l-3 7.2.6 1.3c2 2.7 3.8 4.6 6 4.6 1.2 0 2.5-.6 4.5-2.6l1 1.4c-2.2 2.7-5 4.2-7.5 4.2-3 0-5.6-2.7-7.5-4.8-2.8 3-6 4.8-10.4 4.8-6.3 0-12-4-10.6-13 1.2-5.4 5.3-9 10-12-1.4-3.6-2.2-8-1.6-11.3C158 4 164.2 0 169.5 0c6.2 0 9 4.2 8 9-.5 2.5-1.6 4.8-4.2 7-2.7 2.4-7.2 4.5-9.7 6 1.6 4 4 8.5 7.4 14.3 1-2 2.5-5.6 4-8.5 1.3-3 3.4-4.8 6.5-4.8 4.3 0 5.5 3 5.3 4.8zm-33.5 7.5C152.7 39 155 44 161 44c3 0 5-.8 7-3.3-3.8-5.4-6.5-10.6-8.7-15.8-3 2.6-5.2 5.5-6 10.4zm18.5-21.7c1.3-1.7 1.7-3 2-4.4.7-3.6-1.4-6-4.5-6-4 0-7 3.3-7.2 6.4-.7 3.4-.3 6.7.8 10.2 2.4-1.4 7.4-4.5 9-6.2h-.1z"
                    fill="#c6beb0"
               />
          </svg>
     );
};

export const GooglePlayLogo: React.FC<IconSvgProps> = (props) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162.28 32">
               <g data-name="Capa 2">
                    <g data-name="Capa 1">
                         <path
                              d="m159.36 13.46-3 7.64h-.09l-3.13-7.64h-2.83L155 24.14l-2.68 5.94h2.75l7.23-16.62zm-21.2-6.34h-2.62v17.62h2.62zm-9.86 0H122v17.62h2.64v-6.67h3.67a5.59 5.59 0 0 0 5.78-5.47 5.6 5.6 0 0 0-5.79-5.48Zm.07 8.49h-3.73v-6h3.74a3 3 0 0 1 0 6Zm16.25-2.53a4.94 4.94 0 0 0-4.69 2.7l2.34 1a2.48 2.48 0 0 1 2.4-1.28 2.52 2.52 0 0 1 2.76 2.27v.18a5.73 5.73 0 0 0-2.73-.69c-2.51 0-5.07 1.38-5.07 4 0 2.36 2.05 3.88 4.37 3.88a3.66 3.66 0 0 0 3.34-1.72h.1v1.36H150V18c0-3.13-2.34-4.87-5.36-4.87Zm-.31 9.66c-.86 0-2.06-.44-2.06-1.5 0-1.36 1.49-1.88 2.79-1.88a4.67 4.67 0 0 1 2.4.59 3.19 3.19 0 0 1-3.13 2.79Zm-94.82 2.38A9.46 9.46 0 0 1 40 15.81a9.46 9.46 0 0 1 9.49-9.31 8.91 8.91 0 0 1 6.41 2.57l-1.81 1.79A6.51 6.51 0 0 0 49.49 9a6.77 6.77 0 0 0 0 13.54 6.25 6.25 0 0 0 4.72-1.87 5.26 5.26 0 0 0 1.39-3.2h-6.11V15h8.6a8.38 8.38 0 0 1 .13 1.59 8.37 8.37 0 0 1-2.21 6 8.57 8.57 0 0 1-6.52 2.53Zm22.03-6a5.94 5.94 0 1 1-11.87 0 5.94 5.94 0 1 1 11.87 0zm-2.6 0a3.35 3.35 0 1 0-6.67 0 3.35 3.35 0 1 0 6.67 0zm15.9 0a5.93 5.93 0 1 1-11.86 0 5.93 5.93 0 1 1 11.86 0zm-2.59 0a3.35 3.35 0 1 0-6.67 0 3.35 3.35 0 1 0 6.67 0zm15.57-5.63v10.77c0 4.42-2.63 6.24-5.73 6.24a5.75 5.75 0 0 1-5.34-3.5L89 26a3.33 3.33 0 0 0 3 2.13c2 0 3.22-1.23 3.22-3.52v-.86h-.1A4.12 4.12 0 0 1 92 25.12a6 6 0 0 1 0-12 4.18 4.18 0 0 1 3.16 1.34h.1v-1h2.54Zm-2.33 5.66a3.39 3.39 0 0 0-3.21-3.66 3.48 3.48 0 0 0-3.36 3.66 3.45 3.45 0 0 0 3.36 3.61 3.35 3.35 0 0 0 3.21-3.61Zm6.96-12.01v17.61h-2.64V7.14Zm10.4 13.96 2.06 1.36a6 6 0 0 1-5 2.66 5.81 5.81 0 0 1-5.89-6 5.52 5.52 0 0 1 10.75-2.18l.27.69-8 3.31a3.07 3.07 0 0 0 2.92 1.82 3.44 3.44 0 0 0 2.89-1.66zm-6.31-2.16 5.38-2.22a2.34 2.34 0 0 0-2.24-1.27 3.29 3.29 0 0 0-3.14 3.49z"
                              style={{ fill: "#5f6368" }}
                         />
                         <path
                              d="M13.54 15.28.12 29.34a3.64 3.64 0 0 0 5.33 2.16l15.1-8.6z"
                              style={{ fill: "#ea4335" }}
                         />
                         <path
                              d="m27.11 12.89-6.53-3.74-7.35 6.45 7.38 7.28 6.48-3.7a3.55 3.55 0 0 0 0-6.29z"
                              style={{ fill: "#fbbc04" }}
                         />
                         <path
                              d="M.12 2.66a3.46 3.46 0 0 0-.12.92v24.84a3.66 3.66 0 0 0 .12.92L14 15.64Z"
                              style={{ fill: "#4285f4" }}
                         />
                         <path
                              d="m13.64 16 6.94-6.85L5.5.51A3.72 3.72 0 0 0 3.63 0 3.64 3.64 0 0 0 .12 2.65Z"
                              style={{ fill: "#34a853" }}
                         />
                    </g>
               </g>
          </svg>
     );
};

export const ITunesLogo: React.FC<IconSvgProps> = (props) => {
     return (
          <svg
               xmlns="http://www.w3.org/2000/svg"
               width="2500"
               height="723"
               viewBox="7104.335 7172.337 191.331 55.328"
          >
               <path d="M7151.891 7212.926c-1.299 2.881-1.922 4.166-3.595 6.711-2.334 3.556-5.625 7.979-9.703 8.019-3.625.033-4.557-2.357-9.475-2.332-4.917.026-5.943 2.373-9.566 2.34-4.078-.037-7.197-4.033-9.533-7.586-6.528-9.938-7.211-21.6-3.186-27.799 2.861-4.404 7.376-6.982 11.622-6.982 4.323 0 7.04 2.369 10.612 2.369 3.467 0 5.578-2.373 10.576-2.373 3.776 0 7.778 2.059 10.631 5.609-9.342 5.119-7.823 18.456 1.617 22.024z" />
               <path d="M7135.854 7181.319c1.815-2.33 3.194-5.619 2.694-8.982-2.967.205-6.437 2.092-8.461 4.551-1.838 2.232-3.355 5.543-2.766 8.762 3.239.099 6.589-1.835 8.533-4.331z" />
               <g>
                    <path d="M7168.464 7197.131c0 2.019-1.535 3.647-3.938 3.647-2.305 0-3.84-1.631-3.792-3.647-.048-2.11 1.487-3.694 3.84-3.694s3.843 1.584 3.89 3.694zm-7.536 30.004v-23.476h7.297v23.476h-7.297zM7180.56 7200.924h-8.688v-6.144h24.865v6.144h-8.832v26.211h-7.347l.002-26.211zM7219.921 7219.599c0 3.071.097 5.567.19 7.537h-6.336l-.336-3.312h-.146c-.912 1.439-3.121 3.842-7.346 3.842-4.753 0-8.257-2.979-8.257-10.227v-13.775h7.345v12.625c0 3.408 1.104 5.471 3.648 5.471 2.018 0 3.169-1.391 3.648-2.543.19-.432.237-1.008.237-1.584v-13.969h7.347v15.936h.006v-.001zM7225.775 7211.147c0-2.93-.096-5.426-.191-7.487h6.336l.336 3.217h.146c.959-1.487 3.357-3.744 7.248-3.744 4.801 0 8.398 3.168 8.398 10.08v13.922h-7.295v-13.01c0-3.022-1.057-5.088-3.695-5.088-2.018 0-3.217 1.394-3.695 2.733-.191.48-.287 1.152-.287 1.824v13.537h-7.297v-15.983l-.004-.001zM7259.52 7217.726c.24 3.024 3.217 4.465 6.625 4.465 2.496 0 4.513-.336 6.479-.959l.961 4.942c-2.399.961-5.328 1.487-8.498 1.487-7.97 0-12.528-4.655-12.528-12.002 0-5.953 3.696-12.526 11.856-12.526 7.586 0 10.465 5.901 10.465 11.713 0 1.248-.145 2.353-.238 2.879l-15.122.001zm8.593-4.995c0-1.774-.77-4.752-4.129-4.752-3.072 0-4.32 2.783-4.514 4.752h8.643zM7279.199 7220.75c1.347.813 4.129 1.774 6.289 1.774 2.209 0 3.121-.77 3.121-1.969s-.721-1.775-3.457-2.688c-4.849-1.631-6.721-4.271-6.672-7.008 0-4.416 3.744-7.73 9.554-7.73 2.735 0 5.187.625 6.625 1.346l-1.297 5.041c-1.058-.576-3.071-1.346-5.088-1.346-1.774 0-2.784.721-2.784 1.92 0 1.105.912 1.682 3.792 2.689 4.465 1.535 6.337 3.793 6.385 7.248 0 4.369-3.456 7.633-10.177 7.633-3.07 0-5.811-.722-7.585-1.683l1.294-5.227z" />
               </g>
          </svg>
     );
};