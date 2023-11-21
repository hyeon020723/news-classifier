<template>
  <div>
    <!-- 뉴스 셀렉 방법 -->
    <div class="midDiv">
      <div class="text1Div">
        <span class="text1"> 무스마가 만들어가는 오늘 그리고 내일</span>
      </div>
      <div class="SelectDiv">
        <div class="newsSelectDiv">
          <span class="text2">NEWS<br />SELECT</span>
          <span class="btn1" @click="goToNewsPage">바로가기</span>
        </div>
        <div class="autoNewsSelectDiv">
          <span class="text3">AUTO<br />NEWS<br />SELECT</span>
          <span class="btn2" @click="autoSelectOpenModal()">바로가기</span>
        </div>
      </div>
    </div>

    <!-- 모달창 -->
    <div class="modalBackgound" v-if="오토뉴스선택설정창 == true">
      <div class="modalPage">
        <svg
          class="modalClose"
          @click="autoSelectCloseModal()"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M18.75 6.81984L17.1802 5.25L12 10.4302L6.81984 5.25L5.25 6.81984L10.4302 12L5.25 17.1802L6.81984 18.75L12 13.5698L17.1802 18.75L18.75 17.1802L13.5698 12L18.75 6.81984Z"
            fill="#21272A"
          />
        </svg>
        <!-- 안에 들어가는 부분 -->
        <div class="modalDiv">
          <!-- -->
          <div class="setting">
            <svg
              alt="settingEmoji"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 54 54"
              fill="none"
            >
              <path
                d="M32.0313 53.9531H22.0118C22 53.9531 21.9883 53.9531 21.9766 53.9531C20.4766 53.9297 19.2227 52.8867 18.918 51.4219C18.9063 51.3867 18.9063 51.3398 18.8946 51.3047L18.1094 45.7031H18.0977C17.1368 45.2344 16.1993 44.6953 15.3204 44.0742L10.0586 46.1953C10.0469 46.1953 10.0352 46.207 10.0235 46.207C8.5938 46.7461 6.98833 46.1953 6.20317 44.8711C6.20317 44.8594 6.19145 44.8594 6.19145 44.8477L1.17583 36.1758C0.40239 34.8516 0.707077 33.1641 1.89067 32.1797C1.90239 32.168 1.91411 32.1562 1.92583 32.1445L6.40239 28.6289L6.39067 28.6172C6.3438 28.0312 6.32036 27.5039 6.32036 26.9883C6.32036 26.4609 6.3438 25.9336 6.39067 25.3711L1.93755 21.8789C1.91411 21.8672 1.90239 21.8555 1.89067 21.832C0.730514 20.8477 0.437546 19.1719 1.19926 17.8594L6.21489 9.1875C6.21489 9.17578 6.22661 9.17578 6.22661 9.16406C7.01176 7.85156 8.61723 7.28906 10.0469 7.82812C10.0586 7.82812 10.0704 7.83984 10.0821 7.83984L15.3438 9.96094C16.2344 9.35156 17.1602 8.8125 18.1211 8.34375L18.9063 2.73047C18.9063 2.70703 18.918 2.68359 18.918 2.67188C19.1641 1.18359 20.4532 0.0820312 21.9649 0.046875C21.9766 0.046875 21.9883 0.046875 22 0.046875H32.0196C32.0313 0.046875 32.043 0.046875 32.0547 0.046875C33.5547 0.0703125 34.8086 1.11328 35.1133 2.57812C35.125 2.61328 35.125 2.66016 35.1368 2.69531L35.9219 8.29688H35.9336C36.8946 8.76562 37.8321 9.30469 38.711 9.92578L43.9727 7.80469C43.9844 7.80469 43.9961 7.79297 44.0079 7.79297C45.4375 7.24219 47.043 7.80469 47.8282 9.12891C47.8282 9.14062 47.8399 9.14062 47.8399 9.15234L52.8555 17.8242C53.629 19.1484 53.3243 20.8359 52.1407 21.8203C52.129 21.832 52.1172 21.8438 52.1055 21.8555L47.629 25.3711C47.629 25.3828 47.629 25.3945 47.629 25.3945C47.6758 25.9922 47.6993 26.5195 47.6993 27V27.0117C47.6993 27.5391 47.6758 28.0781 47.629 28.6055L52.1055 32.1094C52.1172 32.1211 52.129 32.1328 52.1407 32.1445C53.3243 33.1289 53.629 34.8047 52.8555 36.1406L47.8399 44.8125C47.8399 44.8242 47.8282 44.8242 47.8282 44.8359C47.043 46.1484 45.4375 46.7109 44.0079 46.1719C43.9961 46.1719 43.9844 46.1602 43.9727 46.1602L38.711 44.0391C37.8204 44.6484 36.8946 45.1875 35.9336 45.6562L35.1485 51.2695C35.1485 51.293 35.1368 51.3164 35.1368 51.3281C34.879 52.8164 33.5899 53.918 32.0782 53.9531C32.0547 53.9531 32.043 53.9531 32.0313 53.9531ZM22.5274 50.2031H31.504L32.2188 45.1289C32.3946 43.8984 33.168 42.832 34.293 42.2812C35.0899 41.8945 35.8516 41.4492 36.5782 40.957C37.6094 40.2422 38.9336 40.0898 40.1172 40.5586L44.875 42.4688L49.3516 34.7227L44.4766 30.9141C43.9493 30.5039 43.6797 29.8359 43.7735 29.1797C43.879 28.4648 43.9258 27.7266 43.9375 27C43.9375 26.6133 43.9141 26.1914 43.879 25.6992C43.7618 24.4336 44.3008 23.2031 45.2969 22.418L49.3399 19.2422L44.8633 11.4961L40.1055 13.4062C38.9336 13.875 37.6094 13.7344 36.5665 13.0078C35.8516 12.5039 35.0899 12.0586 34.3047 11.6836C33.1797 11.1445 32.3946 10.0781 32.2071 8.83594L31.504 3.79688H22.5274L21.8125 8.87109C21.6368 10.1016 20.8633 11.168 19.7383 11.7188C18.9415 12.1055 18.1797 12.5508 17.4532 13.043C16.4219 13.7578 15.0977 13.9102 13.9141 13.4414L9.17973 11.5312L4.70317 19.2773L8.7227 22.4414C9.7188 23.2266 10.2461 24.4453 10.1407 25.7109C10.0938 26.168 10.0821 26.5898 10.0821 27C10.0821 27.3984 10.1055 27.8203 10.1407 28.3008C10.2579 29.5664 9.73051 30.7969 8.73442 31.582L4.69145 34.7578L9.16801 42.5039L13.9141 40.5938C15.086 40.125 16.4102 40.2656 17.4532 40.9922C18.168 41.4961 18.9297 41.9414 19.7149 42.3164C20.8399 42.8555 21.625 43.9219 21.8125 45.1641L22.5274 50.2031ZM27.0274 36.375C26.7227 36.375 26.4063 36.3633 26.1016 36.3281C23.6055 36.082 21.3672 34.875 19.7735 32.9414C18.1797 31.0078 17.4415 28.5703 17.6875 26.0742C18.1915 20.9297 22.7969 17.1562 27.9415 17.6602C32.3711 18.1055 35.8985 21.6445 36.3438 26.0625C36.4024 26.6719 36.4024 27.293 36.3438 27.9141C35.8633 32.7539 31.7852 36.375 27.0274 36.375ZM27.004 21.375C25.7032 21.375 24.461 21.8203 23.4415 22.6523C22.2813 23.6016 21.5547 24.9492 21.4141 26.4492C21.2618 27.9492 21.7071 29.4023 22.668 30.5742C23.6172 31.7344 24.9649 32.4609 26.4649 32.6016C29.5469 32.9062 32.3125 30.6445 32.6172 27.5508C32.6524 27.1875 32.6524 26.8125 32.6172 26.4492C32.3477 23.7891 30.2266 21.668 27.5665 21.3984C27.379 21.3867 27.1915 21.375 27.004 21.375Z"
                fill="#009FE8"
              />
            </svg>
            <span class="settingText">설정</span>
          </div>
          <div class="date">
            <!-- flex-direction row, justi, align -->
            <div class="dateSelect">
              <svg
                alt="dateEmoji"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.25 11.25C9.17893 11.25 7.5 12.9289 7.5 15V48.75C7.5 50.8211 9.17893 52.5 11.25 52.5H48.75C50.8211 52.5 52.5 50.8211 52.5 48.75V15C52.5 12.9289 50.8211 11.25 48.75 11.25H11.25ZM3.75 15C3.75 10.8579 7.10786 7.5 11.25 7.5H48.75C52.8921 7.5 56.25 10.8579 56.25 15V48.75C56.25 52.8921 52.8921 56.25 48.75 56.25H11.25C7.10786 56.25 3.75 52.8921 3.75 48.75V15Z"
                  fill="#009FE8"
                />
                <path
                  d="M34.6875 30C36.2408 30 37.5 28.7408 37.5 27.1875C37.5 25.6342 36.2408 24.375 34.6875 24.375C33.1342 24.375 31.875 25.6342 31.875 27.1875C31.875 28.7408 33.1342 30 34.6875 30Z"
                  fill="#009FE8"
                />
                <path
                  d="M44.0625 30C45.6158 30 46.875 28.7408 46.875 27.1875C46.875 25.6342 45.6158 24.375 44.0625 24.375C42.5092 24.375 41.25 25.6342 41.25 27.1875C41.25 28.7408 42.5092 30 44.0625 30Z"
                  fill="#009FE8"
                />
                <path
                  d="M34.6875 39.375C36.2408 39.375 37.5 38.1158 37.5 36.5625C37.5 35.0092 36.2408 33.75 34.6875 33.75C33.1342 33.75 31.875 35.0092 31.875 36.5625C31.875 38.1158 33.1342 39.375 34.6875 39.375Z"
                  fill="#009FE8"
                />
                <path
                  d="M44.0625 39.375C45.6158 39.375 46.875 38.1158 46.875 36.5625C46.875 35.0092 45.6158 33.75 44.0625 33.75C42.5092 33.75 41.25 35.0092 41.25 36.5625C41.25 38.1158 42.5092 39.375 44.0625 39.375Z"
                  fill="#009FE8"
                />
                <path
                  d="M15.9375 39.375C17.4908 39.375 18.75 38.1158 18.75 36.5625C18.75 35.0092 17.4908 33.75 15.9375 33.75C14.3842 33.75 13.125 35.0092 13.125 36.5625C13.125 38.1158 14.3842 39.375 15.9375 39.375Z"
                  fill="#009FE8"
                />
                <path
                  d="M25.3125 39.375C26.8658 39.375 28.125 38.1158 28.125 36.5625C28.125 35.0092 26.8658 33.75 25.3125 33.75C23.7592 33.75 22.5 35.0092 22.5 36.5625C22.5 38.1158 23.7592 39.375 25.3125 39.375Z"
                  fill="#009FE8"
                />
                <path
                  d="M15.9375 48.75C17.4908 48.75 18.75 47.4908 18.75 45.9375C18.75 44.3842 17.4908 43.125 15.9375 43.125C14.3842 43.125 13.125 44.3842 13.125 45.9375C13.125 47.4908 14.3842 48.75 15.9375 48.75Z"
                  fill="#009FE8"
                />
                <path
                  d="M25.3125 48.75C26.8658 48.75 28.125 47.4908 28.125 45.9375C28.125 44.3842 26.8658 43.125 25.3125 43.125C23.7592 43.125 22.5 44.3842 22.5 45.9375C22.5 47.4908 23.7592 48.75 25.3125 48.75Z"
                  fill="#009FE8"
                />
                <path
                  d="M34.6875 48.75C36.2408 48.75 37.5 47.4908 37.5 45.9375C37.5 44.3842 36.2408 43.125 34.6875 43.125C33.1342 43.125 31.875 44.3842 31.875 45.9375C31.875 47.4908 33.1342 48.75 34.6875 48.75Z"
                  fill="#009FE8"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15 3.75C16.0355 3.75 16.875 4.58947 16.875 5.625V9.375C16.875 10.4105 16.0355 11.25 15 11.25C13.9645 11.25 13.125 10.4105 13.125 9.375V5.625C13.125 4.58947 13.9645 3.75 15 3.75Z"
                  fill="#009FE8"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M45 3.75C46.0355 3.75 46.875 4.58947 46.875 5.625V9.375C46.875 10.4105 46.0355 11.25 45 11.25C43.9645 11.25 43.125 10.4105 43.125 9.375V5.625C43.125 4.58947 43.9645 3.75 45 3.75Z"
                  fill="#009FE8"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.625 16.875H54.375V20.625H5.625V16.875Z"
                  fill="#009FE8"
                />
              </svg>
              <span class="dateText">날짜</span>
            </div>
            <div class="dateInput">
              <input type="date" v-model="startDate" @input="validateDates" />
              <svg
                alt="->"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M15.586 11.1569L11.636 7.20692C11.4538 7.01832 11.353 6.76571 11.3553 6.50352C11.3576 6.24132 11.4628 5.99051 11.6482 5.8051C11.8336 5.61969 12.0844 5.51452 12.3466 5.51224C12.6088 5.50997 12.8614 5.61076 13.05 5.79292L18.707 11.4499C18.8002 11.5426 18.8741 11.6527 18.9246 11.7741C18.9751 11.8954 19.001 12.0255 19.001 12.1569C19.001 12.2883 18.9751 12.4184 18.9246 12.5398C18.8741 12.6611 18.8002 12.7713 18.707 12.8639L13.05 18.5209C12.9578 18.6164 12.8474 18.6926 12.7254 18.745C12.6034 18.7974 12.4722 18.825 12.3394 18.8262C12.2066 18.8273 12.0749 18.802 11.952 18.7517C11.8291 18.7015 11.7175 18.6272 11.6236 18.5333C11.5297 18.4394 11.4555 18.3278 11.4052 18.2049C11.3549 18.082 11.3296 17.9503 11.3307 17.8175C11.3319 17.6847 11.3595 17.5535 11.4119 17.4315C11.4643 17.3095 11.5405 17.1992 11.636 17.1069L15.586 13.1569H6C5.73478 13.1569 5.48043 13.0516 5.29289 12.864C5.10536 12.6765 5 12.4221 5 12.1569C5 11.8917 5.10536 11.6373 5.29289 11.4498C5.48043 11.2623 5.73478 11.1569 6 11.1569H15.586Z"
                  fill="#697077"
                />
              </svg>
              <input type="date" v-model="endDate" @input="validateDates" />
            </div>
          </div>
          <div class="newsNum">
            <div class="newsSelect">
              <svg
                alt="newsEmoji"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.75 3C6.35218 3 5.97064 3.15804 5.68934 3.43934C5.40804 3.72064 5.25 4.10218 5.25 4.5V19.5C5.25 19.8978 5.40804 20.2794 5.68934 20.5607C5.97064 20.842 6.35218 21 6.75 21H17.25C17.6478 21 18.0294 20.842 18.3107 20.5607C18.592 20.2794 18.75 19.8978 18.75 19.5V10.3712C18.75 10.3712 18.75 10.3711 18.75 10.3711C18.7499 10.1723 18.671 9.9817 18.5305 9.84111C18.5304 9.84109 18.5304 9.84107 18.5304 9.84105L11.9089 3.21961C11.7684 3.07905 11.5777 3.00006 11.3789 3C11.3789 3 11.3788 3 11.3788 3H6.75ZM4.62868 2.37868C5.19129 1.81607 5.95435 1.5 6.75 1.5H11.379C11.9755 1.50009 12.5476 1.73707 12.9695 2.15883L12.9695 2.15889L19.5912 8.78051C20.0129 9.20237 20.2499 9.77445 20.25 10.371V19.5C20.25 20.2956 19.9339 21.0587 19.3713 21.6213C18.8087 22.1839 18.0456 22.5 17.25 22.5H6.75C5.95435 22.5 5.19129 22.1839 4.62868 21.6213C4.06607 21.0587 3.75 20.2956 3.75 19.5V4.5C3.75 3.70435 4.06607 2.94129 4.62868 2.37868Z"
                  fill="#009fe8"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 1.875C12.4142 1.875 12.75 2.21079 12.75 2.625V8.25C12.75 8.44891 12.829 8.63968 12.9697 8.78033C13.1103 8.92098 13.3011 9 13.5 9H19.125C19.5392 9 19.875 9.33579 19.875 9.75C19.875 10.1642 19.5392 10.5 19.125 10.5H13.5C12.9033 10.5 12.331 10.2629 11.909 9.84099C11.4871 9.41903 11.25 8.84674 11.25 8.25V2.625C11.25 2.21079 11.5858 1.875 12 1.875Z"
                  fill="#009fe8"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.5 13.5C7.5 13.0858 7.83579 12.75 8.25 12.75H15.75C16.1642 12.75 16.5 13.0858 16.5 13.5C16.5 13.9142 16.1642 14.25 15.75 14.25H8.25C7.83579 14.25 7.5 13.9142 7.5 13.5Z"
                  fill="#009fe8"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.5 17.25C7.5 16.8358 7.83579 16.5 8.25 16.5H15.75C16.1642 16.5 16.5 16.8358 16.5 17.25C16.5 17.6642 16.1642 18 15.75 18H8.25C7.83579 18 7.5 17.6642 7.5 17.25Z"
                  fill="#009fe8"
                />
              </svg>
              <span class="newsText">카테고리별 뉴스 개수</span>
            </div>
            <div class="newsInput">
              <input type="number" v-model="newsCount" />
            </div>
          </div>
          <div class="category">
            <div class="categorySelect">
              <svg
                alt="categoryEmoji"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7.57734 21.75C7.03828 21.75 6.50391 21.5484 6.09609 21.1406L0.611719 15.6562C-0.203906 14.8359 -0.203906 13.5047 0.611719 12.6891L12.1289 1.16719C12.4008 0.9 12.757 0.75 13.1367 0.75H18.9117C19.4695 0.754688 19.9945 0.975 20.3883 1.36875C20.782 1.76719 20.9977 2.29219 20.993 2.85V8.61094C20.993 8.99062 20.8477 9.34688 20.5805 9.61875L9.06328 21.1359C8.65547 21.5437 8.11641 21.75 7.57734 21.75ZM13.1695 2.25L1.67109 13.7438C1.44141 13.9781 1.44141 14.3578 1.67109 14.5922L7.15547 20.0766C7.38984 20.3062 7.76953 20.3062 8.00391 20.0766L19.4977 8.5875V2.85C19.4977 2.51719 19.2352 2.25 18.907 2.25H18.9023H13.1695Z"
                  fill="#009FE8"
                />
                <path
                  d="M16.4976 6.75C15.6679 6.75 14.9976 6.07969 14.9976 5.25C14.9976 4.42031 15.6679 3.75 16.4976 3.75C17.3272 3.75 17.9976 4.42031 17.9976 5.25C17.9976 6.07969 17.3272 6.75 16.4976 6.75Z"
                  fill="#009FE8"
                />
                <path
                  d="M10.7789 23.25C10.5867 23.25 10.3945 23.175 10.2492 23.0297C9.95859 22.7391 9.95859 22.2609 10.2492 21.9703L22.4977 9.72187V3.75C22.4977 3.3375 22.8352 3 23.2477 3C23.6602 3 23.9977 3.3375 23.9977 3.75V9.74531C24.0023 10.1203 23.857 10.4813 23.5945 10.7484L11.3133 23.0297C11.1633 23.175 10.9711 23.25 10.7789 23.25Z"
                  fill="#009FE8"
                />
              </svg>
              <span class="categoryText">카테고리</span>
              <span style="margin-left: 10px; margin-right: 10px">
                <svg
                  alt="!"
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="20"
                  viewBox="0 0 6 30"
                  fill="none"
                >
                  <path
                    d="M0.0150003 2.99969C-0.0268707 2.62047 0.019152 2.23748 0.150101 1.87542C0.281049 1.51337 0.494016 1.18028 0.775267 0.897645C1.05652 0.61501 1.39981 0.389103 1.783 0.234492C2.16619 0.0798812 2.58077 0 3 0C3.41923 0 3.83382 0.0798812 4.217 0.234492C4.60019 0.389103 4.94348 0.61501 5.22473 0.897645C5.50598 1.18028 5.71895 1.51337 5.8499 1.87542C5.98085 2.23748 6.02687 2.62047 5.985 2.99969L4.821 20.3181C4.77603 20.7287 4.56477 21.1096 4.22825 21.3865C3.89172 21.6635 3.45396 21.8169 3 21.8169C2.54604 21.8169 2.10828 21.6635 1.77175 21.3865C1.43523 21.1096 1.22397 20.7287 1.179 20.3181L0.0150003 2.99969ZM0 27.2727C0 26.5494 0.316071 25.8557 0.87868 25.3442C1.44129 24.8327 2.20435 24.5454 3 24.5454C3.79565 24.5454 4.55871 24.8327 5.12132 25.3442C5.68393 25.8557 6 26.5494 6 27.2727C6 27.996 5.68393 28.6897 5.12132 29.2012C4.55871 29.7127 3.79565 30 3 30C2.20435 30 1.44129 29.7127 0.87868 29.2012C0.316071 28.6897 0 27.996 0 27.2727Z"
                    fill="#F24E1E"
                  />
                </svg>
              </span>
              <span class="limitText"> 최대 1개 이상 선택해주세요. </span>
            </div>
            <div class="categoryInput">
              <input
                type="checkbox"
                class="checkbox"
                v-model="selectedCategories"
                value="산업정책"
              />
              <span class="cateItem">산업정책</span>
              <input
                type="checkbox"
                class="checkbox"
                v-model="selectedCategories"
                value="건설"
              />
              <span class="cateItem">건설</span>
              <input
                type="checkbox"
                class="checkbox"
                v-model="selectedCategories"
                value="조선"
              />
              <span class="cateItem">조선</span>
              <input
                type="checkbox"
                class="checkbox"
                v-model="selectedCategories"
                value="IT"
              />
              <span class="cateItem">IT</span>
            </div>
          </div>
          <div class="completeBtn">
            <div class="ButtonArea">
              <BlueButton ButtonText="완료" @click="submitSettingPost()" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlueButton from "../components/BlueButton.vue";
