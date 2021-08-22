import { gql } from '@apollo/client';

export const SELECT_CAFE_LIST = gql`
  query select_cafe_list {
    select_cafe_list {
      rows {
        cafe_idx
        cafe_name
        cafe_phone
        cafe_address
        cafe_lat
        cafe_lng
        category
        is_parking
        is_delivery
        is_eat
        is_visit
        cafe_open_time
        cafe_close_time
        cafe_img {
          cafe_idx
          cafe_img_idx
          cafe_img_url
        }
      }
    }
  }
`;
