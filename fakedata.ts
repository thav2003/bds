export interface DataProps{
    title: string;
    prices: number;
    followBy: string;
    room: number;
    wc: number;
    areas:number;
    address: string;
    author: string;
    datetime: Date;
    image:string;
}

export const data:DataProps[]=new Array(10).fill({
    title: 'Cho thuê nhà Thủ Đức',
    prices:4,
    followBy: 'tháng',
    room:2,
    wc:2,
    areas:61,
    address:"Paml Heighs - Quận 3, Hồ Chí Minh",
    author:"Nam Thái Vinhome",
    datetime: new Date(),
    image:'/banner.png'
})