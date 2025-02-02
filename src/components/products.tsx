"use client";
import { getProducts } from "@/sanity/sanity.query";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Products() {
    const [products, setProducts] = useState<any>([]);
    const [filteredProducts, setFilteredProducts] = useState<any>([]);
    const [sortOption, setSortOption] = useState("");
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get("search") ?? "";
    const [loader, setLoader] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        async function allProducts() {
            try {
                setLoader(true);
                const productsData = await getProducts();
                setProducts(productsData);
                setFilteredProducts(productsData);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoader(false);
            }
        }
        allProducts();
    }, []);

    useEffect(() => {
        if (searchQuery) {
            const filtered = products.filter((value: any) =>
                value.productName.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(products);
        }
    }, [searchQuery, products]);

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSortOption(value);

        const sortedProducts = [...products];
        if (value === "Price: Low to High") {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (value === "Price: High to Low") {
            sortedProducts.sort((a, b) => b.price - a.price);
        }
        setFilteredProducts(sortedProducts);
    };

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="min-h-screen relative">
            {/* Loader */}
            {loader && (
                <div className="inset-0 bg-gray-100 flex justify-center items-center z-50">
                    <div className="absolute top-40 flex items-center justify-center">
                        <div className="h-20 w-20 border-4 border-gray-400 border-t-transparent border-b-transparent rounded-full animate-spin"></div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className={`flex ${loader ? "opacity-50 pointer-events-none" : ""}`}>
                {/* Sidebar */}
                <div className="w-1/4 hidden md:block bg-gray-50 border-r py-8 px-4">
                    <h2 className="font-bold text-lg mb-4">
                        New <span className="text-gray-400">(500)</span>
                    </h2>
                    <ul className="space-y-2 text-gray-600">
                        <li>Shoes</li>
                        <li>Sports Bras</li>
                        <li>Tops & T-Shirts</li>
                        <li>Hoodies & Sweatshirts</li>
                        <li>Jackets</li>
                        <li>Trousers & Tights</li>
                        <li>Shorts</li>
                        <li>Tracksuits</li>
                        <li>Skirts & Dresses</li>
                        <li>Socks</li>
                        <li>Accessories</li>
                        <li>Equipment</li>
                    </ul>
                    <hr className="my-8" />
                    <h3 className="font-semibold mt-8 mb-2">Gender</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>
                            <input type="checkbox" id="men" />{" "}
                            <label htmlFor="men" className="cursor-pointer">
                                Men
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" id="women" />{" "}
                            <label htmlFor="women" className="cursor-pointer">
                                Women
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" id="unisex" />{" "}
                            <label htmlFor="unisex" className="cursor-pointer">
                                Unisex
                            </label>
                        </li>
                    </ul>
                    <hr className="my-8" />
                    <h3 className="font-semibold mt-8 mb-2">Kids</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>
                            <input type="checkbox" id="men" />{" "}
                            <label htmlFor="men" className="cursor-pointer">
                                Boys
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" id="women" />{" "}
                            <label htmlFor="women" className="cursor-pointer">
                                Girls
                            </label>
                        </li>
                    </ul>
                    <hr className="my-8" />
                    <h3 className="font-semibold mt-8 mb-2">Shop By Price</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>
                            <input type="checkbox" id="price" />{" "}
                            <label htmlFor="price" className="cursor-pointer">
                                Under ₹ 2,500.00
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" id="price" />{" "}
                            <label htmlFor="price" className="cursor-pointer">
                                ₹ 2,501.00 - ₹
                            </label>
                        </li>
                    </ul>
                </div>

                {/* Product Grid */}
                <div className="w-full md:w-3/4 p-8">
                    <div className="flex justify-between items-center mb-6 border-b pb-4">
                        <div className="flex space-x-4">
                            <button className="text-gray-600 border px-4 py-1 rounded hover:bg-gray-100">
                                Filter
                            </button>
                            <select
                                className="border px-4 py-1 rounded text-gray-600"
                                aria-label="Sort products"
                                value={sortOption}
                                onChange={handleSortChange}
                            >
                                <option>Default</option>
                                <option value="Price: Low to High">
                                    Price: Low to High
                                </option>
                                <option value="Price: High to Low">
                                    Price: High to Low
                                </option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {paginatedProducts.map((product: any, index: number) => (
                            <Link href={`/all-products/${product.slug}`} key={product.slug}>
                                <div
                                    key={index}
                                    className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300"
                                >
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={300}
                                        height={300}
                                        className="w-full h-48 object-cover rounded-md"
                                    />
                                    <div className="mt-4 text-center">
                                        <h3 className="font-semibold text-gray-700">
                                            {product.productName}
                                        </h3>
                                        <p className="text-sm text-gray-500">{product.category}</p>
                                        <p className="font-bold mt-2">MRP: ₹{product.price}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination Controls */}
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            className={`px-4 py-2 mx-1 border rounded ${currentPage === 1 ? "text-gray-400 cursor-not-allowed" : ""
                                }`}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                                className={`px-4 py-2 mx-1 border rounded ${currentPage === index + 1
                                    ? "bg-gray-200 font-bold"
                                    : ""
                                    }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            className={`px-4 py-2 mx-1 border rounded ${currentPage === totalPages
                                ? "text-gray-400 cursor-not-allowed"
                                : ""
                                }`}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}