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
