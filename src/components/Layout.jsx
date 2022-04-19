import { useState } from "react";
import { StoreContext, ThemeContext } from "./ContextComponents"
import Footer from "./Footer";
import { appStore, appTheme } from "./store";

const Layout = ({ children }) => {
    const [store, setStore] = useState(appStore);
    const [theme, setTheme] = useState(appTheme);

     return (
         <StoreContext.Provider value={[store, setStore]}>
             <ThemeContext.Provider value={[theme, setTheme]}>
                 <>
                     <main>{children}</main>
                     <Footer />
                 </>
             </ThemeContext.Provider>
         </StoreContext.Provider>
     )
}
 
export default Layout;