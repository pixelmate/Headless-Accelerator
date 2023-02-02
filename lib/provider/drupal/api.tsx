// Fetcher
export async function fetcher(url: string, option = {}) {
    let response: Response,
        defaultoption = {
            method: "GET",
        },
        fetcherUrl = url
    if (!option) {
        response = await fetch(fetcherUrl);
    } else {
        response = await fetch(fetcherUrl, defaultoption);
    }
    const data = await response.json();
    return data;
}

async function extractHomeEntries(carouselResponse: { data: any }, cardBlockResponse: { data: any }) {

    return {
        "banner": carouselResponse?.data ? carouselResponse?.data : "",
        "cardBlock": cardBlockResponse?.data ? cardBlockResponse.data : "",
    }
}

async function extractOurProfessionalEntries(bioResponse: { data: any; metadata: any }) {

    return {
        "ourTeams": bioResponse?.data?.items ? bioResponse.data.items : "",
        "metadata": bioResponse?.metadata ? bioResponse.metadata : ""
    }
}

function extractpageTemplate(fetchResponse: { data: { field_header_item: { items: any[] } } }) {
    let header = fetchResponse?.data?.field_header_item?.items[0]
    return {
        "provider": "drupal",
        "logo": {
            "url": header?.field_header_logo ? header.field_header_logo : "",
            "width": header?.field_header_logo?.width ? header.field_header_logo.width : "500",
            "height": header?.field_header_logo?.height ? header.field_header_logo.height : "500",
            "alternativeText": header?.field_header_logo?.title ? header.field_header_logo.title : "",
        },
        "primaryNavigation": header?.field_header_menu_links ? header.field_header_menu_links : ""
    }
}

// Export Data
export async function getDrupalHomePage() {
    const carouselEntries = await fetcher(
        'https:\/\/dev-drupal-headless-legal.pantheonsite.io\/v1\/page\/4'
    ),
        cardBlockEntries = await fetcher(
            'https://dev-drupal-headless-legal.pantheonsite.io/v1/page/19'
        )
    return extractHomeEntries(carouselEntries, cardBlockEntries)
}

export async function getDrupalOurProfessionalPage(pageNumer: Number) {
    pageNumer ? pageNumer : 1;
    const bioEntries = await fetcher(
        `https://dev-drupal-headless-legal.pantheonsite.io/v1/bio?page=${pageNumer}`
    )
    return extractOurProfessionalEntries(bioEntries)
}

export async function strapibioDetails(slug: string) {
    const bioEntries = await fetcher(
        `https://dev-drupal-headless-legal.pantheonsite.io/v1/bio?slug=${slug}`
    )
    return extractOurProfessionalEntries(bioEntries)
}

export async function getPageTemplateDrupal() {
    const headerEntries = await fetcher(
        'https://dev-drupal-headless-legal.pantheonsite.io/v1/page/2'
    )
    return extractpageTemplate(headerEntries)
}




