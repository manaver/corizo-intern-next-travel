import { swellnode } from "./init/node";

function ObjectLength(object) {
    var length = 0;
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            ++length;
        }
    }
    return length;
}


export const getAllProducts = async () => {

    const products = async (i = 1) => {
        const swellPackages = await swellnode.get(`/products`, {
            where: { active: true },
            limit: 100,
            expand: ['variants', 'categories'],
            page: i
        });

        let results = swellPackages.results;
        let pages = ObjectLength(swellPackages.pages);

        if (pages > 1) {
            for (let i = 1; i <= pages; i++) {
                products(i).then((morePackages) => {
                    results = results.concat(morePackages.results);
                });
            }
        }

        return results;
    }

    return new Promise((resolve, reject) => {
        products().then((results) => {
            resolve(results);
        });
    });
}

export const getProductBySlug = async (slug) => {
    const productData = await swellnode.get(`/products`, {
        where: {
            slug: slug,
            active: true
        },
        expand: ["variants:25", "attributes", "categories"]
    });

    return productData.results[0] || {};
}