import PageBanner from '@/components/UI/PAges/PageBanner'
import RootLayout from '@/components/layouts/RootLayout';
import Link from 'next/link';
import { baseUrl } from '@/components/utils/url';
import { IFlightDeal } from '@/components/utils/Types';
import FlightCard from '@/components/UI/PAges/FlightCard';
import { AiOutlineSearch } from 'react-icons/ai';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { Checkbox, Label } from 'flowbite-react';
import PaginationDeals from '@/components/UI/PAges/PaginationDeals';
import BackToTopButton from '@/components/UI/PAges/BackToTopButton';

export default function WhereWEFlyPage({ flightsPlan }: { flightsPlan: IFlightDeal[] }) {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchedDeals, setSearchedDeals] = useState<IFlightDeal[]>([]);
    const [selectedCity, setSelectedCity] = useState<string[]>([]);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [searched, setSearched] = useState(false);
    const [priceSliderValue, setPriceSliderValue] = useState<number>(1500);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(9);



    //Serached Filter Functionality
    useEffect(() => {
        const filteredDeals = flightsPlan?.filter((book: IFlightDeal) => {
            const lowerCaseQuery = searchQuery?.toLowerCase();
            return (
                book.from.toLowerCase().includes(lowerCaseQuery) ||
                book.to.toLowerCase().includes(lowerCaseQuery) ||
                book.status.toLowerCase().includes(lowerCaseQuery) ||
                book.price.toLowerCase().includes(lowerCaseQuery)
            );
        });
        setSearchedDeals(filteredDeals);
        setCurrentPage(1);

    }, [flightsPlan, searchQuery]);



    //checkBox Of City Name & Type  Functionality
    useEffect(() => {
        const filteredDeals = flightsPlan?.filter((book: IFlightDeal) => {
            const lowerCaseQuery = searchQuery?.toLowerCase();
            const hasMatchingCity = selectedCity.length === 0 || selectedCity.includes(book?.from) || selectedCity.includes(book?.to) || selectedCity.includes(book?.type);

            const isWithinPriceRange = parseInt(book.price) <= priceSliderValue;
            return (
                hasMatchingCity && isWithinPriceRange &&
                (book.from.toLowerCase().includes(lowerCaseQuery) ||
                    book.to.toLowerCase().includes(lowerCaseQuery) ||
                    book.type.toLowerCase().includes(lowerCaseQuery) ||
                    book.price.includes(lowerCaseQuery)
                )
            )
        });

        setSearchedDeals(filteredDeals);
    }, [flightsPlan, searchQuery, selectedCity, priceSliderValue]);



    //Handle Search Bar Filter
    const handleSearchFilter = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputRef.current) {
            setSearchQuery(inputRef.current.value);
            setSearched(true);
        }
    };


    //Handle CheckBox Filter
    const handleCheckboxChange = (event: FormEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setSelectedCity((prevselectedCity) => {
            if (prevselectedCity.includes(value)) {
                return prevselectedCity.filter((genre) => genre !== value);
            } else {
                return [...prevselectedCity, value];
            }
        });
    };



    //Handle Price Filter Slider
    const handlePriceSliderChange = (value: string) => {
        setPriceSliderValue(parseInt(value));
    };

    //Pagination Functionality

    //Get Current posts
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = searchedDeals?.slice(indexOfFirstPost, indexOfLastPost);

    //Change Page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    const handlePrevBtn = () => setCurrentPage(currentPage - 1);
    const handleNextBtn = () => setCurrentPage(currentPage + 1);



    // console.log(yearSliderValue);


    return (
        <>
            <div className='bg-lightBg'>
                <PageBanner>
                    <div className='text-center '>
                        <h1 className='text-5xl font-bold  '>OUR PACKAGES</h1>
                        <p className='text-semibold   mt-2'><Link href={"/"}>HOME</Link> / <span className='text-secondary'>OUR PACKAGES</span></p>
                    </div>
                </PageBanner>


                <div className='max-w-7xl mx-auto px-3 lg:px-0 py-10'>

                    <div className='flex items-center justify-center my-5'>
                        {/*Search Filtering */}
                        <form onSubmit={handleSearchFilter}>
                            <div className="w-52 lg:w-[500px]">
                                <div className="relative w-full">
                                    <input
                                        type="search"
                                        id="search-dropdown"
                                        ref={inputRef}
                                        onChange={(e) => {
                                            setSearchQuery(e.target.value);
                                            setSearched(true);
                                        }}
                                        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 rounded-md shadow-md border-l-2 border border-gray-300 focus:ring-primary focus:border-primary "
                                        placeholder="Search deals..." required />

                                    <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-primary rounded-r-lg border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                                        <AiOutlineSearch className="text-2xl" />
                                        <span className="sr-only">Search</span>
                                    </button>
                                </div>
                            </div>
                            {searchQuery && <p className='text-sm text-red-500'>Total search result: {searchedDeals?.length}</p>}
                        </form>
                    </div>

                    <div className='flex flex-col lg:flex-row  items-start gap-5 '>

                        <div className="w-full lg:w-1/5 bg-gray-200 px-2 pt-2 pb-10">
                            <h2 className="text-2xl font-bold text-center mb-10">Filter Deals</h2>

                            {/* CheckBox Sorting */}
                            <div className='flex flex-row lg:flex-col gap-5 items-start'>

                                {/* CheckBox Sorting By City Name */}

                                <div className="ml-2">
                                    <h2 className="text-lg  text-start">City Name</h2>

                                    <div className="flex items-center gap-2">
                                        <Checkbox
                                            id="Dubai"
                                            value="Dubai"
                                            checked={selectedCity.includes("Dubai")}
                                            onChange={handleCheckboxChange}
                                        />
                                        <Label htmlFor="Dubai">Dubai</Label>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Checkbox
                                            id="Dhaka"
                                            value="Dhaka"
                                            checked={selectedCity.includes("Dhaka")}
                                            onChange={handleCheckboxChange}
                                        />
                                        <Label htmlFor="Dhaka">Dhaka</Label>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Checkbox
                                            id="New-York"
                                            value={"New York"}
                                            checked={selectedCity.includes("New York")}
                                            onChange={handleCheckboxChange} />
                                        <Label htmlFor="New-York">New York</Label>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Checkbox
                                            id="Paris"
                                            checked={selectedCity.includes("Paris")}
                                            onChange={handleCheckboxChange}
                                            value={"Paris"} />
                                        <Label htmlFor="Paris">Paris</Label>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Checkbox
                                            id="Sydney"
                                            onChange={handleCheckboxChange}
                                            value={"Sydney"} />
                                        <Label htmlFor="Sydney">Sydney</Label>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Checkbox
                                            id="Maldives"
                                            onChange={handleCheckboxChange}
                                            value={"Maldives"} />
                                        <Label htmlFor="Maldives">Maldives</Label>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Checkbox
                                            id="Tokyo"
                                            onChange={handleCheckboxChange}
                                            value={"Tokyo"} />
                                        <Label htmlFor="Tokyo">Tokyo</Label>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Checkbox
                                            id="London"
                                            onChange={handleCheckboxChange}
                                            value={"London"} />
                                        <Label htmlFor="London">London</Label>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Checkbox
                                            id="Los-Angeles "
                                            onChange={handleCheckboxChange}
                                            // checked={selectedCity.includes("Los Angeles")}
                                            value={"Los Angeles"} />
                                        <Label htmlFor="Los-Angeles ">Los Angeles </Label>
                                    </div>
                                    <hr className='bg-primary my-2' />


                                </div>


                                {/*  Check Box Class Type */}
                                <div>
                                    <h2 className="text-lg  text-start">Class Type</h2>
                                    <div className="ml-2">
                                        <div className="flex items-center gap-2">
                                            <Checkbox
                                                id="Economy"
                                                checked={selectedCity.includes("Economy")}
                                                onChange={handleCheckboxChange}
                                                value={"Economy"} />
                                            <Label htmlFor="Economy">Economy</Label>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Checkbox
                                                id="Business"
                                                checked={selectedCity.includes("Business")}
                                                onChange={handleCheckboxChange}
                                                value={"Business"} />
                                            <Label htmlFor="Business">Business</Label>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Checkbox
                                                id="Premium-Economy"
                                                checked={selectedCity.includes("Premium Economy")}
                                                onChange={handleCheckboxChange}
                                                value={"Premium Economy"} />
                                            <Label htmlFor="Premium-Economy">Premium Economy</Label>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Checkbox
                                                id="First-Class"
                                                checked={selectedCity.includes("First Class")}
                                                onChange={handleCheckboxChange}
                                                value={"First Class"} />
                                            <Label htmlFor="First-Class">First Class</Label>
                                        </div>
                                    </div>
                                </div>

                            </div>



                            {/* Price Range Sorting */}
                            <div>
                                <div className="mt-8">
                                    <label htmlFor="year-slider" className="block text-base font-medium text-gray-700">
                                        Price Range
                                    </label>
                                    <input
                                        type="range"
                                        id="year-slider"
                                        name="year-slider"
                                        min="600"
                                        max="2000"
                                        step="10"
                                        value={priceSliderValue}
                                        onChange={(e) => handlePriceSliderChange(e.target.value)}
                                        className="mt-1 block w-full "
                                    />
                                    <p className="text-sm mt-2 text-center">{priceSliderValue}</p>
                                </div>
                            </div>


                        </div>


                        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 w-full lg:w-4/5'>
                            {
                                currentPosts?.map(data => <FlightCard key={data.id} flight={data} />)
                            }
                        </div>
                    </div>

                    {/* Pagination  */}
                    <div>
                        <PaginationDeals
                            currentPage={currentPage}
                            postPerPage={postPerPage}
                            totalPost={searchedDeals?.length}
                            handlePrevBtn={handlePrevBtn}
                            handleNextBtn={handleNextBtn}
                            paginate={paginate}
                        />

                    </div>


                </div>
            </div>

            <BackToTopButton />
        </>

    )
};

WhereWEFlyPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};



export const getServerSideProps = async () => {
    const res = await fetch(`${baseUrl}/deal`);
    const data = await res.json();

    return {
        props: {
            flightsPlan: data,
        }
    }
};
