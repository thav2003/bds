export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {}
export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}
export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}
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
export interface Card extends React.ComponentPropsWithoutRef<'div'> {
    data:DataProps
}
export interface CardNewsProp extends React.ComponentPropsWithoutRef<'div'> {}