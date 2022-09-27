// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/*AntD overwrites*/
.custom-side-bar.ant-menu-dark .ant-menu-item {
  color: #334155 !important;
}

.custom-side-bar.ant-menu-dark .ant-menu-item:hover {
  color: #059669 !important;
}


.page-header{
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #0F172A;
}
.tab-text{
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}
.info-box{
  width: 864px;
  padding: 24px;
  gap: 20px;
  border: 1px solid #CBD5E1;
  border-radius: 4px;
  margin: 16px 0px;
}
.info-box-title{
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;

  display: flex;
  align-items: center;
  color: #059669;
}
.info-box-button{ 
  width: 81px;
  height: 36px;
  background: #FFFFFF;
  border: 1px solid #CBD5E1;
  border-radius: 2px;
}
.info-description{
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #1E293B;
}
.info-description-title{
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #1E293B;
  margin: 70px 0px 16px;
}
.info-experience-title{
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0F172A;
}
.info-experience-description{
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #475569;
}
.account-info-label{
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #757575;
}
.account-info-description{
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #424242;;
}
.margin-top-16{
  margin-top: 16px;
}
.margin-bottom-16{
  margin-bottom: 16px;
}
.input-box{
  height: 48px;
  background: #FFFFFF;
  border: 1px solid #CBD5E1;
  border-radius: 4px;
}
.ant-modal-body{
  padding-bottom: 0px;
}
.modal-cancel-button{
  padding: 12px 24px;
  gap: 16px;
  height: 48px;
  background: #FFFFFF;
  border: 1px solid #CBD5E1;
  border-radius: 2px;
  width: 120px;
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #1E293B;
  margin: 10px 0px;

}
.modal-save-button{
  padding: 12px 24px;
  gap: 16px;
  height: 48px;
  background: #047857;
  border-radius: 2px;
  width: 120px;
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
}
.ant-select-single.ant-select-lg:not(.ant-select-customize-input)
.ant-select-selector {
  height: 48px;
  align-items: center;
}
.ant-select:not(.ant-select-customize-input) .ant-select-selector {
  border: 1px solid #CBD5E1;
  border-radius: 4px;
  height: 48px;
  padding: 12px 16px;
  gap: 8px;
  align-items: center;
}
.radio-button-style{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px 8px 12px;
  gap: 8px;
  width: 300px;
  height: 36px;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 2px;
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #1E293B;

}
.ant-modal-content, .ant-modal-header{
  border-radius: 8px !important;
}
.ant-divider-horizontal{
  margin: 0px;
}
.account-edit-info{
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #334155;
}
.schedule-label{
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #334155;
}
.schedule-description{
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color:#404040;
}
.schedule-save-button{
  padding: 12px 24px;
  height: 48px;
  background: #047857;
  border-radius: 2px;
  width: 192px;
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
}
.schedule-button-text{
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
}
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
}

html {
  font-size: 62.5%;

  body {
    font-family: 'IBM Plex Sans', sans-serif; !important;
    line-height: 155%;
    font-size: 1.6rem;
  }
}


 /* Typography Utils */

 .text {
  &-center {
    text-align: center;
  }

  &-left {
    text-align: left;
  }

  &-right {
    text-align: right;
  }
}

.font {

  &-light {
    font-weight: 300;
  }
  
  &-normal {
    font-weight: 400;
  }

  &-bold {
    font-weight: 700;
  }

  &-medium {
    font-weight: 500;
  }

}


`;

export default GlobalStyle;
