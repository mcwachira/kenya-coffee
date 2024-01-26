
import React from "react";
import {Photo as PhotoTypes}  from "@/typings";
import Skeleton from "@/components/Skeleton";
import {fetchEvents, fetchImages, fetchPosts} from "@/sanity/sanity.query";
import clsx from "clsx";
import addBlurredDataUrls from "@/lib/getBase64";




const LoadingGalleryPage = async () => {
    const images = await fetchImages()


    if(!images) return <h2 className='m-4 text-2xl font-bold'>No Images Found</h2>

    const photosWithBlur = await addBlurredDataUrls(images)



    return (
        <>


            {/* <!-- Section: Design Block --> */}

            <section className="relative h-screen ">
                <div
                    className="absolute inset-0 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l">
                    <Skeleton/>
                </div>

                <div className="flex h-full items-center justify-center relative z-20  ">
                    <div
                        className={clsx(
                            "px-6 text-center  md:px-12",
                        )}
                    >
                        <h2 className="mt-2 mb-16 !text-light text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                            <Skeleton/>
                        </h2>
                        <button
                            type="button"
                            className="rounded border-2 border-neutral-50 !text-light px-[46px] pt-[14px] pb-[12px] text-base font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                        >
                            <Skeleton/>
                        </button>
                    </div>
                </div>
                {/* <!-- Jumbotron --> */}
            </section>



            <main className="my-6 max-w-6xl mx-auto">
                <section className="px-2 my-3 grid gap-2 grid-cols-gallery">

                    {photosWithBlur.map((photo, index) =>(
                        <div
                            key={index}
                            className="h-64 bg-gray-200 rounded-xl relative overflow-hidden group">
                            <Skeleton/>
                        </div>
                    )

                    )}

                </section>

            </main>
        </>
    )
}

export default LoadingGalleryPage