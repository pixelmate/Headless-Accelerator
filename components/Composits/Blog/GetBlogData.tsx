export function GetBlogData(data: any, provider: string) {
    let returnData: { id: any; slug: any; title: any; subTitle:any; description: any; linkText: any; author: any; date: any; image: any; thumbnail: any; socialShare:any[] };
    switch (provider) {
        case "strapi":
            returnData = {
                "id": data?.id ? data.id : "",
                "slug": data?.slug ? data.slug : "",
                "title": data?.title ? data.title : "",
                "subTitle":data?.subTitle ? data.subTitle : "",
                "description": data?.description ? data.description : "",
                "linkText": data?.linkText ? data.linkText : "",
                "author": data?.author ? data.author : "",
                "date": data?.date ? data.date : "",
                "image": {
                    "url": data?.image?.url ? data.image.url : "",
                    "height": data?.image?.height ? data.image.height : "",
                    "width": data?.image?.width ? data.image.width : "",
                    "alt": data?.image?.alt ? data.image.alt : "",
                },
                "thumbnail": {
                    "url": data?.thumbnail?.url ? data.thumbnail.url : data?.image?.url ? data.image.url: "",
                    "height": data?.thumbnail?.height ? data.thumbnail.height : "",
                    "width": data?.thumbnail?.width ? data.thumbnail.width : "",
                    "alt": data?.thumbnail?.alt ? data.thumbnail.alt : "",
                },
                "socialShare":data?.socialLinks ? data.socialLinks:""
            }
            break;
        case "contentful":
            returnData = {
                "id": data?.id ? data.id : "",
                "slug": data?.slug ? data.slug : "",
                "title": data?.title ? data.title : "",
                "subTitle":data?.subTitle ? data.subTitle : "",
                "description": data?.description ? data.description : "",
                "linkText": data?.linkText ? data.linkText : "",
                "author": data?.author ? data.author : "",
                "date": data?.date ? data.date : "",
                "image": {
                    "url": data?.image?.url ? data.image.url : "",
                    "height": data?.image?.height ? data.image.height : "",
                    "width": data?.image?.width ? data.image.width : "",
                    "alt": data?.image?.title ? data.image.title : "",
                },
                "thumbnail": {
                    "url": data?.thumbnail?.url ? data.thumbnail.url : data?.image?.url ? data.image.url: "",
                    "height": data?.thumbnail?.height ? data.thumbnail.height : "",
                    "width": data?.thumbnail?.width ? data.thumbnail.width : "",
                    "alt": data?.thumbnail?.alt ? data.thumbnail.alt : "",
                },
                "socialShare":data?.socialLinks ? data.socialLinks:""
            }
            break;
        case "drupal":
            returnData = {
                "id": data?.id ? data.id : "",
                "slug": data?.slug ? data.slug : "",
                "title": data?.title ? data.title : "",
                "subTitle":data?.subTitle ? data.subTitle : "",
                "description": data?.description ? data.description : "",
                "linkText": data?.linkText ? data.linkText : "",
                "author": data?.author ? data.author : "",
                "date": data?.date ? data.date : "",
                "image": {
                    "url": data?.image?.url ? data.image.url : "",
                    "height": data?.image?.height ? data.image.height : "",
                    "width": data?.image?.width ? data.image.width : "",

                },
                "thumbnail": {
                    "url": data?.thumbnail?.url ? data.thumbnail.url : "",
                    "height": data?.thumbnail?.height ? data.thumbnail.height : "",
                    "width": data?.thumbnail?.width ? data.thumbnail.width : "",
                    "alt": data?.thumbnail?.alt ? data.thumbnail.alt : "",
                },
                "socialShare":data?.socialLinks ? data.socialLinks:""
            }
            break
        default:
            returnData = {
                "id": "33",
                "slug": "",
                "title": "Dummy Title",
                "subTitle": "Dummy Sub Title",
                "description": "Dummy Description",
                "linkText": "Read More",
                "author": "",
                "date": "15-jan-2023",
                "image": {
                    "url": "",
                    "height": "",
                    "width": "",

                },
                "thumbnail": {
                    "url": "",
                    "height": "",
                    "width": "",

                },
                "socialShare":[]
            }
            break
    }
    return returnData;
}