import { useEffect, useState } from "react";
import { Title } from "../../types/Title";
import axios from "axios";
import ScrollList from "../../components/scrollList/ScrollList";
import Header from "../../components/header/Header";
import SearchBar from "../../components/searchBar/SearchBar";
import { Endpoints } from "../../util/Constants";
import { SearchQueryResult } from "../../types/SearchQueryResult";

export const HomePage = () => {
    const [query, setQuery] = useState<string>('')
    const [searchResults, setSearchResults] = useState<SearchQueryResult[]>([]);
    const [popularTitles, setPopularTitles] = useState<Title[]>([]);
    const [acclaimedTitles, setAcclaimedTitles] = useState<Title[]>([]);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        getPopularTitles();
        getAcclaimedTitles();
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            searchFromQuery(query);
        }, 200);
        return () => {
            clearTimeout(timer);
        };
    }, [query]);

    const searchFromQuery = async (query: string) => {
        if (query !== "") {
            const url = Endpoints.searchEndpoint + query
            const res = await axios.get(url);

            if (res.status === 200) {
                const results = res.data.results;
                setSearchResults(results)
            } else {
                setSearchResults([])
                setLoading(false)
            }
        } else {
            setSearchResults([])
            setLoading(false)
        }
    }

    const getPopularTitles = async () => {
        const url = Endpoints.popularMoviesEndpoint
        const titles = await axios.get(url).then(res => {
            const titles = res.data.items;
            return titles
        })

        setPopularTitles(titles)
    }

    const getAcclaimedTitles = async (): Promise<void> => {
        const url = Endpoints.topMoviesEndpoint
        const titles = await axios.get(url).then(res => {
            const titles = res.data.items;
            return titles
        })
        setAcclaimedTitles(titles)
        setLoading(false)
    }

    return (
        <div className="flex flex-col items-center justify-center bg-gray-800 ">
            <SearchBar query={query} setQuery={setQuery} results={searchResults} />
            <Header title={"Popular Movies"} />
            <div className='flex flex-col items-center justify-center'>
                <ScrollList titles={popularTitles} />
            </div>

            <Header title={"Critically Acclaimed"} />
            <ScrollList titles={acclaimedTitles} />
        </div>
    );
}

export const getServerSideProps = async (context) => {
    const url = Endpoints.popularMoviesEndpoint
    const popularTitles = await axios.get(url).then(res => {
        const titles = res.data.items;
        return titles
    })

    return {
        props: {
            popularTitles,

        },
    }
}

export default HomePage;