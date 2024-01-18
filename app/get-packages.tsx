import PackagesCarousal from "@/components/carousal/packages-large";
import { getAllProducts } from "@/lib/swell/package";

const getPackagesDate = async () => {
    const products = await getAllProducts();

    return products.map((product: any) => ({
        product: product,
    }));
}

export default async function ShowPopularPackages(){

    const packages = await getPackagesDate();

    return <>
            <PackagesCarousal packages={packages} />
    </>
}