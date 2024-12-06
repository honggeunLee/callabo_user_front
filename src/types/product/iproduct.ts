export interface IProduct {
    productNo : number;
    productName : string;
    productDescription : string;
    productPrice : number;
    productStatus ?: string;

    stock ?: string;

    productImages: IProductImage[];

    categoryName?: string;
}

export interface IProductList {
    productNo: number; // 상품 고유 번호
    productName: string; // 상품 이름
    productPrice: number; // 상품 가격
    productImageUrl: string | null; // 상품 이미지 URL (null 가능)
    productStatus: string; // 상품 상태 (예: '1' 등)
}

export interface IProductImage {
    productImageNo: number;
    productImageUrl: string;
    productImageOrd: number;
}