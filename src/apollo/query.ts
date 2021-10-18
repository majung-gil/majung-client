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
        rep_category {
          category_color
        }
      }
    }
  }
`;

export const SELECT_CAFE_ONE = gql`
  query select_cafe($cafe_idx: Float!) {
    select_cafe(cafe_idx: $cafe_idx) {
      cafe_idx
      cafe_name
      cafe_phone
      cafe_address
      cafe_lat
      cafe_lng
      cafe_lat
      cafe_img {
        cafe_img_idx
        cafe_img_url
      }
      cafe_open_time
      cafe_close_time
      is_delivery
      is_eat
      is_parking
      category
      is_visit
      cafe_insta
      rep_category {
        category_color
      }
    }
  }
`;

export const SELECT_CATEGORY_LIST = gql`
  query select_category_list {
    select_category_list {
      rows {
        category_idx
        category_name
        category_color
      }
    }
  }
`;

export const SELECT_CAFE_CURATION = gql`
  query select_cafe_category($category_idx: Float!) {
    select_cafe_category(category_idx: $category_idx) {
      rows {
        cafe_idx
        cafe_name
        cafe_phone
        cafe_address
        cafe_lat
        cafe_lng
        cafe_lat
        category
        cafe_img {
          cafe_img_idx
          cafe_img_url
        }
        cafe_open_time
        cafe_close_time
        is_delivery
        is_eat
        is_parking
        cafe_insta
        rep_category_idx
        rep_category {
          category_color
        }
      }
    }
  }
`;
