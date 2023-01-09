enum SortTypes {
  PRICE_ACS = 'price-acs',
  PRICE_DESC = 'price-desc',
  RATING_ASC = 'rating-acs',
  RATING_DESC = 'rating-desc',
  DISCOUNT_ACS = 'discount-acs',
  DISCOUNT_DESC = 'discount-desc',
}

const sortList = [
  {
    name: 'sort by price ACS',
    sortType: SortTypes['PRICE_ACS'],
  },
  {
    name: 'sort by price DESC',
    sortType: SortTypes['PRICE_DESC'],
  },
  {
    name: 'sort by rating ACS',
    sortType: SortTypes['RATING_ASC'],
  },
  {
    name: 'sort by rating DESC',
    sortType: SortTypes['RATING_DESC'],
  },
  {
    name: 'sort by discount ACS',
    sortType: SortTypes['DISCOUNT_ACS'],
  },
  {
    name: 'sort by discount DESC',
    sortType: SortTypes['DISCOUNT_DESC'],
  },
]

export { sortList, SortTypes }
