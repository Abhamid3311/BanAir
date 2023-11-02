export interface IBannerData {
    id: number;
    title: string;
    desc: string;
    btn: string;
    btnLink: string;
    img: string;
}


export interface IFlightDeal {
    _id: number;
    from: string;
    startDate: string;
    to: string;
    endDate: string;
    price: string;
    type: string;
    status: string;
    ratings: number;
    img: string;
    desc: string;
    reviews: IReview[];
}

interface IReview {
    user: string;
    review: string;
}

export interface ITestimonial {
    _id: number;
    name: string;
    desi: string;
    country: string;
    comment: string;
    ratings: number;
}

export interface IPlans {
    id: number;
    name: string;
    Title: string;
    subTitle: string;
    desc: string;
    img: string;
}

export interface IUser {
    name: string;
    email: string;
    phoneNumber: string;
    password: string;
    checkbox: boolean
}

export interface ISlide {
    id: number;
    title: string;
    desc: string;
    btn: string;
    btnLink: string;
    img: string;
}

export interface BookingInfoProps {
    setTotalPerson: (total: number) => void;
    totalCost: number;
    purchaseDeals: IFlightDeal;
}

export interface PaymentInfoProps {
    purchaseDeals: IFlightDeal;
    totalPerson: number;
    setTotalCost: (cost: number) => void;
}


export type FlightType = {
    aircraft: null;
    airline: { name: string; iata: string; icao: string };
    arrival: { airport: string; estimated: string; iata: string; icao: string; scheduled: string; terminal: string; timezone: string };
    departure: { airport: string; estimated: string; gate: string; iata: string; icao: string; scheduled: string; terminal: string; timezone: string };
    flight: { iata: string; icao: string; number: string; codeshared: { airline_name: string; airline_iata: string; airline_icao: string; flight_number: string; flight_iata: string } };
    flight_date: string;
    flight_status: string;
    live: null;
};


export type AirportType = {
    airport_id: string;
    airport_name: string;
    city_iata_code: string;
    country_iso2: string;
    country_name: string;
    geoname_id: string;
    gmt: string;
    iata_code: string;
    icao_code: string;
    id: string;
    latitude: string;
    longitude: string;
    phone_number: string | null;
    timezone: string;
};

export interface BookingProps {
    airports: AirportType[];
    flights: FlightType[];
}