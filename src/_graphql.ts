// gql
import gql from "graphql-tag";
import { print } from "graphql/language/printer";

//################################################## rentcompany end ##################################################//
// get
export const LAYOUTFOOTERINFO_QUERY = print(gql`
  query getLayoutFooterInfoQuery {
    getBasicinfo {
      site_name # 사이트명
      company_name #회사명
      company_repr # 사업자명
      company_tel # 대표전화번호
      company_email # 대표이메일
      company_addr1 # 주소
      company_reg_no # 사업자번호
      sale_reg_no # 통신사업자번호
      tour_reg_no # 여행사업자번호
      businessHours # 영업시간문구
    }
  }
`);
