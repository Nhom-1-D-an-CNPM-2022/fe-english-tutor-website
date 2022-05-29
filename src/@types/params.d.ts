interface IParamsSearchProduct {
  search?: string;
  page?: number;
  limit?: number;
  orderby?: string;
  votes?: string;
  typeproduct?: string;
  price?: string;
}

interface IParamsAddFavorite {
  productid?: string;
}

interface IParamsStatisticByYear {
  IDYear: number;
}

interface IRespondReservation {
  bookingId: string;
  tutorResponse: string;
}