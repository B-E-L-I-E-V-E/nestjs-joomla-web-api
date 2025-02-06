
export interface ArticleAttributes {
    "id": number;
    "asset_id": number;
    "title": string;
    "alias": string;
    "state": number;
    "access": number;
    "created": Date;
    "created_by": Date;
    "created_by_alias": "",
    "modified": Date;
    "featured": number;
    "language": string;
    "hits": number;
    "publish_up": number;
    "publish_down": null | Date;
    "note": string,
    "images": {
        "image_intro": string;
        "image_intro_alt": string;
        "float_intro": string;
        "image_intro_caption": string;
        "image_fulltext": string;
        "image_fulltext_alt": string;
        "float_fulltext": string;
        "image_fulltext_caption": string;
    },
    "metakey": string
    "metadesc": string
    "metadata": {
        "robots": string
        "author": string
        "rights": string
    },
    "version": number
    "featured_up": null | Date;
    "featured_down": null | Date;
    "typeAlias": string;
    "text": string;
    "tags": [],
    "article-meta-title": string;
    'demo-iframe': string;
}
export interface Article {
    "type": string;
    "id": string;
    "attributes": ArticleAttributes,
    "relationships": {
        "category": {
            "data": {
                "type": string,
                "id": string
            }
        },
        "created_by": {
            "data": {
                "type": string;
                "id": string;
            }
        },
        "tags": {
            "data": []
        }
    }
}