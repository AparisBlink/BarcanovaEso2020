/*
*   Imports de todos los archivos de estilos
*/
/*
*   Variables globales para el estilo
*/
/* ********** /
/   COLORS    /
/ ********** */
/* ********************* /
/   DEVICE BREAKPOINT    /
/ ********************* */
/* ********** /
/   STYLES    /
/ ********** */
/* ********** /
/  GRADIENTS  /
/ ********** */
/* Blink Elements */
.navbar.libro {
  margin-bottom: 0; }

body:not(.isTablet) #book-index #indice .units ul#list-units li:not(.disabled).active a,
body #book-index #indice .units ul#list-units li:not(.disabled).active a {
  background: #a2041b; }

body:not(.isTablet) #book-index #indice .units ul#list-units li:not(.disabled):not(.active) a:hover,
body #book-index #indice .units ul#list-units li:not(.disabled):not(.active) a:hover {
  background: #ce243d; }

body #book-index #indice .col-main {
  background-image: linear-gradient(to right, #a2041b, #fa455f);
  opacity: 1; }
  body #book-index #indice .col-main li.current a,
  body #book-index #indice .col-main li a:hover {
    color: #ffffff; }
  body #book-index #indice .col-main .unit-content .material .item .imagen.libro:before {
    background-image: url(../../../images/contenido/recurso-bg-libro.jpg); }
  body #book-index #indice .col-main .unit-content .material .item .imagen.video:before, body #book-index #indice .col-main .unit-content .material .item .imagen.musica:before {
    background-image: url(../../../images/contenido/recurso-bg-multimedia.jpg); }

.slider-control,
#swipeview-slider {
  z-index: 2; }

.content-wrapper {
  background-position: center; }
  .content-wrapper #actividad .content,
  .content-wrapper #swipeview-slider > div[id*=swipeview-masterpage-] {
    background-color: transparent; }
  .content-wrapper #actividad .content .carousel-inner .item-container {
    background-image: none; }
  .content-wrapper:not(.libro):before {
    background-color: #223c3f77;
    bottom: 0;
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 1;
    pointer-events: none; }

.slider-control {
  background-color: #223c3f; }

.navbar-bottom {
  background-color: #223c3f; }
  .navbar-bottom .edit .slider-indicators .concat.active,
  .navbar-bottom .slider-indicators .active {
    background-color: #a2041b;
    color: #223c3f; }

.spinner {
  display: none;
  visibility: hidden; }

.widgetBackground {
  display: none; }

/* Layout */
.go-back,
#layout-container div.go-back {
  background-color: transparent;
  display: block;
  position: relative;
  z-index: 2;
  flex: none; }
  .go-back button,
  #layout-container div.go-back button {
    color: #ffffff;
    background-color: inherit;
    height: 60px;
    transition: color .2s ease-in-out; }
    .go-back button span, .go-back button:before,
    #layout-container div.go-back button span,
    #layout-container div.go-back button:before {
      height: 100%;
      vertical-align: middle; }
    .go-back button span,
    #layout-container div.go-back button span {
      font-size: 15px;
      font-weight: 600;
      text-transform: uppercase; }
    .go-back button:before,
    #layout-container div.go-back button:before {
      content: "\2039";
      font-size: 40px;
      font-weight: 400;
      height: 100%;
      display: inline-block;
      width: 30px;
      line-height: 1em; }
    @media (hover: hover) {
      .go-back button:hover,
      #layout-container div.go-back button:hover {
        color: #ce243d; } }
    .go-back button:active,
    #layout-container div.go-back button:active {
      box-shadow: none;
      color: #ce243d; }

#layout-container {
  align-items: stretch;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%; }
  #layout-container * {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none; }
  #layout-container .section-title-1,
  #layout-container .section-title-2,
  #layout-container .section-title-3,
  #layout-container .section-title-4,
  #layout-container span {
    font-weight: 300; }
  #layout-container .section-title-1 {
    font-size: 60px; }
  #layout-container .section-title-4 {
    font-size: 18px; }
  #layout-container #main-screen {
    flex-direction: column;
    width: 100%;
    background-color: transparent;
    max-width: 100%; }
    #layout-container #main-screen #course-header {
      align-items: stretch;
      background-color: #223c3f55;
      color: #ffffff;
      flex: 1;
      flex-direction: row;
      justify-content: space-between;
      padding-bottom: 15px;
      padding-left: calc(10% + 75px);
      z-index: 2; }
      #layout-container #main-screen #course-header .course-title {
        flex: 2;
        justify-content: flex-start; }
        #layout-container #main-screen #course-header .course-title span {
          font-size: 32px;
          line-height: 1.2em; }
        @media (max-width: 1024px) {
          #layout-container #main-screen #course-header .course-title {
            justify-content: center; }
            #layout-container #main-screen #course-header .course-title [class*=section-title-] {
              margin-top: 0;
              margin-bottom: 30px;
              font-size: 48px; }
            #layout-container #main-screen #course-header .course-title span {
              font-size: 24px; } }
        @media (max-width: 768px) {
          #layout-container #main-screen #course-header .course-title {
            padding: 15px; } }
        @media (max-height: 375px), (max-width: 476px) {
          #layout-container #main-screen #course-header .course-title {
            margin: 15px 0;
            padding: 0 15px; }
            #layout-container #main-screen #course-header .course-title [class*=section-title-] {
              font-size: 40px;
              line-height: 35px;
              margin-top: 0;
              margin-bottom: 10px;
              max-width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              word-break: keep-all; }
            #layout-container #main-screen #course-header .course-title span {
              font-size: 22px; } }
      #layout-container #main-screen #course-header .course-extra {
        align-items: flex-end;
        justify-content: flex-end; }
        #layout-container #main-screen #course-header .course-extra ul {
          align-items: flex-end;
          display: flex;
          flex-direction: column;
          width: 100%; }
          #layout-container #main-screen #course-header .course-extra ul li {
            background-color: #223c3f;
            border-left: 10px solid #ce243d;
            margin-bottom: 10px;
            padding: 0 25px;
            width: 70%;
            transition: width .3s ease-in; }
            #layout-container #main-screen #course-header .course-extra ul li a {
              color: #ffffff; }
              #layout-container #main-screen #course-header .course-extra ul li a span {
                cursor: pointer;
                display: inline-block;
                font-size: 14px;
                font-weight: 500;
                margin: 8px 0;
                max-width: 100%;
                overflow: hidden;
                position: relative;
                text-transform: uppercase;
                text-overflow: ellipsis;
                white-space: nowrap; }
            #layout-container #main-screen #course-header .course-extra ul li:active {
              width: 75%; }
            @media (hover: hover) {
              #layout-container #main-screen #course-header .course-extra ul li:hover {
                width: 75%; } }
            @media (max-width: 476px) {
              #layout-container #main-screen #course-header .course-extra ul li {
                overflow: hidden; }
                #layout-container #main-screen #course-header .course-extra ul li span {
                  text-overflow: ellipsis;
                  width: 95%;
                  word-wrap: break-word; } }
  @media (max-width: 476px) and (hover: hover) {
    #layout-container #main-screen #course-header .course-extra ul li:hover {
      width: 75%; } }
      #layout-container #main-screen #course-header div {
        align-items: flex-start;
        flex-direction: column;
        justify-content: center; }
      @media (max-width: 1024px) {
        #layout-container #main-screen #course-header {
          padding-left: 15px; } }
      @media (max-width: 768px), (max-height: 375px), (max-width: 476px) {
        #layout-container #main-screen #course-header {
          flex-direction: column; } }
    #layout-container #main-screen #course-content {
      align-items: center;
      background-color: #ffffff48;
      flex: 2;
      justify-content: center;
      padding: 0 10%; }
      #layout-container #main-screen #course-content .slider-wrapper {
        flex-direction: row;
        height: 350px;
        overflow: hidden; }
        #layout-container #main-screen #course-content .slider-wrapper .slider-navcontrol {
          align-items: center;
          max-width: 75px;
          padding-bottom: 50px; }
          #layout-container #main-screen #course-content .slider-wrapper .slider-navcontrol span {
            display: block;
            height: fit-content;
            position: relative;
            width: 100%; }
            #layout-container #main-screen #course-content .slider-wrapper .slider-navcontrol span i {
              align-items: center;
              color: #223c3f;
              cursor: pointer;
              display: flex;
              height: inherit;
              justify-content: center;
              position: relative; }
              #layout-container #main-screen #course-content .slider-wrapper .slider-navcontrol span i:hover:before, #layout-container #main-screen #course-content .slider-wrapper .slider-navcontrol span i:hover:after {
                animation-duration: 1s;
                animation-iteration-count: infinite; }
          #layout-container #main-screen #course-content .slider-wrapper .slider-navcontrol.slider-navcontrol-left i:after {
            content: '\f104';
            display: none;
            font-size: 2em; }
          #layout-container #main-screen #course-content .slider-wrapper .slider-navcontrol.slider-navcontrol-left i:before {
            font-size: 4em; }
          #layout-container #main-screen #course-content .slider-wrapper .slider-navcontrol.slider-navcontrol-left i:hover:after {
            animation-delay: .2s;
            display: inline-block; }
          #layout-container #main-screen #course-content .slider-wrapper .slider-navcontrol.slider-navcontrol-left i:hover:before, #layout-container #main-screen #course-content .slider-wrapper .slider-navcontrol.slider-navcontrol-left i:hover:after {
            animation-name: arrowFadeLeft; }

@keyframes arrowFadeLeft {
  0% {
    transform: translateX(0) scale(1);
    opacity: 1; }
  25% {
    transform: translateX(-100%); }
  37% {
    transform: translateX(-100%); }
  38% {
    transform: translateX(100%) scale(0.5);
    opacity: 0; }
  50% {
    opacity: 1; }
  100% {
    transform: translateX(0) scale(1);
    opacity: 1; } }
          #layout-container #main-screen #course-content .slider-wrapper .slider-navcontrol.slider-navcontrol-right i:before {
            font-size: 2em;
            display: none; }
          #layout-container #main-screen #course-content .slider-wrapper .slider-navcontrol.slider-navcontrol-right i:after {
            content: '\f105';
            font-size: 4em; }
          #layout-container #main-screen #course-content .slider-wrapper .slider-navcontrol.slider-navcontrol-right i:hover:before {
            animation-delay: .1s;
            display: inline-block; }
          #layout-container #main-screen #course-content .slider-wrapper .slider-navcontrol.slider-navcontrol-right i:hover:before, #layout-container #main-screen #course-content .slider-wrapper .slider-navcontrol.slider-navcontrol-right i:hover:after {
            animation-name: arrowFadeRight; }