import axios from "axios";

export default {
  components: { BlueButton },
  data() {
    return {
      startDate: "", // 사용자가 선택한 시작 날짜
      endDate: "", // 사용자가 선택한 종료 날짜
      selectedCategories: [], // 사용자가 선택한 카테고리
      numberOfArticles: 0, // 사용자가 요청한 기사의 개수
      articles: [], // 서버로부터 받은 기사 데이터
      오토뉴스선택설정창: false,
      newsCount: "",
    };
  },
  watch: {
    newsCount(newValue) {
      if (newValue < 1) {
        this.newsCount = 1;
      } else if (newValue > 10) {
        this.newsCount = 10;
      }
    },
  },
  methods: {
    autoSelectOpenModal() {
      this.오토뉴스선택설정창 = true;
      document.body.style.overflow = "auto";
    },
    autoSelectCloseModal() {
      this.오토뉴스선택설정창 = false;
      document.body.style.overflow = "auto";
    },
    goToNewsPage() {
      // '/NewsPage'로 이동
      this.$router.push("/NewsPage");
    },
    validateDates() {
      if (this.startDate && this.endDate) {
        const startDate = new Date(this.startDate);
        const endDate = new Date(this.endDate);

        if (startDate > endDate) {
          alert("종료일은 시작일 이후의 날짜여야 합니다.");
          // 선택 초기화 또는 다른 처리를 원하는 대로 추가할 수 있습니다.
          this.endDate = null;
        }
      }
    },
    async submitSettingPost() {
      try {
        if (
          !this.startDate ||
          !this.endDate ||
          !this.newsCount ||
          this.selectedCategories.length === 0
        ) {
          // 필수 입력 필드 확인
          alert(
            "날짜, 뉴스 개수, 카테고리(최소 1개 이상)를 모두 선택 또는 입력하세요."
          );
          return;
        }

        // Axios를 사용하여 서버에 데이터 전송
        const response = await axios.post('http://localhost:3000/api/clipped-news/submit-settings', {
          startDate: this.startDate,
          endDate: this.endDate,
          newsCount: this.newsCount,
          selectedCategories: this.selectedCategories,
        });

        // 성공적인 응답 처리
        console.log(response.data);
        // 성공 메시지 등을 사용자에게 알릴 수 있습니다.
      } catch (error) {
        // 오류 처리
        console.error("모달 데이터 전송 중 오류 발생:", error.message);
        // 오류 메시지 등을 사용자에게 알릴 수 있습니다.
      }
    },
  },
};
</script>

