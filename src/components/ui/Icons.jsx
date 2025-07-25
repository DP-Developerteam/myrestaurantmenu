// Icons component
// ####### A ####### //
// Icon Arrow - it is a downward-pointing arrow symbol
export const IconArrow = ({ size = 24, filled = true, fillColor = 'currentColor', strokeColor = 'currentColor', strokeWidth = 0, ...props }) => (
  <svg
    width={size}
    height={size}
    fill={filled ? fillColor : 'none'}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10 15.7c-.4 0-.7-.1-1-.4L.4 6.7c-.5-.5-.5-1.4 0-2 .5-.5 1.4-.5 2 0l7.6 7.6 7.6-7.6c.5-.5 1.4-.5 2 0 .5.5.5 1.4 0 2l-8.6 8.6c-.3.3-.6.4-1 .4Z"/>
  </svg>
);
// ####### B ####### //
// Icon BurgerMenu - it is a hamburger menu symbol
export const IconBurgerMenu = ({ size = 24, filled = true, fillColor = 'currentColor', strokeColor = 'none', strokeWidth = 0, ...props }) => (
  <svg
    width={size}
    height={size}
    fill={filled ? fillColor : 'none'}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 28 18.7"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 18.7v-3.1h28v3.1H0ZM0 10.9v-3.1h28v3.1H0ZM0 3.2V0h28v3.2H0Z"/>
  </svg>
);
// Icon BurgerMenuOpen - it is an expanded hamburger menu with an arrow
export const IconBurgerMenuExpanded = ({ size = 24, filled = true, fillColor = 'currentColor', strokeColor = 'none', strokeWidth = 0, ...props }) => (
  <svg
    width={size}
    height={size}
    fill={filled ? fillColor : 'none'}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 28 18.7"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 18.7v-3.1h20.2v3.1H0ZM25.8 17.1l-7.8-7.8 7.8-7.8 2.2 2.2-5.6 5.6 5.6 5.6-2.2 2.2ZM0 10.9v-3.1h15.5v3.1H0ZM0 3.2V0h20.2v3.2H0Z"/>
  </svg>
);
// ####### C ####### //
// Icon Champagne - it is a celebration/champagne bottle symbol
export const IconChampagne = ({ size = 24, filled = true, fillColor = 'currentColor', strokeColor = 'currentColor', strokeWidth = 0, ...props }) => (
  <svg
    width={size}
    height={size * 1.1} // Maintain original aspect ratio (54.7:60)
    fill={filled ? fillColor : 'none'}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 54.7 60"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M25.3 5.8l-11.2-2.2c-.8-.2-1.6.2-2 .9-.2.3-4.2 7.3-5.9 16.3-.4 2.1-.6 4.1-.5 6.1 0 1.6.2 3.1.6 4.6.1.4.2.9.4 1.3.9 3 2.5 5.1 4.6 6.2l-2.2 11.7-4.5-.9c-1.7-.3-3.4.6-4 2.2-.1.3-.2.6-.2.8h0c0 .3 0 .5 0 .7 0 .9.2 1.7.7 2.4.5.7 1.3 1.2 2.2 1.4l12.7 2.5c.2 0 .4 0 .7 0 1.2 0 2.3-.6 3-1.6.2-.3.4-.7.5-1 .1-.5.2-.9.2-1.2 0-.8-.2-1.7-.7-2.3-.5-.7-1.3-1.2-2.2-1.4l-4.5-.9 2.2-11.7c2.2-.2 4.3-1.5 6.2-3.6.1-.2.3-.3.5-.6 1.5-1.8 2.7-4.2 3.6-6.8.5-1.3.8-2.7 1.1-4.1 1.7-8.9.7-17 .6-17.3-.1-.8-.7-1.5-1.5-1.6ZM21 28.8c-.2.4-.4.9-.6 1.3h0c-.6 1.2-1.3 2.3-2.1 3.3-1.1 1.4-2.3 2.3-3.4 2.6-.5.1-1.1.1-1.6 0-.9-.2-1.7-.9-2.3-2-.7-1.2-1.2-2.7-1.5-4.5 0-.2 0-.4 0-.6h11.5ZM22.4 24c0 .3-.1.7-.2 1h-12.8c0-1.1.2-2.3.4-3.5 1.2-6.2 3.6-11.5 4.9-13.9l8.4 1.6c.2 2.7.5 8.5-.7 14.7Z"/>
    <path d="M21.1 20.2s0 0 .1 0c.6 0 1.1-.5 1.2-1.1.2-2.4.3-4.9.2-7.3 0-.6-.6-1.1-1.2-1.1-.6 0-1.1.6-1.1 1.2 0 2.4 0 4.7-.2 7 0 .6.4 1.2 1.1 1.3Z"/>
    <path d="M54.7 53.2c0-.5-.2-1-.5-1.5-.2-.4-.5-.8-.9-1.1-.8-.7-1.9-.9-2.9-.7l-4.5.9-2.3-11.7c4.5-2.4 6.5-9.9 4.9-18.3-1.7-8.9-5.8-16-5.9-16.3-.4-.7-1.2-1.1-2-.9l-11.2 2.2c-.8.2-1.4.8-1.5 1.6 0 .3-1.1 8.3.6 17.3 1.6 8.4 6.4 14.6 11.4 15.1l2.3 11.7-4.5.9c-1.4.3-2.5 1.4-2.8 2.7-.2.7-.1 1.5.2 2.3.2.8.8 1.4 1.4 1.9.6.4 1.3.6 2 .6s.5 0 .7 0l12.7-2.5c.9-.2 1.7-.7 2.3-1.5.5-.8.7-1.8.6-2.7ZM41.3 35.9c-.3 0-.6.1-.9.1-.7 0-1.5-.4-2.3-1-.7-.5-1.3-1.1-1.9-1.9-.3-.4-.7-.9-1-1.4-.6-.9-1.1-2-1.6-3.1-.4-1-.8-2.1-1-3.2h12.7c0 2 0 3.8-.5 5.4-.1.6-.3 1.1-.5 1.6-.7 1.9-1.8 3.1-3 3.5ZM31.4 9.3l8.4-1.6c1.2 2.4 3.6 7.7 4.9 13.9 0 0 0 0 0 0h-13c-.7-5.3-.5-10-.3-12.2Z"/>
    <path d="M27.1 6.1c.6 0 1.2-.5 1.2-1.2V1.2c0-.6-.5-1.2-1.2-1.2s-1.2.5-1.2 1.2v3.8c0 .6.5 1.2 1.2 1.2Z"/>
    <path d="M22.4 4.4c.2.4.6.6 1 .6s.4 0 .6-.2c.5-.3.7-1 .4-1.6l-1.4-2.4c-.3-.5-1-.7-1.6-.4-.5.3-.7 1-.4 1.6l1.4 2.4Z"/>
    <path d="M30.5 4.8c.2.1.4.2.6.2.4 0 .8-.2 1-.6l1.4-2.4c.3-.5.2-1.3-.4-1.6-.5-.3-1.3-.2-1.6.4l-1.4 2.4c-.3.5-.2 1.3.4 1.6Z"/>
    <path d="M42.6 16.3c-.2-.6-.4-1.2-.6-1.8-.1-.3-.2-.6-.3-.9 0-.2-.2-.4-.4-.5-.4-.3-1-.3-1.4 0-.4.3-.6.9-.4 1.3.4 1.2.8 2.4 1.2 3.7.1.5.2 1 .7 1.3.4.2 1 .2 1.3 0 .4-.3.5-.8.4-1.2-.2-.6-.3-1.2-.5-1.8Z"/>
    <circle cx="20.6" cy="23.6" r="1.2"/>
    <circle cx="38.8" cy="9.8" r="1.2"/>
  </svg>
);
// Icon Cutlery - it is a cutlery/food menu symbol
export const IconCutlery = ({ size = 24, filled = true, fillColor = 'currentColor', strokeColor = 'currentColor', strokeWidth = 0, ...props }) => (
  <svg
    width={size}
    height={size}
    fill={filled ? fillColor : 'none'}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 30.1 40"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11.9.2c-.8 0-1.5.7-1.5 1.5v9.9s0 0 0 0l-2.6 4.1c-.6.9-.9 2-.8 3.2l1.5 16c0 .5-.1 1-.4 1.3s-.7.6-1.2.6c-1.1 0-1.9-.7-1.9-1.6v-.3s1.5-16 1.5-16c0-1.2-.2-2.3-.8-3.1l-2.6-4.1s0-.1 0-.1V1.6c0-.7-.4-1.3-1.1-1.4h0c0 0-.4 0-.4 0h0C.6.2 0 .9 0 1.7v9.9C0 12.2.2 12.8.5 13.2l2.6 4.1c.2.4.4.8.3 1.3l-1.5 16c0 2 .7 3.5 2.2 4.4.8.5 1.7.7 2.6.7s1.8-.2 2.6-.7c1.5-.9 2.3-2.5 2.2-4.4l-1.5-16c0-.6.1-1 .3-1.3l2.6-4.1c.3-.5.5-1.1.5-1.7V1.7c0-.8-.7-1.5-1.5-1.5Z"/>
    <path d="M4.9 11.5c.8 0 1.4-.6 1.5-1.5V1.7c0-.8-.7-1.5-1.5-1.5s-1.4.6-1.5 1.5v8.3c0 .8.7 1.5 1.5 1.5Z"/>
    <path d="M8.5 11.5c.8 0 1.4-.6 1.5-1.5V1.7c0-.8-.7-1.5-1.5-1.5s-1.4.6-1.5 1.5v8.3c0 .8.7 1.5 1.5 1.5Z"/>
    <path d="M26.4 17.7c3.4-3.3 4.6-8.3 3-12.8-.1-.4-.4-.7-.8-.8-.4-.2-.8-.2-1.1 0-.8.3-1.1 1.1-.9 1.9 1.2 3.4.3 7.1-2.3 9.6-.7.6-1 1.4-.9 2.3l1.4 15.5v.4c0 1.1-.7 2.6-1.5 3-.4.2-.8.1-1.2-.2-.9-.9-1.3-2.1-1.2-3.2l1.4-15.6c0-.9-.3-1.7-.9-2.2-3-2.8-3.7-7.4-1.6-11 .9-1.5 2.9-2.1 4.5-1.4.8.4 1.6 0 2-.7.4-.8 0-1.6-.7-2-3-1.5-6.7-.4-8.5 2.6-2.7 4.9-1.8 10.9 2.2 14.6l-1.4 15.4c-.2 2.1.5 4.1 2 5.6.9.8 1.8 1.2 2.8 1.2s1.1-.1 1.6-.4c2-.9 3.5-3.4 3.4-5.8v-.7s-1.4-15.5-1.4-15.5Z"/>
  </svg>
);
// Icon Cross - it is a close/cross symbol
export const IconCross = ({ size = 18, filled = true, fillColor = 'currentColor', strokeColor = 'currentColor', strokeWidth = 0, ...props }) => (
  <svg
    width={size}
    height={size}
    fill={filled ? fillColor : 'none'}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 30 30"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M2.8 29.8c-.7 0-1.5-.2-2-.7-1.1-1.1-1.1-2.9 0-4L25 1c1.1-1.1 2.9-1 4 .1 1 1 1 2.6.1 3.7L4.8 29.1c-.6.5-1.3.7-2 .7h0Z"/>
    <path d="M26.9 29.8c-.7 0-1.5-.3-2-.8L.8 4.9C-.2 3.7 0 1.9 1.1.9 2.2 0 3.8 0 4.8.9l24.3 24.1c1.1 1.1 1.2 2.9.1 4 0 0 0 0-.1.1-.6.5-1.4.8-2.2.7h0Z"/>
  </svg>
);
// ####### E ####### //
// Icon Expand - it is an expand arrow symbol
export const IconExpand = ({ size = 24, filled = true, fillColor = 'currentColor', strokeColor = 'currentColor', strokeWidth = 0, ...props }) => (
  <svg
    width={size}
    height={size}
    fill={filled ? fillColor : 'none'}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M511.894 19.228c-.031-.316-.09-.622-.135-.933-.054-.377-.098-.755-.172-1.13-.071-.358-.169-.705-.258-1.056-.081-.323-.152-.648-.249-.968-.104-.345-.234-.678-.355-1.015-.115-.319-.22-.641-.35-.956-.13-.315-.284-.616-.428-.923-.153-.324-.297-.651-.467-.969-.158-.294-.337-.574-.508-.86-.186-.311-.362-.626-.565-.93-.211-.316-.447-.613-.674-.917-.19-.253-.366-.513-.568-.76-.443-.539-.909-1.058-1.402-1.551-.004-.004-.007-.008-.011-.012-.004-.004-.008-.006-.011-.01-.494-.493-1.012-.96-1.552-1.403-.247-.203-.507-.379-.761-.569-.303-.227-.6-.462-.916-.673-.304-.203-.619-.379-.931-.565-.286-.171-.565-.35-.859-.508-.318-.17-.644-.314-.969-.467-.307-.145-.609-.298-.923-.429-.315-.13-.637-.236-.957-.35-.337-.121-.669-.25-1.013-.354-.32-.097-.646-.168-.969-.249-.351-.089-.698-.187-1.055-.258-.375-.074-.753-.119-1.13-.173-.311-.044-.617-.104-.933-.135C492.072.037 491.37 0 490.667 0H341.333C329.551 0 320 9.551 320 21.333c0 11.782 9.551 21.333 21.333 21.333h97.83L283.582 198.248c-8.331 8.331-8.331 21.839 0 30.17s21.839 8.331 30.17 0L469.333 72.837v97.83c0 11.782 9.551 21.333 21.333 21.333S512 182.449 512 170.667V21.335C512 20.631 511.963 19.928 511.894 19.228z" />
    <path d="M198.248 283.582 42.667 439.163v-97.83c0-11.782-9.551-21.333-21.333-21.333C9.551 320 0 329.551 0 341.333v149.333c0 .703.037 1.405.106 2.105.031.315.09.621.135.933.054.377.098.756.173 1.13.071.358.169.704.258 1.055.081.324.152.649.249.969.104.344.233.677.354 1.013.115.32.22.642.35.957.13.315.284.616.429.923.153.324.297.651.467.969.158.294.337.573.508.859.186.311.362.627.565.931.211.316.446.612.673.916.19.254.366.514.569.761.443.54.91 1.059 1.403 1.552.004.004.006.008.01.011.004.004.008.007.012.011.493.492 1.012.959 1.551 1.402.247.203.507.379.76.568.304.227.601.463.917.674.303.203.618.379.93.565.286.171.565.35.86.508.318.17.645.314.969.467.307.145.609.298.923.428.315.13.636.235.956.35.337.121.67.25 1.015.355.32.097.645.168.968.249.351.089.698.187 1.056.258.375.074.753.118 1.13.172.311.044.618.104.933.135.7.069 1.402.106 2.104.106 0 0 .001 0 .001 0h149.333c11.782 0 21.333-9.551 21.333-21.333s-9.551-21.333-21.333-21.333h-97.83l155.582-155.582c8.331-8.331 8.331-21.839 0-30.17S206.58 275.251 198.248 283.582z" />
  </svg>
);
// Icon Eye - it is an eye
export const IconEye = ({ size = 24, filled = true, fillColor = 'currentColor', strokeColor = 'currentColor', strokeWidth = 0, ...props }) => (
  <svg
    width={size}
    height={size}
    fill={filled ? fillColor : "none"}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 511.999 511.999"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M508.745,246.041c-4.574-6.257-113.557-153.206-252.748-153.206S7.818,239.784,3.249,246.035 c-4.332,5.936-4.332,13.987,0,19.923c4.569,6.257,113.557,153.206,252.748,153.206s248.174-146.95,252.748-153.201 C513.083,260.028,513.083,251.971,508.745,246.041z M255.997,385.406c-102.529,0-191.33-97.533-217.617-129.418 c26.253-31.913,114.868-129.395,217.617-129.395c102.524,0,191.319,97.516,217.617,129.418 C447.361,287.923,358.746,385.406,255.997,385.406z" />
    <path d="M255.997,154.725c-55.842,0-101.275,45.433-101.275,101.275s45.433,101.275,101.275,101.275 s101.275-45.433,101.275-101.275S311.839,154.725,255.997,154.725z M255.997,323.516c-37.23,0-67.516-30.287-67.516-67.516 s30.287-67.516,67.516-67.516s67.516,30.287,67.516,67.516S293.227,323.516,255.997,323.516z" />
  </svg>
);
// Icon Eye - it is an eye with a crossed line
export const IconEyeCrossed = ({ size = 24, filled = true, fillColor = 'currentColor', strokeColor = 'currentColor', strokeWidth = 1, ...props }) => (
  <svg
    width={size}
    height={size}
    fill={filled ? fillColor : "none"}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 128 128"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M79.891 65.078l7.27-7.27c.529 1.979.839 4.048.839 6.192 0 13.234-10.766 24-24 24-2.144 0-4.213-.31-6.192-.839l7.27-7.27c7.949-.542 14.271-6.864 14.813-14.813zm47.605-3.021c-.492-.885-7.47-13.112-21.11-23.474l-5.821 5.821c9.946 7.313 16.248 15.842 18.729 19.602-4.741 7.219-23.339 31.994-55.294 31.994-4.792 0-9.248-.613-13.441-1.591l-6.573 6.573c6.043 1.853 12.685 3.018 20.014 3.018 41.873 0 62.633-36.504 63.496-38.057.672-1.209.672-2.677 0-3.886zm-16.668-39.229-88 88c-.781.781-1.805 1.172-2.828 1.172s-2.047-.391-2.828-1.172c-1.563-1.563-1.563-4.094 0-5.656l11.196-11.196c-18.1-10.927-27.297-27.012-27.864-28.033-.672-1.209-.672-2.678 0-3.887.863-1.552 21.623-38.056 63.496-38.056 10.827 0 20.205 2.47 28.222 6.122l12.95-12.95c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656zm-76.495 65.183l10.127-10.127c-2.797-3.924-4.46-8.709-4.46-13.884 0-13.234 10.766-24 24-24 5.175 0 9.96 1.663 13.884 4.459l8.189-8.189c-6.47-2.591-13.822-4.27-22.073-4.27-31.955 0-50.553 24.775-55.293 31.994 3.01 4.562 11.662 16.11 25.626 24.017zm15.934-15.935l21.809-21.809c-2.379-1.405-5.118-2.267-8.076-2.267-8.822 0-16 7.178-16 16 0 2.958.862 5.697 2.267 8.076z" />
  </svg>
);
// ####### F ####### //
// Icon FlagUK - it is the flag of the United Kingdom
export const IconFlagUK = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect fill="#f0f0f0" width="24" height="16"/>
    <polygon fill="#d80027" points="13.5 0 10.5 0 10.5 6.5 0 6.5 0 9.5 10.5 9.5 10.5 16 13.5 16 13.5 9.5 24 9.5 24 6.5 13.5 6.5 13.5 0"/>
    <g>
      <polygon fill="#0052b4" points="18.5 10.8 24 13.9 24 10.8 18.5 10.8"/>
      <polygon fill="#0052b4" points="14.6 10.8 24 16 24 14.5 17.3 10.8 14.6 10.8"/>
      <polygon fill="#0052b4" points="21.5 16 14.6 12.2 14.6 16 21.5 16"/>
    </g>
    <polygon fill="#d80027" points="14.6 10.8 24 14.5 17.3 10.8 14.6 10.8"/>
    <g>
      <polygon fill="#0052b4" points="4.2 10.8 0 13.1 0 10.8 4.2 10.8"/>
      <polygon fill="#0052b4" points="9.4 11.5 9.4 16 1.2 16 9.4 11.5"/>
    </g>
    <polygon fill="#d80027" points="6.7 10.8 0 14.5 0 16 9.4 10.8 6.7 10.8"/>
    <g>
      <polygon fill="#0052b4" points="5.5 5.2 0 2.1 0 5.2 5.5 5.2"/>
      <polygon fill="#0052b4" points="9.4 5.2 0 0 0 1.5 6.7 5.2 9.4 5.2"/>
      <polygon fill="#0052b4" points="2.5 0 9.4 3.8 9.4 0 2.5 0"/>
    </g>
    <polygon fill="#d80027" points="9.4 5.2 0 1.5 6.7 5.2 9.4 5.2"/>
    <g>
      <polygon fill="#0052b4" points="19.8 5.2 24 2.9 24 5.2 19.8 5.2"/>
      <polygon fill="#0052b4" points="14.6 4.6 14.6 0 22.8 0 14.6 4.6"/>
    </g>
    <polygon fill="#d80027" points="17.3 5.2 24 1.5 24 0 14.6 5.2 17.3 5.2"/>
  </svg>
);
// Icon FlagEs - it is the flag of Spain
export const IconFlagES = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#d6002a" d="M0 5.6V0h24v5.6l-12 .5L0 5.6ZM0 16v-5.6l12-.5 12 .5V16H0Z"/>
    <path fill="#fddb47" d="M0 5.6h24v4.8H0V5.6Z"/>
  </svg>
);
// Icon FlagDE - it is the flag of Germany
export const IconFlagDE = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect fill="#d80027" width="24" height="16"/>
    <rect fill="#000" width="24" height="5.3"/>
    <rect fill="#ffda44" y="10.7" width="24" height="5.3"/>
  </svg>
);
// // Icon FlagFR - it is the flag of France
export const IconFlagFR = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#41479b" d="M8 16H.4c-.2 0-.4-.2-.4-.4V.4C0 .2.2 0 .4 0H8v16Z"/>
    <rect fill="#f5f5f5" x="8" width="8" height="16"/>
    <path fill="#ff4b55" d="M23.6 16H16V0h7.6c.2 0 .4.2.4.4v15.2c0 .2-.2.4-.4.4Z"/>
  </svg>
);
// Icon FlagIT - it is the flag of Italy
export const IconFlagIT = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#009a49" d="M0 0h7v16H0V0Z"/>
    <path fill="#fff" d="M7 0h7v16H7V0Z"/>
    <path fill="#ce2b37" d="M14 0h7v16h-7V0Z"/>
  </svg>
);
// ####### G ####### //
// Icon Glass - it is a drink glass symbol
export const IconGlass = ({ size = 24, filled = true, fillColor = 'currentColor', strokeColor = 'currentColor', strokeWidth = 0, ...props }) => (
  <svg
    width={size}
    height={size}
    fill={filled ? fillColor : 'none'}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    viewBox="0 0 30.3 40"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M28.8 6.3c.8 0 1.5-.6 1.6-1.5 0-1 0-1.5 0-2.4h0C30.3 1 29.3 0 28 0H2.3C1.7 0 1.1.2.7.7c0 0 0 0 0 0C.2 1.1 0 1.7 0 2.3 0 5.8.1 9.3.4 12.7c.2 2.3.3 4 .6 6.4 0 .8.8 1.3 1.5 1.3 0 0 .1 0 .2 0 .8 0 1.4-.9 1.3-1.7-.2-1.9-.4-3.4-.5-5.1 1.5-.5 3.2-.8 4.8-.7 2 0 3.9.6 5.7 1.6.1 0 .3.1.4.2 2.3 1.2 4.8 1.8 7.4 1.8s3.4-.3 5-.8c-.4 4.2-1 8.3-1.9 13.1l-1 5.5c-.1 0-.3 0-.4 0h-11.9c-.4 0-.7.3-.7.7s.3.7.7.7h11.9s0 0 .1 0l-.2 1H7l-.2-1s0 0 .1 0h2c.4 0 .7-.3.7-.7s-.3-.7-.7-.7h-2c-.1 0-.3 0-.4 0l-1-5.5c-.4-2.3-.6-3.6-1-5.8-.1-.8-.9-1.4-1.7-1.3-.8.1-1.4.9-1.3 1.7.3 2.3.6 3.7 1 6l1.5 8.1c.3 1.4 1.5 2.5 3 2.5h16.4c1.5 0 2.7-1 3-2.5l1.5-8.1c1.4-7.4 2.1-13.5 2.3-20.2 0-.8-.6-1.5-1.5-1.6-.8 0-1.5.6-1.6 1.5 0 1.1 0 2.2-.2 3.3-1.7.7-3.5 1.1-5.3 1.1s-4.1-.5-6-1.4c-.1 0-.2-.1-.3-.2-2.1-1.2-4.6-1.9-7-2-1.7 0-3.5.1-5.1.6-.1-2.5-.2-5-.2-7.4h24.2c0 .6 0 1 0 1.7 0 .8.6 1.5 1.5 1.6Z"/>
    <path d="M10.3 30.5c0 1.7 1.4 3.1 3.1 3.1s3.1-1.4 3.1-3.1-1.4-3.1-3.1-3.1-3.1 1.4-3.1 3.1ZM13.4 29.8c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7Z"/>
    <path d="M22.5 24.4c0-1.3-1.1-2.3-2.3-2.3s-2.3 1.1-2.3 2.3 1.1 2.3 2.3 2.3 2.3-1.1 2.3-2.3ZM19.6 24.4c0-.3.3-.6.6-.6s.6.3.6.6-.3.6-.6.6-.6-.3-.6-.6Z"/>
    <path d="M15.2 20.7c0-1-.9-1.9-1.9-1.9s-1.9.9-1.9 1.9.9 1.9 1.9 1.9 1.9-.9 1.9-1.9ZM12.9 20.7c0-.2.2-.3.3-.3s.3.2.3.3-.2.3-.3.3-.3-.2-.3-.3Z"/>
    <path d="M10 16.1c0-1-.9-1.9-1.9-1.9s-1.9.9-1.9 1.9.9 1.9 1.9 1.9 1.9-.9 1.9-1.9ZM7.8 16.1c0-.2.2-.3.3-.3s.3.2.3.3-.2.3-.3.3-.3-.2-.3-.3Z"/>
  </svg>
);
// Icon Google - it is the Google logo
export const IconGoogle = ({ size = 28, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="1 1 22 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    <path d="M1 1h22v22H1z" fill="none"/>
  </svg>
);
// ####### H ####### //
// Icon House - it is a home/house symbol
export const IconHouse = ({ size = 24, filled = true, fillColor = 'currentColor', strokeColor = 'currentColor', strokeWidth = 0, ...props }) => (
  <svg
    width={size}
    height={size}
    fill={filled ? fillColor : 'none'}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 40 40"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20 0c-1.6 0-2.9.5-3.8 1.5L.6 16.6c-.8.8-.8 2 0 2.8.8.8 2 .8 2.8 0h0l15.5-15c.6-.6 1.6-.6 2.2 0l15.5 15c.8.8 2.1.7 2.8 0 .8-.8.7-2.1 0-2.8L23.8 1.5C22.8.5 21.3 0 20 0ZM6.1 22c-1.1 0-2 .9-2 2v10c0 3.3 2.7 6 6 6h20c3.3 0 6-2.7 6-6v-10c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1-.9 2-2 2H10.1c-1.1 0-2-.9-2-2v-10c0-1.1-.9-2-2-2h0Z"/>
  </svg>
);
// ####### I ####### //
// Icon Like - it is a heart
export const IconLike = ({ size = 24, filled = false, fillColor = 'currentColor', strokeColor = 'currentColor', strokeWidth = 3, ...props }) => (
  <svg
    width={size}
    height={size}
    fill={filled ? fillColor : "none"}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7 3C4.24 3 2 5.22 2 7.95C2 10.16 2.87 15.39 11.49 20.69C11.8 20.88 12.2 20.88 12.51 20.69C21.13 15.39 22 10.16 22 7.95C22 5.22 19.76 3 17 3C14.24 3 12 6 12 6C12 6 9.76 3 7 3Z"/>
  </svg>
);
// ####### L ####### //
// IconLanguage - globe/translation-style icon
export const IconLanguage = ({ size = 24, filled = true, fillColor = 'currentColor', strokeColor = 'currentColor', strokeWidth = 0, ...props }) => (
  <svg
    width={size}
    height={size}
    fill={filled ? fillColor : 'none'}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Layer_2" data-name="Layer 2">
      <path d="M87.95636,73.23224a44.29242,44.29242,0,0,0,6.54358-23.23145L94.5,50l-.00006-.00079a44.2927,44.2927,0,0,0-6.54376-23.23169l-.02442-.03815a44.5022,44.5022,0,0,0-75.8634-.00031l-.02472.03864a44.51347,44.51347,0,0,0-.00018,46.46436l.02514.03918a44.50213,44.50213,0,0,0,75.86292-.00037Zm-32.26825,13.641a10.81448,10.81448,0,0,1-2.8894,1.99561,6.52134,6.52134,0,0,1-5.59748,0,13.62135,13.62135,0,0,1-5.04809-4.44233,39.77474,39.77474,0,0,1-5.74762-12.47064Q43.19588,71.538,50,71.53021q6.80127,0,13.59521.42572a50.19826,50.19826,0,0,1-2.438,6.71222A25.80323,25.80323,0,0,1,55.68811,86.87329ZM10.587,52.5H28.536a88.30459,88.30459,0,0,0,1.62274,14.91418q-7.35983.64766-14.68207,1.779A39.23059,39.23059,0,0,1,10.587,52.5Zm4.88964-21.69324Q22.796,31.941,30.16388,32.58618A88.15014,88.15014,0,0,0,28.5376,47.5H10.587A39.2306,39.2306,0,0,1,15.47662,30.80676ZM44.31183,13.12665a10.81146,10.81146,0,0,1,2.8894-1.99561,6.52134,6.52134,0,0,1,5.59748,0,13.62131,13.62131,0,0,1,5.04809,4.44232A39.77482,39.77482,0,0,1,63.59436,28.044Q56.804,28.46185,50,28.46973q-6.80127-.00009-13.59528-.42578a50.18985,50.18985,0,0,1,2.43805-6.71216A25.80254,25.80254,0,0,1,44.31183,13.12665ZM89.413,47.5H71.464a88.31173,88.31173,0,0,0-1.62274-14.91425q7.35992-.64764,14.68207-1.779A39.2306,39.2306,0,0,1,89.413,47.5ZM35.18756,67.02545A82.69645,82.69645,0,0,1,33.53729,52.5H66.4632a82.67828,82.67828,0,0,1-1.64728,14.52563Q57.41607,66.54,50,66.53027,42.58927,66.53018,35.18756,67.02545Zm29.62482-34.051A82.70224,82.70224,0,0,1,66.46259,47.5H33.53674A82.67914,82.67914,0,0,1,35.184,32.97424q7.39985.4855,14.816.49543Q57.41074,33.46967,64.81238,32.97449ZM71.46228,52.5H89.413a39.23052,39.23052,0,0,1-4.88971,16.69318q-7.31936-1.13435-14.68719-1.77942A88.14559,88.14559,0,0,0,71.46228,52.5ZM81.52539,26.20477q-6.39945.92331-12.83734,1.462a57.01792,57.01792,0,0,0-2.9754-8.39581,35.48007,35.48007,0,0,0-4.13984-7.04529A39.49152,39.49152,0,0,1,81.52539,26.20477ZM22.06915,22.06915a39.48682,39.48682,0,0,1,16.3559-9.84289c-.09369.12134-.19006.2373-.28241.36114A45.64338,45.64338,0,0,0,31.321,27.66754q-6.43816-.54528-12.84643-1.46277A39.82535,39.82535,0,0,1,22.06915,22.06915Zm-3.5946,51.726q6.39943-.9234,12.83728-1.462A57.01789,57.01789,0,0,0,34.28729,80.729a35.48425,35.48425,0,0,0,4.13983,7.04529A39.49154,39.49154,0,0,1,18.47455,73.79517Zm59.45624,4.13562a39.48587,39.48587,0,0,1-16.3559,9.84289c.09369-.12134.19-.2373.28241-.36114A45.64338,45.64338,0,0,0,68.679,72.3324q6.43816.54528,12.84643,1.46277A39.82535,39.82535,0,0,1,77.93079,77.93079Z" />
    </g>
  </svg>
);
// Icon Loupe - it is a search/magnifying glass symbol
export const IconLoupe = ({ size = 24, filled = true, fillColor = 'currentColor', strokeColor = 'currentColor', strokeWidth = 0, ...props }) => (
  <svg
    width={size}
    height={size}
    fill={filled ? fillColor : 'none'}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 30 30"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.1 3.3C15.5-1.3 8-1.3 3.3 3.3-1.3 8-1.3 15.5 3.3 20.1c4.1 4.1 10.5 4.5 15.1 1.3 0 .5.3 .9.7 1.3l6.7 6.7c1 1 2.6 1 3.5 0 1-1 1-2.6 0-3.5l-6.7-6.7c-.4-.4-.8-.6-1.3-.7 3.2-4.6 2.8-11-1.3-15.1ZM18 18c-3.4 3.4-9 3.4-12.5 0-3.4-3.4-3.4-9 0-12.5 3.4-3.4 9-3.4 12.5 0 3.4 3.4 3.4 9 0 12.5Z"/>
  </svg>
);
// ####### M ####### //
// Icon Megaphone - it is a promotion/megaphone symbol
export const IconMegaphone = ({ size = 24, filled = true, fillColor = 'currentColor', strokeColor = 'currentColor', strokeWidth = 0, ...props }) => (
  <svg
    width={size}
    height={size * 1.05}
    fill={filled ? fillColor : 'none'}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 56.9 60"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M36.7 19.5h0c-5.6-8.3-13.2-12.7-17.1-10-.4.3-.8.7-1.1 1.1 0 0-9.1 18.5-9.1 18.5l-5.1 3.5c-3.3 2.2-4.1 6.7-1.9 10 0 0 0 0 0 0l.2.3c2.2 3.3 6.7 4.1 10 1.9l8.2 12.1c1.2 1.5 3.5 3 6.4 1.2 1-.7 1.7-1.7 1.9-2.9.2-1.2 0-2.4-.7-3.4l-7.2-10.6s17-1.4 17.1-1.4c.5-.1 1-.3 1.5-.6 2-1.4 2.8-4.3 2.1-8.1-.6-3.6-2.4-7.6-5-11.4ZM11.4 43c-2.3 1.5-5.4 1-6.9-1.3 0 0 0 0 0 0l-.2-.3c-1.5-2.3-.9-5.4 1.3-6.9 0 0 0 0 0 0l4.4-3 5.8 8.6-4.4 3ZM26.5 53c.7 1.1.4 2.5-.6 3.3-1.1.7-2.5.4-3.3-.6l-8.2-12 3.3-2.2h.9c0 0 7.9 11.6 7.9 11.6ZM17.9 39.1l-6.3-9.3 6-12.3c.6 3.5 2.3 7.6 5 11.6 2.7 4 5.9 7.1 8.9 9l-13.7 1.1ZM36.6 37.6c-3-.2-8-3.6-12.2-9.8-4.2-6.2-5.6-12-4.6-14.9.3-1.1 1.4-1.9 2.5-1.9 3 0 8.2 3.5 12.5 9.8 2.4 3.6 4.2 7.3 4.7 10.6.9 6.3-2.9 6.3-2.9 6.3Z"/>
    <path d="M24.5 60c-1.9 0-3.6-1.1-4.7-2.4h0c0 0-7.6-11.3-7.6-11.3-1.6.8-3.4 1-5.2.7-2.2-.4-4.1-1.6-5.3-3.5l-.2-.3c-1.2-1.8-1.7-4.1-1.3-6.2s1.7-4.1 3.5-5.3l4.8-3.3c2.9-5.9 8.1-16.3 8.9-18h0c0 0 .2-.4.2-.4.4-.5.8-1 1.4-1.4h0c1.3-.9 3-1.2 4.9-.8 4.4.8 9.7 5.1 13.8 11.1h0c2.7 4 4.5 8.2 5.2 11.9.8 4.3-.1 7.6-2.5 9.3-.6.4-1.2.7-1.9.8h0c-.2 0-.8 0-2.8.2-1.6.1-3.7.3-5.9.5-2.5.2-4.9.4-6.6.5l6.1 9c.8 1.2 1.2 2.8.9 4.3-.2 1.5-1.1 2.8-2.4 3.7h0c-1.1.7-2.2 1-3.2 1ZM16 43.9l7.5 11.1c.4.6 1.1.7 1.7.3.6-.4.7-1.1.3-1.7l-7.5-11.1-2 1.4ZM9.7 33l-3.5 2.4c-1.7 1.2-2.2 3.6-1 5.3l.2.3c1.2 1.8 3.6 2.2 5.3 1l3.5-2.4-4.5-6.7ZM38 38.6s0 0 0 0h0s0 0 0 0ZM12.8 29.7l5.6 8.2 9.9-.8c-2.4-1.9-4.7-4.5-6.7-7.4-2-2.9-3.5-6-4.5-8.9l-4.4 8.9ZM22.4 12.1c-.7 0-1.3.5-1.5 1.1h0c-.8 2.4.3 7.8 4.5 14 3 4.4 7.8 9 11.3 9.3.1 0 .7-.1 1.2-.7.7-.8.9-2.3.6-4.3-.4-2.9-2-6.4-4.5-10.1-2-2.9-4.2-5.3-6.5-7-1.9-1.5-3.8-2.3-5.1-2.3Z"/>
    <path d="M28.8 19.7h0c-1.6-.3-3.2 0-4.5.9-.5.4-.6 1-.3 1.6.4.5 1 .6 1.6.3 1.7-1.2 4.1-.7 5.3 1s.7 4.1-1 5.3c-.5.3-.6 1-.3 1.5.2.3.6.5.9.5.2 0 .4 0 .6-.2 2.8-1.9 3.5-5.6 1.6-8.4-.9-1.3-2.3-2.2-3.9-2.5Z"/>
    <path d="M30.4 32s0 0 0 0c-.7 0-1.4-.4-1.8-1-.3-.5-.5-1.1-.4-1.7.1-.6.4-1.1.9-1.4 1.2-.8 1.6-2.5.7-3.7-.4-.6-1-1-1.7-1.1-.7-.1-1.4 0-2 .4-1 .7-2.4.4-3.1-.6-.7-1-.5-2.4.6-3.1 1.5-1.1 3.5-1.5 5.3-1.1h.2c1.9.4 3.5 1.5 4.6 3 1.1 1.6 1.5 3.5 1.1 5.4-.4 1.9-1.4 3.5-3 4.6-.4.3-.8.4-1.2.4ZM30.4 29.7s0 0 0 0c0 0 0 0 0 0Z"/>
    <path d="M38.1 11.7h.1c.6 0 1-.4 1.1-1l.9-8.4c0-.6-.3-1.2-1-1.3-.6 0-1.2.3-1.3 1 0 0 0 0 0 0l-.9 8.4c0 .6.4 1.2 1 1.2Z"/>
    <path d="M38.2 12.9h-.2c-1.2-.1-2.1-1.2-2-2.5l.9-8.3s0 0 0-.1c0-.6.4-1.1.9-1.5.5-.4 1.1-.5 1.7-.4 1.2.2 2.1 1.3 1.9 2.5l-.9 8.3c-.1 1.1-1.1 2-2.2 2Z"/>
    <path d="M52.5 10c-.3-.5-1-.7-1.5-.3l-7.8 5.1c-.5.3-.7 1-.3 1.5.2.3.6.5 1 .5.2 0 .4 0 .6-.2l7.8-5.1c.5-.4.6-1 .3-1.5Z"/>
    <path d="M43.9 18s0 0 0 0c0 0 0 0 0 0-.8 0-1.5-.4-1.9-1-.7-1-.4-2.4.6-3.1l7.8-5.1c1-.7 2.4-.4 3.1.6.7 1 .4 2.4-.6 3.1h0s-7.8 5.1-7.8 5.1c-.4.2-.8.4-1.2.4Z"/>
    <path d="M54.9 23.6h0s-9-1.6-9-1.6c-.6-.1-1.2.3-1.3.9-.1.6.3 1.2.9 1.3l9 1.6h.2c.6 0 1.1-.5 1.1-1.1 0-.6-.4-1.1-.9-1.1Z"/>
    <path d="M54.7 27s0 0 0 0h-.3l-9.1-1.6c-1.2-.2-2-1.4-1.8-2.6.2-1.2 1.4-2 2.6-1.8l8.4 1.5h.6c1.1.3 1.9 1.2 1.9 2.4 0 .6-.3 1.2-.7 1.6-.4.4-1 .6-1.5.6Z"/>
  </svg>
);
// Icon Minus - it is a minus symbol
export const IconMinus = ({ size = 24, filled = true, fillColor = 'currentColor', strokeColor = 'currentColor', strokeWidth = 3, ...props }) => (
  <svg
    width={size}
    height={size}
    fill={filled ? fillColor : 'none'}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
// ####### N ####### //
// Icon Notebook - it is a notebook/order symbol
export const IconNotebook = ({ size = 24, filled = true, fillColor = 'currentColor', strokeColor = 'currentColor', strokeWidth = 0, ...props }) => (
  <svg
    width={size}
    height={size}
    fill={filled ? fillColor : 'none'}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 30.6 40"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M29.1 2.4h-5.1v-.8c0-.8-.7-1.5-1.5-1.5s-1.5.6-1.5 1.5v.8h-4.2v-.8c0-.8-.7-1.5-1.5-1.5s-1.5.6-1.5 1.5v.8h-4.1v-.9c0-.8-.6-1.5-1.5-1.5s-1.6.7-1.5 1.6v.8H1.5c-.8 0-1.5.7-1.5 1.6v34.5c0 .9.7 1.5 1.5 1.5h27.6c.8 0 1.5-.7 1.5-1.6V3.9c0-.8-.6-1.5-1.5-1.5ZM27.5 36.9H3.1V5.6h3.6v.5c0 .8.6 1.5 1.5 1.5h0c.8 0 1.5-.8 1.5-1.7v-.3h4.1v.5c0 .8.6 1.5 1.5 1.5s1.5-.7 1.5-1.6v-.4h4.2v.5c0 .8.6 1.5 1.5 1.5s1.5-.7 1.5-1.6v-.4h3.5v31.3Z"/>
    <path d="M22.6 24.5h-14.4c-.8 0-1.5.7-1.5 1.5s.6 1.5 1.5 1.5h14.3c.9 0 1.6-.7 1.6-1.5s-.6-1.5-1.5-1.5Z"/>
    <path d="M22.6 15.1h-14.4c-.8 0-1.5.7-1.5 1.5s.6 1.5 1.5 1.5h14.3c.9 0 1.6-.7 1.6-1.5s-.6-1.5-1.5-1.5Z"/>
  </svg>
);
// ####### P ####### //
// Icon Plus - it is a plus symbol
export const IconPlus = ({ size = 24, filled = true, fillColor = 'currentColor', strokeColor = 'currentColor', strokeWidth = 3, ...props }) => (
  <svg
    width={size}
    height={size}
    fill={filled ? fillColor : 'none'}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
// Icon Pencil - it is an edit/pencil symbol
export const IconPencil = ({ size = 24, filled = true, fillColor = 'currentColor', strokeColor = 'currentColor', strokeWidth = 0, ...props }) => (
  <svg
    width={size}
    height={size}
    fill={filled ? fillColor : 'none'}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 30 30"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M26.2 10.3l-11.7 11.7c-.4.4-.9.7-1.5.7l-4.1.4h-.2c-.5 0-.9-.2-1.2-.5-.4-.4-.5-.9-.5-1.4l.4-4.1c0-.6.3-1.1.7-1.5L19.7 3.8l6.4 6.4ZM28.9 2.1l-1-1c-1.5-1.5-3.9-1.5-5.4 0l-1.2 1.2 6.4 6.4 1.2-1.2c.7-.7 1.1-1.7 1.1-2.7s-.4-2-1.1-2.7h0ZM27.2 24.8v-8.1c0-.6-.5-1-1-1s-1 .5-1 1v8.1c0 1.7-1.4 3.1-3.1 3.1H5.2c-1.7 0-3.1-1.4-3.1-3.1V8c0-1.7 1.4-3.1 3.1-3.1h8.1c.6 0 1-.5 1-1s-.5-1-1-1H5.2C2.3 2.8 0 5.1 0 8v16.7C0 27.7 2.3 30 5.2 30h16.7c2.9 0 5.2-2.3 5.2-5.2h0Z"/>
  </svg>
);
// ####### T ####### //
// Icon Trash - it is a bin
export const IconTrash = ({ size = 24, filled = true, fillColor = 'currentColor', strokeColor = 'currentColor', strokeWidth = 0, ...props }) => (
  <svg
    width={size}
    height={size}
    fill={filled ? fillColor : "none"}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M436 60h-75V45c0-24.813-20.187-45-45-45H196c-24.813 0-45 20.187-45 45v15H76c-24.813 0-45 20.187-45 45 0 19.928 13.025 36.861 31.005 42.761L88.76 470.736C90.687 493.875 110.385 512 133.604 512h244.792c23.22 0 42.918-18.125 44.846-41.271l26.753-322.969C467.975 141.861 481 124.928 481 105c0-24.813-20.187-45-45-45zM181 45c0-8.271 6.729-15 15-15h120c8.271 0 15 6.729 15 15v15H181V45zM393.344 468.246c-.643 7.712-7.208 13.754-14.948 13.754H133.604c-7.739 0-14.305-6.042-14.946-13.747L92.294 150h327.412l-26.362 318.246zM436 120H76c-8.271 0-15-6.729-15-15s6.729-15 15-15h360c8.271 0 15 6.729 15 15s-6.729 15-15 15z"/>
    <path d="M195.971 436.071l-15-242c-.513-8.269-7.67-14.558-15.899-14.043-8.269.513-14.556 7.631-14.043 15.899l15 242c.49 7.902 7.041 14.043 14.9 14.043.308 0 .619-.01.931-.031 8.269-.513 14.556-7.63 14.043-15.868zM270.971 436.071l-15-242c-.513-8.269-7.67-14.558-15.899-14.043-8.269.513-14.556 7.631-14.043 15.899l15 242c.49 7.902 7.041 14.043 14.9 14.043.308 0 .619-.01.931-.031 8.269-.513 14.556-7.63 14.043-15.868zM345.971 436.071l-15-242c-.513-8.269-7.67-14.558-15.899-14.043-8.269.513-14.556 7.631-14.043 15.899l15 242c.49 7.902 7.041 14.043 14.9 14.043.308 0 .619-.01.931-.031 8.269-.513 14.556-7.63 14.043-15.868z"/>
  </svg>
);
// ####### U ####### //
// Icon User - it is a user profile symbol
export const IconUser = ({ size = 24, filled = true, fillColor = 'currentColor', strokeColor = 'currentColor', strokeWidth = 0, ...props }) => (
  <svg
    width={size}
    height={size}
    fill={filled ? fillColor : 'none'}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M333.187,237.405c32.761-23.893,54.095-62.561,54.095-106.123C387.282,58.893,328.389,0,256,0
      S124.718,58.893,124.718,131.282c0,43.562,21.333,82.23,54.095,106.123C97.373,268.57,39.385,347.531,39.385,439.795
      c0,39.814,32.391,72.205,72.205,72.205H400.41c39.814,0,72.205-32.391,72.205-72.205
      C472.615,347.531,414.627,268.57,333.187,237.405z M164.103,131.282c0-50.672,41.225-91.897,91.897-91.897
      s91.897,41.225,91.897,91.897S306.672,223.18,256,223.18S164.103,181.954,164.103,131.282z M400.41,472.615H111.59
      c-18.097,0-32.82-14.723-32.82-32.821c0-97.726,79.504-177.231,177.231-177.231s177.231,79.504,177.231,177.231
      C433.231,457.892,418.508,472.615,400.41,472.615z"/>
  </svg>
);