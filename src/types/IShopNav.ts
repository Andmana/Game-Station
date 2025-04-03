export interface IShopNav {
    id: number;
    name: string;
    icon: string;
    redirectTo: string;
    hasSort: boolean;
}

export interface IShopNavGroup {
    name: string;
    shopNavs: IShopNav[];
}
