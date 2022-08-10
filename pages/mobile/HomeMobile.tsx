

export interface HomeMobileProps extends React.ComponentPropsWithoutRef<'div'> {}

const HomeDesktop:React.FC<HomeMobileProps>=()=>{
    return(
        <div className="flex flex-col">
            
            <div>
                row 1
            </div>
            <div>
                row 2
            </div>
            <div>
                row 3
            </div>
            <div>
                row 4
            </div>
        </div>
    )
}

export default HomeDesktop;