@keyframes arrowFadeRight {
  0% {
    transform: translateX(0) scale(1);
    opacity: 1; }
  25% {
    transform: translateX(100%); }
  37% {
    transform: translateX(100%); }
  38% {
    transform: translateX(-100%) scale(0.5);
    opacity: 0; }
  50% {
    opacity: 1; }
  100% {
    transform: translateX(0) scale(1);
    opacity: 1; } }
          @media (max-width: 1024px) {
            #layout-container #main-screen #course-content .slider-wrapper .slider-navcontrol {
              display: none;
              visibility: hidden; } }
        #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack {
          flex: 9;
          flex-grow: 3;
          justify-content: flex-start;
          overflow: hidden;
          padding-bottom: 50px; }
          #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-carousel {
            transform: translateX(0px);
            transition: transform 0.4s ease-in-out;
            z-index: 2; }
          #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item {
            background-color: #aea;
            flex: unset;
            flex-direction: column;
            justify-content: space-between;
            margin-right: 8px;
            position: relative;
            width: 220px; }
            #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item,
            #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item * {
              user-select: none; }
            #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item a {
              color: #223c3f;
              display: flex;
              flex-direction: column;
              height: 100%; }
            #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-title {
              align-items: center;
              background-color: #e00;
              background-image: linear-gradient(90deg, #a2041b 25%, #fa455f);
              max-height: 60px;
              padding: 15px 0;
              position: relative; }
              #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-title h3 {
                color: #ffffff;
                margin: 0 15px; }
              #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-title:before {
                background-image: linear-gradient(45deg, #a2041b calc(-100% - 52px), #fa455f calc(100% + 12px));
                border-radius: 100% 0 0 0;
                content: '';
                height: 24px;
                position: absolute;
                right: 24px;
                top: calc(100% - 12px);
                transform: rotate(45deg);
                width: 24px;
                z-index: 2; }
            #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-desc {
              background-color: #ffffff;
              max-height: 45%;
              padding: 0 15px; }
              #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-desc .section-title-4 {
                font-weight: 600; }
            #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-number {
              align-items: center;
              background-color: #223c3f;
              border-radius: 100%;
              bottom: -28px;
              color: #ffffff;
              display: flex;
              flex: unset;
              float: left;
              height: 52px;
              justify-content: center;
              left: 24px;
              position: absolute;
              width: 52px;
              z-index: 1; }
              #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-number span {
                font-size: 25px;
                font-weight: 300; }
            #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item:after {
              background-color: #223c3f;
              bottom: -8px;
              height: 8px;
              content: '';
              left: 44px;
              position: absolute;
              width: calc(100% + 24px);
              z-index: 0; }
            #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item:last-child:after {
              display: none; }
      @media (max-width: 1024px) {
        #layout-container #main-screen #course-content {
          padding: 0 10px; } }
      @media (max-width: 476px) {
        #layout-container #main-screen #course-content {
          margin-bottom: 60px; } }
  #layout-container div[id*="section-screen"] {
    flex-direction: column; }
    #layout-container div[id*="section-screen"] .go-back span {
      font-weight: 600; }
    @media (max-width: 476px) {
      #layout-container div[id*="section-screen"] .go-back button {
        height: auto; }
        #layout-container div[id*="section-screen"] .go-back button:before {
          font-size: 30px; } }
    #layout-container div[id*="section-screen"] .section {
      flex: 10;
      flex-direction: row;
      margin: 0 10%;
      padding: 0 50px;
      z-index: 2; }
      #layout-container div[id*="section-screen"] .section .section-data {
        flex: unset;
        flex-direction: column;
        width: 290px; }
        #layout-container div[id*="section-screen"] .section .section-data * {
          user-select: none; }
        #layout-container div[id*="section-screen"] .section .section-data .section-title {
          align-items: center;
          background-color: #a2041b;
          background-image: linear-gradient(90deg, #a2041b 25%, #fa455f);
          padding: 20px 10px;
          position: relative; }
          #layout-container div[id*="section-screen"] .section .section-data .section-title h1 {
            color: #ffffff;
            margin: 0 15px;
            margin-bottom: 15px; }
          #layout-container div[id*="section-screen"] .section .section-data .section-title:before {
            background-image: linear-gradient(45deg, #ce243d -140%, #fa455f 50%, #fda2af 170%);
            border-radius: 0 0 0 100%;
            content: '';
            height: 24px;
            position: absolute;
            right: -12px;
            top: 25%;
            transform: rotate(45deg);
            width: 24px;
            z-index: 2; }
            @media (max-width: 1024px) {
              #layout-container div[id*="section-screen"] .section .section-data .section-title:before {
                top: 16%; } }
            @media (max-width: 768px) {
              #layout-container div[id*="section-screen"] .section .section-data .section-title:before {
                top: 20%; } }
          @media (max-height: 375px) {
            #layout-container div[id*="section-screen"] .section .section-data .section-title h1 {
              font-size: 30px; } }
        #layout-container div[id*="section-screen"] .section .section-data .desc-wrapper {
          align-items: center;
          background-position: center;
          flex: 5;
          justify-content: center; }
          #layout-container div[id*="section-screen"] .section .section-data .desc-wrapper .section-desc {
            background-color: #ffffff;
            flex-direction: column;
            height: 65%;
            padding: 0 15px;
            position: relative; }
            #layout-container div[id*="section-screen"] .section .section-data .desc-wrapper .section-desc [class*="section-title-"] {
              font-size: 24px;
              font-weight: 600; }
              @media (max-height: 375px) {
                #layout-container div[id*="section-screen"] .section .section-data .desc-wrapper .section-desc [class*="section-title-"] {
                  font-size: 18px; } }
            @media (max-width: 476px) {
              #layout-container div[id*="section-screen"] .section .section-data .desc-wrapper .section-desc:after {
                background-color: #ffffff;
                bottom: calc((30px / 2) * -1);
                content: '';
                height: 30px;
                position: absolute;
                right: 30px;
                transform: rotate(45deg);
                width: 30px; } }
          #layout-container div[id*="section-screen"] .section .section-data .desc-wrapper .section-number {
            align-items: center;
            background-color: #223c3f;
            border-radius: 100%;
            bottom: calc(90% - 100%);
            color: #ffffff;
            display: flex;
            flex: unset;
            float: left;
            height: 95px;
            justify-content: center;
            left: 24px;
            position: absolute;
            width: 95px;
            z-index: 1; }
            #layout-container div[id*="section-screen"] .section .section-data .desc-wrapper .section-number span {
              font-size: 47px;
              font-weight: 300; }
            @media (max-height: 375px) {
              #layout-container div[id*="section-screen"] .section .section-data .desc-wrapper .section-number {
                float: right;
                height: 50px;
                left: auto;
                right: 24px;
                width: 50px; }
                #layout-container div[id*="section-screen"] .section .section-data .desc-wrapper .section-number span {
                  font-size: 30px; } }
        @media (max-height: 375px) {
          #layout-container div[id*="section-screen"] .section .section-data {
            flex: 1; } }
      #layout-container div[id*="section-screen"] .section .section-content {
        background-color: #223c3f;
        flex: 2;
        flex-direction: column; }
        #layout-container div[id*="section-screen"] .section .section-content .tabs {
          align-items: stretch;
          background-color: #223c3f;
          color: #ffffff;
          flex: 1;
          flex-direction: row;
          justify-content: center;
          user-select: none; }
          #layout-container div[id*="section-screen"] .section .section-content .tabs .tab {
            align-items: center;
            background-color: #ffffff88;
            cursor: pointer;
            justify-content: center;
            transition: background-color .2s ease-in-out; }
            #layout-container div[id*="section-screen"] .section .section-content .tabs .tab [class*="section-title-"] {
              font-size: 22px;
              font-weight: 600;
              margin: 0 15px;
              transition: color .2s ease-in-out;
              text-transform: uppercase; }
            #layout-container div[id*="section-screen"] .section .section-content .tabs .tab.active {
              background-color: transparent; }
            #layout-container div[id*="section-screen"] .section .section-content .tabs .tab:not(.active):hover [class*="section-title-"] {
              color: #a2041b; }
            @media (max-width: 1024px) {
              #layout-container div[id*="section-screen"] .section .section-content .tabs .tab [class*="section-title-"] {
                font-size: 16px; } }
          @media (max-height: 375px) {
            #layout-container div[id*="section-screen"] .section .section-content .tabs {
              flex: 3; } }
          @media (max-width: 476px) {
            #layout-container div[id*="section-screen"] .section .section-content .tabs {
              flex: 2; } }
        #layout-container div[id*="section-screen"] .section .section-content .tabs-content {
          flex: 8;
          overflow-y: scroll;
          padding: 15px 0;
          position: relative; }
          #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content {
            bottom: 0;
            display: none;
            flex-direction: column;
            height: 100%;
            left: 0;
            margin: 0 40px;
            margin-left: 60px;
            padding: 40px 0;
            position: absolute;
            right: 0;
            top: 0; }
            #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-wrapper {
              align-items: stretch;
              flex-direction: column;
              justify-content: flex-start;
              flex: none; }
            #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content,
            #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content,
            #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources {
              flex-direction: column;
              justify-content: flex-start; }
              #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .separator,
              #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item,
              #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .separator,
              #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item,
              #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .separator,
              #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item {
                flex: unset;
                flex-direction: row; }
              #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .separator#layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .separator,
              #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .separator,
              #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .separator {
                color: #ffffff;
                border-bottom: 1px solid #ffffff;
                margin-bottom: 15px;
                padding-bottom: 15px; }
              #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item,
              #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item,
              #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item {
                align-items: center;
                background-color: #ffffff;
                cursor: pointer;
                height: 63px;
                margin-bottom: 20px;
                padding-left: 55px;
                transition-duration: .3s;
                transition-property: background-color, color;
                transition-timing-function: ease-in-out;
                user-select: none; }
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item .content-img,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item .content-img,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item .content-img {
                  background-color: #a2041b;
                  background-position: center;
                  background-repeat: no-repeat;
                  background-size: cover;
                  box-shadow: 5px 0px 2px 1px #0000002e;
                  border-radius: 100%;
                  height: 74px;
                  position: absolute;
                  left: -30px;
                  width: 74px; }
                  @media (max-height: 1024px) {
                    #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item .content-img,
                    #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item .content-img,
                    #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item .content-img {
                      height: 56px;
                      width: 56px;
                      box-shadow: 3px 0px 2px 1px rgba(0, 0, 0, 0.18); } }
                  @media (max-height: 375px), (max-width: 476px) {
                    #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item .content-img,
                    #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item .content-img,
                    #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item .content-img {
                      height: 48px;
                      width: 48px;
                      box-shadow: 2px 1px 2px 1px rgba(0, 0, 0, 0.18); } }
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item .content-buttons,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item .content-buttons,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item .content-buttons {
                  align-items: stretch;
                  justify-content: flex-end; }
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item .content-lock:before,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item .content-lock:before,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item .content-lock:before {
                  background-image: url(images/padlock-sprite.png);
                  background-repeat: no-repeat;
                  background-position: 0 0;
                  background-size: cover;
                  content: '';
                  display: block;
                  height: 25px;
                  transition: background-position 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
                  width: 20px; }
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item .content-lock.locked:before,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item .content-lock.locked:before,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item .content-lock.locked:before {
                  background-position: 0 -40px; }
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item .content-page-count,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item .content-page-count,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item .content-page-count {
                  font-size: 12px;
                  font-weight: 600;
                  margin: 0 10px; }
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item:after,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item:after,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item:after {
                  background-image: linear-gradient(90deg, #a2041b 25%, #fa455f);
                  content: '';
                  height: 100%;
                  width: 20px; }
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item:active,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item:active,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item:active {
                  background-color: #fda2af;
                  color: #a2041b; }
                @media (hover: hover) {
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item:hover,
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item:hover,
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item:hover {
                    background-color: #fda2af;
                    color: #a2041b; } }
                @media (max-height: 375px), (max-width: 476px) {
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item,
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item,
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item {
                    height: calc(48px + 5px); } }
            #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources {
              color: #fff;
              font-weight: 300;
              opacity: 0.25;
              text-align: center; }
            #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .unit-content .content-item,
            #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .resources-content .content-item {
              height: 72px; }
              #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .unit-content .content-item .circle-outer,
              #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .resources-content .content-item .circle-outer {
                left: calc(calc(72px/2) * -1);
                height: 72px;
                width: calc(72px/2);
                background-image: linear-gradient(to bottom, #a2041b 50%, #fa455f 51%);
                flex: none;
                position: absolute;
                clip-path: circle(calc(72px/2) at right);
                -webkit-clip-path: circle(calc(72px/2) at right); }
              #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .unit-content .content-item .circle-inner,
              #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .resources-content .content-item .circle-inner {
                left: calc(calc(calc(72px/2) - 4px) * -1);
                height: calc(calc(calc(72px/2) - 4px) * 2);
                width: calc(calc(72px/2) - 4px);
                background-color: #223c3f;
                flex: none;
                position: absolute;
                clip-path: circle(calc(calc(72px/2) - 4px) at right);
                -webkit-clip-path: circle(calc(calc(72px/2) - 4px) at right); }
              #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .unit-content .content-item .content-img,
              #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .resources-content .content-item .content-img {
                background-image: linear-gradient(to bottom, #a2041b 50%, #fa455f 51%);
                box-shadow: none;
                height: 58px;
                width: 58px; }
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .unit-content .content-item .content-img:before,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .resources-content .content-item .content-img:before {
                  background-color: transparent;
                  background-image: url(images/resources-icons.png);
                  background-repeat: no-repeat;
                  background-size: 118px 60px;
                  content: '';
                  height: 30px;
                  transform: translate(50%, 50%);
                  transform-origin: center;
                  width: 30px; }
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .unit-content .content-item .content-img.type-2:before,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .resources-content .content-item .content-img.type-2:before {
                  background-position: -89px 0px; }
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .unit-content .content-item .content-img.type-3:before,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .resources-content .content-item .content-img.type-3:before {
                  background-position: -45px -31px; }
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .unit-content .content-item .content-img.type-5:before,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .resources-content .content-item .content-img.type-5:before {
                  background-position: -45px 0px; }
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .unit-content .content-item .content-img.type-6:before,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .resources-content .content-item .content-img.type-6:before {
                  background-position: -89px -31px; }
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .unit-content .content-item .content-img.type-7:before,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .resources-content .content-item .content-img.type-7:before {
                  background-position: 0px -31px; }
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .unit-content .content-item .content-img.type-8:before,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .resources-content .content-item .content-img.type-8:before {
                  background-position: 0px 0px; }
          #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.active {
            display: flex; }
      @media (max-width: 1024px) {
        #layout-container div[id*="section-screen"] .section {
          flex: 20;
          margin: 0;
          max-width: unset;
          padding: 0 2%; } }
      @media (max-width: 476px) {
        #layout-container div[id*="section-screen"] .section {
          align-items: stretch;
          flex-direction: column; }
          #layout-container div[id*="section-screen"] .section .section-data {
            flex: 1;
            width: auto; }
            #layout-container div[id*="section-screen"] .section .section-data .section-title {
              padding: 15px; }
              #layout-container div[id*="section-screen"] .section .section-data .section-title h1 {
                font-size: 48px;
                margin: 0; }
              #layout-container div[id*="section-screen"] .section .section-data .section-title:before {
                content: unset; }
            #layout-container div[id*="section-screen"] .section .section-data .desc-wrapper {
              align-items: stretch;
              flex: 2;
              flex-direction: row; }
              #layout-container div[id*="section-screen"] .section .section-data .desc-wrapper .section-desc {
                align-items: center;
                flex-direction: row;
                height: auto; }
                #layout-container div[id*="section-screen"] .section .section-data .desc-wrapper .section-desc [class*=section-title-] {
                  flex: 5;
                  margin: 10px 0; }
                #layout-container div[id*="section-screen"] .section .section-data .desc-wrapper .section-desc .section-number {
                  bottom: auto;
                  flex: initial;
                  float: none;
                  height: 60px;
                  left: auto;
                  position: relative;
                  width: 60px; }
                  #layout-container div[id*="section-screen"] .section .section-data .desc-wrapper .section-desc .section-number span {
                    font-size: 32px; } }
  #layout-container .section-navigation {
    background-color: rgba(103, 166, 173, 0.2);
    border: none;
    color: white;
    height: 145px;
    outline: none;
    position: absolute;
    top: calc(50% - (145px/2));
    transition-duration: .2s;
    transition-timing-function: ease-in-out;
    transition-property: background-color, color;
    width: 80px;
    z-index: 3; }
    #layout-container .section-navigation i {
      align-items: center;
      display: flex;
      justify-content: center;
      height: 100%;
      width: 100%; }
      #layout-container .section-navigation i:before {
        font-size: 72px;
        vertical-align: middle; }
    #layout-container .section-navigation:hover {
      background-color: #ffffff;
      color: #223c3f; }
    #layout-container .section-navigation.left {
      border-radius: 0 calc(145px/2) calc(145px/2) 0;
      left: 0;
      transform-origin: left; }
    #layout-container .section-navigation.right {
      border-radius: calc(145px/2) 0 0 calc(145px/2);
      right: 0;
      transform-origin: right; }
    @media (max-width: 476px) {
      #layout-container .section-navigation {
        transform: scale(0.6); } }
  #layout-container *::-webkit-scrollbar {
    background: rgba(237, 237, 237, 0.25);
    width: 4px;
    height: 4px; }
  #layout-container *::-webkit-scrollbar-thumb {
    background-color: #A2041B;
    border-radius: 20px; }
  #layout-container *::-webkit-scrollbar-track {
    background-color: #ededed;
    border-radius: 20px; }
  #layout-container div {
    display: flex;
    flex: 1; }
  #layout-container:before {
    background-color: #223c3f77;
    bottom: 0;
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 1;
    pointer-events: none; }
  @media (max-width: 768px) {
    #layout-container {
      overflow: auto; } }


  /************************
   * CSS AÑADIDO POR HTML *
   ************************/

        /*-------------FUENTES------------*/
        /*ROBOTO SLAB*/
        @font-face {
            font-family: 'Roboto Slab';
            src: url('fonts/RobotoSlab-Regular.eot');
            src: local('☺'),
             url('fonts/RobotoSlab-Regular.woff') format('woff'),
              url('fonts/RobotoSlab-Regular.ttf') format('truetype'),
               url('fonts/RobotoSlab-Regular.svg') format('svg');
            font-weight: 400;
            font-style: normal;
        }

        @font-face {
            font-family: 'Roboto Slab';
            src: url('fonts/RobotoSlab-Black.eot');
            src: local('☺'), url('fonts/RobotoSlab-Black.woff') format('woff'), url('fonts/RobotoSlab-Black.ttf') format('truetype'), url('fonts/RobotoSlab-Black.svg') format('svg');
            font-weight: 900;
            font-style: normal;
        }

        @font-face {
            font-family: 'Pangolin';
            src: url('fonts/Pangolin-Regular.eot');
            src: local('☺'), url('fonts/Pangolin-Regular.woff') format('woff'), url('fonts/Pangolin-Regular.ttf') format('truetype'), url('fonts/Pangolin-Regular.svg') format('svg');
            font-weight: normal;
            font-style: normal;
        }

        @font-face {
            font-family: 'PT Sans Narrow';
            src: url('fonts/PTSansNarrow-Regular.eot');
            src: local('☺'), url('fonts/PTSansNarrow-Regular.woff') format('woff'), url('fonts/PTSansNarrow-Regular.ttf') format('truetype'), url('fonts/PTSansNarrow-Regular.svg') format('svg');
            font-weight: 400;
            font-style: normal;
        }

        @font-face {
            font-family: 'PT Sans Narrow';
            src: url('fonts/PTSansNarrow-Bold.eot');
            src: local('☺'), url('fonts/PTSansNarrow-Bold.woff') format('woff'), url('fonts/PTSansNarrow-Bold.ttf') format('truetype'), url('fonts/PTSansNarrow-Bold.svg') format('svg');
            font-weight: 700;
            font-style: normal;
        }

        @font-face {
          font-family: 'Montserrat';
          src: url('fonts/Montserrat-ExtraBold.eot');
          src: local('☺'), url('fonts/Montserrat-ExtraBold.woff') format('woff'), url('fonts/Montserrat-ExtraBold.ttf') format('truetype'), url('fonts/Montserrat-ExtraBold.svg') format('svg');
          font-weight: 800;
          font-style: normal;
        }

        /*--------------*/

        /*------------------------------------------*/
            /*DISPLAY EN LA PRIMERA Y SEGUNDA PANTALLA*/
            /*-------------------------------------------*/
            #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-desc {
                display: none;
            }
            #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-number {
                display: none;
            }
            #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item:after {
                display: none;
            }
            #layout-container div[id*=section-screen] .section .section-data .desc-wrapper .section-desc {
                display: none;
            }
            #layout-container div[id*=section-screen] .section .section-data .desc-wrapper .section-number {
                display: none;
            }
            #layout-container div[id*=section-screen] .section .section-content .tabs-content .content .no-resources .content-item .content-page-count,
            #layout-container div[id*=section-screen] .section .section-content .tabs-content .content .resources-content .content-item .content-page-count,
            #layout-container div[id*=section-screen] .section .section-content .tabs-content .content .unit-content .content-item .content-page-count {
                display: none;
            }
            #layout-container div[id*=section-screen] .section .section-content .tabs-content .content .no-resources .content-item .content-lock,
            #layout-container div[id*=section-screen] .section .section-content .tabs-content .content .resources-content .content-item .content-lock,
            #layout-container div[id*=section-screen] .section .section-content .tabs-content .content .unit-content .content-item .content-lock {
                display: none;
            }
            body #actividad .content .header {
            display: none;
            }

        /**/
        /*--------------------------*/
        /*Ajustes generales que afectan a todas las slides*/
        /*---------------------------*/
            body {
            font: 400 18px 'Roboto', sans-serif;
            color: #414141;
            background-color: #000000;
            }
            .texto_curso p {
            line-height: 1.7em!important;
            margin-bottom: 10px;
            }
            p {
            font-size: 18px;
            }
            #actividad .pregunta .texto_curso {
            font-size: 18px;
            }
            .bck-img-align-center>figure, .bck-img-align-center img,
            #actividad .workspace.matching .opcion .bck-img-align-center img,
            .bck-img-align-center {
                margin: 0 auto;
                text-align: center;
                margin-bottom: 0 !important;
            }
            .texto_curso .bck-content ul li, .workspace .bck-content ul li ul li, .cke_contents .bck-content ul li {
                padding-left: 10px;
            }

            body #actividad .carousel-inner .item-container {
                max-width: 1200px;
            }
        /*-------*/
        /*NAVBAR*/
            .navbar-bottom {
            background-color: #00111d;
            border-bottom: 6px solid #ffcb00;
            }
            .slider-indicators li {
            background-color: #00111d;
            text-indent: 0;
            cursor: pointer;
            width: auto;
            height: auto;
            padding: 3px 20px;
            color: #ffcb00;
            text-align: center;
            -webkit-transition: all 0.5s;
            -moz-transition: all 0.5s;
            transition: all 0.5s;
            }
            .slider-indicators {
            position: static;
            z-index: 15;
            list-style: none;
            text-align: center;
            margin: 0;
            padding-top: 10px;
            width: auto;
            background: transparent;
            border: 0;
            -webkit-transition: all 0.5s;
            -moz-transition: all 0.5s;
            transition: all 0.5s;
            }
            .navbar-bottom .edit .slider-indicators .concat.active,
            .navbar-bottom .slider-indicators .active {
            background-color: #feca0a;
            color: #00111d;
            height: auto;
            border-radius: 20px;
            width: auto;
            padding: 3px 25px;
            -webkit-transition: all 0.5s;
            -moz-transition: all 0.5s;
            transition: all 0.5s;
            }
            li.slider-indicator:hover {
            background-color: #feca0a;
            color: #00111d;
            height: auto;
            border-radius: 20px;
            padding: 3px 25px;
            text-align: center;
            -webkit-transition: all 0.5s;
            -moz-transition: all 0.5s;
            transition: all 0.5s;
            }
            body.edit .slider-indicators .concat {
                color: white;
            }
        /*---*/

        /*------------------*/    
        /*NAV-BAR SUPERIOR*/
        /*------------------*/
            .libro-left ul li .title:before {
            content: "";
            background-size: contain;
            top: 6px;
            background-image: url(https://www.blinklearning.com/useruploads/r/a/155174636/activity_other_imported/Logo17_BarcanovaEditorial_100Blanc_trans.png) !important;
            position: fixed;
            width: 126px;
            height: 62px;
            background-repeat: no-repeat;
            left: 50%;
            margin-left: -40px;
            }
        /*-----*/

        /*CAMBIOS EN EL ESTILO ABP*/
        /*.abp-resources-list-item-text-aux-2 .abp-activity-pages {
        display: none;
        }

        .abp-button-icon.abp-button-lock.abp-unlock .abp-icon {
        display: none;
        }

        .abp-button-icon.abp-button-lock .abp-icon {
        display: none;
        }
        */

        /**/

        /*------------------*/
        /*Cambios en los iconos*/
        /*--------------------*/

            /*Iconos desplegables*/
            body #book-index #indice .col-main .unit-content .content .material .item .imagen.video:before,
             body #book-index #indice .col-main .unit-content .content .material .item .imagen.musica:before {
             width: 65px;
             height: 65px;
             background-image: none;
             background-color: #223c3f;
            }
            body #book-index #indice .col-main .unit-content .content .material .item .imagen.libro:before {
            width: 65px;
            height: 65px;
            background-image: none;
            background-color: #223c3f;   
            }
            
            #book-index #indice .unit-content .material .item .imagen:before {
            width: 65px;
            height: 65px;
            background-image: none;
            background-color: #223c3f;
            }
            .abp-resources-list_2 .abp-resources-list-item-image-inner {
            background: #223c3f;
            }
            .abp-resources-list_2 .abp-resources-list-item-image::after {
            background: #ededed;
            }
            .abp-resources-list_2 .abp-resources-list-item-image::before {
            border: 4px solid #ededed;
            }
            .navbar .recursos ul li div .imagen img {
            visibility: hidden;
            }
            .navbar .recursos ul li div .imagen:after {
            background: black;
            border-radius: 100%;
            height: 100px;
            }
        /**---*/    
        /*------------------------------*    
        /*IMAGEN DE FONDO DE CADA SLIDE - CAMBIAR PARA CADA LIBRO*/
        /*-------------------------------*/ 
            #actividad .carousel-inner .item-container {
            background: #ffff;
            box-shadow: none;
            padding: 100px 40px 0px 40px !important;
            margin-bottom: 100px;
            }

            #actividad .carousel-inner .item-container:before {
            content: "";
            position: absolute;
            top: 24px;
            left: 0;
            background-image: url(https://www.blinklearning.com/useruploads/r/a/154755326/activity_other_imported/Barcanova_ESO_LenguaCatalana_cabeceraamarilla.png);
            padding: 0% 61% 6% 3%;
            background-size: contain;
            background-repeat: no-repeat;
            }

            #actividad .carousel-inner .item-container:after {
            content: "";
            position: absolute;
            right: 0;
            top: 33px;
            background-image: url(www.blinklearning.com/useruploads/r/a/155174616/activity_other_imported/Boto17_BarcanovaEditorial_Color_trans.png);
            padding: 4% 0% 0% 12%;
            background-repeat: no-repeat;
            background-size: contain;
            }
        /**----***/    

        /*--------------------------------*/
        /*CAMBIOS COLOR PRIMERA Y SEGUNDA PANTALLA*/
        /*---------------------------------*/      
        #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-title{
        background: #FDCF00;
        background: -moz-linear-gradient(0% 50% 0deg, #FDCF00 0%, #cea905 99.84%);
        background: -webkit-linear-gradient(0deg, #FDCF00 0%, #cea905 99.84%);
        background: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0, #FDCF00), color-stop(0.9984, #cea905));
        background: -o-linear-gradient(0deg, #FDCF00 0%, #cea905 99.84%);
        background: -ms-linear-gradient(0deg, #FDCF00 0%, #cea905 99.84%);
        background: linear-gradient(90deg, #FDCF00 0%, #cea905 99.84%);
        }
        #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-title::before {
            background-image: linear-gradient(45deg, #FDCF00 calc(-100% - 52px), #cea905 calc(100% + 12px));        
        }
        #layout-container #main-screen #course-header .course-extra ul li {
        border-left: 10px solid #facd00;
        }
        #layout-container div[id*="section-screen"] .section .section-data .section-title{
        background: #FDCF00;
        background: -moz-linear-gradient(0% 50% 0deg, #FDCF00 0%, #cea905 99.84%);
        background: -webkit-linear-gradient(0deg, #FDCF00 0%, #cea905 99.84%);
        background: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0, #FDCF00), color-stop(0.9984, #cea905));
        background: -o-linear-gradient(0deg, #FDCF00 0%, #cea905 99.84%);
        background: -ms-linear-gradient(0deg, #FDCF00 0%, #cea905 99.84%);
        background: linear-gradient(90deg, #FDCF00 0%, #cea905 99.84%);
        }
        #layout-container div[id*="section-screen"] .section .section-data .section-title:before {
        background: #cea905;
        }
        #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item:after,
         #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item:after,
          #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item:after  {
        background: #FDCF00;
        background: -moz-linear-gradient(0% 50% 0deg, #FDCF00 0%, #cea905 99.84%);
        background: -webkit-linear-gradient(0deg, #FDCF00 0%, #cea905 99.84%);
        background: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0, #FDCF00), color-stop(0.9984, #cea905));
        background: -o-linear-gradient(0deg, #FDCF00 0%, #cea905 99.84%);
        background: -ms-linear-gradient(0deg, #FDCF00 0%, #cea905 99.84%);
        background: linear-gradient(90deg, #FDCF00 0%, #cea905 99.84%);
        }
        @media (hover: hover) {
        .go-back button:hover,
         #layout-container div.go-back button:hover,
         #layout-container div[id*="section-screen"] .section .section-content .tabs .tab:not(.active):hover [class*="section-title-"] {
        color: #facc00;
        }
        
        a:hover,
        a:active,
        a:focus {
        color: #ae8e00;
        }
      }

        @media (hover: hover) {
          #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item:hover,
          #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item:hover,
          #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item:hover {
          color: #ae8e00;
          background: #fff3bb;
        } 
      }
        
        #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item .content-img  {
            background-color: #ffcb00;
        }    

        #book-index .col-indice {
        background: #919e9f;
        }
        .libro-left ul li a.book-index.active {
            background-color: #919e9f;
        }
        body #book-index #indice .col-main {
        background: #ffcb00;
        }
        #book-index #indice .unit-content a {
        color: black;
        }
        #indice .units ul li a .title {
        color: #fff;
        }
        #book-index #indice .unit-content a:hover,
        #book-index #indice li.current a {
        color: #ffffff;
        }

        body:not(.isTablet) #book-index #indice .units ul li:not(.disabled) a:hover,
        body:not(.isTablet) #book-index #indice .units ul#list-units li:not(.disabled).active a,
         body #book-index #indice .units ul#list-units li:not(.disabled).active a {
        background: #ffcb00;
        }
        #book-index #indice .unit-content .actividades .item {
          opacity: 1;
        }
        #layout-container .section-title-1 {
        font-size: 40px;
        word-break: break-word;
        }

        #layout-container *::-webkit-scrollbar-thumb {
        background-color: #cea905;
        }

        .abp-section p {
            padding-bottom: 6px;
            padding-top: 4px;
            font-weight: 400;
        }
        .abp-title-5 {
            font-weight: 600;
        }

        body #layout-container #main-screen #course-header .course-title span {
          font-size: 22px;
          line-height: 29px;
          font-family: "Pt Sans Narrow";
        }

        body #layout-container .section-title-1 {
            font-size: 40px;
            font-weight: 800;
        }

        body #layout-container #main-screen #course-header div {
            justify-content: center;
        }
        body #layout-container #main-screen #course-header .course-title {
          justify-content: center;
        }
        body #layout-container div[id*="section-screen"] .section .section-data .section-title h1 {
          font-family: "Pt Sans Narrow";
          font-weight: 600;
        }
        body #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .separator#layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .separator,
        body #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .separator,
        body #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .separator {
          font-weight: 700;
        }
        body #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-title h3 {
          font-family: "Pt Sans Narrow";
          font-weight: 600;
        }

        /* DESPLEGABLE RECURSOS HTML*/
        .popover_resources_active .popover-title {
            font-family: 'Roboto Slab', serif;
            font-size: 18px;
        }
        .popover_resources_active .popover-content {
            background: white;
        }
        .navbar.libro .popover.bottom>.arrow:after {
            border-bottom-color: #071822;
        }

        /* ICONOS CONTENIDO UNIDAD*/
        #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item .content-img {
          background-color: black;
          background-size: contain;
         }

         /* Icono para imágenes*/
         #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item .content-img.type-8.img {
            background-image: url(/themes/responsive/images/contenido/recurso-icon-img.png);
         }
         #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item .content-img.type-8.img,
         #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .unit-content .content-item .content-img.type-8.img {
          background-image: url(/themes/responsive/images/contenido/recurso-icon-img.png) !important;
         }

        /* Icono para actividades*/
         #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item .content-img.type-6.actividad {
            background-image: url(/themes/responsive/images/contenido/recurso-icon-actividad.png);
         }
         #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item .content-img.type-6.actividad,
         #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .unit-content .content-item .content-img.type-6.actividad {
          background-image: url(/themes/responsive/images/contenido/recurso-icon-actividad.png) !important;
         }

        /*Icono para vídeo*/
         #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item .content-img.type-2.video {
          background-image: url(/themes/responsive/images/contenido/recurso-icon-video.png);
         }
         #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item .content-img.type-2.video,
         #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .unit-content .content-item .content-img.type-2.video {
          background-image: url(/themes/responsive/images/contenido/recurso-icon-video.png) !important;
         }

        /*Icono para música*/
        #layout-container div[id*="section-screen"] .section .section-content .tabs-content .unit-content .content-item .content-img.type-3.musica {
         background-image: url(/themes/responsive/images/contenido/recurso-icon-musica.png);
        }
         #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item .content-img.type-3.musica,
         #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .unit-content .content-item .content-img.type-3.musica {
          background-image: url(/themes/responsive/images/contenido/recurso-icon-musica.png) !important;
         }

        /*Icono para archivo*/
         #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item .content-img.type-5.archivo {
          background-image: url(/themes/responsive/images/contenido/recurso-icon-archivo.png);
         }
         #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item .content-img.type-5.archivo,
         #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .unit-content .content-item .content-img.type-5.archivo {
          background-image: url(/themes/responsive/images/contenido/recurso-icon-archivo.png) !important;
         }

        /*Icono para libro*/
        #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item .content-img.type-6.libro {
         background-image: url(/themes/responsive/images/contenido/recurso-icon-libro.png);
        }
         #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item .content-img.type-6.libro,
         #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .unit-content .content-item .content-img.type-6.libro {
          background-image: url(/themes/responsive/images/contenido/recurso-icon-libro.png) !important;
        }

        /*Icono para url*/
        #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item .content-img.type-7.url {
         background-image: url(/themes/responsive/images/contenido/recurso-icon-url.png);
        }
         #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item .content-img.type-7.url,
         #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .unit-content .content-item .content-img.type-7.url {
          background-image: url(/themes/responsive/images/contenido/recurso-icon-url.png) !important;
         }
        /**/ 
        
         #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .unit-content .content-item .circle-outer,
          #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .resources-content .content-item .circle-outer {
            background: white;
         }

         #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .unit-content .content-item .circle-inner,
          #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .resources-content .content-item .circle-inner{
            background-color: white;
         }

         

        /*-------------------------------------------------------------------------------------------------------------*/
        /* -----------------------------------------ESTILOS CK-EDITOR--------------------------------------------------*/
        /*-------------------------------------------------------------------------------------------------------------*/
        
        /* Titulo de la slide*/
        #actividad .content .header .title {
          display: none;
        }
        #actividad .content .header.empty {
          display: none;   
        }
        
        /*Titulo principal - Bck-title1 - Tiene cambio a naranja cuando cambia la sección*/
        .bck-title1:before {
        content: "»";
        margin-right: 8px;
        font-size: 44px;
        }
        .bck-title1 {
        font-family: 'PT Sans Narrow', sans-serif;
        font-size: 36px;
        font-weight: 800;
        text-transform: uppercase;
        border: 0;
        color: #FECA0A;
        margin: 0px 0px 15px 0px;
        letter-spacing: 0.5px;
        }

        /*Título Principal 2*/
        .bck-title2 {
        font-family: "Montserrat", sans-serif;
        font-weight: 800;
        color: black;
        padding: 0;
        background: none;
        font-size: 27px;
        margin-bottom: 25px;
        margin-top: 0;
        }

        /*Título Principal 2 con sección Actividad "act"*/
        .act .bck-title2 {
        font-family: 'PT Sans Narrow', sans-serif;
        font-weight: bold;
        font-size: 30px;
        letter-spacing: 0;
        margin: 0px 0px 18px 0px;
        }

        /*Título 1*/
        .bck-title3 {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        color: black;
        padding: 0;
        background: none;
        font-size: 23px;
        width: auto;
        }

        /*Título 1 en slide con sección Actividad "act"*/
        .act .bck-title3 {
        font-family: 'PT Sans Narrow', sans-serif;
        font-weight: 700;
        font-size: 25px;
        letter-spacing: 0;
        margin: 0px 0px 25px 0px;
        padding: 0;
        width: auto;
        color: #808285;
        }

        /*Título 2*/
        .bck-title4 {
        font-family: 'Roboto Slab', serif;
        font-weight: 900;
        color: black;
        padding: 0;
        font-size: 27px;
        color: black;
        }

        /*Título 3*/
        .bck-title5 {
        font-family: "Pangolin", cursive;
        background: none;
        padding: 0;
        color: #feca0a;
        font-weight: bold;
        font-size: 30px;
        }

        /*Título 4*/
        .bck-title6 {
        color: black;
        padding: 0;
        background: none;
        font-family: 'PT Sans Narrow', sans-serif;
        font-weight: bold;
        font-size: 30px;
        letter-spacing: 0;
        }

        /*Título 5*/
        .bck-title7 {
        font-family: 'PT Sans Narrow', sans-serif;
        font-weight: 700;
        font-size: 25px;
        letter-spacing: 0;
        margin: 0px 0px 5px 0px;
        padding: 0;
        width: auto;
        color: #808285;
        }

        /*Título 6 (.bck-title8) Se usa en sociales*/
        .bck-title8 {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        color: #F07F3C;
        padding: 0;
        background: none;
        font-size: 23px;
        margin-bottom: 10px;
        width: auto;
        border-bottom: 3px solid #F07F3C;
        padding-bottom: 5px;
        }

        
        /*Título 7 - Título pequeño*/
        .bck-title9 {
            font-family: "Montserrat", sans-serif;
            font-weight: 800;
            color: black;
            padding: 0;
            background: none;
            font-size: 18px;
            margin-bottom: 20px;
            margin-top: 0;
        }

        /* ------------------ CAJAS ---------------*/


        /*Se elimina el padding por defecto en el content*/
        .bck-content {
        padding: 0px;
        }

        /*CAJA 1 (OTRA FORMA DE RESALTAR TEXTO) - .bck-box1*/
        .bck-box1 {
        background: #FEF3D2;
        padding: 18px;
        margin-bottom: 21px;
        }

        /*CAJA 2 (SABIES QUE?) - .bck-box2*/
        .bck-box2 {
        border: 3px solid #071822;
        }
        .bck-box2 .bck-title {
        font-family: 'Pangolin', cursive;
        background: #071822;
        color: white;
        padding: 5px 26px;
        }
        .bck-box2 .bck-content {
        padding: 8px 28px;
        background: #DDCFE5;
        }


        /* CAJA 3 (VOCABULARI) - .bck-box3*/
        .bck-box3 {
        border: 3px solid #071822;
        }
        .bck-box3 .bck-title {
        font-family: 'Pangolin', cursive;
        background: #071822;
        color: white;
        padding: 5px 26px;
        }
        .bck-box3 .bck-content {
        font-family: "Times New Roman", serif;
        padding: 8px 28px;
        background: #D1DEF1
        }

        /* CAJA 4 (RECORDA) - .bck-box4*/
        .bck-box4 {
        border: 3px solid #071822;
        }
        .bck-box4 .bck-title {
        font-family: 'Pangolin', cursive;
        background: #071822;
        color: white;
        padding: 5px 26px;
        }
        .bck-box4 .bck-content {
        padding: 8px 28px;
        background: #ECF4DB
        }

        /*CAJA 5 -Dictat*/
        .bck-box5 .bck-title:before {
        content: "";
        background: url(https://www.blinklearning.com/useruploads/r/a/154941746/activity_other_imported/Barcanova_ESO_LenguaCatalana_icono-caja-dictat.png);
        background-size: contain;
        background-repeat: no-repeat;
        padding: 28px;
        position: absolute;
        margin-left: -78px;
        margin-top: -5px;
        }
        .bck-box5 .bck-title {
        background: #071822;
        color: white;
        padding: 9px 0px 9px 82px;
        margin: 0 auto;
        font-family: "Montserrtat", sans-serif;
        font-weight: 900;
        }
        .bck-box5 .bck-content {
        background: #FEEACC;
        padding: 8px 28px;
        border: 2px solid #071822;
        }

        /*Caja 6 - Fondo Textura*/
        .bck-box6 {
        padding: 8px 28px;
        background: url(https://www.blinklearning.com/useruploads/r/a/154962596/activity_other_imported/Barcanova_1ESOLENGUA_Fondo_caja_fondorallado.jpg);
        background-size: contain;
        border: 3px solid white;
        box-shadow: 0 0 4px 1px #000000c9;
        }
        .bck-box6 .bck-content {
        padding: 0;
        }

        /*Caja 7 - Fondo blanco y borde naranja*/
        .bck-box7 {
        padding: 8px 28px;
        background: white;
        border: 2px solid #F7931D;
        }

        /*Caja 8 - Fondo blanco y borde amarillo*/
        .bck-box8 {
        padding: 8px 28px;
        background: white;
        border: 2px solid #FECA0A;
        }

        /*Caja 9 - Solo se usa en el libro de Lengua*/
        .bck-box9 .bck-title:before {
        content: "";
        background: url(https://www.blinklearning.com/useruploads/r/a/155495176/activity_other_imported/Barcanova_ESO_LenguaCatalana_icono-caja-9.png);
        background-size: contain;
        background-repeat: no-repeat;
        padding: 28px;
        position: absolute;
        margin-left: -78px;
        margin-top: -5px;
        }
        .bck-box9 .bck-title {
        background: #091922;
        color: white;
        padding: 9px 0px 9px 82px;
        font-family: "Montserrtat", sans-serif;
        font-weight: 900;
        }
        .bck-box9 .bck-content {
        background: #F3D0CB;
        padding: 8px 28px;
        border: 2px solid #071822;
        }

        /*Caja 10*/
        .bck-box10 .bck-title:before {
        content: "";
        background: url(https://www.blinklearning.com/useruploads/r/a/155498106/activity_other_imported/Barcanova_ESO_LenguaCatalana_icono-caja-10.png);
        background-size: contain;
        background-repeat: no-repeat;
        padding: 28px;
        position: absolute;
        margin-left: -78px;
        margin-top: -5px;
        }

        .bck-box10 .bck-title {
        background: #091922;
        color: white;
        padding: 9px 0px 9px 82px;
        font-family: "Montserrtat", sans-serif;
        font-weight: 900;
        }

        .bck-box10 .bck-content {
        background: #E0EBD2;
        padding: 8px 28px;
        border: 2px solid #071822;
        }


        /*Caja 11*/

        .bck-box11 .bck-title {
        background: #75B042;
        color: white;
        padding: 8px 28px;
        font-family: "Pangolin", cursive;
        font-weight: bold;
        }

        .bck-box11 .bck-content {
        padding: 8px 28px;
        border-right: 5px solid #75b042;
        }


        /*Caja 12*/

        .bck-box12 .bck-title:before {
        content: "";
        background: url(https://www.blinklearning.com/useruploads/r/a/155498836/activity_other_imported/Barcanova_ESO_LenguaCatalana_icono-caja-12.png);
        background-size: contain;
        background-repeat: no-repeat;
        padding: 28px;
        position: absolute;
        margin-left: -78px;
        margin-top: -5px;
        }

        .bck-box12 .bck-title {
        background: #000000;
        color: white;
        padding: 9px 0px 9px 82px;
        font-family: "Montserrtat", sans-serif;
        font-weight: 900;
        }

        .bck-box12 .bck-content {
        background: #FDE8D8;
        padding: 8px 28px;
        border: 2px solid #071822;
        }


        /*Caja 13*/

        .bck-box13 {
        background: #fff;
        background-position-x: 0%;
        background-position-y: 0%;
        background-repeat: repeat;
        background-image: none;
        background-size: auto;
        margin-bottom: 40px;
        -webkit-box-shadow: 5px 5px 8px 5px #5f5f5f9c;
        box-shadow: 5px 5px 8px 5px #5f5f5f9c;
        -ms-transform: rotate(-1.5deg);
        background-image: -webkit-radial-gradient(#d6d5d6 30%, transparent 20%), -webkit-radial-gradient(#cfcfc3 38%, transparent 24%), -webkit-linear-gradient(top, hsla(0, 0%, 0%, 0) 0%, hsla(0, 0%, 0%, 0) 100%);
        background-image: -moz-radial-gradient( #d6d5d6 30%, transparent 20%), -moz-radial-gradient(#cfcfc3 38%, transparent 24%), -moz-linear-gradient(top, hsla(0, 0%, 0%, 0) 0%, hsla(0, 0%, 0%, 0) 95%, hsla(180, 75%, 50%, .1) 95%, hsla(180, 75%, 50%, .1) 100%);
        background-image: radial-gradient(#d6d5d6 30%, transparent 20%), radial-gradient(#cfcfc3 38%, transparent 24%), linear-gradient(top, hsla(0, 0%, 0%, 0) 0%, hsla(0, 0%, 0%, 0) 95%, hsla(180, 75%, 50%, .1) 95%, hsla(180, 75%, 50%, .1) 100%);
        background-position: 4px 1px, 4px 0px, 50% 0px;
        background-repeat: repeat-x, repeat-x, repeat;
        background-size: 30px 30px, 30px 30px, 30px 30px;
        padding: 38px 0px 10px 0px;
        }

        .bck-box13 .bck-content {
        padding: 8px 28px;
        }


        /*CAJA 14*/

        .bck-box14 {
        border: 0;
        border-bottom: 3px solid #737F86;
        }

        .bck-box14 .bck-title {
        font-family: 'Pangolin', cursive;
        color: white;
        padding: 5px 26px;
        background: #737F86;
        }

        .bck-box14 .bck-content {
        background: transparent;
        padding: 8px 28px;
        }


        /*Caja 15 - Fondo BIOLOGIA - Fondo verde */

        .bck-box15 {
        padding: 8px 28px;
        background: #C5DAAB;
        -webkit-box-shadow: 10px 10px 22px -9px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 10px 10px 22px -9px rgba(0, 0, 0, 0.75);
        box-shadow: 10px 10px 22px -9px rgba(0, 0, 0, 0.75);
        }


        /*Caja 16 - Para biologia - Fondo azul*/

        .bck-box16 {
        padding: 8px 28px;
        background: #E5EEF4;
        -webkit-box-shadow: 10px 10px 22px -9px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 10px 10px 22px -9px rgba(0, 0, 0, 0.75);
        box-shadow: 10px 10px 22px -9px rgba(0, 0, 0, 0.75);
        }


        /*Caja 17* - Redonda y con pregunta*/

        .bck-box17 {
        background: #ffeca8;
        padding: 18px;
        margin-bottom: 21px;
        border-radius: 25px;
        }

        .bck-box17:before {
        content: "?";
        position: absolute;
        background: white;
        padding: 0px 10px;
        font-weight: bold;
        font-size: 35px;
        border: 3px solid;
        border-color: #feca0a;
        border-radius: 100%;
        right: -10px;
        margin-top: -33px;
        color: #feca0a;
        font-family: 'Montserrat', sans-serif;
        }


        /*Caja 18 - Para sociales*/

        .bck-box18 {
        border: 3px solid #feca0a;
        }

        .bck-box18 .bck-title {
        font-family: 'Pangolin', cursive;
        background: #feca0a;
        color: white;
        padding: 5px 26px;
        }

        .bck-box18 .bck-content {
        padding: 8px 28px;
        background: white;
        }


        /*Caja 19*/

        .bck-box19 .bck-title:before {
        content: "";
        background: url(https://www.blinklearning.com/useruploads/r/a/159407056/activity_other_imported/Barcanova_Estilo_ESO_Estrellacajamarron_2.jpg);
        background-size: contain;
        background-repeat: no-repeat;
        padding: 28px;
        position: absolute;
        margin-left: -78px;
        margin-top: -5px;
        }

        .bck-box19 .bck-title {
        background: #071822;
        color: white;
        padding: 9px 0px 9px 82px;
        font-family: "Montserrtat", sans-serif;
        font-weight: 900;
        }

        .bck-box19 .bck-content {
        background: #EED7CC;
        padding: 8px 28px;
        border: 2px solid #071822;
        }


        /*CAJA 20*/

        .bck-box20 {
        background: #F7941D;
        padding: 18px;
        margin-bottom: 21px;
        border-radius: 25px 25px 25px 25px;
        -moz-border-radius: 25px 25px 25px 25px;
        -webkit-border-radius: 25px 25px 25px 25px;
        }


        /*CAJA 21*/

        .bck-box21 {
        background: #C7E8E2;
        padding: 18px;
        margin-bottom: 21px;
        }


        /*CAJA 22*/

        .bck-box22 {
        background: #FDC689;
        padding: 18px;
        margin-bottom: 21px;
        }


        /*CAJA 23*/

        .bck-box23 .bck-title {
        background: #091922;
        color: white;
        padding: 10px 28px;
        font-family: "Pangolin", cursive;
        font-weight: 900;
        }

        .bck-box23 .bck-content {
        background: #FCE4E2;
        padding: 8px 28px;
        border: 2px solid #071822;
        }


        /*TODAS LAS LISTAS PASAN A ROJO DENTRO DE CAJA 23*/

        #actividad .content .cke_contents .bck-box23 ol li::before,
        #actividad .content .texto_curso .bck-box23 ol li::before,
        #actividad .popover-content .bck-box23 ol li::before,
        #actividad .content .workspace ul li .bck-box23 ol li::before {
        color: #F26670 !important;
        }

        .texto_curso .bck-box23 ul li:before,
        .workspace ul li .bck-box23 ul li:before,
        .cke_contents .bck-box23 ul li:before {
        background-color: #F26670 !important;
        }


        /*CAJA 24*/

        .bck-box24 .bck-title {
        background: #F26670;
        color: white;
        padding: 3px 18px;
        font-family: "Pangolin", cursive;
        font-weight: 900;
        width: fit-content;
        width: -moz-fit-content;
        -moz-border-radius: 25px 25px 0 0px;
        -webkit-border-radius: 25px 25px 0 0px;
        border-radius: 25px 25px 0 0px;
        margin-left: 50px;
        }

        .bck-box24 .bck-content {
        background: #FAD5D3;
        padding: 18px;
        margin-bottom: 21px;
        border: 0;
        border-radius: 25px;
        }


        /*CAJA 25*/
        .bck-box25 .bck-title:before {
        content: "";
        background: url(https://www.blinklearning.com/useruploads/r/a/165268866/activity_other_imported/Barcanova_ESO_icono-caja-25.png);
        background-size: contain;
        background-repeat: no-repeat;
        padding: 28px;
        position: absolute;
        margin-left: -78px;
        margin-top: -5px;
        }
        .bck-box25 .bck-title {
        background: #071822;
        color: white;
        padding: 9px 0px 9px 82px;
        font-family: "Montserrtat", sans-serif;
        font-weight: 900;
        }
        .bck-box25 .bck-content {
        background: #DCE4F5;
        padding: 8px 28px;
        border: 2px solid #071822;
        }
                /*TODAS LAS LISTAS PASAN A AZUL DENTRO DE CAJA 25*/
                #actividad .content .cke_contents .bck-box25 ol li::before,
                #actividad .content .texto_curso .bck-box25 ol li::before,
                #actividad .popover-content .bck-box25 ol li::before,
                #actividad .content .workspace ul li .bck-box25 ol li::before {
                color: #2581C4 !important;
                }
                .texto_curso .bck-box25 ul li:before,
                .workspace ul li .bck-box25 ul li:before,
                .cke_contents .bck-box25 ul li:before {
                background-color: #2581C4 !important;
                }

        /*CAJA 26*/
        .bck-box26 {
            background: #E7E6F4;
            padding: 10px 33px;
            -moz-border-radius: 15px 15px 0 0;
            -webkit-border-radius: 15px 15px 0 0;
            border-radius: 15px 15px 0 0;
        }
        .bck-box26 .bck-title {
            background: #9A9ACC;
            color: white;
            padding: 2px 9px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
        }
        .bck-box26 .bck-content {
            padding-top: 12px;
            font-family: 'Roboto Slab', serif;
        }
        .bck-box26 .bck-content p {
            font-size: 16px;
        }

        /*CAJAS 27 Y 28*/
        .bck-box27,
        .bck-box28 {
        padding: 10px 33px;
        -webkit-box-shadow: 0px 2px 16px 0px rgba(0,0,0,0.39);
        -moz-box-shadow: 0px 2px 16px 0px rgba(0,0,0,0.39);
        box-shadow: 0px 2px 16px 0px rgba(0,0,0,0.39);
        }
        .bck-box27 .bck-title,
        .bck-box28 .bck-title {
            font-weight: bold;
            margin-bottom: 4px;
        }

        .bck-box27 {
            background-color: #B9CFDB;
            border: 3px solid #1F8CA5;
        }

        .bck-box28 {
            background-color: #E2D2DB;
            border: 3px solid #7B285C;
        }
        /*CAJA 29*/
        .bck-box29 {
        border: 2px solid #BA573D;
            padding: 10px 33px;
        }
        .bck-box29 .bck-title {
            font-family: 'PT Sans Narrow', sans-serif;
            font-size: 20px;
            color: #BA573D;
            font-weight: bold;
        }
        .bck-box29 .bck-title p {
            font-size: 22px;
        }

        /*CAJA 30*/
        .bck-box30 {
            padding: 8px 33px;
            background-color: #FCCB8E;
            border: 2px solid black;
        }
        .bck-box30 .bck-title {
            font-family: 'Pangolin', cursive;
            color: #BA573D;
            font-weight: 700;
        }
        .bck-box30 .bck-title p {
            font-size: 20px;
        }

        /*---------------CAJAS PARA IMÁGENES*/
        /*CAJA 31 Y 32*/
        .bck-box31,
        .bck-box32 {
            border: 4px solid #1B4C57;
            width: fit-content;
            width: -moz-fit-content;
            -webkit-box-shadow: 7px 10px 13px -5px rgba(0,0,0,0.39);
            -moz-box-shadow: 7px 10px 13px -5px rgba(0,0,0,0.39);
            box-shadow: 7px 10px 13px -5px rgba(0,0,0,0.39);
        }
        .bck-box31 .bck-i-fullscreen-wrapper,
        .bck-box32 .bck-i-fullscreen-wrapper, 
        .bck-box33 .bck-i-fullscreen-wrapper {
            padding: 0;
        }

        /*CAJA 31*/
        .bck-box31 {
            border: 4px solid #1B4C57;
            -moz-border-radius: 15px 0 15px 0;
            -webkit-border-radius: 15px 0 15px 0;
            border-radius: 15px 0 15px 0;
        }
        .bck-box31 img {
            -webkit-border-radius: 10px 0 10px 0;
            -moz-border-radius: 10px 0 10px 0;
            border-radius: 10px 0 10px 0;
        }

        /*CAJA 33*/
        .bck-box33 {
        background-color: #F1DED5;
        -moz-border-radius: 15px;
        -webkit-border-radius: 15px;
        border-radius: 15px;
        padding:8px 20px;
        width: -moz-fit-content;
        width: fit-content;
        }


        /*Enfasis*/

        .bck-enfasis {
        background: #FEF3D2;
        padding: 5px 0px;
        }

        .bck-enfasis-2 {
        font-family: 'PT Sans Narrow', sans-serif;
        line-height: 1.4em !important;
        display: inline-block;
        }

        .bck-enfasis-3 {
        font-family: "Pangolin", cursive;
        }

        .bck-enfasis-4 {
        font-family: 'Roboto Slab', serif;
        }

        .bck-enfasis-5 {
        font-family: "Montserrat", sans-serif;
        }


        /*Énfasis 6*/

        .bck-enfasis-6 {
        font-family: 'PT Sans Narrow', sans-serif;
        font-size: 25px;
        color: #f15921;
        font-weight: bold;
        }


        /*Énfasis 7*/

        .bck-enfasis-7 {
        font-family: 'Pangolin', cursive;
        background: #f15921;
        color: white;
        padding: 8px;
        }


        /*Énfasis 8*/

        .bck-enfasis-8 {
        font-family: 'Pangolin', cursive;
        background: #0095D9;
        color: white;
        padding: 8px;
        width: 100%;
        }


        /*Enfasis - 9 - Amarillo Llengua catalana*/

        .bck-enfasis-9 {
        color: #FECA0A;
        }


        /*Enfasis - 10 - Azul mates*/

        .bck-enfasis-10 {
        color: #0085AE;
        }


        /*Enfasis - 11 - Rojo Llengua castellana*/

        .bck-enfasis-11 {
        color: #D2204F;
        }


        /*Enfasis - 12 - Verde Biologia*/

        .bck-enfasis-12 {
        color: #75B042;
        }


        /*Enfasis - 13 - Naranja Sociales*/

        .bck-enfasis-13 {
        color: #F07F3C;
        }


        /*Enfasis - 14 - Marrón Cultura y Latín*/

        .bck-enfasis-14 {
        color: #B86048;
        }

        .bck-enfasis-15 {
        font-size: 16px;
        }


        /*Descripción de palabras emergentes*/

        .bck-tooltip {
        color: #2783C5;
        font-weight: bold;
        text-decoration: none;
        cursor: pointer;
        }

        .popover {
        border: 2px solid #071822;
        border-radius: 0;
        -webkit-border-radius: 0;
        }

        .popover.top>.arrow:after {
        content: " ";
        bottom: 1px;
        margin-left: -10px;
        border-bottom-width: 0;
        border-top-color: #051117;
        }

        .popover-title {
        margin: -1px;
        padding: 8px 15px;
        font-size: 17px;
        font-weight: normal;
        line-height: 18px;
        background-color: #071822;
        border-bottom: 1px solid #ebebeb;
        border-radius: 0;
        font-family: 'Pangolin', cursive;
        color: white;
        }

        .popover-content {
        padding: 10px 13px;
        background: #D1DEF1;
        margin: -1px;
        }


        /*POPOVER LATERAL (RECORDA)*/

        .info-template {
        background: #071822;
        }

        .info-template .info-title {
        color: #ffffff;
        }

        .info-template .info-icon {
        display: none;
        }

        .info-title.info-show.shown {
        margin: 0;
        font-family: "Pangolin", cursive;
        color: #b0cf6d;
        font-size: 20px;
        }

        .info-template.shown {
        width: auto;
        padding: 2% 25px 2% 19px;
        background: #071822;
        border-radius: 0;
        border: 2px solid white;
        border-right: 0;
        }

        .popover-template {
        overflow: hidden;
        }

        .info-popover .popover-title,
        .popover-template .popover-title {
        background: #071822;
        color: white;
        font-family: "Pangolin", cursive;
        padding-left: 16px;
        }

        .info-popover .popover-title:before,
        .popover-template .popover-title:before {
        display: none;
        }

        .popover-template .popover-content {
        margin: 0;
        min-height: 100px;
        overflow: auto;
        }

        .info-popover .popover-title,
        .popover-template .popover-title .popover-title-text {
        margin-right: 25px;
        padding: 6px 0px;
        margin-bottom: 0;
        }


        /*POP-UP*/

        .fa-info:before {
        content: "\f067";
        }

        #actividad .info-button {
        background: #00111d;
        color: #ffcb00;
        font-family: 'FontAwesome';
        font-size: 20px;
        padding: 3px 0px 0px 0px;
        width: 25px;
        height: 25px;
        line-height: 1.1;
        cursor: pointer;
        }
        body #actividad .info-button.only-teacher,
         #actividad .info-template .info-title.only-teacher {
            border: 0;
            background: white;
            color: black;
            -moz-box-shadow: 0px 0px 0px 2px black;
            -webkit-box-shadow: 0px 0px 0px 2px black;
            box-shadow: 0px 0px 0px 2px black;
         }


        /*Lista ordenada por defecto*/

        #actividad .content .cke_contents ol,
        #actividad .content .texto_curso ol,
        #actividad .content .workspace ul li ol,
        #actividad .popover-content ol {
        list-style-type: none;
        counter-reset: bck-li-counter;
        }

        #actividad .content .cke_contents ol li,
        #actividad .content .cke_contents ol li,
        #actividad .content .texto_curso ol li,
        #actividad .popover-content ol li,
        #actividad .content .workspace ul li ol li {
        counter-increment: bck-li-counter 1;
        position: relative;
        z-index: 0;
        margin-top: 10px;
        margin-left: -2px;
        }

        #actividad .content .cke_contents ol li::before,
        #actividad .content .texto_curso ol li::before,
        #actividad .popover-content ol li::before,
        #actividad .content .workspace ul li ol li::before {
        content: counter(bck-li-counter) ".";
        width: 43px;
        height: 27px;
        position: absolute;
        font-size: 23px;
        font-weight: 600;
        color: #E6B120;
        background: none;
        margin-left: -43px;
        margin-right: 0px;
        text-align: center;
        font-family: "Pangolin", cursive;
        }


        /*Lista ordenada 1*/

        #actividad .content .cke_contents .bck-ol li:before,
        #actividad .content .texto_curso .bck-ol li:before,
        #actividad .content .workspace ul li .bck-ol li:before {
        content: counter(bck-li-counter, lower-alpha)')';
        color: #E6B120;
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        font-size: 19px;
        }


        /*Lista ordenada 2*/

        #actividad .content .cke_contents .bck-ol-2 li:before,
        #actividad .content .texto_curso .bck-ol-2 li:before,
        #actividad .content .workspace ul li .bck-ol-2 li:before {
        content: counter(bck-li-counter, lower-alpha)')';
        color: #F7931D !important;
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        font-size: 19px;
        }


        /*Lista ordenada 3*/

        #actividad .content .cke_contents .bck-ol-3 li:before,
        #actividad .content .texto_curso .bck-ol-3 li:before,
        #actividad .content .workspace ul li .bck-ol-3 li:before {
        font-family: "Times New Roman", serif;
        font-size: 22px;
        color: black;
        border: 1px solid #0486AF;
        border-radius: 25px;
        padding-right: 2px;
        font-weight: normal;
        margin-left: -53px;
        }

        #actividad .content .cke_contents .bck-ol-3 li,
        #actividad .content .texto_curso .bck-ol-3 li,
        #actividad .content .workspace ul li .bck-ol-3 li {
        margin-left: 12px;
        }


        /*Lista ordenada 4*/

        #actividad .content .cke_contents .bck-ol-4 li:before,
        #actividad .content .texto_curso .bck-ol-4 li:before,
        #actividad .content .workspace ul li .bck-ol-4 li:before {
        color: white !important;
        }


        /*Lista desordenada*/

        .texto_curso ul li:before,
        .workspace ul li ul li:before,
        .cke_contents ul li:before {
        background-color: #feca0a;
        height: 8px;
        width: 8px;
        margin-top: 8px;
        }

        .texto_curso ul li,
        .workspace ul li ul li,
        .cke_contents ul li {
        padding-left: 58px;
        }


        /*Lista desordenada 2*/

        #actividad .content .cke_contents .bck-ul-2 li:before,
        #actividad .content .texto_curso .bck-ul-2 li:before,
        #actividad .content .workspace ul li .bck-ul-2 li:before {
        background: #ffffff;
        }


        /* Desplegable*/

        .bck-dropdown {
        margin-bottom: 20px;
        box-shadow: 1px 2px 6px 0px #00000078;
        }

        .bck-dropdown-titulo {
        color: inherit;
        }

        .bck-dropdown-button {
        color: #ffffff;
        background: #ffcc03;
        border: 2px solid;
        cursor: pointer;
        font-weight: bold;
        }

        .bck-dropdown-content {
        max-height: 100%;
        background-color: #fef3d2;
        border: 2px solid white;
        border-top: 0;
        }
        .bck-dropdown-icon>.fa {
          border: 0;
      }


      /*Flipbox*/

        body:not(.edit) .front .bck-flipbox-title,
         body:not(.edit) .front .bck-flipbox-section {
          color: white;
        }
       body:not(.edit) .bck-flipbox-face.back {
        border: #223c3f 1px solid;
        background-color: #223c3f;
        }

        body:not(.edit) .bck-flipbox-face.front {
        border: #223c3f 0px solid;
        background-color: #fff;
        background: radial-gradient(ellipse at center, #68b8cb 0%, #417280 100%);
        background: #2c56a2;
        box-shadow: 2px 7px 7px #00000091;
        }

        body:not(.edit) .bck-flipbox.bck-flipbox-2 .bck-flipbox-face.front {
        background: #ffcc03;
        }

        body:not(.edit) .bck-flipbox.bck-flipbox-3 .bck-flipbox-face.front {
        background: green;
        }


      /*Tablas*/

        table td,
        th {
        padding: 8px;
        }

        .bck-table-1 {
        table-layout: fixed;
        border: 3px solid #FECA0A;
        }

        .bck-table-1 td,
        th {
        border: 3px solid #ffcc03;
        }

        .bck-table-1 td.bck-td1 {
        background: #ffcc03;
        font-weight: bold;
        }

        .bck-table-1 td.bck-td2 {
        background: #FEEDBB;
        }

        .fracciones table td,
        th {
        border: 0;
        }

        table td.bck-td-3 {
        border-bottom: 1px solid black;
        }


      /*Tabla 2*/

        .bck-table-2 {
        table-layout: fixed;
        border: 3px solid #EC5F6D;
        }

        .bck-table-2 td,
        th {
        border: 3px solid #EC5F6D;
        }

        .bck-table-2 td.bck-td1 {
        background: #EC5F6D;
        font-weight: bold;
        }

        .bck-table-2 td.bck-td2 {
        background: #FAD5D3;
        }


      /*Tabla 3*/

        .bck-table-3 {
        table-layout: fixed;
        border: 3px solid #2581C4;
        }

        .bck-table-3 td {
        border: 3px solid #2581C4;
        }

        .bck-table-3 td.bck-td1 {
        background: #2581C4;
        font-weight: bold;
        }

        .bck-table-3 td.bck-td2 {
        background: #B8CAEA;
        }

      /*Tabla 4*/

        .bck-table-4 {
        table-layout: fixed;
        border: 3px solid #BBD143;
        }

        .bck-table-4 td {
        border: 3px solid #BBD143;
        }

        .bck-table-4 td.bck-td1 {
        background: #ECF1CF;
        font-weight: bold;
        }

        .bck-table-4 td.bck-td2 {
        background: #F9FBF0;
        }

      /*Tabla 5*/

        .bck-table-5 {
        table-layout: fixed;
        border: 3px solid #2581C4;
        }

        .bck-table-5 td,
        th {
        border: 3px solid #2581C4;
        }

        .bck-table-5 td.bck-td1 {
        background: #CAD7EF;
        font-weight: bold;
        }

        .bck-table-5 td.bck-td2 {
        background: #EEF2FA;
        }

      /*Tabla 6*/

        .bck-table-6 {
        table-layout: fixed;
        border: 3px solid #8C368B;
        }

        .bck-table-6 td,
        th {
        border: 3px solid #8C368B;
        }

        .bck-table-6 td.bck-td1 {
        background: #D9C4E0;
        font-weight: bold;
        }

        .bck-table-6 td.bck-td2 {
        background: #F2EBF6;
        }



      /*-----ACTIVIDADES-----------*/


      /*Plantilla de texto a imagen*/

        .slide_main .fillblankimages-draggable .img-input-container {
        height: 30px;
        }


        /*----------------------------------------------------------------------------------------------------------------------*/
        /*--------------------------------------------SECCIONES-----------------------------------------------------------------*/
        /*----------------------------------------------------------------------------------------------------------------------*/


        /*SECCION "naranja"*/

        #actividad .carousel-inner .naranja .item-container {
        background: #FEEBD3 !important;
        }

        .naranja .bck-title1 {
        color: #F7931D !important;
        }

        .naranja .bck-title2 {
        font-family: 'Pangolin', cursive;
        font-weight: normal;
        color: #F7931D !important;
        }

        .naranja .bck-title3 {
        font-family: 'Pangolin', cursive;
        font-weight: normal;
        color: #F7931D;
        letter-spacing: normal;
        }

        #actividad .carousel-inner .naranja .item-container:before {
        background-image: url(https://www.blinklearning.com/useruploads/r/a/154941436/activity_other_imported/Barcanova_ESO_LenguaCatalana_cabeceranaranja.png) !important;
        }

        #actividad .content .naranja .cke_contents ul li::before,
        #actividad .content .naranja .texto_curso ul li::before,
        #actividad .naranja .popover-content ul li::before,
        #actividad .content .naranja .workspace ul li ul li::before {
        background: #F7931D !important;
        }

        #actividad .content .naranja .cke_contents .bck-ul-2 li:before,
        #actividad .content .naranja .texto_curso .bck-ul-2 li:before,
        #actividad .content .naranja .workspace ul li .bck-ul-2 li:before {
        background: white !important;
        }

        #actividad .content .naranja .cke_contents ol li::before,
        #actividad .content .naranja .texto_curso ol li::before,
        #actividad .naranja .popover-content ol li::before,
        #actividad .content .naranja .workspace ul li ol li::before {
        color: #F7931D !important;
        }

        #actividad .content .naranja .cke_contents .bck-ol-4 li:before,
        #actividad .content .naranja .texto_curso .bck-ol-4 li:before,
        #actividad .content .naranja .workspace ul li .bck-ol-4 li:before {
        color: white !important;
        }


        /*SECCION "amarillo"*/

        #actividad .carousel-inner .amarillo .item-container {
        background: #FECA0A;
        }

        #actividad .carousel-inner .amarillo .item-container:before {
        background-image: url(https://www.blinklearning.com/useruploads/r/a/154941446/activity_other_imported/Barcanova_ESO_LenguaCatalana_cabecerablanca.png) !important;
        }

        .amarillo .cke_contents .bck-ul-2 li:before,
        .amarillo .texto_curso .bck-ul-2 li:before,
        .amarillo .workspace ul li .bck-ul-2 li:before {
        background: white !important;
        }

        #actividad .content .amarillo .cke_contents .bck-ol-4 li:before,
        #actividad .content .amarillo .texto_curso .bck-ol-4 li:before,
        #actividad .content .amarillo .workspace ul li .bck-ol-4 li:before {
        color: white !important;
        }


        /*SECCION "azul"*/

        #actividad .carousel-inner .azul .item-container {
        background: #0085AE;
        }

        body .azul {
        color: white;
        }

        #actividad .carousel-inner .azul .item-container:before {
        background-image: url(https://www.blinklearning.com/useruploads/r/a/154941446/activity_other_imported/Barcanova_ESO_LenguaCatalana_cabecerablanca.png) !important;
        }

        .azul .cke_contents .bck-ul-2 li:before,
        .azul .texto_curso .bck-ul-2 li:before,
        .azul .workspace ul li .bck-ul-2 li:before {
        background: white !important;
        }

        #actividad .content .azul .cke_contents .bck-ol-4 li:before,
        #actividad .content .azul .texto_curso .bck-ol-4 li:before,
        #actividad .content .azul .workspace ul li .bck-ol-4 li:before {
        color: white !important;
        }


        /*SECCION "azulclaro"*/

        #actividad .carousel-inner .azulclaro .item-container {
        background: #E5EDF4;
        }


        /*SECCIÓN "rojo" */

        #actividad .carousel-inner .rojo .item-container {
        background: #D2204F;
        }

        body .rojo {
        color: white;
        }

        #actividad .carousel-inner .rojo .item-container:before {
        background-image: url(https://www.blinklearning.com/useruploads/r/a/154941446/activity_other_imported/Barcanova_ESO_LenguaCatalana_cabecerablanca.png) !important;
        }

        .rojo .cke_contents .bck-ul-2 li:before,
        .rojo .texto_curso .bck-ul-2 li:before,
        .rojo .workspace ul li .bck-ul-2 li:before {
        background: white !important;
        }

        #actividad .content .rojo .cke_contents .bck-ol-4 li:before,
        #actividad .content .rojo .texto_curso .bck-ol-4 li:before,
        #actividad .content .rojo .workspace ul li .bck-ol-4 li:before {
        color: white !important;
        }


        /*SECCION "rojoclaro"*/

        #actividad .carousel-inner .rojoclaro .item-container {
        background: #F3D0CB;
        }


        /*Seción "verde"*/

        #actividad .carousel-inner .verde .item-container {
        background: #75B042;
        }

        #actividad .carousel-inner .verde .item-container:before {
        background-image: url(https://www.blinklearning.com/useruploads/r/a/154941446/activity_other_imported/Barcanova_ESO_LenguaCatalana_cabecerablanca.png) !important;
        }

        .verde .cke_contents .bck-ul-2 li:before,
        .verde .texto_curso .bck-ul-2 li:before,
        .verde .workspace ul li .bck-ul-2 li:before {
        background: white !important;
        }

        #actividad .content .verde .cke_contents .bck-ol-4 li:before,
        #actividad .content .verde .texto_curso .bck-ol-4 li:before,
        #actividad .content .verde .workspace ul li .bck-ol-4 li:before {
        color: white !important;
        }


        /*SECCIÓN "verdeclaro"*/

        #actividad .carousel-inner .verdeclaro .item-container {
        background: #F1F5CA;
        }


        /*Sección "dorado"*/

        #actividad .carousel-inner .dorado .item-container:before {
        background-image: url(https://www.blinklearning.com/useruploads/r/a/154755326/activity_other_imported/Barcanova_ESO_LenguaCatalana_cabeceraamarilla.png) !important;
        }

        #actividad .carousel-inner .dorado .item-container {
        background: #FBEED5;
        }

        .dorado .bck-title1,
        .dorado .bck-title8 {
        color: #E7AB00 !important;
        border-color: #E7AB00 !important;
        }

        .dorado .texto_curso ul li:before,
        .dorado .workspace ul li ul li:before,
        .dorado .cke_contents ul li:before {
        background-color: #E7AB00 !important;
        }

        #actividad .content .dorado .cke_contents ol li::before,
        #actividad .content .dorado .texto_curso ol li::before,
        #actividad .dorado .popover-content ol li::before,
        #actividad .content .dorado .workspace ul li ol li::before {
        color: #E7AB00 !important;
        }

        #actividad .content .dorado .cke_contents .bck-ol li:before,
        #actividad .content .dorado .texto_curso .bck-ol li:before,
        #actividad .content .dorado .workspace ul li .bck-ol li:before {
        color: #E7AB00 !important;
        }

        .dorado .cke_contents .bck-ul-2 li:before,
        .dorado .texto_curso .bck-ul-2 li:before,
        .dorado .workspace ul li .bck-ul-2 li:before {
        background: white !important;
        }

        #actividad .content .dorado .cke_contents .bck-ol-4 li:before,
        #actividad .content .dorado .texto_curso .bck-ol-4 li:before,
        #actividad .content .dorado .workspace ul li .bck-ol-4 li:before {
        color: white !important;
        }


        /*SECCIÓN "verdesociales"*/

        #actividad .carousel-inner .verdesociales .item-container:before {
        background-image: url(https://www.blinklearning.com/useruploads/r/a/155498026/activity_other_imported/Barcanova_ESO_LenguaCatalana_cabeceraverde.png) !important;
        }

        #actividad .carousel-inner .verdesociales .item-container {
        background: #AECD60;
        }

        .verdesociales .bck-title1 {
        color: white !important;
        }

        .verdesociales .bck-title5 {
        color: #AECD60 !important;
        }

        .verdesociales .texto_curso ul li:before,
        .verdesociales .workspace ul li ul li:before,
        .verdesociales .cke_contents ul li:before {
        background-color: #AECD60 !important;
        }

        #actividad .content .verdesociales .cke_contents ol li::before,
        #actividad .content .verdesociales .texto_curso ol li::before,
        #actividad .verdesociales .popover-content ol li::before,
        #actividad .content .verdesociales .workspace ul li ol li::before {
        color: #AECD60 !important;
        }


        /*Important para que funcione en sociales*/

        #actividad .content .verdesociales .cke_contents .bck-ol-4 li:before,
        #actividad .content .verdesociales .texto_curso .bck-ol-4 li:before,
        #actividad .content .verdesociales .workspace ul li .bck-ol-4 li:before {
        color: white !important;
        }


        /*Seción "celeste"*/

        #actividad .carousel-inner .celeste .item-container {
        background: #22BCAD;
        }

        #actividad .carousel-inner .celeste .item-container:before {
        background-image: url(https://www.blinklearning.com/useruploads/r/a/154941446/activity_other_imported/Barcanova_ESO_LenguaCatalana_cabecerablanca.png) !important;
        }

        #actividad .content .celeste .cke_contents ol li::before,
        #actividad .content .celeste .texto_curso ol li::before,
        #actividad .celeste .popover-content ol li::before,
        #actividad .content .celeste .workspace ul li ol li::before {
        color: #22BCAD !important;
        }

        #actividad .content .celeste .cke_contents .bck-ol-4 li:before,
        #actividad .content .celeste .texto_curso .bck-ol-4 li:before,
        #actividad .content .celeste .workspace ul li .bck-ol-4 li:before {
        color: white !important;
        }

        .celeste .cke_contents ul li::before,
        .celeste .texto_curso ul li::before,
        .celeste .popover-content ul li::before,
        .celeste .workspace ul li ul li::before {
        background: #22BCAD !important;
        }

        .celeste .cke_contents .bck-ul-2 li:before,
        .celeste .texto_curso .bck-ul-2 li:before,
        .celeste .workspace ul li .bck-ul-2 li:before {
        background: white !important;
        }

        .celeste .bck-title1 {
        color: white !important;
        }

        .celeste .bck-title5 {
        color: #22BCAD !important;
        }

        .celeste .bck-enfasis {
        background: #C7E8E2 !important;
        }

        /*SECCION "morado"*/

        #actividad .carousel-inner .morado .item-container {
        background: #70639D;
        }

        #actividad .carousel-inner .morado .item-container:before {
        background-image: url(https://www.blinklearning.com/useruploads/r/a/154941446/activity_other_imported/Barcanova_ESO_LenguaCatalana_cabecerablanca.png) !important;
        }

        #actividad .content .morado .cke_contents ol li::before,
        #actividad .content .morado .texto_curso ol li::before,
        #actividad .morado .popover-content ol li::before,
        #actividad .content .morado .workspace ul li ol li::before {
        color: #70639D !important;
        }

        #actividad .content .morado .cke_contents .bck-ol-4 li:before,
        #actividad .content .morado .texto_curso .bck-ol-4 li:before,
        #actividad .content .morado .workspace ul li .bck-ol-4 li:before {
        color: white !important;
        }

        .morado .cke_contents ul li::before,
        .morado .texto_curso ul li::before,
        .morado .popover-content ul li::before,
        .morado .workspace ul li ul li::before {
        background: #70639D !important;
        }

        .morado .cke_contents .bck-ul-2 li:before,
        .morado .texto_curso .bck-ul-2 li:before,
        .morado .workspace ul li .bck-ul-2 li:before {
        background: white !important;
        }

        .morado .bck-title1 {
        color: white !important;
        }

        .morado .bck-title5 {
        color: #70639D !important;
        }

        .morado .bck-enfasis {
        background: #E6E6FA !important;
        }

        /*ICONOS*/

        .item-container .icon:before {
        content: "";
        background-repeat: no-repeat;
        -webkit-background-size: auto 100%;
        -moz-background-size: auto 100%;
        -o-background-size: auto 100%;
        background-size: auto 100%;
        background-position: center center;
        display: inline-block;
        vertical-align: -webkit-baseline-middle;
        vertical-align: -moz-middle-with-baseline;
        margin-top: 0px;
        padding: 20px 13px 11px 22px;
        }

        .item-container .icon-tick:before {
        background-image: url(https://www.blinklearning.com/useruploads/r/a/155299506/activity_other_imported/avaluapp.png);
        margin-top: -15px;
        padding: 13px;
        margin-left: 4px;
        }

        .item-container .icon-ordenador:before {
        background-image: url(https://www.blinklearning.com/useruploads/r/a/154962636/activity_other_imported/Barcanova_ESO_LenguaCatalana_icono-pantalla-ordenador.png);
        margin-top: -15px;
        }

        .item-container .icon-ordenador-rojo:before {
        background-image: url(https://www.blinklearning.com/useruploads/r/a/155495216/activity_other_imported/Barcanova_ESO_LenguaCatalana_icono-pantalla-ordenador-roja.png);
        margin-top: -15px;
        padding: 17px 13px 11px 20px;
        }

        .item-container .icon-ordenador-marron:before {
        background-image: url(https://www.blinklearning.com/useruploads/r/a/159405566/activity_other_imported/Barcanova_ESO_LenguaCatalana_icono-pantalla-ordenador-marron.png);
        margin-top: -15px;
        }

        .item-container .icon-ordenador-verde:before {
        background-image: url(https://www.blinklearning.com/useruploads/r/a/160803026/activity_other_imported/Barcanova_ESO_LenguaCatalana_icono-pantalla-ordenador-verde.png);
        margin-top: -15px;
        }

        .item-container .icon-ordenador-naranja:before {
        background-image: url(https://www.blinklearning.com/useruploads/r/a/160803056/activity_other_imported/Barcanova_ESO_LenguaCatalana_icono-pantalla-ordenador-naranja.png);
        margin-top: -15px;
        }

        .item-container .icon-actividadgrupal:before {
        background-image: url(https://www.blinklearning.com/useruploads/r/a/155498786/activity_other_imported/Barcanova_ESO_LenguaCatalana_icono-ejerciciogrupal.png);
        margin-top: -15px;
        }

        .item-container .icon-actividadODS:before {
        background-image: url(https://www.blinklearning.com/useruploads/r/a/159405466/activity_other_imported/Barcanova_ESO_Icono_ODS.png);
        margin-top: -15px;
        }

        .item-container .icon-nivel1mates:before {
        background-image: url(https://www.blinklearning.com/useruploads/r/a/155702666/activity_other_imported/Barcanova_ESO_LenguaCatalana_icono-matesnivel1_775111.png);
        margin-top: -15px;
        }

        .item-container .icon-nivel2mates:before {
        background-image: url(https://www.blinklearning.com/useruploads/r/a/155702676/activity_other_imported/Barcanova_ESO_LenguaCatalana_icono-matesnivel2.png);
        margin-top: -15px;
        }

        .item-container .icon-nivel3mates:before {
        background-image: url(https://www.blinklearning.com/useruploads/r/a/155702696/activity_other_imported/Barcanova_ESO_LenguaCatalana_icono-matesnivel3.png);
        margin-top: -15px;
        }

        .item-container .icon-nivel1marron:before {
        background-image: url(https://www.blinklearning.com/useruploads/r/a/159405536/activity_other_imported/Barcanova_ESO_LenguaCatalana_icono-marronnivel1.png);
        margin-top: -15px;
        }

        .item-container .icon-nivel2marron:before {
        background-image: url(https://www.blinklearning.com/useruploads/r/a/159405556/activity_other_imported/Barcanova_ESO_LenguaCatalana_icono-marronnivel2.png);
        margin-top: -15px;
        }


        /*Quitamos el fondo negro que sobra en los vídeos*/

        .video-js {
        background-color: transparent;
        }


        /***********FIN ESTILOS***********************/


        /*Botonera*/

        #actividad .class_slide .review {
        margin-bottom: 25px;
        }

        .btn {
        font-size: 16px;
        -webkit-border-radius: 0;
        border-radius: 0;
        }

        .btn-primary,
        .btn-primary.disabled,
        .btn-primary.disabled:hover,
        .btn-primary.disabled:focus {
        color: #00111d;
        background-color: #ffffff;
        border-color: #ffcb00;
        border: 2px solid #ffcb00;
        }

        .btn-primary:not([disabled]):hover,
        .btn-primary:not([disabled]):focus,
        .btn-primary:not([disabled]):active,
        .btn-primary.active,
        .open .dropdown-toggle.btn-primary {
        color: #fff;
        background-color: #ffcb00;
        }

        .btn-primary[disabled],
        .btn-primary[disabled]:focus {
        color: #fff;
        background-color: #00111d !important;
        border-color: transparent !important;
        }

        #actividad .content .review .attemps span {
        color: #fff;
        background-color: #00111d;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
        }

        .btn-danger,
        .btn-danger[disabled] {
        background-color: #3AC62A;
        }

        .btn-danger:hover,
        .btn-danger:focus,
        .btn-danger:active,
        .btn-danger.active,
        .open .dropdown-toggle.btn-danger {
        background-color: #3AC62A;
        }


        /** FIN BOTONERA **/


        /*---------------------------------------------*/


        /*---------------------------------------------*/


        /*---------------------------------------------*/


        /* --------------------CAMBIOS EN EL ESTILO POR COURSETAGS --------------------------------- */


        /******************* MATEMÁTICAS (.coursetag_abpmatesbarcanova) **************************/

        /*Ajuste del margen de los párrafos*/
        .coursetag_abpmatesbarcanova .texto_curso p {
            margin-bottom: 5px;
        }
        .coursetag_abpmatesbarcanova .texto_curso p:last-of-type {
            margin-bottom: 0;
        }


        /*Cambio fondo de la slide - Banda azul*/

        .coursetag_abpmatesbarcanova #actividad .carousel-inner .item-container:before {
        background-image: url(https://www.blinklearning.com/useruploads/r/a/155439986/activity_other_imported/Barcanova_ESO_LenguaCatalana_cabeceraazul-2.png);
        }


        /*Cambios colores interfaz*/

        .coursetag_abpmatesbarcanova .navbar-bottom {
        border-color: #0aabdd;
        }

        .coursetag_abpmatesbarcanova .slider-indicators li {
        color: white;
        }

        .coursetag_abpmatesbarcanova .navbar-bottom .edit .slider-indicators .concat.active,
        .coursetag_abpmatesbarcanova .navbar-bottom .slider-indicators .active {
        background-color: #0aabdd;
        color: white;
        }

        .coursetag_abpmatesbarcanova li.slider-indicator:hover {
        background-color: #0aabdd;
        color: white;
        }


        /*Botones con tag matesbarcanova*/

        .coursetag_abpmatesbarcanova .btn-primary,
        .coursetag_abpmatesbarcanova .btn-primary.disabled,
        .coursetag_abpmatesbarcanova .btn-primary.disabled:hover,
        .coursetag_abpmatesbarcanova .btn-primary.disabled:focus {
        background-color: #ffffff;
        border-color: #0085AE;
        border: 2px solid #0085AE;
        }

        .coursetag_abpmatesbarcanova .btn-primary:not([disabled]):hover,
        .coursetag_abpmatesbarcanova .btn-primary:not([disabled]):focus,
        .coursetag_abpmatesbarcanova .btn-primary:not([disabled]):active,
        .coursetag_abpmatesbarcanova .btn-primary.active,
        .coursetag_abpmatesbarcanova .open .dropdown-toggle.btn-primary {
        background-color: #0085AE;
        }


        /*Link con abpmatesbarcanova*/

        @media (hover: hover) {
        .coursetag_abpmatesbarcanova .go-back button:hover,
        .coursetag_abpmatesbarcanova #layout-container div.go-back button:hover,
        .coursetag_abpmatesbarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs .tab:not(.active):hover [class*="section-title-"] {
          color: #0aabdd;
        }
      }


        /*Menu desplegable con coursetag abpmatesbarcanova*/

        body:not(.isTablet).coursetag_abpmatesbarcanova #book-index #indice .units ul li:not(.disabled) a:hover,
        body:not(.isTablet).coursetag_abpmatesbarcanova #book-index #indice .units ul#list-units li:not(.disabled).active a, 
        body.coursetag_abpmatesbarcanova #book-index #indice .units ul#list-units li:not(.disabled).active a {
        background: #0aabdd;
        }

        body.coursetag_abpmatesbarcanova #book-index #indice .col-main {
        background: #0aabdd;
        }

        body.coursetag_abpmatesbarcanova:not(.isTablet) #book-index #indice .units ul li:not(.disabled) a:hover,
        .coursetag_abpmatesbarcanova book-index #indice .units ul li.active a {
        background: #0aabdd;
        }


        /* Primera y segunda pantalla con tags*/

        .coursetag_abpmatesbarcanova #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-title{
        background: #0aabdd;
        background: -moz-linear-gradient(0% 50% 0deg, #0aabdd 0%, #0b81a6 99.84%);
        background: -webkit-linear-gradient(0deg, #0aabdd 0%, #0b81a6 99.84%);
        background: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0, #0aabdd), color-stop(0.9984, #0b81a6));
        background: -o-linear-gradient(0deg, #0aabdd 0%, #0b81a6 99.84%);
        background: -ms-linear-gradient(0deg, #0aabdd 0%, #0b81a6 99.84%);
        background: linear-gradient(90deg, #0aabdd 0%, #0b81a6 99.84%);
        }

        .coursetag_abpmatesbarcanova #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-title::before {
            background-image: linear-gradient(45deg, #0aabdd calc(-100% - 52px), #0b81a6 calc(100% + 12px));
        }

        .coursetag_abpmatesbarcanova #layout-container #main-screen #course-header .course-extra ul li {
        border-left-color: #0aabdd;
        }

        .coursetag_abpmatesbarcanova #layout-container div[id*="section-screen"] .section .section-data .section-title{
        background: #0aabdd;
        background: -moz-linear-gradient(0% 50% 0deg, #0aabdd 0%, #0b81a6 99.84%);
        background: -webkit-linear-gradient(0deg, #0aabdd 0%, #0b81a6 99.84%);
        background: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0, #0aabdd), color-stop(0.9984, #0b81a6));
        background: -o-linear-gradient(0deg, #0aabdd 0%, #0b81a6 99.84%);
        background: -ms-linear-gradient(0deg, #0aabdd 0%, #0b81a6 99.84%);
        background: linear-gradient(90deg, #0aabdd 0%, #0b81a6 99.84%);
        }

        .coursetag_abpmatesbarcanova #layout-container div[id*="section-screen"] .section .section-data .section-title:before {
        background: #0b81a6;
        }

        .coursetag_abpmatesbarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item:after,
        .coursetag_abpmatesbarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item:after,
        .coursetag_abpmatesbarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item:after  {
        background: #0aabdd;
        background: -moz-linear-gradient(0% 50% 0deg, #0aabdd 0%, #0b81a6 99.84%);
        background: -webkit-linear-gradient(0deg, #0aabdd 0%, #0b81a6 99.84%);
        background: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0, #0aabdd), color-stop(0.9984, #0b81a6));
        background: -o-linear-gradient(0deg, #0aabdd 0%, #0b81a6 99.84%);
        background: -ms-linear-gradient(0deg, #0aabdd 0%, #0b81a6 99.84%);
        background: linear-gradient(90deg, #0aabdd 0%, #0b81a6 99.84%);
        }

        @media (hover: hover) {
          .coursetag_abpmatesbarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item:hover,
          .coursetag_abpmatesbarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item:hover,
          .coursetag_abpmatesbarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item:hover {
          color: #0b82a7;
          background: #90e4ff;
        }
      }

        .coursetag_abpmatesbarcanova a:hover,
        .coursetag_abpmatesbarcanova a:active,
        .coursetag_abpmatesbarcanova a:focus {
        color: #0b82a7;
        }

        .coursetag_abpmatesbarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item .content-img {
        background-color: #0aabdd;
        }

        .coursetag_abpmatesbarcanova #layout-container *::-webkit-scrollbar-thumb {
        background-color: #0b81a6;
        }


        /*Cambio de letra*/

        body.coursetag_abpmatesbarcanova {
        font: 400 18px 'Times New Roman', serif;
        }


        /*TITULOS*/

        .coursetag_abpmatesbarcanova .bck-title1:before {
        display: none;
        }

        .coursetag_abpmatesbarcanova .bck-title1,
        .coursetag_abpmatesbarcanova .bck-title2 {
        color: #0085AE;
        }

        .coursetag_abpmatesbarcanova .bck-title3 {
        font-family: 'PT Sans Narrow', sans-serif;
        color: #F15921;
        border-bottom: 3px solid;
        padding-bottom: 9px;
        font-size: 27px;
        }

        .coursetag_abpmatesbarcanova .bck-title3:before {
        content: "»";
        margin-right: 8px;
        font-size: 32px;
        }

        .coursetag_abpmatesbarcanova .bck-title4 {
        font-family: 'PT Sans Narrow', sans-serif;
        color: #0085ae;
        border-bottom: 3px solid;
        padding-bottom: 9px;
        font-size: 27px;
        }

        .coursetag_abpmatesbarcanova .bck-title4:before {
        content: "»";
        margin-right: 8px;
        font-size: 32px;
        }

        .coursetag_abpmatesbarcanova .bck-title5 {
        font-family: 'PT Sans Narrow', sans-serif;
        color: #0085ae;
        font-size: 22px;
        border-bottom: 3px solid #0085ae;
        padding-bottom: 6px;
        }

        .coursetag_abpmatesbarcanova .bck-title8 {
        color: #0085ae;
        border-bottom: 3px solid #0085ae;
        }


        /*CAJAS*/

        .coursetag_abpmatesbarcanova .bck-box1 {
        border: 3px solid transparent;
        border-image: linear-gradient(to bottom, #0085AE, #C7DFEA);
        border-image-slice: 1;
        background: #E7F3F7;
        }

        .coursetag_abpmatesbarcanova .bck-box2 {
        border: 0;
        box-shadow: 0px 0px 4px 2px #00000085;
        }

        .coursetag_abpmatesbarcanova .bck-box2 .bck-content {
        padding: 8px 28px;
        background: #DDCFE5;
        background: none;
        }

        .coursetag_abpmatesbarcanova .bck-box3 {
        border: 0;
        border-bottom: 3px solid #AC82BA;
        }

        .coursetag_abpmatesbarcanova .bck-box3 .bck-title {
        background: #AC82BA;
        }

        .coursetag_abpmatesbarcanova .bck-box3 .bck-content {
        background: transparent;
        }

        .coursetag_abpmatesbarcanova .bck-box4 {
        border: 0;
        border-bottom: 3px solid #B0D354;
        }

        .coursetag_abpmatesbarcanova .bck-box4 .bck-title {
        font-family: 'Montserrat', cursive;
        font-weight: 600;
        background: white;
        color: #B0D354;
        border: 0;
        border-bottom: 3px solid;
        padding-bottom: 0;
        }

        .coursetag_abpmatesbarcanova .bck-box4 .bck-content {
        background: white;
        }

        .coursetag_abpmatesbarcanova .bck-box5 .bck-title {
        display: none;
        }

        .coursetag_abpmatesbarcanova .bck-box5 .bck-content {
        background: #FEF3D2;
        border: 4px solid white;
        box-shadow: 0 0 7px 1px #00000094;
        }

        .coursetag_abpmatesbarcanova .bck-box7 {
        background: #FCDACE;
        border: 3px solid white;
        box-shadow: 0 0 7px 1px #00000094;
        }

        .coursetag_abpmatesbarcanova .bck-box8 {
        background: #DAECD4;
        border: 3px solid white;
        box-shadow: 0 0 7px 1px #00000094;
        }


        /*Caja 17* - Redonda y con pregunta*/

        .coursetag_abpmatesbarcanova .bck-box17 {
        background: #e2f4fa;
        }

        .coursetag_abpmatesbarcanova .bck-box17:before {
        border-color: #0085ae;
        color: #0085ae;
        }


        /*Caja 18 - Para sociales*/

        .coursetag_abpmatesbarcanova .bck-box18 {
        border: 3px solid #0085ae;
        }

        .coursetag_abpmatesbarcanova .bck-box18 .bck-title {
        background: #0085ae;
        }


        /*****Enfasis*****/


        /*Énfasis 1*/

        .coursetag_abpmatesbarcanova .bck-enfasis {
        background: #E5EDF4;
        padding: 5px 0px;
        }


        /*****Listas*****/


        /*Lista ordenada por defecto*/

        .coursetag_abpmatesbarcanova #actividad .content .cke_contents ol li::before,
        .coursetag_abpmatesbarcanova #actividad .content .texto_curso ol li::before,
        .coursetag_abpmatesbarcanova #actividad .popover-content ol li::before,
        .coursetag_abpmatesbarcanova #actividad .content .workspace ul li ol li::before {
        color: #0486AF;
        }


        /*Lista ordenada 1*/

        .coursetag_abpmatesbarcanova #actividad .content .cke_contents .bck-ol li:before,
        .coursetag_abpmatesbarcanova #actividad .content .texto_curso .bck-ol li:before,
        .coursetag_abpmatesbarcanova #actividad .content .workspace ul li .bck-ol li:before {
        font-family: "Times New Roman", serif;
        color: #0486AF;
        }


        /*Lista ordenada 2*/

        .coursetag_abpmatesbarcanova #actividad .content .cke_contents .bck-ol-2 li:before,
        .coursetag_abpmatesbarcanova #actividad .content .texto_curso .bck-ol-2 li:before,
        .coursetag_abpmatesbarcanova #actividad .content .workspace ul li .bck-ol-2 li:before {
        font-family: "Times New Roman", serif;
        color: #F58220;
        }


        /*Lista desordenada por defecto*/

        .coursetag_abpmatesbarcanova .texto_curso ul li:before,
        .coursetag_abpmatesbarcanova .workspace ul li ul li:before,
        .coursetag_abpmatesbarcanova .cke_contents ul li:before {
        background-color: #0085AE;
        }


        /*Desplegable*/

        .coursetag_abpmatesbarcanova .bck-dropdown-button {
        background: #0085AE;
        }

        .coursetag_abpmatesbarcanova .bck-dropdown-content {
        background-color: #a0c1d86e;
        }


        /*Tablas*/

        .coursetag_abpmatesbarcanova .bck-table-1 {
        border-color: #0085AE;
        }

        .coursetag_abpmatesbarcanova .bck-table-1 td,
        th {
        border-color: #0085AE;
        }

        .coursetag_abpmatesbarcanova .bck-table-1 td.bck-td1 {
        background: #5EA0C0;
        color: white;
        }

        .coursetag_abpmatesbarcanova .bck-table-1 td.bck-td2 {
        background: #A0C1D8;
        color: white;
        }


        /*Pop-up*/

        .coursetag_abpmatesbarcanova .info-popover .popover-title,
        .coursetag_abpmatesbarcanova .popover-template .popover-title {
        color: #B0D354;
        background: white;
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        border-bottom: 3px solid #b7d763;
        }

        .coursetag_abpmatesbarcanova .info-template.shown {
        border: 0;
        background: white;
        border: 5px solid #b0d354;
        border-right: 0;
        }

        .coursetag_abpmatesbarcanova .info-title.info-show.shown {
        color: #b0d354;
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        }

        .coursetag_abpmatesbarcanova #actividad .info-button {
        color: #6dd0ee;
        }


        /*---------------------------------------------*/


        /*SECCION NARANJA con cousertag*/

        .coursetag_abpmatesbarcanova #actividad .carousel-inner .naranja .item-container {
        background: #FEE5CA;
        }

        .coursetag_abpmatesbarcanova .naranja .bck-title1 {
        color: #F7931D;
        }

        .coursetag_abpmatesbarcanova .naranja .bck-title2 {
        font-family: 'Pangolin', cursive;
        font-weight: normal;
        color: #F7931D;
        }

        .coursetag_abpmatesbarcanova .naranja .bck-title3 {
        font-family: 'Pangolin', cursive;
        font-weight: normal;
        color: #F7931D;
        letter-spacing: normal;
        border-bottom: 0;
        padding-bottom: 0;
        font-size: 23px;
        }

        .coursetag_abpmatesbarcanova .naranja .bck-title3:before {
        display: none;
        }

        .coursetag_abpmatesbarcanova #actividad .carousel-inner .naranja .item-container:before {
        background-image: url(https://www.blinklearning.com/useruploads/r/a/154941436/activity_other_imported/Barcanova_ESO_LenguaCatalana_cabeceranaranja.png);
        }

        /*---------------------------------------------*/

        /*---------------------------------------------*/
        /******************* Lengua (.coursetag_abplenguajebarcanova) **************************/

        /*Cabecera de la slide*/

        .coursetag_abplenguajebarcanova #actividad .carousel-inner .item-container:before {
        background-image: url(https://www.blinklearning.com/useruploads/r/a/155496946/activity_other_imported/Barcanova_ESO_LenguaCatalana_cabeceraroja.png);
        }


        /*TÍTULOS*/

        .coursetag_abplenguajebarcanova .bck-title1,
        .coursetag_abplenguajebarcanova .bck-title5 {
        color: #D2204F;
        }

        .coursetag_abplenguajebarcanova .bck-title8 {
        color: #D2204F;
        border-bottom: 3px solid #D2204F;
        }


        /*Énfasis*/

        .coursetag_abplenguajebarcanova .bck-enfasis {
        background: #F0BBB7;
        }


        /*CAJAS*/

        .coursetag_abplenguajebarcanova .bck-box1 {
        background: #f6d8d5;
        }

        .coursetag_abplenguajebarcanova .bck-box8 {
        border-color: #D2204F;
        }


        /*Caja 17* - Redonda y con pregunta*/

        .coursetag_abplenguajebarcanova .bck-box17 {
        background: #fce1dd;
        }

        .coursetag_abplenguajebarcanova .bck-box17:before {
        border-color: #D2204F;
        color: #D2204F;
        }


        /*Caja 18 - Para sociales*/

        .coursetag_abplenguajebarcanova .bck-box18 {
        border: 3px solid #D2204F;
        }

        .coursetag_abplenguajebarcanova .bck-box18 .bck-title {
        background: #D2204F;
        }


        /*Lista desordenada por defecto*/

        .coursetag_abplenguajebarcanova .texto_curso ul li:before,
        .coursetag_abplenguajebarcanova .workspace ul li ul li:before,
        .coursetag_abplenguajebarcanova .cke_contents ul li:before {
        background-color: #D2204F;
        }


        /*Lista ordenada por defecto*/

        .coursetag_abplenguajebarcanova #actividad .content .cke_contents ol li::before,
        .coursetag_abplenguajebarcanova #actividad .content .texto_curso ol li::before,
        .coursetag_abplenguajebarcanova #actividad .popover-content ol li::before,
        .coursetag_abplenguajebarcanova #actividad .content .workspace ul li ol li::before {
        color: #D2204F;
        }


        /*Lista ordenada 1*/

        .coursetag_abplenguajebarcanova #actividad .content .cke_contents .bck-ol li:before,
        .coursetag_abplenguajebarcanova #actividad .content .texto_curso .bck-ol li:before,
        .coursetag_abplenguajebarcanova #actividad .content .workspace ul li .bck-ol li:before {
        color: #D2204F;
        }


        /*Desplegable*/

        .coursetag_abplenguajebarcanova .bck-dropdown-button {
        background: #D2204F;
        }

        .coursetag_abplenguajebarcanova .bck-dropdown-content {
        background-color: #F0BBB7;
        }


        /*Tablas*/

        .coursetag_abplenguajebarcanova .bck-table-1 {
        border-color: #D2204F;
        }

        .coursetag_abplenguajebarcanova .bck-table-1 td,
        th {
        border-color: #D2204F;
        }

        .coursetag_abplenguajebarcanova .bck-table-1 td.bck-td1 {
        background: #D2204F;
        color: white;
        }

        .coursetag_abplenguajebarcanova .bck-table-1 td.bck-td2 {
        background: #F0BBB7;
        color: black;
        }


        /*Cambios colores interfaz*/

        .coursetag_abplenguajebarcanova .navbar-bottom {
        border-color: #D2204F;
        }

        .coursetag_abplenguajebarcanova .slider-indicators li {
        color: white;
        }

        .coursetag_abplenguajebarcanova .navbar-bottom .edit .slider-indicators .concat.active,
        .coursetag_abplenguajebarcanova .navbar-bottom .slider-indicators .active {
        background-color: #D2204F;
        color: white;
        }

        .coursetag_abplenguajebarcanova li.slider-indicator:hover {
        background-color: #D2204F;
        color: white;
        }


        /*Botones con tag matesbarcanova*/

        .coursetag_abplenguajebarcanova .btn-primary,
        .coursetag_abplenguajebarcanova .btn-primary.disabled,
        .coursetag_abplenguajebarcanova .btn-primary.disabled:hover,
        .coursetag_abplenguajebarcanova .btn-primary.disabled:focus {
        background-color: #ffffff;
        border-color: #D2204F;
        border: 2px solid #D2204F;
        }

        .coursetag_abplenguajebarcanova .btn-primary:not([disabled]):hover,
        .coursetag_abplenguajebarcanova .btn-primary:not([disabled]):focus,
        .coursetag_abplenguajebarcanova .btn-primary:not([disabled]):active,
        .coursetag_abplenguajebarcanova .btn-primary.active,
        .coursetag_abplenguajebarcanova .open .dropdown-toggle.btn-primary {
        background-color: #D2204F;
        }


        /*Link con abpmatesbarcanova*/

        @media (hover: hover){
          .coursetag_abplenguajebarcanova .go-back button:hover,
          .coursetag_abplenguajebarcanova #layout-container div.go-back button:hover, 
          .coursetag_abplenguajebarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs .tab:not(.active):hover [class*="section-title-"]{
        color: #D2204F;
        }
      }


        /*Menu desplegable con coursetag abpmatesbarcanova*/

        body:not(.isTablet).coursetag_abplenguajebarcanova #book-index #indice .units ul li:not(.disabled) a:hover,
        body:not(.isTablet).coursetag_abplenguajebarcanova #book-index #indice .units ul#list-units li:not(.disabled).active a, body #book-index #indice .units ul#list-units li:not(.disabled).active a {
        background: #D2204F;
        }

        body.coursetag_abplenguajebarcanova #book-index #indice .col-main {
        background: #D2204F;
        }

        body.coursetag_abplenguajebarcanova:not(.isTablet) #book-index #indice .units ul li:not(.disabled) a:hover,
        .coursetag_abplenguajebarcanova book-index #indice .units ul li.active a {
        background: #D2204F;
        }


        /*Pop up lenguaje*/

        .coursetag_abplenguajebarcanova #actividad .info-button {
        color: #D2204F;
        }


        /* Primera y segunda pantalla con tags*/

        .coursetag_abplenguajebarcanova #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-title{
        background: #D2204F;
        background: -moz-linear-gradient(0% 50% 0deg, #D2204F 0%, #ad133c 99.84%);
        background: -webkit-linear-gradient(0deg, #D2204F 0%, #ad133c 99.84%);
        background: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0, #D2204F), color-stop(0.9984, #ad133c));
        background: -o-linear-gradient(0deg, #D2204F 0%, #ad133c 99.84%);
        background: -ms-linear-gradient(0deg, #D2204F 0%, #ad133c 99.84%);
        background: linear-gradient(90deg, #D2204F 0%, #ad133c 99.84%);
        }

        .coursetag_abplenguajebarcanova #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-title::before {
            background-image: linear-gradient(45deg, #D2204F calc(-100% - 52px), #ad133c calc(100% + 12px));
        }

        .coursetag_abplenguajebarcanova #layout-container #main-screen #course-header .course-extra ul li {
        border-left-color: #D2204F;
        }

        .coursetag_abplenguajebarcanova #layout-container div[id*="section-screen"] .section .section-data .section-title{
        background: #D2204F;
        background: -moz-linear-gradient(0% 50% 0deg, #D2204F 0%, #ad133c 99.84%);
        background: -webkit-linear-gradient(0deg, #D2204F 0%, #ad133c 99.84%);
        background: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0, #D2204F), color-stop(0.9984, #ad133c));
        background: -o-linear-gradient(0deg, #D2204F 0%, #ad133c 99.84%);
        background: -ms-linear-gradient(0deg, #D2204F 0%, #ad133c 99.84%);
        background: linear-gradient(90deg, #D2204F 0%, #ad133c 99.84%);
        }

        .coursetag_abplenguajebarcanova #layout-container div[id*="section-screen"] .section .section-data .section-title:before {
        background: #ad133c;
        }

        .coursetag_abplenguajebarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item:after,
        .coursetag_abplenguajebarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item:after,
        .coursetag_abplenguajebarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item:after  {
        background: #D2204F;
        background: -moz-linear-gradient(0% 50% 0deg, #D2204F 0%, #ad133c 99.84%);
        background: -webkit-linear-gradient(0deg, #D2204F 0%, #ad133c 99.84%);
        background: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0, #D2204F), color-stop(0.9984, #ad133c));
        background: -o-linear-gradient(0deg, #D2204F 0%, #ad133c 99.84%);
        background: -ms-linear-gradient(0deg, #D2204F 0%, #ad133c 99.84%);
        background: linear-gradient(90deg, #D2204F 0%, #ad133c 99.84%);
        }

        @media (hover: hover) {
        .coursetag_abplenguajebarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item:hover,
        .coursetag_abplenguajebarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item:hover,
        .coursetag_abplenguajebarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item:hover {
          background: #F3D0CB;
          color: #D2204F;

        }
      }

        .coursetag_abplenguajebarcanova a:hover,
        .coursetag_abplenguajebarcanova a:active,
        .coursetag_abplenguajebarcanova a:focus {
        color: #D2204F;
        }

        .coursetag_abplenguajebarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item .content-img {
        background-color: #D2204F;
        }

        .coursetag_abplenguajebarcanova #layout-container *::-webkit-scrollbar-thumb {
        background-color: #ad133c;
        }


        /******************* BIOLOGIA (.coursetag_abpbiologiabarcanova) **************************/


        /*Cabecera de la slide*/

        .coursetag_abpbiologiabarcanova #actividad .carousel-inner .item-container:before {
        background-image: url(https://www.blinklearning.com/useruploads/r/a/155498026/activity_other_imported/Barcanova_ESO_LenguaCatalana_cabeceraverde.png);
        }


        /*TÍTULOS*/

        .coursetag_abpbiologiabarcanova .bck-title1,
        .coursetag_abpbiologiabarcanova .bck-title2,
        .coursetag_abpbiologiabarcanova .bck-title5 {
        color: #75B042;
        }

        .coursetag_abpbiologiabarcanova .bck-title8 {
        color: #75B042;
        border-bottom: 3px solid #75B042;
        }


        /*Énfasis*/

        .coursetag_abpbiologiabarcanova .bck-enfasis {
        background: #F1F5CA;
        }


        /*CAJAS*/

        .coursetag_abpbiologiabarcanova .bck-box1 {
        border: 3px solid transparent;
        border-image: linear-gradient(to bottom, #DBE14A, #EEF3BF);
        border-image-slice: 1;
        background: #F1F5CA;
        }

        .coursetag_abpbiologiabarcanova .bck-box8 {
        border-color: #75B042;
        }


        /*Caja 17* - Redonda y con pregunta*/

        .coursetag_abpbiologiabarcanova .bck-box17 {
        background: #c5daab;
        }

        .coursetag_abpbiologiabarcanova .bck-box17:before {
        border-color: #75B042;
        color: #75B042;
        }


        /*Caja 18 - Para sociales*/

        .coursetag_abpbiologiabarcanova .bck-box18 {
        border: 3px solid #75B042;
        }

        .coursetag_abpbiologiabarcanova .bck-box18 .bck-title {
        background: #75B042;
        }


        /*Lista desordenada por defecto*/

        .coursetag_abpbiologiabarcanova .texto_curso ul li:before,
        .coursetag_abpbiologiabarcanova .workspace ul li ul li:before,
        .coursetag_abpbiologiabarcanova .cke_contents ul li:before {
        background-color: #75B042;
        }


        /*Lista ordenada por defecto*/

        .coursetag_abpbiologiabarcanova #actividad .content .cke_contents ol li::before,
        .coursetag_abpbiologiabarcanova #actividad .content .texto_curso ol li::before,
        .coursetag_abpbiologiabarcanova #actividad .popover-content ol li::before,
        .coursetag_abpbiologiabarcanova #actividad .content .workspace ul li ol li::before {
        color: #75B042;
        }


        /*Lista ordenada 1*/

        .coursetag_abpbiologiabarcanova #actividad .content .cke_contents .bck-ol li:before,
        .coursetag_abpbiologiabarcanova #actividad .content .texto_curso .bck-ol li:before,
        .coursetag_abpbiologiabarcanova #actividad .content .workspace ul li .bck-ol li:before {
        color: #75B042;
        }


        /*Desplegable*/

        .coursetag_abpbiologiabarcanova .bck-dropdown-button {
        background: #75B042;
        }

        .coursetag_abpbiologiabarcanova .bck-dropdown-content {
        background-color: #F1F5CA;
        }


        /*Tablas*/

        .coursetag_abpbiologiabarcanova .bck-table-1 {
        border-color: #75B042;
        }

        .coursetag_abpbiologiabarcanova .bck-table-1 td,
        th {
        border-color: #75B042;
        }

        .coursetag_abpbiologiabarcanova .bck-table-1 td.bck-td1 {
        background: #75B042;
        color: white;
        }

        .coursetag_abpbiologiabarcanova .bck-table-1 td.bck-td2 {
        background: #F1F5CA;
        color: black;
        }


        /*Pop-up*/

        .coursetag_abpbiologiabarcanova #actividad .info-button {
        color: #75B042;
        }


        /*Enfasis*/

        .coursetag_abpbiologiabarcanova .bck-enfasis-6 {
        color: #75B042;
        }


        /*Cambios colores interfaz*/

        .coursetag_abpbiologiabarcanova .navbar-bottom {
        border-color: #75B042;
        }

        .coursetag_abpbiologiabarcanova .slider-indicators li {
        color: white;
        }

        .coursetag_abpbiologiabarcanova .navbar-bottom .edit .slider-indicators .concat.active,
        .coursetag_abpbiologiabarcanova .navbar-bottom .slider-indicators .active {
        background-color: #75B042;
        color: white;
        }

        .coursetag_abpbiologiabarcanova li.slider-indicator:hover {
        background-color: #75B042;
        color: white;
        }


        /*Botones con tag biologiabarcanova*/

        .coursetag_abpbiologiabarcanova .btn-primary,
        .coursetag_abpbiologiabarcanova .btn-primary.disabled,
        .coursetag_abpbiologiabarcanova .btn-primary.disabled:hover,
        .coursetag_abpbiologiabarcanova .btn-primary.disabled:focus {
        background-color: #ffffff;
        border-color: #75B042;
        border: 2px solid #75B042;
        }

        .coursetag_abpbiologiabarcanova .btn-primary:not([disabled]):hover,
        .coursetag_abpbiologiabarcanova .btn-primary:not([disabled]):focus,
        .coursetag_abpbiologiabarcanova .btn-primary:not([disabled]):active,
        .coursetag_abpbiologiabarcanova .btn-primary.active,
        .coursetag_abpbiologiabarcanova .open .dropdown-toggle.btn-primary {
        background-color: #75B042;
        }


        /*Link con abpbiologiabarcanova*/

        @media (hover: hover){
          .coursetag_abplenguajebarcanova .go-back button:hover,
          .coursetag_abplenguajebarcanova #layout-container div.go-back button:hover,
          .coursetag_abplenguajebarcanova#layout-container div[id*="section-screen"] .section .section-content .tabs .tab:not(.active):hover [class*="section-title-"]{
        color: #75B042;
        }
      }


        /*Menu desplegable con coursetag abpbiologiabarcanova*/

        body:not(.isTablet).coursetag_abpbiologiabarcanova #book-index #indice .units ul li:not(.disabled) a:hover,
        body:not(.isTablet).coursetag_abpbiologiabarcanova #book-index #indice .units ul#list-units li:not(.disabled).active a, body #book-index #indice .units ul#list-units li:not(.disabled).active a {
        background: #75B042;
        }

        body.coursetag_abpbiologiabarcanova #book-index #indice .col-main {
        background: #75B042;
        }

        body.coursetag_abpbiologiabarcanova:not(.isTablet) #book-index #indice .units ul li:not(.disabled) a:hover,
        .coursetag_abpbiologiabarcanova book-index #indice .units ul li.active a {
        background: #75B042;
        }


        /* Primera y segunda pantalla con tags*/

        .coursetag_abpbiologiabarcanova #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-title{
        background: #75B042;
        background: -moz-linear-gradient(0% 50% 0deg, #75B042 0%, #589e1b 99.84%);
        background: -webkit-linear-gradient(0deg, #75B042 0%, #589e1b 99.84%);
        background: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0, #75B042), color-stop(0.9984, #589e1b));
        background: -o-linear-gradient(0deg, #75B042 0%, #589e1b 99.84%);
        background: -ms-linear-gradient(0deg, #75B042 0%, #589e1b 99.84%);
        background: linear-gradient(90deg, #75B042 0%, #589e1b 99.84%);
        }

        .coursetag_abpbiologiabarcanova #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-title::before {
            background-image: linear-gradient(45deg, #75B042 calc(-100% - 52px), #589e1b calc(100% + 12px));
        }

        .coursetag_abpbiologiabarcanova #layout-container #main-screen #course-header .course-extra ul li {
        border-left-color: #75B042;
        }

        .coursetag_abpbiologiabarcanova #layout-container div[id*="section-screen"] .section .section-data .section-title{
        background: #75B042;
        background: -moz-linear-gradient(0% 50% 0deg, #75B042 0%, #589e1b 99.84%);
        background: -webkit-linear-gradient(0deg, #75B042 0%, #589e1b 99.84%);
        background: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0, #75B042), color-stop(0.9984, #589e1b));
        background: -o-linear-gradient(0deg, #75B042 0%, #589e1b 99.84%);
        background: -ms-linear-gradient(0deg, #75B042 0%, #589e1b 99.84%);
        background: linear-gradient(90deg, #75B042 0%, #589e1b 99.84%);
        }

        .coursetag_abpbiologiabarcanova #layout-container div[id*="section-screen"] .section .section-data .section-title:before {
        background: #589e1b;
        }

        .coursetag_abpbiologiabarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item:after,
        .coursetag_abpbiologiabarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item:after,
        .coursetag_abpbiologiabarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item:after  {
        background: #75B042;
        background: -moz-linear-gradient(0% 50% 0deg, #75B042 0%, #589e1b 99.84%);
        background: -webkit-linear-gradient(0deg, #75B042 0%, #589e1b 99.84%);
        background: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0, #75B042), color-stop(0.9984, #589e1b));
        background: -o-linear-gradient(0deg, #75B042 0%, #589e1b 99.84%);
        background: -ms-linear-gradient(0deg, #75B042 0%, #589e1b 99.84%);
        background: linear-gradient(90deg, #75B042 0%, #589e1b 99.84%);
        }

        @media (hover: hover) {
          .coursetag_abpbiologiabarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item:hover,
          .coursetag_abpbiologiabarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item:hover,
          .coursetag_abpbiologiabarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item:hover {
          color: #75B042;
          background: #F1F5CA;
        }
      }

        .coursetag_abpbiologiabarcanova a:hover,
        .coursetag_abpbiologiabarcanova a:active,
        .coursetag_abpbiologiabarcanova a:focus {
        color: #75B042;
        }

        .coursetag_abpbiologiabarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item .content-img {
        background-color: #75B042;
        }

        .coursetag_abpbiologiabarcanova #layout-container *::-webkit-scrollbar-thumb {
        background-color: #589e1b;
        }


        /******************* SOCIALES (.coursetag_abpsocialesbarcanova) **************************/


        /*Cabecera de la slide*/

        .coursetag_abpsocialesbarcanova #actividad .carousel-inner .item-container:before {
        background-image: url(https://www.blinklearning.com/useruploads/r/a/155498746/activity_other_imported/Barcanova_ESO_LenguaCatalana_cabecerasociales.png);
        }


        /*TÍTULOS*/

        .coursetag_abpsocialesbarcanova .bck-title1,
        .coursetag_abpsocialesbarcanova .bck-title2,
        .coursetag_abpsocialesbarcanova .bck-title5 {
        color: #F07F3C;
        }

        .coursetag_abpsocialesbarcanova .bck-title8 {
        color: #F07F3C;
        border-bottom: 3px solid #F07F3C;
        }
        .coursetag_abpsocialesbarcanova .bck-title9 {
            color: #F07F3C;
        }


        /*Énfasis*/

        .coursetag_abpsocialesbarcanova .bck-enfasis {
        background: #FDE8D8;
        }


        /*CAJAS*/

        .coursetag_abpsocialesbarcanova .bck-box1 {
        background: #FDE8D8;
        }

        .coursetag_abpsocialesbarcanova .bck-box8 {
        border-color: #F07F3C;
        }


        /*Caja 17* - Redonda y con pregunta*/

        .coursetag_abpsocialesbarcanova .bck-box17 {
        background: #FDE8D8;
        }

        .coursetag_abpsocialesbarcanova .bck-box17:before {
        border-color: #F07F3C;
        color: #F07F3C;
        }


        /*Caja 18 - Para sociales*/

        .coursetag_abpsocialesbarcanova .bck-box18 {
        border: 3px solid #F07F3C;
        }

        .coursetag_abpsocialesbarcanova .bck-box18 .bck-title {
        background: #F07F3C;
        }


        /*Lista desordenada por defecto*/

        .coursetag_abpsocialesbarcanova .texto_curso ul li:before,
        .coursetag_abpsocialesbarcanova .workspace ul li ul li:before,
        .coursetag_abpsocialesbarcanova .cke_contents ul li:before {
        background-color: #F07F3C;
        }


        /*Lista ordenada por defecto*/

        .coursetag_abpsocialesbarcanova #actividad .content .cke_contents ol li::before,
        .coursetag_abpsocialesbarcanova #actividad .content .texto_curso ol li::before,
        .coursetag_abpsocialesbarcanova #actividad .popover-content ol li::before,
        .coursetag_abpsocialesbarcanova #actividad .content .workspace ul li ol li::before {
        color: #F07F3C;
        }


        /*Lista ordenada 1*/

        .coursetag_abpsocialesbarcanova #actividad .content .cke_contents .bck-ol li:before,
        .coursetag_abpsocialesbarcanova #actividad .content .texto_curso .bck-ol li:before,
        .coursetag_abpsocialesbarcanova #actividad .content .workspace ul li .bck-ol li:before {
        color: #F07F3C;
        }


        /*Desplegable*/

        .coursetag_abpsocialesbarcanova .bck-dropdown-button {
        background: #F07F3C;
        }

        .coursetag_abpsocialesbarcanova .bck-dropdown-content {
        background-color: #FDE8D8;
        }


        /*Tablas*/

        .coursetag_abpsocialesbarcanova .bck-table-1 {
        border-color: #F07F3C;
        }

        .coursetag_abpsocialesbarcanova .bck-table-1 td,
        th {
        border-color: #F07F3C;
        }

        .coursetag_abpsocialesbarcanova .bck-table-1 td.bck-td1 {
        background: #F07F3C;
        color: white;
        }

        .coursetag_abpsocialesbarcanova .bck-table-1 td.bck-td2 {
        background: #FDE8D8;
        color: black;
        }


        /*Pop-up*/

        .coursetag_abpsocialesbarcanova #actividad .info-button {
        color: #F07F3C;
        }


        /*Enfasis*/

        .coursetag_abpsocialesbarcanova .bck-enfasis-6 {
        color: #F07F3C;
        }


        /*Cambios colores interfaz*/

        .coursetag_abpsocialesbarcanova .navbar-bottom {
        border-color: #F07F3C;
        }

        .coursetag_abpsocialesbarcanova .slider-indicators li {
        color: white;
        }

        .coursetag_abpsocialesbarcanova .navbar-bottom .edit .slider-indicators .concat.active,
        .coursetag_abpsocialesbarcanova .navbar-bottom .slider-indicators .active {
        background-color: #F07F3C;
        color: white;
        }

        .coursetag_abpsocialesbarcanova li.slider-indicator:hover {
        background-color: #F07F3C;
        color: white;
        }


        /*Botones con tag biologiabarcanova*/

        .coursetag_abpsocialesbarcanova .btn-primary,
        .coursetag_abpsocialesbarcanova .btn-primary.disabled,
        .coursetag_abpsocialesbarcanova .btn-primary.disabled:hover,
        .coursetag_abpsocialesbarcanova .btn-primary.disabled:focus {
        background-color: #ffffff;
        border-color: #F07F3C;
        border: 2px solid #F07F3C;
        }

        .coursetag_abpsocialesbarcanova .btn-primary:not([disabled]):hover,
        .coursetag_abpsocialesbarcanova .btn-primary:not([disabled]):focus,
        .coursetag_abpsocialesbarcanova .btn-primary:not([disabled]):active,
        .coursetag_abpsocialesbarcanova .btn-primary.active,
        .coursetag_abpsocialesbarcanova .open .dropdown-toggle.btn-primary {
        background-color: #F07F3C;
        }


        /*Link con abpbiologiabarcanova*/

        @media (hover: hover) {
          .coursetag_abpsocialesbarcanova .go-back button:hover,
          .coursetag_abpsocialesbarcanova #layout-container div.go-back button:hover,
          .coursetag_abpsocialesbarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs .tab:not(.active):hover [class*="section-title-"] {
        color: #F07F3C;
        }
      }


        /*Menu desplegable con coursetag abpsocialesbarcanova*/

        body:not(.isTablet).coursetag_abpsocialesbarcanova  #book-index #indice .units ul li:not(.disabled) a:hover,
        body:not(.isTablet).coursetag_abpsocialesbarcanova  #book-index #indice .units ul#list-units li:not(.disabled).active a, body #book-index #indice .units ul#list-units li:not(.disabled).active a {
        background: #F07F3C;
        }

        body.coursetag_abpsocialesbarcanova  #book-index #indice .col-main {
        background: #F07F3C;
        }

        body.coursetag_abpsocialesbarcanova:not(.isTablet) #book-index #indice .units ul li:not(.disabled) a:hover,
        .coursetag_abpsocialesbarcanova book-index #indice .units ul li.active a {
        background: #F07F3C;
        }


        /* Primera y segunda pantalla con tags*/

        .coursetag_abpsocialesbarcanova #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-title{
        background: #F07F3C;
        background: -moz-linear-gradient(0% 50% 0deg, #F07F3C 0%, #bf5719 99.84%);
        background: -webkit-linear-gradient(0deg, #F07F3C 0%, #bf5719 99.84%);
        background: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0, #F07F3C), color-stop(0.9984, #bf5719));
        background: -o-linear-gradient(0deg, #F07F3C 0%, #bf5719 99.84%);
        background: -ms-linear-gradient(0deg, #F07F3C 0%, #bf5719 99.84%);
        background: linear-gradient(90deg, #F07F3C 0%, #bf5719 99.84%);
        }

        .coursetag_abpsocialesbarcanova #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-title::before {
            background-image: linear-gradient(45deg, #F07F3C calc(-100% - 52px), #bf5719 calc(100% + 12px));
        }

        .coursetag_abpsocialesbarcanova #layout-container #main-screen #course-header .course-extra ul li {
        border-left-color: #F07F3C;
        }

        .coursetag_abpsocialesbarcanova #layout-container div[id*="section-screen"] .section .section-data .section-title{
        background: #F07F3C;
        background: -moz-linear-gradient(0% 50% 0deg, #F07F3C 0%, #bf5719 99.84%);
        background: -webkit-linear-gradient(0deg, #F07F3C 0%, #bf5719 99.84%);
        background: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0, #F07F3C), color-stop(0.9984, #bf5719));
        background: -o-linear-gradient(0deg, #F07F3C 0%, #bf5719 99.84%);
        background: -ms-linear-gradient(0deg, #F07F3C 0%, #bf5719 99.84%);
        background: linear-gradient(90deg, #F07F3C 0%, #bf5719 99.84%);
        }

        .coursetag_abpsocialesbarcanova #layout-container div[id*="section-screen"] .section .section-data .section-title:before {
        background: #bf5719;
        }

        .coursetag_abpsocialesbarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item:after,
        .coursetag_abpsocialesbarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item:after,
        .coursetag_abpsocialesbarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item:after  {
        background: #F07F3C;
        background: -moz-linear-gradient(0% 50% 0deg, #F07F3C 0%, #bf5719 99.84%);
        background: -webkit-linear-gradient(0deg, #F07F3C 0%, #bf5719 99.84%);
        background: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0, #F07F3C), color-stop(0.9984, #bf5719));
        background: -o-linear-gradient(0deg, #F07F3C 0%, #bf5719 99.84%);
        background: -ms-linear-gradient(0deg, #F07F3C 0%, #bf5719 99.84%);
        background: linear-gradient(90deg, #F07F3C 0%, #bf5719 99.84%);
        }

        @media (hover: hover) {
          .coursetag_abpsocialesbarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item:hover,
          .coursetag_abpsocialesbarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item:hover,
          .coursetag_abpsocialesbarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item:hover {
          color: #F07F3C; 
          background: #FDE8D8;
        }
      }

        .coursetag_abpsocialesbarcanova a:hover,
        .coursetag_abpsocialesbarcanovaa:active,
        .coursetag_abpsocialesbarcanova a:focus {
        color: #F07F3C;
        }

        .coursetag_abpsocialesbarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item .content-img {
        background-color: #F07F3C;
        }

        .coursetag_abpsocialesbarcanova #layout-container *::-webkit-scrollbar-thumb {
        background-color: #bf5719;
        }


        /******************* MARRON LATIN Y CUL. CLÁSICA (.coursetag_abpmarronbarcanova) **************************/


        /*Cabecera de la slide*/

        .coursetag_abpmarronbarcanova #actividad .carousel-inner .item-container:before {
        background-image: url(https://www.blinklearning.com/useruploads/r/a/159407036/activity_other_imported/Barcanova_ESO_cabeceramarron.png);
        }


        /*TÍTULOS*/

        .coursetag_abpmarronbarcanova .bck-title1,
        .coursetag_abpmarronbarcanova .bck-title2,
        .coursetag_abpmarronbarcanova .bck-title5 {
        color: #B86048;
        }

        .coursetag_abpmarronbarcanova .bck-title1:before {
        display: none;
        }

        .coursetag_abpmarronbarcanova .bck-title8 {
        color: #B86048;
        border-bottom: 3px solid #B86048;
        }


        /*Énfasis*/

        .coursetag_abpmarronbarcanova .bck-enfasis {
        background: #EED7CC;
        }


        /*CAJAS*/

        .coursetag_abpmarronbarcanova .bck-box1 {
        background: #EED7CC;
        }

        .coursetag_abpmarronbarcanova .bck-box8 {
        border-color: #B86048;
        }


        /*Caja 17* - Redonda y con pregunta*/

        .coursetag_abpmarronbarcanova .bck-box17 {
        background: #EED7CC;
        }

        .coursetag_abpmarronbarcanova .bck-box17:before {
        border-color: #B86048;
        color: #B86048;
        }


        /*Caja 18 - Para sociales*/

        .coursetag_abpmarronbarcanova .bck-box18 {
        border: 3px solid #B86048;
        }

        .coursetag_abpmarronbarcanova .bck-box18 .bck-title {
        background: #B86048;
        }


        /*Lista desordenada por defecto*/

        .coursetag_abpmarronbarcanova .texto_curso ul li:before,
        .coursetag_abpmarronbarcanova .workspace ul li ul li:before,
        .coursetag_abpmarronbarcanova .cke_contents ul li:before {
        background-color: #B86048;
        }


        /*Lista ordenada por defecto*/

        .coursetag_abpmarronbarcanova #actividad .content .cke_contents ol li::before,
        .coursetag_abpmarronbarcanova #actividad .content .texto_curso ol li::before,
        .coursetag_abpmarronbarcanova #actividad .popover-content ol li::before,
        .coursetag_abpmarronbarcanova #actividad .content .workspace ul li ol li::before {
        color: #B86048;
        }


        /*Lista ordenada 1*/

        .coursetag_abpmarronbarcanova #actividad .content .cke_contents .bck-ol li:before,
        .coursetag_abpmarronbarcanova #actividad .content .texto_curso .bck-ol li:before,
        .coursetag_abpmarronbarcanova #actividad .content .workspace ul li .bck-ol li:before {
        color: #B86048;
        }


        /*Desplegable*/

        .coursetag_abpmarronbarcanova .bck-dropdown-button {
        background: #B86048;
        }

        .coursetag_abpmarronbarcanova .bck-dropdown-content {
        background-color: #EED7CC;
        }


        /*Tablas*/

        .coursetag_abpmarronbarcanova .bck-table-1 {
        border-color: #B86048;
        }

        .coursetag_abpmarronbarcanova .bck-table-1 td,
        th {
        border-color: #B86048;
        }

        .coursetag_abpmarronbarcanova .bck-table-1 td.bck-td1 {
        background: #B86048;
        color: white;
        }

        .coursetag_abpmarronbarcanova .bck-table-1 td.bck-td2 {
        background: #EED7CC;
        color: black;
        }


        /*Pop-up*/

        .coursetag_abpmarronbarcanova #actividad .info-button {
        color: #eed7cc;
        }


        /*Enfasis*/

        .coursetag_abpmarronbarcanova .bck-enfasis-6 {
        color: #B86048;
        }


        /*Cambios colores interfaz*/

        .coursetag_abpmarronbarcanova .navbar-bottom {
        border-color: #B86048;
        }

        .coursetag_abpmarronbarcanova .slider-indicators li {
        color: white;
        }

        .coursetag_abpmarronbarcanova .navbar-bottom .edit .slider-indicators .concat.active,
        .coursetag_abpmarronbarcanova .navbar-bottom .slider-indicators .active {
        background-color: #B86048;
        color: white;
        }

        .coursetag_abpmarronbarcanova li.slider-indicator:hover {
        background-color: #B86048;
        color: white;
        }


        /*Botones con tag biologiabarcanova*/

        .coursetag_abpmarronbarcanova .btn-primary,
        .coursetag_abpmarronbarcanova .btn-primary.disabled,
        .coursetag_abpmarronbarcanova .btn-primary.disabled:hover,
        .coursetag_abpmarronbarcanova .btn-primary.disabled:focus {
        background-color: #ffffff;
        border-color: #B86048;
        border: 2px solid #B86048;
        }

        .coursetag_abpmarronbarcanova .btn-primary:not([disabled]):hover,
        .coursetag_abpmarronbarcanova .btn-primary:not([disabled]):focus,
        .coursetag_abpmarronbarcanova .btn-primary:not([disabled]):active,
        .coursetag_abpmarronbarcanova .btn-primary.active,
        .coursetag_abpmarronbarcanova .open .dropdown-toggle.btn-primary {
        background-color: #B86048;
        }


        /*Link con abpbiologiabarcanova*/

        @media (hover: hover) {
          .coursetag_abpmarronbarcanova .go-back button:hover,
          .coursetag_abpmarronbarcanova #layout-container div.go-back button:hover,
          .coursetag_abpmarronbarcanova#layout-container div[id*="section-screen"] .section .section-content .tabs .tab:not(.active):hover [class*="section-title-"] {
        color: #B86048;
        }
      }


        /*Menu desplegable con coursetag abpbiologiabarcanova*/

        body:not(.isTablet).coursetag_abpmarronbarcanova #book-index #indice .units ul li:not(.disabled) a:hover,
        body:not(.isTablet).coursetag_abpmarronbarcanova #book-index #indice .units ul#list-units li:not(.disabled).active a, body #book-index #indice .units ul#list-units li:not(.disabled).active a {
        background: #B86048;
        }

        body.coursetag_abpmarronbarcanova #book-index #indice .col-main {
        background: #B86048;
        }

        body.coursetag_abpmarronbarcanova:not(.isTablet) #book-index #indice .units ul li:not(.disabled) a:hover,
        .coursetag_abpmarronbarcanova book-index #indice .units ul li.active a {
        background: #B86048;
        }


        /* Primera y segunda pantalla con tags*/

        .coursetag_abpmarronbarcanova #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-title{
        background: #B86048;
        background: -moz-linear-gradient(0% 50% 0deg, #B86048 0%, #86341d 99.84%);
        background: -webkit-linear-gradient(0deg, #B86048 0%, #86341d 99.84%);
        background: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0, #B86048), color-stop(0.9984, #86341d));
        background: -o-linear-gradient(0deg, #B86048 0%, #86341d 99.84%);
        background: -ms-linear-gradient(0deg, #B86048 0%, #86341d 99.84%);
        background: linear-gradient(90deg, #B86048 0%, #86341d 99.84%);
        }

        .coursetag_abpmarronbarcanova #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-title::before {
            background-image: linear-gradient(45deg, #B86048 calc(-100% - 52px), #86341d calc(100% + 12px));
        }

        .coursetag_abpmarronbarcanova #layout-container #main-screen #course-header .course-extra ul li {
        border-left-color: #B86048;
        }

        .coursetag_abpmarronbarcanova #layout-container div[id*="section-screen"] .section .section-data .section-title{
        background: #B86048;
        background: -moz-linear-gradient(0% 50% 0deg, #B86048 0%, #86341d 99.84%);
        background: -webkit-linear-gradient(0deg, #B86048 0%, #86341d 99.84%);
        background: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0, #B86048), color-stop(0.9984, #86341d));
        background: -o-linear-gradient(0deg, #B86048 0%, #86341d 99.84%);
        background: -ms-linear-gradient(0deg, #B86048 0%, #86341d 99.84%);
        background: linear-gradient(90deg, #B86048 0%, #86341d 99.84%);
        }

        .coursetag_abpmarronbarcanova #layout-container div[id*="section-screen"] .section .section-data .section-title:before {
        background: #86341d;
        }

        .coursetag_abpmarronbarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item:after,
        .coursetag_abpmarronbarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item:after,
        .coursetag_abpmarronbarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item:after  {
        background: #B86048;
        background: -moz-linear-gradient(0% 50% 0deg, #B86048 0%, #86341d 99.84%);
        background: -webkit-linear-gradient(0deg, #B86048 0%, #86341d 99.84%);
        background: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0, #B86048), color-stop(0.9984, #86341d));
        background: -o-linear-gradient(0deg, #B86048 0%, #86341d 99.84%);
        background: -ms-linear-gradient(0deg, #B86048 0%, #86341d 99.84%);
        background: linear-gradient(90deg, #B86048 0%, #86341d 99.84%);
        }

        @media (hover: hover) {
          .coursetag_abpmarronbarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item:hover,
          .coursetag_abpmarronbarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item:hover,
          .coursetag_abpmarronbarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item:hover {
          color: #B86048;
          background: #EED7CC;
        }
      }

        .coursetag_abpmarronbarcanova a:hover,
        .coursetag_abpmarronbarcanova a:active,
        .coursetag_abpmarronbarcanova a:focus {
        color: #B86048;
        }

        .coursetag_abpmarronbarcanova #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item .content-img {
        background-color: #B86048;
        }

        .coursetag_abpmarronbarcanova #layout-container *::-webkit-scrollbar-thumb {
        background-color: #86341d;
        }


        /*---------------MEDIA QUERIES-----------------*/


        /* Smartphones (portrait & landscape) */

        @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
        #actividad .class_slide {
            padding: 0;
        }
        #actividad .carousel-inner .item-container {
            padding: 20% 40px 0px 40px !important;
        }
        #actividad .carousel-inner .item-container:before {
            padding: 0% 65% 9% 11%;
        }
        #actividad .carousel-inner .item-container:after {
            right: 12px;
            padding: 7% 0% 3% 12%;
            top: 14px;
        }
        .bck-title1 {
            font-size: 25px !important;
        }
        .bck-title1:before {
            font-size: 38px !important;
        }
        .bck-title2,
        .bck-title4,
        .bck-title5,
        .bck-title6,
        .coursetag_abpmatesbarcanova .bck-title3 {
            font-size: 23px !important;
        }
        .bck-title3,
        .bck-title7 {
            font-size: 19px !important;
        }
        p {
            font-size: 16px !important;
        }
        body {
            font: 400 16px 'Roboto', sans-serif;
            color: #414141;
            background-color: #000000;
        }
        .bck-dropdown-titulo {
            font-size: 18px !important;
            padding-left: 1px;
        }
        }


        /* iPads (portrait & landscape) */

        @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
        #actividad .carousel-inner .item-container {
            padding: 12% 40px 0px 40px !important;
        }
        }

   /************************
   * CSS AÑADIDO POR HTML *
   ************************/
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9nZW5lcmljL2JsaW5rLXNyYy9zdHlsZXMvbWFpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLDBFQUEwRTtBQUMxRTtBQUNBLCtFQUErRTs7QUFFL0U7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0EsNEJBQTRCOztBQUU1QjtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLEVBQUU7QUFDekI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsOEJBQThCLEVBQUU7QUFDaEM7QUFDQTtBQUNBLDBCQUEwQixFQUFFO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQSw4QkFBOEIsRUFBRTtBQUNoQztBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSwyQkFBMkIsRUFBRTtBQUM3QjtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxFQUFFO0FBQzFDO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBLDZCQUE2QixFQUFFO0FBQy9CO0FBQ0E7QUFDQSxpQ0FBaUMsRUFBRTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQjtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBLDJDQUEyQzs7QUFFM0M7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsRUFBRTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0EsMEJBQTBCLEVBQUU7QUFDNUI7QUFDQTtBQUNBLDhCQUE4QixFQUFFO0FBQ2hDO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSwwQkFBMEIsRUFBRTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EseUJBQXlCLEVBQUU7QUFDM0I7QUFDQTtBQUNBLHlCQUF5QixFQUFFO0FBQzNCO0FBQ0E7QUFDQSw4QkFBOEIsRUFBRTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLGtDQUFrQyxFQUFFO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixFQUFFO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSxrQ0FBa0MsRUFBRTtBQUNwQztBQUNBO0FBQ0Esb0JBQW9CLEVBQUU7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBLDRDQUE0QztBQUM1QztBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EsZ0NBQWdDLEVBQUU7QUFDbEM7QUFDQTtBQUNBLHNCQUFzQixFQUFFO0FBQ3hCO0FBQ0E7QUFDQSxzQkFBc0IsRUFBRTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSxFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSxFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsRUFBRTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxFQUFFO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsRUFBRTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLG9DQUFvQyxFQUFFO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSw4QkFBOEIsRUFBRTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxxQkFBcUIsRUFBRSIsImZpbGUiOiJzdHlsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuKiAgIEltcG9ydHMgZGUgdG9kb3MgbG9zIGFyY2hpdm9zIGRlIGVzdGlsb3NcbiovXG4vKlxuKiAgIFZhcmlhYmxlcyBnbG9iYWxlcyBwYXJhIGVsIGVzdGlsb1xuKi9cbi8qICoqKioqKioqKiogL1xuLyAgIENPTE9SUyAgICAvXG4vICoqKioqKioqKiogKi9cbi8qICoqKioqKioqKioqKioqKioqKioqKiAvXG4vICAgREVWSUNFIEJSRUFLUE9JTlQgICAgL1xuLyAqKioqKioqKioqKioqKioqKioqKiogKi9cbi8qICoqKioqKioqKiogL1xuLyAgIFNUWUxFUyAgICAvXG4vICoqKioqKioqKiogKi9cbi8qICoqKioqKioqKiogL1xuLyAgR1JBRElFTlRTICAvXG4vICoqKioqKioqKiogKi9cbi8qIEJsaW5rIEVsZW1lbnRzICovXG4ubmF2YmFyLmxpYnJvIHtcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxuXG5ib2R5Om5vdCguaXNUYWJsZXQpICNib29rLWluZGV4ICNpbmRpY2UgLnVuaXRzIHVsI2xpc3QtdW5pdHMgbGk6bm90KC5kaXNhYmxlZCkuYWN0aXZlIGEsXG5ib2R5ICNib29rLWluZGV4ICNpbmRpY2UgLnVuaXRzIHVsI2xpc3QtdW5pdHMgbGk6bm90KC5kaXNhYmxlZCkuYWN0aXZlIGEge1xuICBiYWNrZ3JvdW5kOiAjYTIwNDFiOyB9XG5cbmJvZHk6bm90KC5pc1RhYmxldCkgI2Jvb2staW5kZXggI2luZGljZSAudW5pdHMgdWwjbGlzdC11bml0cyBsaTpub3QoLmRpc2FibGVkKTpub3QoLmFjdGl2ZSkgYTpob3ZlcixcbmJvZHkgI2Jvb2staW5kZXggI2luZGljZSAudW5pdHMgdWwjbGlzdC11bml0cyBsaTpub3QoLmRpc2FibGVkKTpub3QoLmFjdGl2ZSkgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNjZTI0M2Q7IH1cblxuYm9keSAjYm9vay1pbmRleCAjaW5kaWNlIC5jb2wtbWFpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2EyMDQxYiwgI2ZhNDU1Zik7XG4gIG9wYWNpdHk6IDE7IH1cbiAgYm9keSAjYm9vay1pbmRleCAjaW5kaWNlIC5jb2wtbWFpbiBsaS5jdXJyZW50IGEsXG4gIGJvZHkgI2Jvb2staW5kZXggI2luZGljZSAuY29sLW1haW4gbGkgYTpob3ZlciB7XG4gICAgY29sb3I6ICNmZmZmZmY7IH1cbiAgYm9keSAjYm9vay1pbmRleCAjaW5kaWNlIC5jb2wtbWFpbiAudW5pdC1jb250ZW50IC5tYXRlcmlhbCAuaXRlbSAuaW1hZ2VuLmxpYnJvOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2ltYWdlcy9jb250ZW5pZG8vcmVjdXJzby1iZy1saWJyby5qcGcpOyB9XG4gIGJvZHkgI2Jvb2staW5kZXggI2luZGljZSAuY29sLW1haW4gLnVuaXQtY29udGVudCAubWF0ZXJpYWwgLml0ZW0gLmltYWdlbi52aWRlbzpiZWZvcmUsIGJvZHkgI2Jvb2staW5kZXggI2luZGljZSAuY29sLW1haW4gLnVuaXQtY29udGVudCAubWF0ZXJpYWwgLml0ZW0gLmltYWdlbi5tdXNpY2E6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vaW1hZ2VzL2NvbnRlbmlkby9yZWN1cnNvLWJnLW11bHRpbWVkaWEuanBnKTsgfVxuXG4uc2xpZGVyLWNvbnRyb2wsXG4jc3dpcGV2aWV3LXNsaWRlciB7XG4gIHotaW5kZXg6IDI7IH1cblxuLmNvbnRlbnQtd3JhcHBlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxuICAuY29udGVudC13cmFwcGVyICNhY3RpdmlkYWQgLmNvbnRlbnQsXG4gIC5jb250ZW50LXdyYXBwZXIgI3N3aXBldmlldy1zbGlkZXIgPiBkaXZbaWQqPXN3aXBldmlldy1tYXN0ZXJwYWdlLV0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG4gIC5jb250ZW50LXdyYXBwZXIgI2FjdGl2aWRhZCAuY29udGVudCAuY2Fyb3VzZWwtaW5uZXIgLml0ZW0tY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyB9XG4gIC5jb250ZW50LXdyYXBwZXI6bm90KC5saWJybyk6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIzYzNmNzc7XG4gICAgYm90dG9tOiAwO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuXG4uc2xpZGVyLWNvbnRyb2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIzYzNmOyB9XG5cbi5uYXZiYXItYm90dG9tIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyM2MzZjsgfVxuICAubmF2YmFyLWJvdHRvbSAuZWRpdCAuc2xpZGVyLWluZGljYXRvcnMgLmNvbmNhdC5hY3RpdmUsXG4gIC5uYXZiYXItYm90dG9tIC5zbGlkZXItaW5kaWNhdG9ycyAuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTIwNDFiO1xuICAgIGNvbG9yOiAjMjIzYzNmOyB9XG5cbi5zcGlubmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XG5cbi53aWRnZXRCYWNrZ3JvdW5kIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4vKiBMYXlvdXQgKi9cbi5nby1iYWNrLFxuI2xheW91dC1jb250YWluZXIgZGl2LmdvLWJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgZmxleDogbm9uZTsgfVxuICAuZ28tYmFjayBidXR0b24sXG4gICNsYXlvdXQtY29udGFpbmVyIGRpdi5nby1iYWNrIGJ1dHRvbiB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjJzIGVhc2UtaW4tb3V0OyB9XG4gICAgLmdvLWJhY2sgYnV0dG9uIHNwYW4sIC5nby1iYWNrIGJ1dHRvbjpiZWZvcmUsXG4gICAgI2xheW91dC1jb250YWluZXIgZGl2LmdvLWJhY2sgYnV0dG9uIHNwYW4sXG4gICAgI2xheW91dC1jb250YWluZXIgZGl2LmdvLWJhY2sgYnV0dG9uOmJlZm9yZSB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG4gICAgLmdvLWJhY2sgYnV0dG9uIHNwYW4sXG4gICAgI2xheW91dC1jb250YWluZXIgZGl2LmdvLWJhY2sgYnV0dG9uIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbiAgICAuZ28tYmFjayBidXR0b246YmVmb3JlLFxuICAgICNsYXlvdXQtY29udGFpbmVyIGRpdi5nby1iYWNrIGJ1dHRvbjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcXDIwMzlcIjtcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMzBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07IH1cbiAgICBAbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICAgICAgLmdvLWJhY2sgYnV0dG9uOmhvdmVyLFxuICAgICAgI2xheW91dC1jb250YWluZXIgZGl2LmdvLWJhY2sgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNjZTI0M2Q7IH0gfVxuICAgIC5nby1iYWNrIGJ1dHRvbjphY3RpdmUsXG4gICAgI2xheW91dC1jb250YWluZXIgZGl2LmdvLWJhY2sgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgY29sb3I6ICNjZTI0M2Q7IH1cblxuI2xheW91dC1jb250YWluZXIge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTsgfVxuICAjbGF5b3V0LWNvbnRhaW5lciAqIHtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cbiAgI2xheW91dC1jb250YWluZXIgLnNlY3Rpb24tdGl0bGUtMSxcbiAgI2xheW91dC1jb250YWluZXIgLnNlY3Rpb24tdGl0bGUtMixcbiAgI2xheW91dC1jb250YWluZXIgLnNlY3Rpb24tdGl0bGUtMyxcbiAgI2xheW91dC1jb250YWluZXIgLnNlY3Rpb24tdGl0bGUtNCxcbiAgI2xheW91dC1jb250YWluZXIgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDsgfVxuICAjbGF5b3V0LWNvbnRhaW5lciAuc2VjdGlvbi10aXRsZS0xIHtcbiAgICBmb250LXNpemU6IDYwcHg7IH1cbiAgI2xheW91dC1jb250YWluZXIgLnNlY3Rpb24tdGl0bGUtNCB7XG4gICAgZm9udC1zaXplOiAxOHB4OyB9XG4gICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cbiAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1oZWFkZXIge1xuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIzYzNmNTU7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMTAlICsgNzVweCk7XG4gICAgICB6LWluZGV4OiAyOyB9XG4gICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1oZWFkZXIgLmNvdXJzZS10aXRsZSB7XG4gICAgICAgIGZsZXg6IDI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxuICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1oZWFkZXIgLmNvdXJzZS10aXRsZSBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtOyB9XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1oZWFkZXIgLmNvdXJzZS10aXRsZSB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgI21haW4tc2NyZWVuICNjb3Vyc2UtaGVhZGVyIC5jb3Vyc2UtdGl0bGUgW2NsYXNzKj1zZWN0aW9uLXRpdGxlLV0ge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDQ4cHg7IH1cbiAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWhlYWRlciAuY291cnNlLXRpdGxlIHNwYW4ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7IH0gfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1oZWFkZXIgLmNvdXJzZS10aXRsZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4OyB9IH1cbiAgICAgICAgQG1lZGlhIChtYXgtaGVpZ2h0OiAzNzVweCksIChtYXgtd2lkdGg6IDQ3NnB4KSB7XG4gICAgICAgICAgI2xheW91dC1jb250YWluZXIgI21haW4tc2NyZWVuICNjb3Vyc2UtaGVhZGVyIC5jb3Vyc2UtdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7IH1cbiAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWhlYWRlciAuY291cnNlLXRpdGxlIFtjbGFzcyo9c2VjdGlvbi10aXRsZS1dIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgd29yZC1icmVhazoga2VlcC1hbGw7IH1cbiAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWhlYWRlciAuY291cnNlLXRpdGxlIHNwYW4ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7IH0gfVxuICAgICAgI2xheW91dC1jb250YWluZXIgI21haW4tc2NyZWVuICNjb3Vyc2UtaGVhZGVyIC5jb3Vyc2UtZXh0cmEge1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IH1cbiAgICAgICAgI2xheW91dC1jb250YWluZXIgI21haW4tc2NyZWVuICNjb3Vyc2UtaGVhZGVyIC5jb3Vyc2UtZXh0cmEgdWwge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1oZWFkZXIgLmNvdXJzZS1leHRyYSB1bCBsaSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIzYzNmO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgI2NlMjQzZDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDI1cHg7XG4gICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggLjNzIGVhc2UtaW47IH1cbiAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWhlYWRlciAuY291cnNlLWV4dHJhIHVsIGxpIGEge1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjsgfVxuICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1oZWFkZXIgLmNvdXJzZS1leHRyYSB1bCBsaSBhIHNwYW4ge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1oZWFkZXIgLmNvdXJzZS1leHRyYSB1bCBsaTphY3RpdmUge1xuICAgICAgICAgICAgICB3aWR0aDogNzUlOyB9XG4gICAgICAgICAgICBAbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1oZWFkZXIgLmNvdXJzZS1leHRyYSB1bCBsaTpob3ZlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDc1JTsgfSB9XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDc2cHgpIHtcbiAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgI21haW4tc2NyZWVuICNjb3Vyc2UtaGVhZGVyIC5jb3Vyc2UtZXh0cmEgdWwgbGkge1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1oZWFkZXIgLmNvdXJzZS1leHRyYSB1bCBsaSBzcGFuIHtcbiAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDsgfSB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0NzZweCkgYW5kIChob3ZlcjogaG92ZXIpIHtcbiAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1oZWFkZXIgLmNvdXJzZS1leHRyYSB1bCBsaTpob3ZlciB7XG4gICAgICB3aWR0aDogNzUlOyB9IH1cbiAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWhlYWRlciBkaXYge1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgI2xheW91dC1jb250YWluZXIgI21haW4tc2NyZWVuICNjb3Vyc2UtaGVhZGVyIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7IH0gfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSwgKG1heC1oZWlnaHQ6IDM3NXB4KSwgKG1heC13aWR0aDogNDc2cHgpIHtcbiAgICAgICAgI2xheW91dC1jb250YWluZXIgI21haW4tc2NyZWVuICNjb3Vyc2UtaGVhZGVyIHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9IH1cbiAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1jb250ZW50IHtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNDg7XG4gICAgICBmbGV4OiAyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAwIDEwJTsgfVxuICAgICAgI2xheW91dC1jb250YWluZXIgI21haW4tc2NyZWVuICNjb3Vyc2UtY29udGVudCAuc2xpZGVyLXdyYXBwZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWNvbnRlbnQgLnNsaWRlci13cmFwcGVyIC5zbGlkZXItbmF2Y29udHJvbCB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXgtd2lkdGg6IDc1cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7IH1cbiAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1jb250ZW50IC5zbGlkZXItd3JhcHBlciAuc2xpZGVyLW5hdmNvbnRyb2wgc3BhbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTsgfVxuICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgI21haW4tc2NyZWVuICNjb3Vyc2UtY29udGVudCAuc2xpZGVyLXdyYXBwZXIgLnNsaWRlci1uYXZjb250cm9sIHNwYW4gaSB7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMjIzYzNmO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1jb250ZW50IC5zbGlkZXItd3JhcHBlciAuc2xpZGVyLW5hdmNvbnRyb2wgc3BhbiBpOmhvdmVyOmJlZm9yZSwgI2xheW91dC1jb250YWluZXIgI21haW4tc2NyZWVuICNjb3Vyc2UtY29udGVudCAuc2xpZGVyLXdyYXBwZXIgLnNsaWRlci1uYXZjb250cm9sIHNwYW4gaTpob3ZlcjphZnRlciB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsgfVxuICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWNvbnRlbnQgLnNsaWRlci13cmFwcGVyIC5zbGlkZXItbmF2Y29udHJvbC5zbGlkZXItbmF2Y29udHJvbC1sZWZ0IGk6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJ1xcZjEwNCc7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07IH1cbiAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1jb250ZW50IC5zbGlkZXItd3JhcHBlciAuc2xpZGVyLW5hdmNvbnRyb2wuc2xpZGVyLW5hdmNvbnRyb2wtbGVmdCBpOmJlZm9yZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDRlbTsgfVxuICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWNvbnRlbnQgLnNsaWRlci13cmFwcGVyIC5zbGlkZXItbmF2Y29udHJvbC5zbGlkZXItbmF2Y29udHJvbC1sZWZ0IGk6aG92ZXI6YWZ0ZXIge1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAuMnM7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1jb250ZW50IC5zbGlkZXItd3JhcHBlciAuc2xpZGVyLW5hdmNvbnRyb2wuc2xpZGVyLW5hdmNvbnRyb2wtbGVmdCBpOmhvdmVyOmJlZm9yZSwgI2xheW91dC1jb250YWluZXIgI21haW4tc2NyZWVuICNjb3Vyc2UtY29udGVudCAuc2xpZGVyLXdyYXBwZXIgLnNsaWRlci1uYXZjb250cm9sLnNsaWRlci1uYXZjb250cm9sLWxlZnQgaTpob3ZlcjphZnRlciB7XG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogYXJyb3dGYWRlTGVmdDsgfVxuXG5Aa2V5ZnJhbWVzIGFycm93RmFkZUxlZnQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7IH1cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpOyB9XG4gIDM3JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTsgfVxuICAzOCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKSBzY2FsZSgwLjUpO1xuICAgIG9wYWNpdHk6IDA7IH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxOyB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxOyB9IH1cbiAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1jb250ZW50IC5zbGlkZXItd3JhcHBlciAuc2xpZGVyLW5hdmNvbnRyb2wuc2xpZGVyLW5hdmNvbnRyb2wtcmlnaHQgaTpiZWZvcmUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lOyB9XG4gICAgICAgICAgI2xheW91dC1jb250YWluZXIgI21haW4tc2NyZWVuICNjb3Vyc2UtY29udGVudCAuc2xpZGVyLXdyYXBwZXIgLnNsaWRlci1uYXZjb250cm9sLnNsaWRlci1uYXZjb250cm9sLXJpZ2h0IGk6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJ1xcZjEwNSc7XG4gICAgICAgICAgICBmb250LXNpemU6IDRlbTsgfVxuICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWNvbnRlbnQgLnNsaWRlci13cmFwcGVyIC5zbGlkZXItbmF2Y29udHJvbC5zbGlkZXItbmF2Y29udHJvbC1yaWdodCBpOmhvdmVyOmJlZm9yZSB7XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC4xcztcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWNvbnRlbnQgLnNsaWRlci13cmFwcGVyIC5zbGlkZXItbmF2Y29udHJvbC5zbGlkZXItbmF2Y29udHJvbC1yaWdodCBpOmhvdmVyOmJlZm9yZSwgI2xheW91dC1jb250YWluZXIgI21haW4tc2NyZWVuICNjb3Vyc2UtY29udGVudCAuc2xpZGVyLXdyYXBwZXIgLnNsaWRlci1uYXZjb250cm9sLnNsaWRlci1uYXZjb250cm9sLXJpZ2h0IGk6aG92ZXI6YWZ0ZXIge1xuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGFycm93RmFkZVJpZ2h0OyB9XG5cbkBrZXlmcmFtZXMgYXJyb3dGYWRlUmlnaHQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7IH1cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7IH1cbiAgMzclIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7IH1cbiAgMzglIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpIHNjYWxlKDAuNSk7XG4gICAgb3BhY2l0eTogMDsgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7IH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7IH0gfVxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWNvbnRlbnQgLnNsaWRlci13cmFwcGVyIC5zbGlkZXItbmF2Y29udHJvbCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfSB9XG4gICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWNvbnRlbnQgLnNsaWRlci13cmFwcGVyIC5zbGlkZXItaXRlbXRyYWNrIHtcbiAgICAgICAgICBmbGV4OiA5O1xuICAgICAgICAgIGZsZXgtZ3JvdzogMztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDsgfVxuICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWNvbnRlbnQgLnNsaWRlci13cmFwcGVyIC5zbGlkZXItaXRlbXRyYWNrIC5zbGlkZXItY2Fyb3VzZWwge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7IH1cbiAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1jb250ZW50IC5zbGlkZXItd3JhcHBlciAuc2xpZGVyLWl0ZW10cmFjayAuc2xpZGVyLWl0ZW0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FlYTtcbiAgICAgICAgICAgIGZsZXg6IHVuc2V0O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDIyMHB4OyB9XG4gICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1jb250ZW50IC5zbGlkZXItd3JhcHBlciAuc2xpZGVyLWl0ZW10cmFjayAuc2xpZGVyLWl0ZW0sXG4gICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1jb250ZW50IC5zbGlkZXItd3JhcHBlciAuc2xpZGVyLWl0ZW10cmFjayAuc2xpZGVyLWl0ZW0gKiB7XG4gICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOyB9XG4gICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1jb250ZW50IC5zbGlkZXItd3JhcHBlciAuc2xpZGVyLWl0ZW10cmFjayAuc2xpZGVyLWl0ZW0gYSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMjIzYzNmO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7IH1cbiAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWNvbnRlbnQgLnNsaWRlci13cmFwcGVyIC5zbGlkZXItaXRlbXRyYWNrIC5zbGlkZXItaXRlbSAuc2VjdGlvbi10aXRsZSB7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2EyMDQxYiAyNSUsICNmYTQ1NWYpO1xuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDA7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1jb250ZW50IC5zbGlkZXItd3JhcHBlciAuc2xpZGVyLWl0ZW10cmFjayAuc2xpZGVyLWl0ZW0gLnNlY3Rpb24tdGl0bGUgaDMge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4OyB9XG4gICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWNvbnRlbnQgLnNsaWRlci13cmFwcGVyIC5zbGlkZXItaXRlbXRyYWNrIC5zbGlkZXItaXRlbSAuc2VjdGlvbi10aXRsZTpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2EyMDQxYiBjYWxjKC0xMDAlIC0gNTJweCksICNmYTQ1NWYgY2FsYygxMDAlICsgMTJweCkpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCUgMCAwIDA7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICB0b3A6IGNhbGMoMTAwJSAtIDEycHgpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAyOyB9XG4gICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1jb250ZW50IC5zbGlkZXItd3JhcHBlciAuc2xpZGVyLWl0ZW10cmFjayAuc2xpZGVyLWl0ZW0gLnNlY3Rpb24tZGVzYyB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQ1JTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4OyB9XG4gICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWNvbnRlbnQgLnNsaWRlci13cmFwcGVyIC5zbGlkZXItaXRlbXRyYWNrIC5zbGlkZXItaXRlbSAuc2VjdGlvbi1kZXNjIC5zZWN0aW9uLXRpdGxlLTQge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7IH1cbiAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWNvbnRlbnQgLnNsaWRlci13cmFwcGVyIC5zbGlkZXItaXRlbXRyYWNrIC5zbGlkZXItaXRlbSAuc2VjdGlvbi1udW1iZXIge1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIzYzNmO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgICBib3R0b206IC0yOHB4O1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleDogdW5zZXQ7XG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDUycHg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBsZWZ0OiAyNHB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MnB4O1xuICAgICAgICAgICAgICB6LWluZGV4OiAxOyB9XG4gICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWNvbnRlbnQgLnNsaWRlci13cmFwcGVyIC5zbGlkZXItaXRlbXRyYWNrIC5zbGlkZXItaXRlbSAuc2VjdGlvbi1udW1iZXIgc3BhbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7IH1cbiAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWNvbnRlbnQgLnNsaWRlci13cmFwcGVyIC5zbGlkZXItaXRlbXRyYWNrIC5zbGlkZXItaXRlbTphZnRlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjNjM2Y7XG4gICAgICAgICAgICAgIGJvdHRvbTogLThweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICBsZWZ0OiA0NHB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAyNHB4KTtcbiAgICAgICAgICAgICAgei1pbmRleDogMDsgfVxuICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgI21haW4tc2NyZWVuICNjb3Vyc2UtY29udGVudCAuc2xpZGVyLXdyYXBwZXIgLnNsaWRlci1pdGVtdHJhY2sgLnNsaWRlci1pdGVtOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lOyB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDsgfSB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDc2cHgpIHtcbiAgICAgICAgI2xheW91dC1jb250YWluZXIgI21haW4tc2NyZWVuICNjb3Vyc2UtY29udGVudCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDsgfSB9XG4gICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuZ28tYmFjayBzcGFuIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7IH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDc2cHgpIHtcbiAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuZ28tYmFjayBidXR0b24ge1xuICAgICAgICBoZWlnaHQ6IGF1dG87IH1cbiAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5nby1iYWNrIGJ1dHRvbjpiZWZvcmUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDsgfSB9XG4gICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIHtcbiAgICAgIGZsZXg6IDEwO1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIG1hcmdpbjogMCAxMCU7XG4gICAgICBwYWRkaW5nOiAwIDUwcHg7XG4gICAgICB6LWluZGV4OiAyOyB9XG4gICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tZGF0YSB7XG4gICAgICAgIGZsZXg6IHVuc2V0O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogMjkwcHg7IH1cbiAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWRhdGEgKiB7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cbiAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWRhdGEgLnNlY3Rpb24tdGl0bGUge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2EyMDQxYjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNhMjA0MWIgMjUlLCAjZmE0NTVmKTtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWRhdGEgLnNlY3Rpb24tdGl0bGUgaDEge1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBtYXJnaW46IDAgMTVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cbiAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tZGF0YSAuc2VjdGlvbi10aXRsZTpiZWZvcmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjY2UyNDNkIC0xNDAlLCAjZmE0NTVmIDUwJSwgI2ZkYTJhZiAxNzAlKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDEwMCU7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAtMTJweDtcbiAgICAgICAgICAgIHRvcDogMjUlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgICB6LWluZGV4OiAyOyB9XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1kYXRhIC5zZWN0aW9uLXRpdGxlOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgdG9wOiAxNiU7IH0gfVxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1kYXRhIC5zZWN0aW9uLXRpdGxlOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgdG9wOiAyMCU7IH0gfVxuICAgICAgICAgIEBtZWRpYSAobWF4LWhlaWdodDogMzc1cHgpIHtcbiAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1kYXRhIC5zZWN0aW9uLXRpdGxlIGgxIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4OyB9IH1cbiAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWRhdGEgLmRlc2Mtd3JhcHBlciB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgZmxleDogNTtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1kYXRhIC5kZXNjLXdyYXBwZXIgLnNlY3Rpb24tZGVzYyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGhlaWdodDogNjUlO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tZGF0YSAuZGVzYy13cmFwcGVyIC5zZWN0aW9uLWRlc2MgW2NsYXNzKj1cInNlY3Rpb24tdGl0bGUtXCJdIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwOyB9XG4gICAgICAgICAgICAgIEBtZWRpYSAobWF4LWhlaWdodDogMzc1cHgpIHtcbiAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tZGF0YSAuZGVzYy13cmFwcGVyIC5zZWN0aW9uLWRlc2MgW2NsYXNzKj1cInNlY3Rpb24tdGl0bGUtXCJdIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDsgfSB9XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDc2cHgpIHtcbiAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWRhdGEgLmRlc2Mtd3JhcHBlciAuc2VjdGlvbi1kZXNjOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogY2FsYygoMzBweCAvIDIpICogLTEpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4OyB9IH1cbiAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tZGF0YSAuZGVzYy13cmFwcGVyIC5zZWN0aW9uLW51bWJlciB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyM2MzZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICBib3R0b206IGNhbGMoOTAlIC0gMTAwJSk7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4OiB1bnNldDtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgaGVpZ2h0OiA5NXB4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBsZWZ0OiAyNHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDk1cHg7XG4gICAgICAgICAgICB6LWluZGV4OiAxOyB9XG4gICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tZGF0YSAuZGVzYy13cmFwcGVyIC5zZWN0aW9uLW51bWJlciBzcGFuIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA0N3B4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwOyB9XG4gICAgICAgICAgICBAbWVkaWEgKG1heC1oZWlnaHQ6IDM3NXB4KSB7XG4gICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1kYXRhIC5kZXNjLXdyYXBwZXIgLnNlY3Rpb24tbnVtYmVyIHtcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7IH1cbiAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tZGF0YSAuZGVzYy13cmFwcGVyIC5zZWN0aW9uLW51bWJlciBzcGFuIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDsgfSB9XG4gICAgICAgIEBtZWRpYSAobWF4LWhlaWdodDogMzc1cHgpIHtcbiAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tZGF0YSB7XG4gICAgICAgICAgICBmbGV4OiAxOyB9IH1cbiAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyM2MzZjtcbiAgICAgICAgZmxleDogMjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicyB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyM2MzZjtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cbiAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicyAudGFiIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmODg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2UtaW4tb3V0OyB9XG4gICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicyAudGFiIFtjbGFzcyo9XCJzZWN0aW9uLXRpdGxlLVwiXSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDE1cHg7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMgLnRhYi5hY3RpdmUge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMgLnRhYjpub3QoLmFjdGl2ZSk6aG92ZXIgW2NsYXNzKj1cInNlY3Rpb24tdGl0bGUtXCJdIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNhMjA0MWI7IH1cbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMgLnRhYiBbY2xhc3MqPVwic2VjdGlvbi10aXRsZS1cIl0ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDsgfSB9XG4gICAgICAgICAgQG1lZGlhIChtYXgtaGVpZ2h0OiAzNzVweCkge1xuICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMge1xuICAgICAgICAgICAgICBmbGV4OiAzOyB9IH1cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDc2cHgpIHtcbiAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzIHtcbiAgICAgICAgICAgICAgZmxleDogMjsgfSB9XG4gICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQge1xuICAgICAgICAgIGZsZXg6IDg7XG4gICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IHtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMCA0MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHRvcDogMDsgfVxuICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAudW5pdC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgZmxleDogbm9uZTsgfVxuICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAudW5pdC1jb250ZW50LFxuICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAucmVzb3VyY2VzLWNvbnRlbnQsXG4gICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC5uby1yZXNvdXJjZXMge1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cbiAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAudW5pdC1jb250ZW50IC5zZXBhcmF0b3IsXG4gICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQgLnVuaXQtY29udGVudCAuY29udGVudC1pdGVtLFxuICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC5yZXNvdXJjZXMtY29udGVudCAuc2VwYXJhdG9yLFxuICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC5yZXNvdXJjZXMtY29udGVudCAuY29udGVudC1pdGVtLFxuICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC5uby1yZXNvdXJjZXMgLnNlcGFyYXRvcixcbiAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAubm8tcmVzb3VyY2VzIC5jb250ZW50LWl0ZW0ge1xuICAgICAgICAgICAgICAgIGZsZXg6IHVuc2V0O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cbiAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAudW5pdC1jb250ZW50IC5zZXBhcmF0b3IsXG4gICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQgLnJlc291cmNlcy1jb250ZW50IC5zZXBhcmF0b3IsXG4gICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQgLm5vLXJlc291cmNlcyAuc2VwYXJhdG9yIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4OyB9XG4gICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQgLnVuaXQtY29udGVudCAuY29udGVudC1pdGVtLFxuICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC5yZXNvdXJjZXMtY29udGVudCAuY29udGVudC1pdGVtLFxuICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC5uby1yZXNvdXJjZXMgLmNvbnRlbnQtaXRlbSB7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYzcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDU1cHg7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGNvbG9yO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxuICAgICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQgLnVuaXQtY29udGVudCAuY29udGVudC1pdGVtIC5jb250ZW50LWltZyxcbiAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC5yZXNvdXJjZXMtY29udGVudCAuY29udGVudC1pdGVtIC5jb250ZW50LWltZyxcbiAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC5uby1yZXNvdXJjZXMgLmNvbnRlbnQtaXRlbSAuY29udGVudC1pbWcge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2EyMDQxYjtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogNXB4IDBweCAycHggMXB4ICMwMDAwMDAyZTtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc0cHg7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICBsZWZ0OiAtMzBweDtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NHB4OyB9XG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC1oZWlnaHQ6IDEwMjRweCkge1xuICAgICAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC51bml0LWNvbnRlbnQgLmNvbnRlbnQtaXRlbSAuY29udGVudC1pbWcsXG4gICAgICAgICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQgLnJlc291cmNlcy1jb250ZW50IC5jb250ZW50LWl0ZW0gLmNvbnRlbnQtaW1nLFxuICAgICAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC5uby1yZXNvdXJjZXMgLmNvbnRlbnQtaXRlbSAuY29udGVudC1pbWcge1xuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTZweDtcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTZweDtcbiAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAzcHggMHB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE4KTsgfSB9XG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC1oZWlnaHQ6IDM3NXB4KSwgKG1heC13aWR0aDogNDc2cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAudW5pdC1jb250ZW50IC5jb250ZW50LWl0ZW0gLmNvbnRlbnQtaW1nLFxuICAgICAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC5yZXNvdXJjZXMtY29udGVudCAuY29udGVudC1pdGVtIC5jb250ZW50LWltZyxcbiAgICAgICAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAubm8tcmVzb3VyY2VzIC5jb250ZW50LWl0ZW0gLmNvbnRlbnQtaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDFweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7IH0gfVxuICAgICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQgLnVuaXQtY29udGVudCAuY29udGVudC1pdGVtIC5jb250ZW50LWJ1dHRvbnMsXG4gICAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAucmVzb3VyY2VzLWNvbnRlbnQgLmNvbnRlbnQtaXRlbSAuY29udGVudC1idXR0b25zLFxuICAgICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQgLm5vLXJlc291cmNlcyAuY29udGVudC1pdGVtIC5jb250ZW50LWJ1dHRvbnMge1xuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyB9XG4gICAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAudW5pdC1jb250ZW50IC5jb250ZW50LWl0ZW0gLmNvbnRlbnQtbG9jazpiZWZvcmUsXG4gICAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAucmVzb3VyY2VzLWNvbnRlbnQgLmNvbnRlbnQtaXRlbSAuY29udGVudC1sb2NrOmJlZm9yZSxcbiAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC5uby1yZXNvdXJjZXMgLmNvbnRlbnQtaXRlbSAuY29udGVudC1sb2NrOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaW1hZ2VzL3BhZGxvY2stc3ByaXRlLnBuZyk7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuNXMgY3ViaWMtYmV6aWVyKDAuNjUsIDAuMDUsIDAuMzYsIDEpO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7IH1cbiAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC51bml0LWNvbnRlbnQgLmNvbnRlbnQtaXRlbSAuY29udGVudC1sb2NrLmxvY2tlZDpiZWZvcmUsXG4gICAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAucmVzb3VyY2VzLWNvbnRlbnQgLmNvbnRlbnQtaXRlbSAuY29udGVudC1sb2NrLmxvY2tlZDpiZWZvcmUsXG4gICAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAubm8tcmVzb3VyY2VzIC5jb250ZW50LWl0ZW0gLmNvbnRlbnQtbG9jay5sb2NrZWQ6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTQwcHg7IH1cbiAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC51bml0LWNvbnRlbnQgLmNvbnRlbnQtaXRlbSAuY29udGVudC1wYWdlLWNvdW50LFxuICAgICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQgLnJlc291cmNlcy1jb250ZW50IC5jb250ZW50LWl0ZW0gLmNvbnRlbnQtcGFnZS1jb3VudCxcbiAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC5uby1yZXNvdXJjZXMgLmNvbnRlbnQtaXRlbSAuY29udGVudC1wYWdlLWNvdW50IHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweDsgfVxuICAgICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQgLnVuaXQtY29udGVudCAuY29udGVudC1pdGVtOmFmdGVyLFxuICAgICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQgLnJlc291cmNlcy1jb250ZW50IC5jb250ZW50LWl0ZW06YWZ0ZXIsXG4gICAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAubm8tcmVzb3VyY2VzIC5jb250ZW50LWl0ZW06YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjYTIwNDFiIDI1JSwgI2ZhNDU1Zik7XG4gICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4OyB9XG4gICAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAudW5pdC1jb250ZW50IC5jb250ZW50LWl0ZW06YWN0aXZlLFxuICAgICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQgLnJlc291cmNlcy1jb250ZW50IC5jb250ZW50LWl0ZW06YWN0aXZlLFxuICAgICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQgLm5vLXJlc291cmNlcyAuY29udGVudC1pdGVtOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRhMmFmO1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICNhMjA0MWI7IH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICAgICAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAudW5pdC1jb250ZW50IC5jb250ZW50LWl0ZW06aG92ZXIsXG4gICAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC5yZXNvdXJjZXMtY29udGVudCAuY29udGVudC1pdGVtOmhvdmVyLFxuICAgICAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAubm8tcmVzb3VyY2VzIC5jb250ZW50LWl0ZW06aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRhMmFmO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2EyMDQxYjsgfSB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtaGVpZ2h0OiAzNzVweCksIChtYXgtd2lkdGg6IDQ3NnB4KSB7XG4gICAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC51bml0LWNvbnRlbnQgLmNvbnRlbnQtaXRlbSxcbiAgICAgICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQgLnJlc291cmNlcy1jb250ZW50IC5jb250ZW50LWl0ZW0sXG4gICAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC5uby1yZXNvdXJjZXMgLmNvbnRlbnQtaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYyg0OHB4ICsgNXB4KTsgfSB9XG4gICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC5uby1yZXNvdXJjZXMge1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC4yNTtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50LnRlYWNoZXItY29udGVudCAudW5pdC1jb250ZW50IC5jb250ZW50LWl0ZW0sXG4gICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50LnRlYWNoZXItY29udGVudCAucmVzb3VyY2VzLWNvbnRlbnQgLmNvbnRlbnQtaXRlbSB7XG4gICAgICAgICAgICAgIGhlaWdodDogNzJweDsgfVxuICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50LnRlYWNoZXItY29udGVudCAudW5pdC1jb250ZW50IC5jb250ZW50LWl0ZW0gLmNpcmNsZS1vdXRlcixcbiAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudC50ZWFjaGVyLWNvbnRlbnQgLnJlc291cmNlcy1jb250ZW50IC5jb250ZW50LWl0ZW0gLmNpcmNsZS1vdXRlciB7XG4gICAgICAgICAgICAgICAgbGVmdDogY2FsYyhjYWxjKDcycHgvMikgKiAtMSk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3MnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDcycHgvMik7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2EyMDQxYiA1MCUsICNmYTQ1NWYgNTElKTtcbiAgICAgICAgICAgICAgICBmbGV4OiBub25lO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IGNpcmNsZShjYWxjKDcycHgvMikgYXQgcmlnaHQpO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtY2xpcC1wYXRoOiBjaXJjbGUoY2FsYyg3MnB4LzIpIGF0IHJpZ2h0KTsgfVxuICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50LnRlYWNoZXItY29udGVudCAudW5pdC1jb250ZW50IC5jb250ZW50LWl0ZW0gLmNpcmNsZS1pbm5lcixcbiAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudC50ZWFjaGVyLWNvbnRlbnQgLnJlc291cmNlcy1jb250ZW50IC5jb250ZW50LWl0ZW0gLmNpcmNsZS1pbm5lciB7XG4gICAgICAgICAgICAgICAgbGVmdDogY2FsYyhjYWxjKGNhbGMoNzJweC8yKSAtIDRweCkgKiAtMSk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKGNhbGMoY2FsYyg3MnB4LzIpIC0gNHB4KSAqIDIpO1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKGNhbGMoNzJweC8yKSAtIDRweCk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyM2MzZjtcbiAgICAgICAgICAgICAgICBmbGV4OiBub25lO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IGNpcmNsZShjYWxjKGNhbGMoNzJweC8yKSAtIDRweCkgYXQgcmlnaHQpO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtY2xpcC1wYXRoOiBjaXJjbGUoY2FsYyhjYWxjKDcycHgvMikgLSA0cHgpIGF0IHJpZ2h0KTsgfVxuICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50LnRlYWNoZXItY29udGVudCAudW5pdC1jb250ZW50IC5jb250ZW50LWl0ZW0gLmNvbnRlbnQtaW1nLFxuICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50LnRlYWNoZXItY29udGVudCAucmVzb3VyY2VzLWNvbnRlbnQgLmNvbnRlbnQtaXRlbSAuY29udGVudC1pbWcge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNhMjA0MWIgNTAlLCAjZmE0NTVmIDUxJSk7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDU4cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDU4cHg7IH1cbiAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50LnRlYWNoZXItY29udGVudCAudW5pdC1jb250ZW50IC5jb250ZW50LWl0ZW0gLmNvbnRlbnQtaW1nOmJlZm9yZSxcbiAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50LnRlYWNoZXItY29udGVudCAucmVzb3VyY2VzLWNvbnRlbnQgLmNvbnRlbnQtaXRlbSAuY29udGVudC1pbWc6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGltYWdlcy9yZXNvdXJjZXMtaWNvbnMucG5nKTtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDExOHB4IDYwcHg7XG4gICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4OyB9XG4gICAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudC50ZWFjaGVyLWNvbnRlbnQgLnVuaXQtY29udGVudCAuY29udGVudC1pdGVtIC5jb250ZW50LWltZy50eXBlLTI6YmVmb3JlLFxuICAgICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQudGVhY2hlci1jb250ZW50IC5yZXNvdXJjZXMtY29udGVudCAuY29udGVudC1pdGVtIC5jb250ZW50LWltZy50eXBlLTI6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04OXB4IDBweDsgfVxuICAgICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQudGVhY2hlci1jb250ZW50IC51bml0LWNvbnRlbnQgLmNvbnRlbnQtaXRlbSAuY29udGVudC1pbWcudHlwZS0zOmJlZm9yZSxcbiAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50LnRlYWNoZXItY29udGVudCAucmVzb3VyY2VzLWNvbnRlbnQgLmNvbnRlbnQtaXRlbSAuY29udGVudC1pbWcudHlwZS0zOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDVweCAtMzFweDsgfVxuICAgICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQudGVhY2hlci1jb250ZW50IC51bml0LWNvbnRlbnQgLmNvbnRlbnQtaXRlbSAuY29udGVudC1pbWcudHlwZS01OmJlZm9yZSxcbiAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50LnRlYWNoZXItY29udGVudCAucmVzb3VyY2VzLWNvbnRlbnQgLmNvbnRlbnQtaXRlbSAuY29udGVudC1pbWcudHlwZS01OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDVweCAwcHg7IH1cbiAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50LnRlYWNoZXItY29udGVudCAudW5pdC1jb250ZW50IC5jb250ZW50LWl0ZW0gLmNvbnRlbnQtaW1nLnR5cGUtNjpiZWZvcmUsXG4gICAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudC50ZWFjaGVyLWNvbnRlbnQgLnJlc291cmNlcy1jb250ZW50IC5jb250ZW50LWl0ZW0gLmNvbnRlbnQtaW1nLnR5cGUtNjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTg5cHggLTMxcHg7IH1cbiAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50LnRlYWNoZXItY29udGVudCAudW5pdC1jb250ZW50IC5jb250ZW50LWl0ZW0gLmNvbnRlbnQtaW1nLnR5cGUtNzpiZWZvcmUsXG4gICAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudC50ZWFjaGVyLWNvbnRlbnQgLnJlc291cmNlcy1jb250ZW50IC5jb250ZW50LWl0ZW0gLmNvbnRlbnQtaW1nLnR5cGUtNzpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0zMXB4OyB9XG4gICAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudC50ZWFjaGVyLWNvbnRlbnQgLnVuaXQtY29udGVudCAuY29udGVudC1pdGVtIC5jb250ZW50LWltZy50eXBlLTg6YmVmb3JlLFxuICAgICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQudGVhY2hlci1jb250ZW50IC5yZXNvdXJjZXMtY29udGVudCAuY29udGVudC1pdGVtIC5jb250ZW50LWltZy50eXBlLTg6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAwcHg7IH1cbiAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50LmFjdGl2ZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiB7XG4gICAgICAgICAgZmxleDogMjA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1heC13aWR0aDogdW5zZXQ7XG4gICAgICAgICAgcGFkZGluZzogMCAyJTsgfSB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDc2cHgpIHtcbiAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWRhdGEge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvOyB9XG4gICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tZGF0YSAuc2VjdGlvbi10aXRsZSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7IH1cbiAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWRhdGEgLnNlY3Rpb24tdGl0bGUgaDEge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7IH1cbiAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWRhdGEgLnNlY3Rpb24tdGl0bGU6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiB1bnNldDsgfVxuICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWRhdGEgLmRlc2Mtd3JhcHBlciB7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICAgICAgICBmbGV4OiAyO1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XG4gICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1kYXRhIC5kZXNjLXdyYXBwZXIgLnNlY3Rpb24tZGVzYyB7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bzsgfVxuICAgICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1kYXRhIC5kZXNjLXdyYXBwZXIgLnNlY3Rpb24tZGVzYyBbY2xhc3MqPXNlY3Rpb24tdGl0bGUtXSB7XG4gICAgICAgICAgICAgICAgICBmbGV4OiA1O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7IH1cbiAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tZGF0YSAuZGVzYy13cmFwcGVyIC5zZWN0aW9uLWRlc2MgLnNlY3Rpb24tbnVtYmVyIHtcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogYXV0bztcbiAgICAgICAgICAgICAgICAgIGZsZXg6IGluaXRpYWw7XG4gICAgICAgICAgICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogNjBweDsgfVxuICAgICAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWRhdGEgLmRlc2Mtd3JhcHBlciAuc2VjdGlvbi1kZXNjIC5zZWN0aW9uLW51bWJlciBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4OyB9IH1cbiAgI2xheW91dC1jb250YWluZXIgLnNlY3Rpb24tbmF2aWdhdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDMsIDE2NiwgMTczLCAwLjIpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAxNDVweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IGNhbGMoNTAlIC0gKDE0NXB4LzIpKTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGNvbG9yO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIHotaW5kZXg6IDM7IH1cbiAgICAjbGF5b3V0LWNvbnRhaW5lciAuc2VjdGlvbi1uYXZpZ2F0aW9uIGkge1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgICAjbGF5b3V0LWNvbnRhaW5lciAuc2VjdGlvbi1uYXZpZ2F0aW9uIGk6YmVmb3JlIHtcbiAgICAgICAgZm9udC1zaXplOiA3MnB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG4gICAgI2xheW91dC1jb250YWluZXIgLnNlY3Rpb24tbmF2aWdhdGlvbjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgY29sb3I6ICMyMjNjM2Y7IH1cbiAgICAjbGF5b3V0LWNvbnRhaW5lciAuc2VjdGlvbi1uYXZpZ2F0aW9uLmxlZnQge1xuICAgICAgYm9yZGVyLXJhZGl1czogMCBjYWxjKDE0NXB4LzIpIGNhbGMoMTQ1cHgvMikgMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0OyB9XG4gICAgI2xheW91dC1jb250YWluZXIgLnNlY3Rpb24tbmF2aWdhdGlvbi5yaWdodCB7XG4gICAgICBib3JkZXItcmFkaXVzOiBjYWxjKDE0NXB4LzIpIDAgMCBjYWxjKDE0NXB4LzIpO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDsgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NzZweCkge1xuICAgICAgI2xheW91dC1jb250YWluZXIgLnNlY3Rpb24tbmF2aWdhdGlvbiB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KTsgfSB9XG4gICNsYXlvdXQtY29udGFpbmVyICo6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzNywgMjM3LCAyMzcsIDAuMjUpO1xuICAgIHdpZHRoOiA0cHg7XG4gICAgaGVpZ2h0OiA0cHg7IH1cbiAgI2xheW91dC1jb250YWluZXIgKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNBMjA0MUI7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDsgfVxuICAjbGF5b3V0LWNvbnRhaW5lciAqOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyB9XG4gICNsYXlvdXQtY29udGFpbmVyIGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxOyB9XG4gICNsYXlvdXQtY29udGFpbmVyOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyM2MzZjc3O1xuICAgIGJvdHRvbTogMDtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgI2xheW91dC1jb250YWluZXIge1xuICAgICAgb3ZlcmZsb3c6IGF1dG87IH0gfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==*/
