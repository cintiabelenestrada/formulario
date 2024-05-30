interface InterfaceImg{
    url: string;
    alt: string;
}

interface InterfaceGallery{
    gallery: InterfaceImg;
}

interface InterfaceMainMedia{
    title: string;
    mainMedia: InterfaceGallery[];
}

export interface interfaceArticles{
    articles: InterfaceMainMedia[];
}


