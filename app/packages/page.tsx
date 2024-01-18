import CardLarge from "@/components/cards/card-lg";
import SectionHeading from "@/components/shared/section-heading";
import { getAllProducts } from "@/lib/swell/package";
import Link from "next/link";

const getPackagesDate = async () => {
    const products = await getAllProducts();

    return products.map((product: any) => ({
        product: product,
    }));
}

export default async function Packages() {

    const packages = await getPackagesDate();

    return <div className="mt-16 mx-3 py-10 px-5">
        <SectionHeading name={'Packages'} />
        <div className="my-4 mx-auto flex flex-row flex-wrap">
            {packages.map((pkg: any, index: number) => (
                <Link key={index}
                className="m-3" 
                href={`/packages/${pkg?.product?.slug}`}>
                    <CardLarge data={pkg?.product} />
                </Link>

            ))}
        </div>
    </div>
}