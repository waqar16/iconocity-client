import { Upload } from "lucide-react";

export const Icons = {
  file: (props: any) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.8252 1.84108H5.38987C4.0032 1.83575 2.86654 2.94108 2.83387 4.32708V11.4691C2.8032 12.8778 3.91987 14.0451 5.32854 14.0764C5.3492 14.0764 5.3692 14.0771 5.38987 14.0764H10.7159C12.1119 14.0198 13.2119 12.8664 13.2019 11.4691V5.35842L9.8252 1.84108Z"
          stroke="#BAC0DD"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.65009 1.83325V3.77259C9.65009 4.71925 10.4154 5.48659 11.3621 5.48925H13.1988"
          stroke="#BAC0DD"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.52541 10.2389H5.92542"
          stroke="#BAC0DD"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.16214 7.73714H5.9248"
          stroke="#BAC0DD"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
  SquareUpLeft: (props: any) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.59 7.18007H7.5L9.15 5.53007C9.29294 5.39078 9.37357 5.19966 9.37357 5.00007C9.37357 4.80049 9.29294 4.60936 9.15 4.47007C8.85718 4.17762 8.38281 4.17762 8.09 4.47007L5.16 7.40007C5.09221 7.46943 5.03795 7.55082 5 7.64007C4.93001 7.82363 4.93001 8.02652 5 8.21007C5.03539 8.30361 5.08988 8.38876 5.16 8.46007L8.09 11.3901C8.23284 11.5272 8.422 11.6058 8.62 11.6101C8.81841 11.6078 9.00828 11.529 9.15 11.3901C9.29294 11.2508 9.37357 11.0597 9.37357 10.8601C9.37357 10.6605 9.29294 10.4694 9.15 10.3301L7.5 8.68007H14.59C16.6335 8.68007 18.29 10.3366 18.29 12.3801V14.5501C18.3019 16.5443 16.7232 18.1851 14.73 18.2501H6.83C6.41578 18.2501 6.08 18.5859 6.08 19.0001C6.08 19.4143 6.41578 19.7501 6.83 19.7501H14.76C17.5604 19.658 19.7778 17.3519 19.76 14.5501V12.3801C19.76 9.51987 17.4502 7.19657 14.59 7.18007Z"
        fill="white"
      />
    </svg>
  ),
  SquareUpRight: (props: any) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.58 11.3899C15.7228 11.5271 15.912 11.6056 16.11 11.6099C16.3084 11.6076 16.4983 11.5288 16.64 11.3899L19.57 8.45993C19.6401 8.38861 19.6946 8.30347 19.73 8.20993C19.8096 8.02827 19.8096 7.82159 19.73 7.63993C19.6921 7.55068 19.6378 7.46929 19.57 7.39993L16.64 4.46993C16.453 4.26928 16.1714 4.18668 15.9057 4.25454C15.64 4.32241 15.4325 4.52991 15.3646 4.79564C15.2968 5.06137 15.3793 5.34296 15.58 5.52993L17.23 7.17993H10.14C7.26812 7.17993 4.94 9.50805 4.94 12.3799V14.6599C4.95021 17.4319 7.16863 19.6903 9.94 19.7499H17.12C17.3233 19.7553 17.5202 19.679 17.6668 19.538C17.8134 19.3971 17.8974 19.2033 17.9 18.9999C17.9 18.5896 17.5703 18.2554 17.16 18.2499H10C8.00127 18.1903 6.41369 16.5495 6.42 14.5499V12.3799C6.42 10.3365 8.07655 8.67993 10.12 8.67993H17.21L15.56 10.3299C15.273 10.6282 15.282 11.1027 15.58 11.3899Z"
        fill="#7C7F99"
      />
    </svg>
  ),
  Download: (props: any) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.001 16.541C11.587 16.541 11.251 16.205 11.251 15.791V3.75C11.251 3.336 11.587 3 12.001 3C12.415 3 12.751 3.336 12.751 3.75V15.791C12.751 16.205 12.415 16.541 12.001 16.541Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.001 16.541C11.802 16.541 11.61 16.462 11.47 16.32L8.554 13.393C8.262 13.099 8.263 12.624 8.556 12.332C8.85 12.04 9.324 12.04 9.616 12.334L12.001 14.729L14.386 12.334C14.678 12.04 15.152 12.04 15.446 12.332C15.739 12.624 15.74 13.099 15.448 13.393L12.532 16.32C12.392 16.462 12.2 16.541 12.001 16.541Z"
        fill="white"
      />
      <mask
        id="mask0_1_1101"
        maskUnits="userSpaceOnUse"
        x="2"
        y="7"
        width="20"
        height="15"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.0002 7.73242H22V21.4764H2.0002V7.73242Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_1_1101)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.5752 21.4764H6.4352C3.9902 21.4764 2.0002 19.4874 2.0002 17.0414V12.1564C2.0002 9.71642 3.9852 7.73242 6.4262 7.73242H7.3672C7.7812 7.73242 8.1172 8.06842 8.1172 8.48242C8.1172 8.89642 7.7812 9.23242 7.3672 9.23242H6.4262C4.8122 9.23242 3.5002 10.5434 3.5002 12.1564V17.0414C3.5002 18.6604 4.8162 19.9764 6.4352 19.9764H17.5752C19.1872 19.9764 20.5002 18.6634 20.5002 17.0514V12.1674C20.5002 10.5484 19.1832 9.23242 17.5662 9.23242H16.6342C16.2202 9.23242 15.8842 8.89642 15.8842 8.48242C15.8842 8.06842 16.2202 7.73242 16.6342 7.73242H17.5662C20.0112 7.73242 22.0002 9.72242 22.0002 12.1674V17.0514C22.0002 19.4914 20.0142 21.4764 17.5752 21.4764Z"
          fill="white"
        />
      </g>
    </svg>
  ),
  OutlineStar: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.74959 3.53345C6.94161 2.91237 7.51956 2.4918 8.16959 2.50012C8.82329 2.49355 9.40242 2.92042 9.58959 3.54679L10.0296 4.88012C10.2272 5.49721 10.8017 5.91526 11.4496 5.91345H12.8363C13.4994 5.88832 14.0996 6.30388 14.3095 6.93348C14.5194 7.56309 14.2886 8.25565 13.7429 8.63345L12.6029 9.46679C12.0775 9.84421 11.8564 10.5181 12.0563 11.1335L12.4963 12.4668C12.6475 12.9284 12.5658 13.4346 12.2771 13.8252C11.9885 14.2158 11.5285 14.4425 11.0429 14.4335C10.728 14.4311 10.4221 14.3283 10.1696 14.1401L9.07626 13.3068C8.55192 12.9243 7.8406 12.9243 7.31626 13.3068L6.16959 14.1401C5.91407 14.3457 5.5975 14.4606 5.26959 14.4668C4.78044 14.4709 4.32004 14.2362 4.03597 13.8379C3.7519 13.4397 3.67985 12.928 3.84293 12.4668L4.28293 11.1335C4.49491 10.52 4.28441 9.8399 3.76293 9.45345L2.62293 8.62012C2.0945 8.24101 1.8722 7.56351 2.07328 6.94503C2.27436 6.32655 2.85259 5.90932 3.50293 5.91345H4.88959C5.54114 5.91343 6.11676 5.48915 6.30959 4.86679L6.74959 3.53345ZM8.52293 3.88012C8.48193 3.72048 8.3342 3.61177 8.16959 3.62012C7.99681 3.61421 7.84608 3.7365 7.81626 3.90679L7.37626 5.24012C7.02657 6.31766 6.02245 7.0472 4.88959 7.04679H3.47626C3.31916 7.05131 3.18172 7.15373 3.13247 7.30297C3.08322 7.45221 3.13271 7.61632 3.25626 7.71345L4.39626 8.54679C5.31578 9.21187 5.70097 10.3944 5.34959 11.4735L4.90959 12.8068C4.86638 12.9163 4.88412 13.0404 4.95626 13.1335C5.03107 13.2412 5.15191 13.3077 5.28293 13.3135C5.36294 13.3111 5.44007 13.283 5.50293 13.2335L6.62959 12.4001C7.54787 11.733 8.79131 11.733 9.70959 12.4001L10.8229 13.1935C10.8858 13.243 10.9629 13.2711 11.0429 13.2735C11.168 13.2653 11.2829 13.2018 11.3563 13.1001C11.4284 13.0071 11.4461 12.8829 11.4029 12.7735L10.9629 11.4401C10.6115 10.3611 10.9967 9.17854 11.9163 8.51345L13.0563 7.68679C13.1798 7.58965 13.2293 7.42555 13.18 7.27631C13.1308 7.12706 12.9934 7.02464 12.8363 7.02012H11.4496C10.3167 7.02053 9.31261 6.291 8.96292 5.21345L8.52293 3.88012Z"
        fill="#20C39D"
      />
    </svg>
  ),
  FillStar: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      {...props}
    >
      <path
        d="M10.1266 3.5245L10.5666 4.85784C10.7654 5.47496 11.3383 5.89449 11.9866 5.89784H13.3733C14.0236 5.89371 14.6018 6.31093 14.8029 6.92941C15.004 7.54789 14.7817 8.22539 14.2533 8.6045L13.1133 9.43117C12.5885 9.81214 12.368 10.4872 12.5666 11.1045L13.0066 12.4378C13.2242 13.0573 13.0118 13.7462 12.4831 14.1354C11.9544 14.5247 11.2335 14.5229 10.7066 14.1312L9.58662 13.2978C9.0616 12.9175 8.35164 12.9175 7.82662 13.2978L6.70662 14.1312C6.18271 14.5146 5.47108 14.5156 4.94608 14.1337C4.42109 13.7517 4.20303 13.0743 4.40662 12.4578L4.84662 11.1245C5.04526 10.5072 4.82472 9.83214 4.29995 9.45117L3.13329 8.61117C2.59415 8.23128 2.36807 7.5427 2.57709 6.91717C2.78612 6.29163 3.38074 5.8773 4.03995 5.89784H5.42662C6.07142 5.89639 6.64315 5.48303 6.84662 4.87117L7.28662 3.53784C7.48387 2.92197 8.05511 2.50305 8.70178 2.50002C9.34845 2.49698 9.92359 2.91052 10.1266 3.5245Z"
        fill="#20C39D"
      />
    </svg>
  ),
  LinerColorStar: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      {...props}
    >
      <path
        d="M9.62662 3.5245L10.0666 4.85784C10.2654 5.47496 10.8383 5.89449 11.4866 5.89784H12.8733C13.5236 5.89371 14.1018 6.31093 14.3029 6.92941C14.504 7.54789 14.2817 8.22539 13.7533 8.6045L12.6133 9.43117C12.0885 9.81214 11.868 10.4872 12.0666 11.1045L12.5066 12.4378C12.7242 13.0573 12.5118 13.7462 11.9831 14.1354C11.4544 14.5247 10.7335 14.5229 10.2066 14.1312L9.08662 13.2978C8.5616 12.9175 7.85164 12.9175 7.32662 13.2978L6.20662 14.1312C5.68271 14.5146 4.97108 14.5156 4.44608 14.1337C3.92109 13.7517 3.70303 13.0743 3.90662 12.4578L4.34662 11.1245C4.54526 10.5072 4.32472 9.83214 3.79995 9.45117L2.63329 8.61117C2.09415 8.23128 1.86807 7.5427 2.07709 6.91717C2.28612 6.29163 2.88074 5.8773 3.53995 5.89784H4.92662C5.57142 5.89639 6.14315 5.48303 6.34662 4.87117L6.78662 3.53784C6.98387 2.92197 7.55511 2.50305 8.20178 2.50002C8.84845 2.49698 9.42359 2.91052 9.62662 3.5245Z"
        fill="url(#paint0_linear_1_951)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_951"
          x1="4"
          y1="1.5"
          x2="12"
          y2="17.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#20C39D" />
          <stop offset="1" stop-color="#E7BE2D" />
        </linearGradient>
      </defs>
    </svg>
  ),
  HandDrownStar: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      {...props}
    >
      <path
        d="M9.62662 3.5245L10.0666 4.85784C10.2654 5.47496 10.8383 5.89449 11.4866 5.89784H12.8733C13.5236 5.89371 14.1018 6.31093 14.3029 6.92941C14.504 7.54789 14.2817 8.22539 13.7533 8.6045L12.6133 9.43117C12.0885 9.81214 11.868 10.4872 12.0666 11.1045L12.5066 12.4378C12.7242 13.0573 12.5118 13.7462 11.9831 14.1354C11.4544 14.5247 10.7335 14.5229 10.2066 14.1312L9.08662 13.2978C8.5616 12.9175 7.85164 12.9175 7.32662 13.2978L6.20662 14.1312C5.68271 14.5146 4.97108 14.5156 4.44608 14.1337C3.92109 13.7517 3.70303 13.0743 3.90662 12.4578L4.34662 11.1245C4.54526 10.5072 4.32472 9.83214 3.79995 9.45117L2.63329 8.61117C2.09415 8.23128 1.86807 7.5427 2.07709 6.91717C2.28612 6.29163 2.88074 5.8773 3.53995 5.89784H4.92662C5.57142 5.89639 6.14315 5.48303 6.34662 4.87117L6.78662 3.53784C6.98387 2.92197 7.55511 2.50305 8.20178 2.50002C8.84845 2.49698 9.42359 2.91052 9.62662 3.5245Z"
        fill="#C9EEE6"
        stroke="#20C39D"
        stroke-linecap="round"
        stroke-dasharray="237 237"
      />
    </svg>
  ),
  Upload: (props: any) => (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Upload">
        <path
          id="Stroke 1"
          d="M5.38951 7.98403H4.45651C2.42151 7.98403 0.771515 9.63403 0.771515 11.669L0.771515 16.544C0.771515 18.578 2.42151 20.228 4.45651 20.228H15.5865C17.6215 20.228 19.2715 18.578 19.2715 16.544V11.659C19.2715 9.63003 17.6265 7.98403 15.5975 7.98403L14.6545 7.98403"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Stroke 3"
          d="M10.0214 1.19057V13.2316"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Stroke 5"
          d="M7.10632 4.11877L10.0213 1.19077L12.9373 4.11877"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  ),
  UploadFile: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="28"
      viewBox="0 0 24 28"
      fill="none"
      {...props}
    >
      <path
        d="M0.5 5C0.5 2.51472 2.51472 0.5 5 0.5H12H17.77L23.5 7.18496V14V23C23.5 25.4853 21.4853 27.5 19 27.5H5C2.51472 27.5 0.5 25.4853 0.5 23V5Z"
        stroke="white"
      />
      <path
        d="M5.5 15C5.5 13.6193 6.61929 12.5 8 12.5H15C16.3807 12.5 17.5 13.6193 17.5 15V21C17.5 22.3807 16.3807 23.5 15 23.5H8C6.61929 23.5 5.5 22.3807 5.5 21V15Z"
        stroke="white"
      />
      <mask id="path-3-inside-1_1_972" fill="white">
        <path d="M12 15.5C12 16.3284 11.3284 17 10.5 17C9.67157 17 9 16.3284 9 15.5C9 14.6716 9.67157 14 10.5 14C11.3284 14 12 14.6716 12 15.5ZM9.48986 15.5C9.48986 16.0579 9.94212 16.5101 10.5 16.5101C11.0579 16.5101 11.5101 16.0579 11.5101 15.5C11.5101 14.9421 11.0579 14.4899 10.5 14.4899C9.94212 14.4899 9.48986 14.9421 9.48986 15.5Z" />
      </mask>
      <path
        d="M12 15.5C12 16.3284 11.3284 17 10.5 17C9.67157 17 9 16.3284 9 15.5C9 14.6716 9.67157 14 10.5 14C11.3284 14 12 14.6716 12 15.5ZM9.48986 15.5C9.48986 16.0579 9.94212 16.5101 10.5 16.5101C11.0579 16.5101 11.5101 16.0579 11.5101 15.5C11.5101 14.9421 11.0579 14.4899 10.5 14.4899C9.94212 14.4899 9.48986 14.9421 9.48986 15.5Z"
        fill="#D9D9D9"
        stroke="white"
        stroke-width="2"
        mask="url(#path-3-inside-1_1_972)"
      />
    </svg>
  ),
};
