export interface IShopNav {
    id: number;
    name: string;
    icon: string;
    redirectTo: string;
}

export interface IShopNavGroup {
    name: string;
    shopNavs: IShopNav[];
}
