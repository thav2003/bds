
export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<IFooter> = ({ ...footerProps }) => {
  return (
    <footer
      {...footerProps}
      className={`w-full p-5 bg-slate-100 text-slate-500 `}
    >
     <div className="flex justify-center space-x-10">
        <div>
            col1
          
        </div>
        <div>
            col2
        </div>
        <div>
            col3
        </div>
     </div>
    </footer>
  );
};

export default Footer;