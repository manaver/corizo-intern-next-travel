import ShowPopularPackages from "@/app/get-packages";
import AddToCart from "@/components/shared/add-to-cart";
import ButtonPrimary from "@/components/shared/button-primary";
import LoadingCircle from "@/components/shared/loading-circle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProductBySlug } from "@/lib/swell/package";
import { formatCurrency } from "@/lib/utils";
import { Clock, IndianRupee } from "lucide-react";
import { Suspense } from "react";

export default async function PackageInfo({ params }: any) {

    const product = await getProductBySlug(params?.slug);

    function modifyDescription(description: string) {
        const pattern = /<li\b[^>]*?>(.*?)<\/li>/g;

        return description.replace(pattern, (match, content) => {
            return `<li style="padding-left: 10px;">${content}</li>`;
        });
    }

    const modifiedDescription = modifyDescription(product.description);


    return <main>
        <section className="flex flex-col justify-end items-center">
            <div
                className={`absloute w-[100dvw] brightness-50 mx-0 h-[800px] max-h-screen bg-cover bg-center flex flex-col items-center justify-center pb-10`}
                style={{ backgroundImage: `url(${product?.images[0]?.file?.url})` }}
            ></div>

            <div className="z-10 absolute translate-y-[-100px] w-full flex flex-col sm:flex-row space-y-5 sm:space-y-0 justify-around p-3 flex-wrap items-center">
                <p className="text-5xl text-white brightness-125">{product?.name}</p>
                <div>
                    <ButtonPrimary name={'Enquire Here'} />
                </div>
            </div>
        </section>
        <section className="my-10 p-2 w-full flex flex-col lg:flex-row justify-around">
            <div className="left space-y-5 px-10 z-10 w-full">
                <div className="tabs flex items-center justify-center">
                    <Tabs defaultValue="about_package" className="flex flex-col w-full">
                        <TabsList className="w-fit mx-auto">
                            <TabsTrigger value="about_package">About Package</TabsTrigger>
                            <TabsTrigger value="info">Other Info</TabsTrigger>
                        </TabsList>
                        <TabsContent value="about_package">
                            <div dangerouslySetInnerHTML={{ __html: modifiedDescription }} />
                        </TabsContent>
                        <TabsContent value="info">
                            <h4 className="text-xl font-bold my-3">Important Note!</h4>
                            <article className="list">
                                {product?.attributes?.other_info}
                            </article>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>

            <div className="right w-full sm:max-w-xl my-10 relative py-3 sm:mx-auto">
                <div className="heading flex flex-row flex-wrap space-x-8 items-center justify-around w-full">
                    <div className="space-y-2">
                        <p className="bg-blue-50 p-3 w-fit rounded-full"><Clock size={30} /></p>
                        <p className="text-md flex flex-col text-slate-500">Duration <span>{product?.attributes?.duration}</span>
                        </p>
                    </div>
                    <div className="space-y-2">
                        <p className="bg-blue-50 p-3 w-fit rounded-full"><IndianRupee size={30} /></p>
                        <p className="text-md flex flex-col text-slate-500">
                            <span>Starting Price</span>
                            <span>{formatCurrency({ amount: product?.sale_price ?? product?.price })}</span>
                            {product?.sale_price && <span className="line-through">{formatCurrency({ amount: product?.price })}</span>}
                        </p>
                    </div>
                </div>
                <div className="w-full flex items-center my-12">
                    <AddToCart product={product} />
                </div>
            </div>
        </section>

        <Suspense fallback={<div><LoadingCircle /></div>}>
            <ShowPopularPackages />
        </Suspense>
    </main>
}