<style scoped>
input[type="number"] {
  width: 100%;
  height: 3vh;
  font-size: 1.5em;
}
input[type="date"] {
  width: 50%;
  height: 3vh;
  text-align: center;
  font-size: 1.5em;
}
div {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.newTextDiv {
  position: relative;
  right: 40px;
  top: 3px;
}
.newsText {
  color: #616161;
  text-align: center;
  font-size: 46px;
  font-weight: 700;
}
.basket {
  position: relative;
  bottom: 3px;
}
.MainCoverImg {
  width: 100%;
  height: 400px;
}
.text1Div {
  display: flex;
  justify-content: center;
  padding: 50px 0px;
}
.text1 {
  color: #009fe8;
  text-align: center;
  font-size: 35px;
  font-weight: 700;
}
.SelectDiv {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 50px;
}
.newsSelectDiv {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid #000;
  width: 350px;
  height: 500px;
  margin-right: 30px;
}
.autoNewsSelectDiv {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid #000;
  background: #000;
  width: 350px;
  height: 500px;
  margin-left: 30px;
}
.text2 {
  color: #000;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 2.5px;
}
.text3 {
  color: #ffffff;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 2.5px;
}
.btn1 {
  width: 140px;
  height: 50px;
  border: 2px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2.5px;
  cursor: pointer;
  margin-top: 30px;
}
.btn2 {
  width: 140px;
  height: 50px;
  background: #000;
  border: 2px solid #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2.5px;
  cursor: pointer;
  margin-top: 30px;
}
/* modal */
.modalBackgound {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  position: fixed;
  padding: 5% 20%;
}

.modalPage {
  font-weight: bold;
  white-space: nowrap;
  background: white;
  border-radius: 8px;
  padding: 3%;
  margin: 10%;
}
.modalDiv {
  padding: 3% 10%;
}
.modalClose {
  cursor: pointer;
  position: relative;
}
.setting {
  display: flex;
  align-items: center;
  padding-bottom: 5%;
  border-bottom: 2px solid #b7b7b7;
}
.settingText {
  font-size: 1.75em;
  color: #343434;
  text-align: center;
  padding-left: 5%;
}
.date {
  display: flex;
  flex-direction: column;
  margin-top: 5%;
}
.dateSelect {
  display: flex;
  align-items: center;
  margin-bottom: 5%;
}
.dateInput {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.newsNum {
  display: flex;
  flex-direction: column;
  margin-top: 5%;
}
.newsSelect {
  display: flex;
  align-items: center;
  margin-bottom: 5%;
}
.newsInput {
  text-align: center;
}
.category {
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  margin-bottom: 5%;
}
.categorySelect {
  display: flex;
  align-items: center;
  margin-bottom: 5%;
}
.categoryInput {
  display: flex;
  align-items: center;
  justify-content: center;
}
.categoryText,
.dateText,
.newsText {
  color: #343434;
  text-align: center;
  font-size: 1.75em;
  padding-left: 20px;
}
.limitText {
  color: #b7b7b7;
  font-size: 20px;
}
.completeBtn {
  display: flex;
  justify-content: center;
}
.checkbox {
  width: 25px;
  height: 25px;
  margin-right: 5%;
  margin-left: 5%;
}
.cateItem {
  font-size: 1em;
}
</style>
